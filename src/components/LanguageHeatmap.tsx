'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, TrendingUp, Users, MapPin } from 'lucide-react';

interface HeatmapData {
  zipCode: string;
  area: string;
  totalPopulation: number;
  foreignBorn: number;
  foreignBornPercent: number;
  primaryLanguages: string[];
  lepPopulation: number;
  lepPercent: number;
  medianIncome: number;
  insuranceRate: number;
}

const heatmapData: HeatmapData[] = [
  {
    zipCode: '55420',
    area: 'Bloomington (East)',
    totalPopulation: 28450,
    foreignBorn: 8920,
    foreignBornPercent: 31.4,
    primaryLanguages: ['Spanish', 'Somali', 'Hmong'],
    lepPopulation: 3580,
    lepPercent: 12.6,
    medianIncome: 67200,
    insuranceRate: 91.2,
  },
  {
    zipCode: '55431',
    area: 'Bloomington (West)',
    totalPopulation: 35280,
    foreignBorn: 12650,
    foreignBornPercent: 35.9,
    primaryLanguages: ['Spanish', 'Somali', 'Vietnamese'],
    lepPopulation: 5820,
    lepPercent: 16.5,
    medianIncome: 58900,
    insuranceRate: 87.3,
  },
  {
    zipCode: '55014',
    area: 'Blaine (North)',
    totalPopulation: 42180,
    foreignBorn: 9340,
    foreignBornPercent: 22.1,
    primaryLanguages: ['Hmong', 'Karen', 'Spanish'],
    lepPopulation: 4280,
    lepPercent: 10.1,
    medianIncome: 82500,
    insuranceRate: 94.8,
  },
  {
    zipCode: '55449',
    area: 'Blaine (South)',
    totalPopulation: 28042,
    foreignBorn: 5120,
    foreignBornPercent: 18.3,
    primaryLanguages: ['Spanish', 'Hmong'],
    lepPopulation: 1950,
    lepPercent: 7.0,
    medianIncome: 89300,
    insuranceRate: 96.2,
  },
  {
    zipCode: '55042',
    area: 'Lake Elmo',
    totalPopulation: 9963,
    foreignBorn: 890,
    foreignBornPercent: 8.9,
    primaryLanguages: ['Spanish', 'Hmong'],
    lepPopulation: 320,
    lepPercent: 3.2,
    medianIncome: 128400,
    insuranceRate: 97.8,
  },
  {
    zipCode: '55447',
    area: 'Plymouth (Central)',
    totalPopulation: 45220,
    foreignBorn: 7840,
    foreignBornPercent: 17.3,
    primaryLanguages: ['Spanish', 'Somali', 'Chinese'],
    lepPopulation: 2950,
    lepPercent: 6.5,
    medianIncome: 95200,
    insuranceRate: 95.4,
  },
  {
    zipCode: '55446',
    area: 'Plymouth (West)',
    totalPopulation: 35806,
    foreignBorn: 4920,
    foreignBornPercent: 13.7,
    primaryLanguages: ['Spanish', 'Chinese'],
    lepPopulation: 1680,
    lepPercent: 4.7,
    medianIncome: 102800,
    insuranceRate: 96.8,
  },
  {
    zipCode: '55419',
    area: 'Minneapolis (South)',
    totalPopulation: 38250,
    foreignBorn: 15680,
    foreignBornPercent: 41.0,
    primaryLanguages: ['Spanish', 'Somali', 'Oromo'],
    lepPopulation: 7250,
    lepPercent: 19.0,
    medianIncome: 45600,
    insuranceRate: 82.1,
  },
  {
    zipCode: '55417',
    area: 'Minneapolis (Phillips)',
    totalPopulation: 26340,
    foreignBorn: 12420,
    foreignBornPercent: 47.2,
    primaryLanguages: ['Somali', 'Spanish', 'Hmong'],
    lepPopulation: 6890,
    lepPercent: 26.2,
    medianIncome: 38200,
    insuranceRate: 79.4,
  },
];

const getHeatColor = (percent: number): string => {
  if (percent >= 40) return 'bg-red-600';
  if (percent >= 30) return 'bg-orange-500';
  if (percent >= 20) return 'bg-yellow-500';
  if (percent >= 10) return 'bg-green-500';
  return 'bg-blue-500';
};

const getTextColor = (percent: number): string => {
  if (percent >= 40) return 'text-red-400';
  if (percent >= 30) return 'text-orange-400';
  if (percent >= 20) return 'text-yellow-400';
  if (percent >= 10) return 'text-green-400';
  return 'text-blue-400';
};

const getPriorityLevel = (lepPercent: number, insuranceRate: number, income: number): string => {
  const lowInsurance = insuranceRate < 90;
  const lowIncome = income < 70000;
  const highLEP = lepPercent > 15;

  if (highLEP && lowInsurance && lowIncome) return 'Critical';
  if (highLEP && (lowInsurance || lowIncome)) return 'High';
  if (highLEP || (lowInsurance && lowIncome)) return 'Medium';
  return 'Low';
};

const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'Critical':
      return 'bg-red-500/20 border-red-400/40 text-red-300';
    case 'High':
      return 'bg-orange-500/20 border-orange-400/40 text-orange-300';
    case 'Medium':
      return 'bg-yellow-500/20 border-yellow-400/40 text-yellow-300';
    default:
      return 'bg-blue-500/20 border-blue-400/40 text-blue-300';
  }
};

