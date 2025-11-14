'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, Clock } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth acceleration/deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(end * easeOutQuart);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : formatNumber(Math.floor(count))}
      {suffix}
    </span>
  );
}

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
  change: number;
  prefix?: string;
  suffix?: string;
  color: 'blue' | 'purple' | 'green' | 'orange';
  decimals?: number;
}

export function MetricCard({ 
  icon: Icon, 
  label, 
  value, 
  change, 
  prefix = '', 
  suffix = '',
  color,
  decimals = 0
}: MetricCardProps) {
  const colorClasses = {
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
    purple: 'from-purple-500/20 to-pink-500/20 border-purple-400/30',
    green: 'from-green-500/20 to-emerald-500/20 border-green-400/30',
    orange: 'from-orange-500/20 to-red-500/20 border-orange-400/30',
  };

  const iconColors = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    green: 'text-green-400',
    orange: 'text-orange-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-linear-to-br ${colorClasses[color]} rounded-xl p-6 border shadow-lg`}
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-8 h-8 ${iconColors[color]}`} />
        {change !== 0 && (
          <div className={`flex items-center gap-1 ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
            <ArrowUpRight className={`w-4 h-4 ${change < 0 ? 'rotate-90' : ''}`} />
            <span className="text-sm font-semibold">
              {change > 0 ? '+' : ''}{change}%
            </span>
          </div>
        )}
      </div>
      
      <div className="text-4xl font-bold text-white mb-2">
        <AnimatedCounter end={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      
      <div className="text-sm text-gray-300">{label}</div>
    </motion.div>
  );
}

interface DashboardMetrics {
  totalPopulation: number;
  foreignBorn: number;
  lepPopulation: number;
  annualGrowth: number;
  marketOpportunity: number;
  projectedRevenue: number;
  roi: number;
  paybackPeriod: number;
}

interface MetricsDashboardProps {
  metrics: DashboardMetrics;
  showRevenue?: boolean;
}

export function MetricsDashboard({ metrics, showRevenue = true }: MetricsDashboardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          icon={Users}
          label="Total Metro Population"
          value={metrics.totalPopulation}
          change={1.2}
          color="blue"
        />
        
        <MetricCard
          icon={TrendingUp}
          label="Foreign-Born Residents"
          value={metrics.foreignBorn}
          change={metrics.annualGrowth}
          color="purple"
        />
        
        <MetricCard
          icon={Target}
          label="Limited English Proficiency"
          value={metrics.lepPopulation}
          change={3.8}
          color="orange"
        />
        
        <MetricCard
          icon={Users}
          label="Market Opportunity"
          value={metrics.marketOpportunity}
          change={5.2}
          suffix=" patients"
          color="green"
        />
      </div>

      {/* Financial Metrics */}
      {showRevenue && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <MetricCard
              icon={DollarSign}
              label="Projected Annual Revenue"
              value={metrics.projectedRevenue}
              change={0}
              prefix="$"
              suffix="M"
              decimals={1}
              color="green"
            />
            
            <MetricCard
              icon={TrendingUp}
              label="Return on Investment"
              value={metrics.roi}
              change={0}
              suffix="%"
              decimals={0}
              color="purple"
            />
            
            <MetricCard
              icon={Clock}
              label="Payback Period"
              value={metrics.paybackPeriod}
              change={0}
              suffix=" months"
              decimals={1}
              color="blue"
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Real-time indicator */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex items-center justify-center gap-2 text-sm text-blue-300"
      >
        <div className="w-2 h-2 rounded-full bg-blue-400" />
        <span>Live demographic data • Updated November 2025</span>
      </motion.div>
    </motion.div>
  );
}
