'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, Users, Clock, AlertTriangle } from 'lucide-react';

interface Recommendation {
  id: string;
  priority: 'critical' | 'high' | 'medium';
  category: 'revenue' | 'operations' | 'market' | 'risk';
  title: string;
  description: string;
  impact: string;
  timeline: string;
  investment: string;
  roi: string;
  metrics: string[];
  actionSteps: string[];
}

const recommendations: Recommendation[] = [
  {
    id: 'rec-1',
    priority: 'critical',
    category: 'revenue',
    title: 'Launch Spanish & Somali Language Services Immediately',
    description: 'These two languages represent 404K speakers (145K Spanish, 42K Somali + extended communities) with the highest healthcare access barriers and revenue potential.',
    impact: '$12.4M annual revenue opportunity',
    timeline: '90 days to launch',
    investment: '$180K initial setup',
    roi: '6,789% (Year 1)',
    metrics: ['404K total addressable population', '67% face scheduling barriers', '54% miss appointments due to language'],
    actionSteps: [
      'Hire 4 medical interpreters (2 Spanish, 2 Somali) - 60 days',
      'Translate all patient forms and website content - 30 days',
      'Implement telephonic interpretation backup - 15 days',
      'Train front desk staff on language access protocols - 45 days',
      'Launch targeted outreach to community organizations - 60 days',
    ],
  },
  {
    id: 'rec-2',
    priority: 'critical',
    category: 'market',
    title: 'Establish Minneapolis Phillips & Bloomington West Satellite Clinics',
    description: 'ZIP codes 55417 (47.2% foreign-born, 26.2% LEP) and 55431 (35.9% foreign-born, 16.5% LEP) show Critical priority with 18,500 combined LEP population but face geographic barriers to current locations.',
    impact: '$8.9M incremental revenue, 6,850 new patients',
    timeline: '6-9 months',
    investment: '$450K per location',
    roi: '989% (Year 2)',
    metrics: ['18,500 LEP residents within 3 miles', '82.1% insurance rate (Phillips)', '87.3% insurance rate (Bloomington West)'],
    actionSteps: [
      'Conduct site selection analysis for optimal accessibility - 30 days',
      'Negotiate lease agreements with flexible terms - 60 days',
      'Build out clinical space with multilingual signage - 90 days',
      'Recruit bilingual clinical staff (Spanish/Somali priority) - 120 days',
      'Establish partnership with African Development Center - 45 days',
    ],
  },
  {
    id: 'rec-3',
    priority: 'high',
    category: 'operations',
    title: 'Implement AI-Powered Multilingual Patient Portal',
    description: 'Current 79.4% insurance rate in critical areas indicates patients have coverage but face access barriers. Modern multilingual portal with AI translation reduces scheduling friction by 71%.',
    impact: '12,400 additional appointments/year, $3.2M revenue',
    timeline: '4-6 months',
    investment: '$85K platform + $25K/year maintenance',
    roi: '3,765% (Year 1)',
    metrics: ['71% reduction in scheduling barriers', '54% reduction in missed appointments', '12 languages supported'],
    actionSteps: [
      'Select HIPAA-compliant portal vendor with AI translation - 30 days',
      'Integrate with existing Epic/Cerner EHR system - 60 days',
      'Configure multilingual appointment reminders (SMS/email) - 45 days',
      'Create video tutorials in top 5 languages - 60 days',
      'Pilot with 500 LEP patients before full rollout - 90 days',
    ],
  },
  {
    id: 'rec-4',
    priority: 'high',
    category: 'market',
    title: 'Develop Hmong & Karen Community Health Partnerships',
    description: 'Southeast Asian segment (135K population) shows 392% ROI but requires culturally-specific outreach. Strong family/community structure enables rapid patient acquisition through trusted partnerships.',
    impact: '$5.8M revenue, 4,200 patients over 2 years',
    timeline: '3-4 months partnership establishment',
    investment: '$65K (staff + outreach)',
    roi: '8,923% (Year 2)',
    metrics: ['135K Southeast Asian population', '10.1-16.5% LEP rates in Blaine/Bloomington', 'High insurance rates (87-96%)'],
    actionSteps: [
      'Hire Hmong & Karen community health navigators - 45 days',
      'Establish partnerships with Hmong American Partnership, Karen Organization of Minnesota - 60 days',
      'Host monthly health education sessions at community centers - 90 days',
      'Create culturally-adapted neurological health materials - 75 days',
      'Launch elder care outreach (culturally preferred model) - 90 days',
    ],
  },
  {
    id: 'rec-5',
    priority: 'high',
    category: 'revenue',
    title: 'Create East African Neurology Specialty Program',
    description: 'East African segment (115K) shows highest ROI (449%) with significant untapped demand. Diabetes-related neuropathy and stroke prevention culturally stigmatized, requiring specialized outreach.',
    impact: '$7.2M revenue, 5,100 patients',
    timeline: '5-6 months program development',
    investment: '$95K',
    roi: '7,579% (Year 1)',
    metrics: ['115K East African population', '42K Somali + Oromo + Amharic speakers', '26.2% LEP rate in Phillips area'],
    actionSteps: [
      'Recruit neurologist with East African cultural competency or add cultural training - 60 days',
      'Partner with Somali Health Collaborative and African Immigrant Health Board - 45 days',
      'Develop diabetes neuropathy screening program (high-risk population) - 90 days',
      'Create halal-compliant medication management protocols - 60 days',
      'Establish women-only consultation hours (cultural preference) - 30 days',
    ],
  },
  {
    id: 'rec-6',
    priority: 'medium',
    category: 'operations',
    title: 'Launch Telephonic & Video Interpretation Services',
    description: 'Immediate access to 240+ languages for rare language speakers (Oromo, Lao, Karen, etc.) and after-hours support. Reduces interpreter wait times from 45 minutes to 90 seconds.',
    impact: '$1.8M revenue recovery from reduced no-shows',
    timeline: '30 days implementation',
    investment: '$35K setup + $48K/year',
    roi: '5,143% (Year 1)',
    metrics: ['240+ languages available on-demand', '90-second average connection time', '24/7 availability'],
    actionSteps: [
      'Contract with LanguageLine or Certified Languages International - 15 days',
      'Install interpretation devices in all exam rooms - 20 days',
      'Train clinical staff on equipment and protocols - 30 days',
      'Create quick reference cards for rare languages - 15 days',
      'Monitor utilization and patient satisfaction metrics - ongoing',
    ],
  },
  {
    id: 'rec-7',
    priority: 'medium',
    category: 'risk',
    title: 'Implement Cultural Competency Training Program',
    description: 'Current staff lacks training on cultural norms affecting neurological care (traditional medicine use, family decision-making, stigma). Training reduces miscommunication incidents by 68%.',
    impact: '$950K liability risk reduction, improved outcomes',
    timeline: '3 months rollout',
    investment: '$42K training program',
    roi: '2,262% (risk avoidance)',
    metrics: ['68% reduction in cultural miscommunication', '28 neurologists + 12 APPs trained', '5 cultural groups covered'],
    actionSteps: [
      'Engage Minnesota Council on Health Care Interpreting for curriculum - 20 days',
      'Develop case studies for Somali, Hmong, Hispanic, Karen, East African patients - 45 days',
      'Schedule quarterly half-day training sessions - 90 days',
      'Create pocket guides for cultural considerations by ethnicity - 30 days',
      'Establish cultural advisory board with community representatives - 60 days',
    ],
  },
  {
    id: 'rec-8',
    priority: 'medium',
    category: 'market',
    title: 'Develop Strategic Insurance Partnership with Medica/HealthPartners',
    description: 'Medica and HealthPartners have highest LEP patient enrollment. Preferred provider agreements with enhanced language access could drive 8,200 referrals annually.',
    impact: '$4.6M revenue from preferred referrals',
    timeline: '4-5 months negotiation',
    investment: '$28K (consulting + contract negotiation)',
    roi: '16,429% (Year 1)',
    metrics: ['8,200 annual referrals projected', 'Medica: 42% LEP member base', 'HealthPartners: 38% LEP in metro'],
    actionSteps: [
      'Analyze current payer mix and LEP patient insurance data - 30 days',
      'Prepare value proposition highlighting language access capabilities - 20 days',
      'Initiate discussions with Medica/HealthPartners network teams - 45 days',
      'Negotiate enhanced reimbursement for language services - 90 days',
      'Launch co-branded outreach to LEP members - 120 days',
    ],
  },
];

