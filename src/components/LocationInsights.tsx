'use client';

import { motion } from 'framer-motion';
import { 
  Globe2, 
  Languages, 
  TrendingUp, 
  Users, 
  MapPin,
  AlertCircle,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';
import { LocationData, healthcareLanguageStats } from '@/data/demographics';
import { formatNumber, formatPercentage } from '@/lib/utils';

interface LocationInsightsProps {
  locations: LocationData[];
}

export function LocationInsights({ locations }: LocationInsightsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass rounded-xl p-6 shadow-2xl"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Location-Based Insights</h2>
        <p className="text-blue-200 text-sm">
          Demographic diversity across Noran Neurology&apos;s 4 metro locations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {locations.map((location, idx) => (
          <motion.div
            key={location.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-white/10"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">{location.name}</h3>
                </div>
                <p className="text-sm text-gray-400">{location.city}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  {Math.round(location.demographics.diversityIndex * 100)}
                </div>
                <div className="text-xs text-blue-300">Diversity Score</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm text-gray-300 mb-2">Primary Languages:</div>
              <div className="flex flex-wrap gap-2">
                {location.demographics.primaryLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-200 border border-blue-400/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2">Healthcare Language Access Challenges</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-orange-300 mb-1">Appointment Scheduling</div>
                <div className="text-2xl font-bold text-white">
                  {healthcareLanguageStats.languageAccessChallenges.appointmentScheduling}%
                </div>
              </div>
              <div>
                <div className="text-orange-300 mb-1">Medical Instructions</div>
                <div className="text-2xl font-bold text-white">
                  {healthcareLanguageStats.languageAccessChallenges.medicalInstructions}%
                </div>
              </div>
              <div>
                <div className="text-orange-300 mb-1">Consent Forms</div>
                <div className="text-2xl font-bold text-white">
                  {healthcareLanguageStats.languageAccessChallenges.consentForms}%
                </div>
              </div>
              <div>
                <div className="text-orange-300 mb-1">Emergency Comm.</div>
                <div className="text-2xl font-bold text-white">
                  {healthcareLanguageStats.languageAccessChallenges.emergencyCommunication}%
                </div>
              </div>
            </div>
            <div className="mt-3 text-xs text-orange-200">
              % of LEP patients reporting communication difficulties
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-400/30">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-blue-400" />
            <h4 className="text-white font-semibold">Limited English Proficiency</h4>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {formatNumber(healthcareLanguageStats.limitedEnglishProficiency)}
          </div>
          <div className="text-sm text-blue-200">Metro residents need language support</div>
        </div>

        <div className="bg-green-500/10 rounded-lg p-4 border border-green-400/30">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h4 className="text-white font-semibold">Interpreter Requests</h4>
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-3xl font-bold text-white">
              {formatNumber(healthcareLanguageStats.medicalInterpreterRequests.annual)}
            </div>
            <div className="text-green-400 text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +{healthcareLanguageStats.medicalInterpreterRequests.growthRate}%/yr
            </div>
          </div>
          <div className="text-sm text-green-200">Annual medical interpreter requests</div>
        </div>
      </div>
    </motion.div>
  );
}
