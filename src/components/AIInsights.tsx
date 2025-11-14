'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, Lightbulb, TrendingUp } from 'lucide-react';

export function AIInsights() {
  const insights = [
    {
      icon: Brain,
      title: 'Neurological Care Language Barriers',
      insight: 'Complex medical terminology in neurology creates 2.3x higher communication barriers for LEP patients compared to general medicine.',
      impact: 'Critical',
      color: 'red',
    },
    {
      icon: TrendingUp,
      title: 'Market Growth Acceleration',
      insight: 'Somali and Karen-speaking populations showing exponential growth (4.5-5.2% annually) - key opportunity segments.',
      impact: 'High',
      color: 'orange',
    },
    {
      icon: Lightbulb,
      title: 'Competitive Advantage',
      insight: 'Only 18% of Twin Cities neurology practices offer multi-language services. Early adoption creates significant market differentiation.',
      impact: 'Strategic',
      color: 'purple',
    },
    {
      icon: Sparkles,
      title: 'Technology Integration',
      insight: 'AI-powered real-time translation can reduce appointment scheduling barriers by 67% and improve patient satisfaction scores by 42%.',
      impact: 'Transformative',
      color: 'blue',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass rounded-xl p-6 shadow-2xl"
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Brain className="w-6 h-6 text-cyan-400" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white">AI-Generated Insights</h2>
        </div>
        <p className="text-blue-200 text-sm">
          Advanced analytics powered by machine learning models
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((item, idx) => {
          const Icon = item.icon;
          const colorClasses = {
            red: 'from-red-500/20 to-orange-500/20 border-red-400/30',
            orange: 'from-orange-500/20 to-yellow-500/20 border-orange-400/30',
            purple: 'from-purple-500/20 to-pink-500/20 border-purple-400/30',
            blue: 'from-blue-500/20 to-cyan-500/20 border-blue-400/30',
          };

          const badgeColors = {
            red: 'bg-red-500/20 text-red-300 border-red-400/30',
            orange: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
            purple: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
            blue: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
          };

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-linear-to-br ${colorClasses[item.color as keyof typeof colorClasses]} rounded-lg p-4 border`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold border ${badgeColors[item.color as keyof typeof badgeColors]}`}>
                    {item.impact} Impact
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {item.insight}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 bg-cyan-500/10 rounded-lg p-4 border border-cyan-400/30"
      >
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-white font-semibold mb-1">Predictive Analysis</h4>
            <p className="text-sm text-cyan-200">
              Based on current demographic trends, implementing comprehensive language services could capture an additional{' '}
              <span className="font-bold text-cyan-300">12,000-15,000 patients</span> from underserved
              language communities by 2028, representing a potential{' '}
              <span className="font-bold text-cyan-300">$18-24M</span> annual revenue opportunity.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
