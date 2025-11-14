'use client';

import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import { TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { marketSegments } from '@/data/advanced-analytics';
import { formatNumber } from '@/lib/utils';

export function MarketSegmentAnalysis() {
  const chartData = marketSegments.map(segment => ({
    name: segment.name,
    population: segment.population,
    growth: segment.growthRate,
    revenue: segment.population * segment.estimatedRevenuePerPatient,
    roi: segment.roi,
  }));

  const getColorByROI = (roi: number) => {
    if (roi >= 400) return '#10b981'; // green
    if (roi >= 350) return '#3b82f6'; // blue
    if (roi >= 300) return '#f59e0b'; // orange
    return '#ef4444'; // red
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 shadow-2xl"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Market Segment Analysis</h2>
        <p className="text-blue-200 text-sm">
          Strategic prioritization by ROI and population size
        </p>
      </div>

      {/* ROI Chart */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Return on Investment by Segment</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis type="number" tick={{ fill: '#ffffff' }} />
            <YAxis dataKey="name" type="category" tick={{ fill: '#ffffff', fontSize: 12 }} width={150} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#ffffff',
              }}
              formatter={(value: number) => `${value}%`}
            />
            <Bar dataKey="roi" radius={[0, 8, 8, 0]}>
              <LabelList dataKey="roi" position="right" fill="#ffffff" formatter={(value) => `${value}%`} />
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColorByROI(entry.roi)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Segment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {marketSegments.map((segment, idx) => (
          <motion.div
            key={segment.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 rounded-lg p-4 border border-white/10"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-white font-semibold mb-1">{segment.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{formatNumber(segment.population)} population</span>
                  <span>•</span>
                  <span className="text-green-400">+{segment.growthRate}% growth</span>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                segment.roi >= 400 ? 'bg-green-500/20 text-green-300' :
                segment.roi >= 350 ? 'bg-blue-500/20 text-blue-300' :
                'bg-orange-500/20 text-orange-300'
              }`}>
                {segment.roi}% ROI
              </div>
            </div>

            <div className="mb-3">
              <div className="text-xs text-gray-400 mb-1">Primary Languages:</div>
              <div className="flex flex-wrap gap-1">
                {segment.primaryLanguages.map(lang => (
                  <span 
                    key={lang}
                    className="px-2 py-0.5 bg-blue-500/20 rounded text-xs text-blue-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400 mb-0.5">Avg Income</div>
                <div className="text-white font-semibold">
                  ${formatNumber(segment.avgHouseholdIncome)}
                </div>
              </div>
              <div>
                <div className="text-gray-400 mb-0.5">Insurance</div>
                <div className="text-white font-semibold">
                  {segment.insuranceCoverage}%
                </div>
              </div>
              <div>
                <div className="text-gray-400 mb-0.5">Revenue/Patient</div>
                <div className="text-white font-semibold">
                  ${formatNumber(segment.estimatedRevenuePerPatient)}
                </div>
              </div>
              <div>
                <div className="text-gray-400 mb-0.5">Acq. Cost</div>
                <div className="text-white font-semibold">
                  ${formatNumber(segment.acquisitionCost)}
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="text-xs text-gray-400 mb-2">Cultural Considerations:</div>
              <div className="space-y-1">
                {segment.culturalConsiderations.slice(0, 2).map((consideration, i) => (
                  <div key={i} className="flex items-start gap-1 text-xs text-gray-300">
                    <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 shrink-0" />
                    <span>{consideration}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-400/30">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-purple-200">Total Addressable Market</span>
          </div>
          <div className="text-3xl font-bold text-white">
            {formatNumber(marketSegments.reduce((sum, s) => sum + s.population, 0))}
          </div>
          <div className="text-xs text-purple-300 mt-1">
            Across all segments
          </div>
        </div>

        <div className="bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-sm text-green-200">Average ROI</span>
          </div>
          <div className="text-3xl font-bold text-white">
            {Math.round(marketSegments.reduce((sum, s) => sum + s.roi, 0) / marketSegments.length)}%
          </div>
          <div className="text-xs text-green-300 mt-1">
            Exceptional returns
          </div>
        </div>

        <div className="bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-400/30">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-200">Weighted Growth</span>
          </div>
          <div className="text-3xl font-bold text-white">
            {(marketSegments.reduce((sum, s) => sum + (s.growthRate * s.population), 0) / 
              marketSegments.reduce((sum, s) => sum + s.population, 0)).toFixed(1)}%
          </div>
          <div className="text-xs text-blue-300 mt-1">
            Annual compound growth
          </div>
        </div>
      </div>
    </motion.div>
  );
}
