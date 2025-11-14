'use client';

import { motion } from 'framer-motion';
import { Sparkles, Brain, Globe2, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-500/10 to-pink-500/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Brain className="w-16 h-16 text-blue-400" />
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Noran Neurology
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Globe2 className="w-6 h-6 text-blue-300" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Globalization Analytics
            </h2>
            <Sparkles className="w-6 h-6 text-purple-300" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto mb-8"
          >
            Strategic demographic insights and language analytics for Minnesota&apos;s premier neurology practice
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Real-Time Data</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">12+ Languages Tracked</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">AI-Powered Insights</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12"
        >
          {[
            { label: '50+ Years', sublabel: 'Excellence in Neurology', color: 'blue' },
            { label: '4 Locations', sublabel: 'Metro Coverage', color: 'purple' },
            { label: '28 Neurologists', sublabel: 'Expert Specialists', color: 'pink' },
            { label: '490K+', sublabel: 'Foreign-Born Residents', color: 'orange' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass rounded-xl p-6 text-center border border-${stat.color}-400/30`}
            >
              <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.label}
              </div>
              <div className="text-sm text-gray-300">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
