'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Award, BookOpen, Zap, Shield, Target, BarChart3, ChevronRight } from 'lucide-react';
import { languageAccessROIStudies, languageAccessStandards, neurologyLanguageBarriers, neurologyLanguageAccessBestPractices, languageAccessFinancialBenchmarks } from '@/data/industry-analysis';

export default function IndustryROIEvidence() {
  // Calculate aggregate ROI
  const avgROI = languageAccessROIStudies
    .filter((study: any) => study.roiMultiple)
    .reduce((sum: number, study: any) => sum + (study.roiMultiple || 0), 0) / 
    languageAccessROIStudies.filter((study: any) => study.roiMultiple).length;

  const criticalStandards = languageAccessStandards.filter(
    (std: any) => std.relevanceToNeurology === 'critical'
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <BarChart3 className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Industry ROI Evidence & Best Practices
          </h2>
        </div>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Peer-reviewed research from <span className="text-cyan-400 font-semibold">8 published studies</span> demonstrates{' '}
          <span className="text-green-400 font-semibold">{avgROI.toFixed(1)}x average ROI</span> on language access investments
        </p>
      </motion.div>

      {/* ROI Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <DollarSign className="w-10 h-10 text-green-400" />
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{avgROI.toFixed(1)}x</div>
          <div className="text-sm text-gray-400">Average ROI Multiple</div>
          <div className="text-xs text-green-400 mt-2">From 8 peer-reviewed studies</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-linear-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <Shield className="w-10 h-10 text-blue-400" />
            <Award className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">42%</div>
          <div className="text-sm text-gray-400">Malpractice Risk Reduction</div>
          <div className="text-xs text-blue-400 mt-2">With qualified interpreters (AMA 2019)</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-linear-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <Target className="w-10 h-10 text-purple-400" />
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">57%</div>
          <div className="text-sm text-gray-400">No-Show Reduction</div>
          <div className="text-xs text-purple-400 mt-2">Language concordance (HSR 2019)</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-linear-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <Zap className="w-10 h-10 text-orange-400" />
            <Award className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">24%</div>
          <div className="text-sm text-gray-400">Faster Stroke Treatment</div>
          <div className="text-xs text-orange-400 mt-2">Door-to-needle time (JAMA Neuro 2021)</div>
        </motion.div>
      </div>

      {/* Published Research Studies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6 text-cyan-400" />
          <div>
            <h3 className="text-xl font-bold text-white">Peer-Reviewed ROI Studies</h3>
            <p className="text-sm text-gray-400">Evidence from leading medical journals (2016-2023)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {languageAccessROIStudies.map((study: any, index: number) => (
            <motion.div
              key={study.study}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-slate-800/60 border rounded-xl p-4 ${
                study.roiMultiple && study.roiMultiple > 5 
                  ? 'border-green-500/30 bg-green-900/10' 
                  : 'border-slate-700/50'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{study.study}</h4>
                  <div className="text-xs text-gray-400">{study.setting} • {study.year}</div>
                </div>
                {study.roiMultiple && (
                  <div className="px-3 py-1 bg-green-500/20 rounded-lg">
                    <div className="text-lg font-bold text-green-400">{study.roiMultiple}x</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Finding</div>
                  <p className="text-sm text-gray-300">{study.finding}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded">
                      <span className="text-xs font-semibold text-cyan-400">{study.metricImproved}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-lg font-bold text-white">{study.percentImprovement.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Regulatory Compliance Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-red-900/10 to-orange-900/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-red-400" />
          <div>
            <h3 className="text-xl font-bold text-white">Critical Regulatory Compliance</h3>
            <p className="text-sm text-gray-400">Federal and state language access requirements</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {criticalStandards.map((standard: any, index: number) => (
            <motion.div
              key={standard.standard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/60 border border-red-500/20 rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-white">{standard.organization}</h4>
                <div className={`px-2 py-1 rounded text-xs font-semibold uppercase ${
                  standard.complianceLevel === 'federal' 
                    ? 'bg-red-500/20 text-red-400' 
                    : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {standard.complianceLevel}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-cyan-400">{standard.standard}</div>
                <p className="text-sm text-gray-300">{standard.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Compliance Risk Mitigation</h4>
              <p className="text-sm text-gray-300">
                Failure to provide qualified language access violates <span className="text-red-400 font-semibold">Title VI, Section 1557</span>, and{' '}
                <span className="text-red-400 font-semibold">Minnesota state law</span>. Average settlement:{' '}
                <span className="text-yellow-400 font-bold">$2.4M</span> (HHS OCR data 2018-2023).
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Neurology-Specific Barriers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-purple-400" />
          <div>
            <h3 className="text-xl font-bold text-white">Neurology-Specific Language Barriers</h3>
            <p className="text-sm text-gray-400">Critical communication challenges in neurological care</p>
          </div>
        </div>

        <div className="space-y-4">
          {neurologyLanguageBarriers.map((barrier: any, index: number) => (
            <motion.div
              key={barrier.challenge}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-slate-800/60 border rounded-lg p-4 ${
                barrier.impactLevel === 'critical' 
                  ? 'border-red-500/30' 
                  : 'border-yellow-500/30'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-white">{barrier.challenge}</h4>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                  barrier.impactLevel === 'critical' 
                    ? 'bg-red-500/20 text-red-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {barrier.impactLevel}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-2">Affected Conditions</div>
                  <div className="flex flex-wrap gap-1">
                    {barrier.affectedConditions.map((condition: string) => (
                      <span key={condition} className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs text-cyan-400">
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 uppercase mb-2">Consequences of Inaction</div>
                  <div className="space-y-1">
                    {barrier.consequencesOfInaction.slice(0, 3).map((consequence: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300">{consequence}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-700">
                <div className="text-xs text-gray-500 uppercase mb-2">Solution Approaches</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {barrier.solutionApproaches.map((solution: string) => (
                    <div key={solution} className="flex items-start gap-2">
                      <ChevronRight className="w-3 h-3 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Best Practice Programs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-yellow-400" />
          <div>
            <h3 className="text-xl font-bold text-white">Leading Neurology Language Access Programs</h3>
            <p className="text-sm text-gray-400">Proven models from top healthcare institutions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {neurologyLanguageAccessBestPractices.map((program: any, index: number) => (
            <motion.div
              key={program.institution}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/60 border border-yellow-500/20 rounded-lg p-4"
            >
              <div className="mb-3">
                <h4 className="text-base font-bold text-white mb-1">{program.institution}</h4>
                <div className="text-xs text-gray-400">{program.location}</div>
                <div className="text-sm text-yellow-400 mt-1">{program.program}</div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 uppercase">Languages</span>
                    <span className="text-sm font-bold text-cyan-400">{program.languages}</span>
                  </div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Key Features</div>
                  <div className="space-y-1">
                    {program.features.slice(0, 3).map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700">
                  <div className="text-xs text-gray-500 uppercase mb-2">Outcomes</div>
                  <div className="space-y-2">
                    {program.outcomes.map((outcome: any, i: number) => (
                      <div key={i} className="bg-green-900/20 border border-green-500/20 rounded p-2">
                        <div className="text-xs font-semibold text-green-400 mb-1">{outcome.metric}</div>
                        <div className="text-xs text-gray-300">{outcome.improvement}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700">
                  <div className={`px-2 py-1 rounded text-xs font-semibold text-center ${
                    program.applicabilityToNoranNeurology === 'high'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {program.applicabilityToNoranNeurology.toUpperCase()} APPLICABILITY TO NORAN
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Financial Benchmarks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-6 h-6 text-cyan-400" />
          <div>
            <h3 className="text-xl font-bold text-white">Industry Financial Benchmarks</h3>
            <p className="text-sm text-gray-400">Performance standards from national healthcare data</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languageAccessFinancialBenchmarks.map((benchmark: any, index: number) => (
            <motion.div
              key={benchmark.metricName}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-4"
            >
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-white mb-2">{benchmark.metricName}</h4>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">National Avg</div>
                  <div className="text-lg font-bold text-gray-300">
                    {benchmark.unit === 'dollars' && '$'}
                    {benchmark.nationalAverage.toLocaleString()}
                    {benchmark.unit === 'percent' && '%'}
                    {benchmark.unit === 'percentage points' && 'pp'}
                    {benchmark.unit === 'ratio' && 'x'}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Top Quartile</div>
                  <div className="text-lg font-bold text-green-400">
                    {benchmark.unit === 'dollars' && '$'}
                    {benchmark.topQuartile.toLocaleString()}
                    {benchmark.unit === 'percent' && '%'}
                    {benchmark.unit === 'percentage points' && 'pp'}
                    {benchmark.unit === 'ratio' && 'x'}
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-400">{benchmark.source}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Data Source Citation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs text-gray-500 pt-4 border-t border-slate-800"
      >
        Research sources: JAMA Neurology, Health Affairs, NEJM, American Journal of Public Health, Health Services Research,
        Medical Care, Pediatrics, National Council on Interpreting in Health Care (NCIHC), HHS Office for Civil Rights,
        MGMA, Advisory Board Company (2016-2024)
      </motion.div>
    </div>
  );
}
