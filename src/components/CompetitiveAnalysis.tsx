'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Shield, 
  AlertTriangle,
  CheckCircle2,
  XCircle,
  BarChart3
} from 'lucide-react';
import { competitorLandscape } from '@/data/advanced-analytics';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

export function CompetitiveAnalysis() {
  // Calculate Noran's potential position
  const noranPotential = {
    name: 'Noran Neurology (Potential)',
    locations: 4,
    languageSupport: ['Spanish', 'Somali', 'Hmong', 'Vietnamese', 'Chinese', 'Karen', 'Oromo', 'Amharic', 'Arabic', 'Russian', 'Lao', 'Polish'],
    marketShare: 43, // Projected with language services
    strengths: [
      '50+ years neurology expertise',
      'Comprehensive language services',
      'Cultural competency program',
      'Technology-enabled care',
      'Strategic metro coverage',
    ],
    weaknesses: [
      'Implementation investment required',
      'Staff training timeline',
    ],
  };

  const allCompetitors = [...competitorLandscape, noranPotential];

  // Radar chart data
  const radarData = [
    {
      metric: 'Locations',
      ...allCompetitors.reduce((acc, comp) => ({ ...acc, [comp.name]: comp.locations * 10 }), {}),
    },
    {
      metric: 'Languages',
      ...allCompetitors.reduce((acc, comp) => ({ 
        ...acc, 
        [comp.name]: Math.min(100, comp.languageSupport.length * 8.3) 
      }), {}),
    },
    {
      metric: 'Market Share',
      ...allCompetitors.reduce((acc, comp) => ({ ...acc, [comp.name]: comp.marketShare * 2 }), {}),
    },
    {
      metric: 'Strengths',
      ...allCompetitors.reduce((acc, comp) => ({ 
        ...acc, 
        [comp.name]: Math.min(100, comp.strengths.length * 20) 
      }), {}),
    },
    {
      metric: 'Opportunity',
      'Noran Neurology (Potential)': 95,
      'Minnesota Neurology': 35,
      'Twin Cities Neuro Group': 55,
      'Regional Neuroscience Center': 40,
      'Independent Practitioners': 25,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 shadow-2xl"
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Target className="w-6 h-6 text-orange-400" />
          <h2 className="text-2xl font-bold text-white">Competitive Landscape Analysis</h2>
        </div>
        <p className="text-blue-200 text-sm">
          Market positioning and competitive advantages
        </p>
      </div>

      {/* Radar Chart */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Multi-Dimensional Comparison</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="#ffffff30" />
            <PolarAngleAxis dataKey="metric" tick={{ fill: '#ffffff', fontSize: 12 }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#ffffff' }} />
            <Radar
              name="Noran Neurology (Potential)"
              dataKey="Noran Neurology (Potential)"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.3}
              strokeWidth={3}
            />
            <Radar
              name="Minnesota Neurology"
              dataKey="Minnesota Neurology"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.1}
            />
            <Radar
              name="Twin Cities Neuro"
              dataKey="Twin Cities Neuro Group"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.1}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Competitor Cards */}
      <div className="space-y-4 mb-6">
        {allCompetitors.map((competitor, idx) => {
          const isNoran = competitor.name.includes('Noran');
          
          return (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-lg p-4 border ${
                isNoran 
                  ? 'bg-green-500/10 border-green-400/30' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className={`font-semibold mb-1 ${isNoran ? 'text-green-300 text-lg' : 'text-white'}`}>
                    {competitor.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{competitor.locations} locations</span>
                    <span>•</span>
                    <span>{competitor.languageSupport.length} languages</span>
                    <span>•</span>
                    <span className={isNoran ? 'text-green-400 font-semibold' : ''}>
                      {competitor.marketShare}% market share
                    </span>
                  </div>
                </div>
                {isNoran && (
                  <div className="px-3 py-1 bg-green-500/20 rounded-full text-xs font-semibold text-green-300">
                    Future Leader
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Strengths */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-green-300">Strengths</span>
                  </div>
                  <ul className="space-y-1">
                    {competitor.strengths.map((strength, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-1">
                        <span className="text-green-400">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-semibold text-orange-300">Weaknesses</span>
                  </div>
                  <ul className="space-y-1">
                    {competitor.weaknesses.map((weakness, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-1">
                        <span className="text-orange-400">•</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="text-xs text-gray-400 mb-2">Language Support:</div>
                <div className="flex flex-wrap gap-1">
                  {competitor.languageSupport.length > 0 ? (
                    competitor.languageSupport.map(lang => (
                      <span 
                        key={lang}
                        className={`px-2 py-0.5 rounded text-xs ${
                          isNoran 
                            ? 'bg-green-500/20 text-green-200' 
                            : 'bg-blue-500/20 text-blue-200'
                        }`}
                      >
                        {lang}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-500 italic">No language services</span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Market Share Distribution */}
      <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Market Share Distribution</h3>
        <div className="space-y-2">
          {allCompetitors.map((comp, idx) => {
            const isNoran = comp.name.includes('Noran');
            return (
              <div key={comp.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm ${isNoran ? 'text-green-300 font-semibold' : 'text-gray-300'}`}>
                    {comp.name}
                  </span>
                  <span className={`text-sm font-semibold ${isNoran ? 'text-green-400' : 'text-white'}`}>
                    {comp.marketShare}%
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${comp.marketShare}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className={`h-full ${isNoran ? 'bg-green-500' : 'bg-blue-500'}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-green-400" />
            <h4 className="text-white font-semibold">Competitive Advantage</h4>
          </div>
          <p className="text-sm text-green-200 mb-3">
            With comprehensive language services, Noran can capture 82% of the underserved 
            LEP market that competitors are missing.
          </p>
          <div className="text-2xl font-bold text-green-400">
            +186%
          </div>
          <div className="text-xs text-green-300">market share growth potential</div>
        </div>

        <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            <h4 className="text-white font-semibold">Market Vulnerability</h4>
          </div>
          <p className="text-sm text-orange-200 mb-3">
            Current competitors serve only 18% of the foreign-born population effectively, 
            leaving massive opportunity gaps.
          </p>
          <div className="text-2xl font-bold text-orange-400">
            82%
          </div>
          <div className="text-xs text-orange-300">market currently underserved</div>
        </div>
      </div>
    </motion.div>
  );
}
