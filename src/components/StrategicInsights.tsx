'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Globe2, 
  TrendingUp, 
  Languages,
  Target,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { minneapolisMetroDemographics } from '@/data/demographics';
import { formatNumber, calculateGrowthProjection } from '@/lib/utils';

export function StrategicInsights() {
  const topGrowthLanguages = minneapolisMetroDemographics.languagesSpoken
    .filter(l => l.language !== 'English')
    .sort((a, b) => b.growthRate - a.growthRate)
    .slice(0, 5);

  const totalNonEnglish = minneapolisMetroDemographics.languagesSpoken
    .filter(l => l.language !== 'English')
    .reduce((sum, l) => sum + l.speakers, 0);

  const projectedGrowth2030 = calculateGrowthProjection(
    minneapolisMetroDemographics.foreignBorn,
    minneapolisMetroDemographics.immigrantGrowthRate,
    7
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass rounded-xl p-6 shadow-2xl"
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Target className="w-6 h-6 text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Strategic Recommendations</h2>
        </div>
        <p className="text-blue-200 text-sm">
          AI-powered insights for globalization strategy
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-400/30"
        >
          <div className="flex items-center justify-between mb-2">
            <Languages className="w-5 h-5 text-purple-400" />
            <ArrowUpRight className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {formatNumber(totalNonEnglish)}
          </div>
          <div className="text-xs text-purple-200">Non-English speakers</div>
          <div className="text-xs text-green-400 mt-1">Market opportunity</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-400/30"
        >
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <ArrowUpRight className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {formatNumber(projectedGrowth2030)}
          </div>
          <div className="text-xs text-blue-200">Projected 2030 foreign-born</div>
          <div className="text-xs text-cyan-400 mt-1">+{((projectedGrowth2030 / minneapolisMetroDemographics.foreignBorn - 1) * 100).toFixed(1)}% growth</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30"
        >
          <div className="flex items-center justify-between mb-2">
            <Globe2 className="w-5 h-5 text-orange-400" />
            <CheckCircle2 className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">12+</div>
          <div className="text-xs text-orange-200">Priority languages</div>
          <div className="text-xs text-green-400 mt-1">Actionable targets</div>
        </motion.div>
      </div>

      {/* Top Growth Languages */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">
          Highest Growth Languages (Priority Focus)
        </h3>
        <div className="space-y-2">
          {topGrowthLanguages.map((lang, idx) => (
            <motion.div
              key={lang.language}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between bg-white/5 rounded-lg p-3 border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <div className="text-white font-semibold">{lang.language}</div>
                  <div className="text-xs text-gray-400">
                    {formatNumber(lang.speakers)} speakers ({lang.percentage.toFixed(1)}%)
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-bold text-lg">
                  +{lang.growthRate}%
                </div>
                <div className="text-xs text-gray-400">annual growth</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          Recommended Actions
        </h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2 text-green-100">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Implement multi-language patient portal (Spanish, Somali, Hmong priority)</span>
          </li>
          <li className="flex items-start gap-2 text-green-100">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Develop culturally-adapted medical materials for top 5 growth languages</span>
          </li>
          <li className="flex items-start gap-2 text-green-100">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Deploy AI-powered translation services for emergency communications</span>
          </li>
          <li className="flex items-start gap-2 text-green-100">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Train staff in cultural competency for East African and Southeast Asian communities</span>
          </li>
          <li className="flex items-start gap-2 text-green-100">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Partner with community organizations serving immigrant populations</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
