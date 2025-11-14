'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { LanguageData } from '@/data/demographics';
import { formatNumber, formatPercentage } from '@/lib/utils';

interface LanguageDistributionProps {
  data: LanguageData[];
}

const COLORS = [
  '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981',
  '#06b6d4', '#f97316', '#84cc16', '#6366f1', '#a855f7',
  '#14b8a6', '#eab308',
];

export function LanguageDistribution({ data }: LanguageDistributionProps) {
  const chartData = data.map((item) => ({
    name: item.language,
    speakers: item.speakers,
    percentage: item.percentage,
    growthRate: item.growthRate,
    demand: item.healthcareDemand,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 shadow-2xl"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Language Distribution</h2>
        <p className="text-blue-200 text-sm">
          Primary languages spoken in Noran Neurology service area
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={120}
            tick={{ fill: '#ffffff', fontSize: 12 }}
          />
          <YAxis tick={{ fill: '#ffffff' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#ffffff',
            }}
            formatter={(value: number, name: string) => {
              if (name === 'speakers') return [formatNumber(value), 'Speakers'];
              if (name === 'percentage') return [formatPercentage(value), 'Population %'];
              if (name === 'growthRate') return [`${value}%`, 'Annual Growth'];
              return [value, name];
            }}
          />
          <Bar dataKey="speakers" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.slice(0, 6).map((lang, idx) => (
          <motion.div
            key={lang.language}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 rounded-lg p-3 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[idx % COLORS.length] }}
              />
              <span className="text-white font-semibold text-sm">{lang.language}</span>
            </div>
            <div className="text-blue-200 text-xs">
              {formatNumber(lang.speakers)} speakers
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-green-400 text-xs font-semibold">
                +{lang.growthRate}%
              </span>
              <span className="text-xs text-gray-400">annual growth</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