export function LanguageHeatmap() {
  const [sortBy, setSortBy] = useState<'lep' | 'foreignBorn' | 'income'>('lep');
  const [filterPriority, setFilterPriority] = useState<string | null>(null);

  const sortedData = [...heatmapData].sort((a, b) => {
    switch (sortBy) {
      case 'lep':
        return b.lepPercent - a.lepPercent;
      case 'foreignBorn':
        return b.foreignBornPercent - a.foreignBornPercent;
      case 'income':
        return a.medianIncome - b.medianIncome;
      default:
        return 0;
    }
  });

  const filteredData = filterPriority
    ? sortedData.filter(
        (d) => getPriorityLevel(d.lepPercent, d.insuranceRate, d.medianIncome) === filterPriority
      )
    : sortedData;

  const totalLEP = heatmapData.reduce((sum, d) => sum + d.lepPopulation, 0);
  const avgLEPPercent = heatmapData.reduce((sum, d) => sum + d.lepPercent, 0) / heatmapData.length;
  const criticalAreas = heatmapData.filter(
    (d) => getPriorityLevel(d.lepPercent, d.insuranceRate, d.medianIncome) === 'Critical'
  ).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 border border-white/10"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Map className="w-5 h-5 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Geographic Language Access Heatmap</h2>
          </div>
          <p className="text-sm text-gray-400">
            LEP concentration and healthcare accessibility by service area ZIP codes
          </p>
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'lep' | 'foreignBorn' | 'income')}
            className="px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="lep">Sort by LEP %</option>
            <option value="foreignBorn">Sort by Foreign-Born %</option>
            <option value="income">Sort by Income (Low to High)</option>
          </select>

          <select
            value={filterPriority || 'all'}
            onChange={(e) => setFilterPriority(e.target.value === 'all' ? null : e.target.value)}
            className="px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Priorities</option>
            <option value="Critical">Critical Priority</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4 border border-purple-400/30 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-purple-400" />
            <p className="text-xs text-gray-400">Total LEP Population</p>
          </div>
          <p className="text-2xl font-bold text-white">{totalLEP.toLocaleString()}</p>
        </div>

        <div className="glass-card p-4 border border-orange-400/30 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <p className="text-xs text-gray-400">Average LEP Rate</p>
          </div>
          <p className="text-2xl font-bold text-white">{avgLEPPercent.toFixed(1)}%</p>
        </div>

        <div className="glass-card p-4 border border-red-400/30 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4 text-red-400" />
            <p className="text-xs text-gray-400">Critical Priority Areas</p>
          </div>
          <p className="text-2xl font-bold text-white">{criticalAreas}</p>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="space-y-3">
        {filteredData.map((area, index) => {
          const priority = getPriorityLevel(area.lepPercent, area.insuranceRate, area.medianIncome);
          const priorityColor = getPriorityColor(priority);

          return (
            <motion.div
              key={area.zipCode}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`glass-card p-4 border rounded-xl ${priorityColor} hover:scale-[1.02] transition-transform`}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Area Info */}
                <div className="col-span-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-400">{area.zipCode}</span>
                  </div>
                  <p className="font-semibold text-white text-sm">{area.area}</p>
                  <p className="text-xs text-gray-400">{area.totalPopulation.toLocaleString()} residents</p>
                </div>

                {/* LEP Heatmap Bar */}
                <div className="col-span-3">
                  <div className="mb-1 flex justify-between items-center">
                    <span className="text-xs text-gray-400">LEP Population</span>
                    <span className={`text-sm font-bold ${getTextColor(area.lepPercent)}`}>
                      {area.lepPercent.toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-3 bg-black/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(area.lepPercent * 2, 100)}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      className={`h-full ${getHeatColor(area.lepPercent)} rounded-full`}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{area.lepPopulation.toLocaleString()} people</p>
                </div>

                {/* Languages */}
                <div className="col-span-3">
                  <p className="text-xs text-gray-400 mb-1">Primary Languages</p>
                  <div className="flex flex-wrap gap-1">
                    {area.primaryLanguages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-0.5 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-200"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Priority & Metrics */}
                <div className="col-span-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Priority</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        priority === 'Critical'
                          ? 'bg-red-500 text-white'
                          : priority === 'High'
                          ? 'bg-orange-500 text-white'
                          : priority === 'Medium'
                          ? 'bg-yellow-500 text-gray-900'
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      {priority}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 space-y-0.5">
                    <div>Insurance: {area.insuranceRate.toFixed(1)}%</div>
                    <div>Income: ${(area.medianIncome / 1000).toFixed(0)}K</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <p className="text-xs text-gray-400 mb-2">LEP Concentration Scale:</p>
        <div className="flex gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-600"></div>
            <span className="text-xs text-gray-400">40%+ (Very High)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-orange-500"></div>
            <span className="text-xs text-gray-400">30-39% (High)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-500"></div>
            <span className="text-xs text-gray-400">20-29% (Moderate)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <span className="text-xs text-gray-400">10-19% (Low)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500"></div>
            <span className="text-xs text-gray-400">&lt;10% (Very Low)</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
