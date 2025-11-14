'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Building2, HandshakeIcon, TrendingUp, MapPin, Award, ChevronRight } from 'lucide-react';
import { minnesotaCommunityOrganizations, minnesotaRefugeeResettlement, minnesotaCHWPrograms, faithBasedHealthPartners, minnesotaHealthEquityCoalitions } from '@/data/community-partnerships';

export default function CommunityPartnershipNetwork() {
  // Calculate total reach
  const totalClientsServed = minnesotaCommunityOrganizations.reduce((sum, org) => sum + org.clientsServed, 0);
  const totalCHWs = minnesotaCHWPrograms.reduce((sum, program) => sum + program.numberOfCHWs, 0);
  const totalNeurologyCases = minnesotaCHWPrograms.reduce((sum, program) => sum + program.neurologyCasesAnnual, 0);
  
  // Latest refugee data
  const latestRefugeeYear = minnesotaRefugeeResettlement[minnesotaRefugeeResettlement.length - 1];
  const totalRefugees2023 = latestRefugeeYear.totalRefugees + latestRefugeeYear.secondaryMigration.netInflow;

  // Priority partners
  const criticalPartners = minnesotaCommunityOrganizations.filter(
    org => org.partnershipOpportunity.level === 'critical'
  );
  
  const highPriorityPartners = minnesotaCommunityOrganizations.filter(
    org => org.partnershipOpportunity.level === 'high'
  );

  return (
    <div className="space-y-8">
      {/* Header with Impact Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <HandshakeIcon className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Community Partnership Network
          </h2>
        </div>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Strategic alliances with Minnesota's immigrant and refugee support ecosystem unlock{' '}
          <span className="text-cyan-400 font-semibold">{totalClientsServed.toLocaleString()}+ clients</span> across{' '}
          <span className="text-purple-400 font-semibold">{minnesotaCommunityOrganizations.length} established organizations</span>
        </p>
      </motion.div>

      {/* Key Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <Users className="w-10 h-10 text-cyan-400" />
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{totalClientsServed.toLocaleString()}</div>
          <div className="text-sm text-gray-400">Total Community Reach</div>
          <div className="text-xs text-cyan-400 mt-2">Across {minnesotaCommunityOrganizations.length} partner organizations</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <Heart className="w-10 h-10 text-purple-400" />
            <Award className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{totalCHWs}</div>
          <div className="text-sm text-gray-400">Community Health Workers</div>
          <div className="text-xs text-purple-400 mt-2">Direct patient navigation capacity</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <Building2 className="w-10 h-10 text-blue-400" />
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{totalNeurologyCases.toLocaleString()}</div>
          <div className="text-sm text-gray-400">Annual Neurology Cases</div>
          <div className="text-xs text-blue-400 mt-2">Via CHW referral pathways</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <MapPin className="w-10 h-10 text-green-400" />
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{totalRefugees2023.toLocaleString()}</div>
          <div className="text-sm text-gray-400">New Refugees (2023)</div>
          <div className="text-xs text-green-400 mt-2">+{latestRefugeeYear.secondaryMigration.netInflow.toLocaleString()} secondary migration</div>
        </motion.div>
      </div>

      {/* Critical Priority Partners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-red-900/10 to-orange-900/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <Award className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Critical Priority Partnerships</h3>
            <p className="text-sm text-gray-400">Highest-impact collaboration opportunities</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {criticalPartners.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/40 border border-red-500/20 rounded-xl p-5 hover:border-red-400/40 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{org.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{org.location}</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-red-500/20 rounded-full text-xs font-semibold text-red-400 uppercase">
                  Critical
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Serves</div>
                  <div className="flex flex-wrap gap-1">
                    {org.servesPopulations.map(pop => (
                      <span key={pop} className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs text-cyan-400">
                        {pop}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Languages</div>
                  <div className="flex flex-wrap gap-1">
                    {org.languages.slice(0, 4).map(lang => (
                      <span key={lang} className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">
                        {lang}
                      </span>
                    ))}
                    {org.languages.length > 4 && (
                      <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">
                        +{org.languages.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Rationale</div>
                  <p className="text-sm text-gray-300">{org.partnershipOpportunity.rationale}</p>
                </div>

                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Key Metrics</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-lg font-bold text-white">{org.clientsServed.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">Clients/Year</div>
                    </div>
                    {org.annualBudget && (
                      <div>
                        <div className="text-lg font-bold text-white">${(org.annualBudget / 1000000).toFixed(1)}M</div>
                        <div className="text-xs text-gray-400">Annual Budget</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700">
                <div className="text-xs text-gray-500 uppercase mb-2">Suggested Collaboration</div>
                <div className="space-y-1">
                  {org.partnershipOpportunity.suggestedCollaboration.slice(0, 3).map((suggestion, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* High Priority Partners - Condensed View */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-400" />
          High Priority Partnerships
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {highPriorityPartners.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-800/60 border border-blue-500/20 rounded-lg p-4 hover:border-blue-400/40 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-base font-bold text-white">{org.name}</h4>
                <div className="px-2 py-0.5 bg-blue-500/20 rounded text-xs font-semibold text-blue-400 uppercase">
                  High
                </div>
              </div>
              <div className="text-xs text-gray-400 mb-2">{org.location}</div>
              <div className="text-sm text-gray-300 mb-3 line-clamp-2">{org.partnershipOpportunity.rationale}</div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">{org.clientsServed.toLocaleString()} clients</span>
                <span className="text-cyan-400">{org.languages.length} languages</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community Health Workers Network */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-purple-400" />
          Community Health Worker Referral Network
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {minnesotaCHWPrograms.map((program, index) => (
            <motion.div
              key={program.organization}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/60 border border-purple-500/20 rounded-lg p-4"
            >
              <h4 className="text-lg font-bold text-white mb-2">{program.organization}</h4>
              <div className="text-sm text-purple-400 mb-3">{program.population} Population</div>
              
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div>
                  <div className="text-xl font-bold text-white">{program.numberOfCHWs}</div>
                  <div className="text-xs text-gray-400">CHWs</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{program.neurologyCasesAnnual}</div>
                  <div className="text-xs text-gray-400">Neuro Cases</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{program.averageCaseload}</div>
                  <div className="text-xs text-gray-400">Avg Load</div>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Services</div>
                  <div className="flex flex-wrap gap-1">
                    {program.services.slice(0, 3).map(service => (
                      <span key={service} className="px-2 py-0.5 bg-cyan-500/10 text-xs text-cyan-400 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h4 className="text-sm font-bold text-white">Partnership Impact Projection</h4>
          </div>
          <p className="text-sm text-gray-300">
            Integrating with these {minnesotaCHWPrograms.length} CHW programs creates a referral pipeline of{' '}
            <span className="text-green-400 font-semibold">{totalNeurologyCases.toLocaleString()} neurology cases annually</span>,
            bypassing traditional marketing costs and accessing hard-to-reach LEP populations through trusted community navigators.
          </p>
        </div>
      </motion.div>

      {/* Faith-Based & Coalition Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Faith-Based Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">Faith-Based Health Partnerships</h3>
          <div className="space-y-3">
            {faithBasedHealthPartners.map((org, index) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-white">{org.name}</h4>
                    <div className="text-xs text-gray-400">{org.community} • {org.congregation.toLocaleString()} members</div>
                  </div>
                  {org.healthMinistry && (
                    <div className="px-2 py-0.5 bg-green-500/20 rounded text-xs text-green-400">
                      Health Ministry
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-300">{org.partnershipOpportunity}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Healthcare Coalitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">Strategic Coalition Memberships</h3>
          <div className="space-y-4">
            {minnesotaHealthEquityCoalitions.map((coalition, index) => (
              <motion.div
                key={coalition.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-bold text-white">{coalition.name}</h4>
                  <div className="px-2 py-0.5 bg-blue-500/20 rounded text-xs text-blue-400">
                    {coalition.members} members
                  </div>
                </div>
                <div className="text-xs text-gray-400 mb-2">{coalition.focus}</div>
                <div className="mb-3 space-y-1">
                  {coalition.currentInitiatives.map((initiative, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-3 h-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300">{initiative}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-700">
                  <div className="text-xs text-gray-500 uppercase mb-1">Noran Join Benefit</div>
                  <p className="text-xs text-green-400">{coalition.noranJoinBenefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Data Source Citation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs text-gray-500 pt-4 border-t border-slate-800"
      >
        Data sources: Minnesota Department of Health Refugee Health Program, International Institute of Minnesota,
        MN Council on Healthcare Interpreting, individual organization reports (2023-2024)
      </motion.div>
    </div>
  );
}
