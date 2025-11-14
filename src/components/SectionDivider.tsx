'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionDividerProps {
  title: string;
  subtitle?: string;
  glowColor?: 'cyan' | 'purple' | 'blue' | 'green' | 'orange';
}

export function SectionDivider({ title, subtitle, glowColor = 'cyan' }: SectionDividerProps) {
  const glowColors = {
    cyan: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    purple: 'from-purple-500/20 via-purple-500/5 to-transparent',
    blue: 'from-blue-500/20 via-blue-500/5 to-transparent',
    green: 'from-green-500/20 via-green-500/5 to-transparent',
    orange: 'from-orange-500/20 via-orange-500/5 to-transparent',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative py-16"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-linear-to-b ${glowColors[glowColor]} pointer-events-none`} />
      
      {/* Content */}
      <div className="relative text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <div className="h-px w-16 bg-linear-to-r from-transparent to-cyan-500" />
          <Sparkles className="w-6 h-6 text-cyan-400" />
          <div className="h-px w-16 bg-linear-to-l from-transparent to-cyan-500" />
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h-px w-32 mx-auto bg-linear-to-r from-transparent via-cyan-500 to-transparent"
        />
      </div>
    </motion.div>
  );
}
