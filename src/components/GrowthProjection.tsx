'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DemographicData } from '@/data/demographics';
import { formatNumber } from '@/lib/utils';
import { TrendingUp } from 'lucide-react';

interface GrowthProjectionProps {
  data: DemographicData[];
}

export function GrowthProjection({ data }: GrowthProjectionProps) {
  const chartData = data.map((item) => ({
    year: item.year,
    population: item.totalPopulation,
    foreignBorn: item.foreignBorn,
    growthRate: item.immigrantGrowthRate,
  }));

  const latestData = data[data.length - 1];
  const earliestData = data[0];
  const totalGrowth =
    ((latestData.foreignBorn - earliestData.foreignBorn) / earliestData.foreignBorn) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass rounded-xl p-6 shadow-2xl"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-white">Demographic Growth Projection</h2>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <TrendingUp className="w-6 h-6 text-green-400" />
          </motion.div>
        </div>
        <p className="text-blue-200 text-sm">
          Foreign-born population trends: {earliestData.year}-{latestData.year}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-400/30"
        >
          <div className="text-blue-200 text-sm mb-1">Current Foreign-Born</div>
          <div className="text-3xl font-bold text-white">
            {formatNumber(latestData.foreignBorn)}
          </div>
          <div className="text-green-400 text-xs mt-1">
            +{totalGrowth.toFixed(1)}% since {earliestData.year}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-400/30"
        >
          <div className="text-purple-200 text-sm mb-1">Annual Growth Rate</div>
          <div className="text-3xl font-bold text-white">
            {latestData.immigrantGrowthRate}%
          </div>
          <div className="text-purple-300 text-xs mt-1">Accelerating trend</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg p-4 border border-pink-400/30"
        >
          <div className="text-pink-200 text-sm mb-1">Market Opportunity</div>
          <div className="text-3xl font-bold text-white">High</div>
          <div className="text-orange-300 text-xs mt-1">Growing demand</div>
        </motion.div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
          <XAxis dataKey="year" tick={{ fill: '#ffffff' }} />
          <YAxis tick={{ fill: '#ffffff' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#ffffff',
            }}
            formatter={(value: number) => formatNumber(value)}
          />
          <Legend wrapperStyle={{ color: '#ffffff' }} />
          <Line
            type="monotone"
            dataKey="foreignBorn"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 6 }}
            name="Foreign-Born Population"
          />
          <Line
            type="monotone"
            dataKey="population"
            stroke="#8b5cf6"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#8b5cf6', r: 4 }}
            name="Total Population"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