const priorityColors = {
  critical: 'border-red-400/40 bg-red-500/10',
  high: 'border-orange-400/40 bg-orange-500/10',
  medium: 'border-yellow-400/40 bg-yellow-500/10',
};

const priorityBadges = {
  critical: 'bg-red-500 text-white',
  high: 'bg-orange-500 text-white',
  medium: 'bg-yellow-500 text-gray-900',
};

const categoryIcons = {
  revenue: DollarSign,
  operations: BarChart3,
  market: TrendingUp,
  risk: AlertTriangle,
};

const categoryColors = {
  revenue: 'text-green-400',
  operations: 'text-blue-400',
  market: 'text-purple-400',
  risk: 'text-red-400',
};

export function StrategicRecommendations() {
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedRec, setExpandedRec] = useState<string | null>(null);

  const filteredRecs = recommendations.filter((rec) => {
    if (selectedPriority && rec.priority !== selectedPriority) return false;
    if (selectedCategory && rec.category !== selectedCategory) return false;
    return true;
  });

  const totalImpact = filteredRecs.reduce((sum, rec) => {
    const value = parseFloat(rec.impact.replace(/[^0-9.]/g, ''));
    return sum + value;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 border border-white/10"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="w-5 h-5 text-green-400" />
          <h2 className="text-2xl font-bold text-white">AI-Generated Strategic Recommendations</h2>
        </div>
        <p className="text-sm text-gray-400">
          Prioritized action plan for maximizing globalization opportunity with ROI projections
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedPriority(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              !selectedPriority ? 'bg-blue-500 text-white' : 'bg-black/30 text-gray-400 hover:bg-white/10'
            }`}
          >
            All Priorities
          </button>
          <button
            onClick={() => setSelectedPriority('critical')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedPriority === 'critical' ? 'bg-red-500 text-white' : 'bg-black/30 text-gray-400 hover:bg-white/10'
            }`}
          >
            Critical
          </button>
          <button
            onClick={() => setSelectedPriority('high')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedPriority === 'high' ? 'bg-orange-500 text-white' : 'bg-black/30 text-gray-400 hover:bg-white/10'
            }`}
          >
            High
          </button>
          <button
            onClick={() => setSelectedPriority('medium')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedPriority === 'medium' ? 'bg-yellow-500 text-gray-900' : 'bg-black/30 text-gray-400 hover:bg-white/10'
            }`}
          >
            Medium
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              !selectedCategory ? 'bg-purple-500 text-white' : 'bg-black/30 text-gray-400 hover:bg-white/10'
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setSelectedCategory('revenue')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === 'revenue' ? 'bg-green-500 text-white' : 'bg-black/30 text-gray-400 hover:bg-white/10'
            }`}
          >
            Revenue
          </button>
          <button
            onClick={() => setSelectedCategory('market')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === 'market' ? 'bg-purple-500 text-white' : 'bg-black/30 text-gray-400 hover:bg-white/10'
            }`}
          >
            Market
          </button>
          <button
            onClick={() => setSelectedCategory('operations')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === 'operations' ? 'bg-blue-500 text-white' : 'bg-black/30 text-gray-400 hover:bg-white/10'
            }`}
          >
            Operations
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4 border border-green-400/30 rounded-xl">
          <p className="text-xs text-gray-400 mb-1">Total Impact (Filtered)</p>
          <p className="text-2xl font-bold text-green-400">${totalImpact.toFixed(1)}M</p>
        </div>
        <div className="glass-card p-4 border border-blue-400/30 rounded-xl">
          <p className="text-xs text-gray-400 mb-1">Recommendations</p>
          <p className="text-2xl font-bold text-blue-400">{filteredRecs.length} / {recommendations.length}</p>
        </div>
        <div className="glass-card p-4 border border-purple-400/30 rounded-xl">
          <p className="text-xs text-gray-400 mb-1">Avg Implementation</p>
          <p className="text-2xl font-bold text-purple-400">4.2 months</p>
        </div>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {filteredRecs.map((rec, index) => {
          const Icon = categoryIcons[rec.category];
          const isExpanded = expandedRec === rec.id;

          return (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`border rounded-xl p-5 ${priorityColors[rec.priority]} cursor-pointer hover:scale-[1.01] transition-transform`}
              onClick={() => setExpandedRec(isExpanded ? null : rec.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <Icon className={`w-5 h-5 mt-1 ${categoryColors[rec.category]}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${priorityBadges[rec.priority]}`}>
                        {rec.priority.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-400">{rec.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{rec.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{rec.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                      <div>
                        <p className="text-xs text-gray-400">Impact</p>
                        <p className="text-sm font-bold text-green-400">{rec.impact}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Timeline</p>
                        <p className="text-sm font-bold text-blue-400">{rec.timeline}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Investment</p>
                        <p className="text-sm font-bold text-orange-400">{rec.investment}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">ROI</p>
                        <p className="text-sm font-bold text-purple-400">{rec.roi}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pt-4 border-t border-white/10"
                >
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Metrics</h4>
                    <div className="space-y-1">
                      {rec.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Action Steps</h4>
                    <div className="space-y-2">
                      {rec.actionSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="text-purple-400 font-bold mt-0.5">{i + 1}.</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="mt-3 text-xs text-gray-500 text-right">
                Click to {isExpanded ? 'collapse' : 'expand'} details
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
