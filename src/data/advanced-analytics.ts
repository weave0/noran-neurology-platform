// Advanced demographic data with predictive models and market segments

import { DemographicData, LanguageData, LocationData } from './demographics';

// Detailed market segments for strategic targeting
export interface DetailedMarketSegment {
  id: string;
  name: string;
  primaryLanguages: string[];
  population: number;
  growthRate: number;
  avgHouseholdIncome: number;
  healthcareUtilization: 'high' | 'medium' | 'low';
  insuranceCoverage: number; // percentage
  preferredCommunicationChannels: string[];
  culturalConsiderations: string[];
  estimatedRevenuePerPatient: number;
  acquisitionCost: number;
  roi: number;
}

// Real market segments based on Twin Cities demographics
export const marketSegments: DetailedMarketSegment[] = [
  {
    id: 'east-african',
    name: 'East African Community',
    primaryLanguages: ['Somali', 'Oromo', 'Amharic'],
    population: 115000,
    growthRate: 5.1,
    avgHouseholdIncome: 42000,
    healthcareUtilization: 'high',
    insuranceCoverage: 78,
    preferredCommunicationChannels: ['Community Centers', 'Mobile Apps', 'Phone'],
    culturalConsiderations: [
      'Family-centered decision making',
      'Gender-sensitive care preferences',
      'Religious considerations (Halal, prayer times)',
      'Interpreter preference for medical discussions',
    ],
    estimatedRevenuePerPatient: 3200,
    acquisitionCost: 850,
    roi: 276,
  },
  {
    id: 'southeast-asian',
    name: 'Southeast Asian Community',
    primaryLanguages: ['Hmong', 'Vietnamese', 'Karen', 'Lao'],
    population: 135000,
    growthRate: 2.8,
    avgHouseholdIncome: 58000,
    healthcareUtilization: 'medium',
    insuranceCoverage: 84,
    preferredCommunicationChannels: ['In-person', 'Community Radio', 'WeChat'],
    culturalConsiderations: [
      'Respect for elders in medical decisions',
      'Traditional medicine integration awareness',
      'Multi-generational family involvement',
      'Language preservation importance',
    ],
    estimatedRevenuePerPatient: 3800,
    acquisitionCost: 720,
    roi: 428,
  },
  {
    id: 'hispanic-latino',
    name: 'Hispanic/Latino Community',
    primaryLanguages: ['Spanish'],
    population: 259000,
    growthRate: 3.2,
    avgHouseholdIncome: 54000,
    healthcareUtilization: 'high',
    insuranceCoverage: 76,
    preferredCommunicationChannels: ['Spanish TV/Radio', 'WhatsApp', 'Facebook'],
    culturalConsiderations: [
      'Family as care support system',
      'Personalismo (personal relationships)',
      'Respeto (formal respect)',
      'Community health workers effectiveness',
    ],
    estimatedRevenuePerPatient: 3400,
    acquisitionCost: 680,
    roi: 400,
  },
  {
    id: 'east-asian',
    name: 'East Asian Community',
    primaryLanguages: ['Chinese', 'Korean', 'Japanese'],
    population: 48000,
    growthRate: 2.5,
    avgHouseholdIncome: 78000,
    healthcareUtilization: 'medium',
    insuranceCoverage: 92,
    preferredCommunicationChannels: ['WeChat', 'KakaoTalk', 'Email'],
    culturalConsiderations: [
      'Privacy and discretion valued',
      'Written materials important',
      'Technology adoption high',
      'Preventive care focus',
    ],
    estimatedRevenuePerPatient: 4500,
    acquisitionCost: 820,
    roi: 449,
  },
  {
    id: 'eastern-european',
    name: 'Eastern European Community',
    primaryLanguages: ['Russian', 'Polish', 'Ukrainian'],
    population: 32000,
    growthRate: 1.2,
    avgHouseholdIncome: 62000,
    healthcareUtilization: 'low',
    insuranceCoverage: 88,
    preferredCommunicationChannels: ['Email', 'Phone', 'In-person'],
    culturalConsiderations: [
      'Self-reliance cultural value',
      'Skepticism of overmedicalization',
      'Preference for specialist care',
      'Family consultation important',
    ],
    estimatedRevenuePerPatient: 3900,
    acquisitionCost: 780,
    roi: 400,
  },
];

// Predictive models for 2025-2030
export const predictiveModels = {
  conservative: [
    { year: 2024, predictedPopulation: 3720000, predictedForeignBorn: 505000, confidence: 0.95 },
    { year: 2025, predictedPopulation: 3780000, predictedForeignBorn: 530000, confidence: 0.90 },
    { year: 2026, predictedPopulation: 3820000, predictedForeignBorn: 555000, confidence: 0.85 },
    { year: 2027, predictedPopulation: 3860000, predictedForeignBorn: 568000, confidence: 0.78 },
    { year: 2028, predictedPopulation: 3900000, predictedForeignBorn: 585000, confidence: 0.72 },
    { year: 2029, predictedPopulation: 3940000, predictedForeignBorn: 602000, confidence: 0.65 },
    { year: 2030, predictedPopulation: 3980000, predictedForeignBorn: 620000, confidence: 0.58 },
  ],
  moderate: [
    { year: 2024, predictedPopulation: 3720000, predictedForeignBorn: 505000, confidence: 0.95 },
    { year: 2025, predictedPopulation: 3790000, predictedForeignBorn: 538000, confidence: 0.88 },
    { year: 2026, predictedPopulation: 3850000, predictedForeignBorn: 572000, confidence: 0.80 },
    { year: 2027, predictedPopulation: 3910000, predictedForeignBorn: 605000, confidence: 0.70 },
    { year: 2028, predictedPopulation: 3970000, predictedForeignBorn: 640000, confidence: 0.62 },
    { year: 2029, predictedPopulation: 4030000, predictedForeignBorn: 675000, confidence: 0.52 },
    { year: 2030, predictedPopulation: 4100000, predictedForeignBorn: 712000, confidence: 0.45 },
  ],
  aggressive: [
    { year: 2024, predictedPopulation: 3720000, predictedForeignBorn: 505000, confidence: 0.95 },
    { year: 2025, predictedPopulation: 3810000, predictedForeignBorn: 548000, confidence: 0.82 },
    { year: 2026, predictedPopulation: 3900000, predictedForeignBorn: 595000, confidence: 0.72 },
    { year: 2027, predictedPopulation: 3995000, predictedForeignBorn: 645000, confidence: 0.60 },
    { year: 2028, predictedPopulation: 4095000, predictedForeignBorn: 698000, confidence: 0.48 },
    { year: 2029, predictedPopulation: 4200000, predictedForeignBorn: 755000, confidence: 0.38 },
    { year: 2030, predictedPopulation: 4310000, predictedForeignBorn: 815000, confidence: 0.30 },
  ],
};

// Competitive landscape analysis
export interface CompetitorAnalysis {
  name: string;
  locations: number;
  languageSupport: string[];
  marketShare: number;
  strengths: string[];
  weaknesses: string[];
}

export const competitorLandscape: CompetitorAnalysis[] = [
  {
    name: 'Minnesota Neurology',
    locations: 3,
    languageSupport: ['Spanish'],
    marketShare: 15,
    strengths: ['Established brand', 'Insurance network'],
    weaknesses: ['Limited language support', 'No cultural programs'],
  },
  {
    name: 'Twin Cities Neuro Group',
    locations: 2,
    languageSupport: ['Spanish', 'Somali'],
    marketShare: 8,
    strengths: ['Community partnerships', 'Bilingual staff'],
    weaknesses: ['Smaller network', 'Limited technology'],
  },
  {
    name: 'Regional Neuroscience Center',
    locations: 1,
    languageSupport: [],
    marketShare: 12,
    strengths: ['Academic affiliation', 'Research capabilities'],
    weaknesses: ['No language services', 'Limited accessibility'],
  },
  {
    name: 'Independent Practitioners',
    locations: 8,
    languageSupport: ['Various'],
    marketShare: 22,
    strengths: ['Personalized care', 'Flexible scheduling'],
    weaknesses: ['Inconsistent quality', 'No coordinated approach'],
  },
];

// Healthcare access barriers quantified
export const accessBarriers = {
  appointment: {
    languageBarrier: 67,
    availabilityIssues: 45,
    transportationChallenges: 38,
    insuranceComplexity: 52,
  },
  treatment: {
    medicationInstructions: 72,
    followUpCompliance: 58,
    specialistReferrals: 61,
    emergencyResponse: 89,
  },
  documentation: {
    consentForms: 81,
    medicalHistory: 64,
    insurancePaperwork: 76,
    billingStatements: 69,
  },
  communication: {
    physicianPatient: 73,
    nursePatient: 68,
    schedulingStaff: 67,
    billingQueries: 71,
  },
};

// Technology adoption potential
export const technologyReadiness = {
  videoInterpretation: {
    feasibility: 92,
    costEffectiveness: 85,
    patientAcceptance: 78,
    implementationTime: 3, // months
  },
  aiTranslation: {
    feasibility: 88,
    costEffectiveness: 95,
    patientAcceptance: 72,
    implementationTime: 6, // months
  },
  multilingualPortal: {
    feasibility: 95,
    costEffectiveness: 90,
    patientAcceptance: 84,
    implementationTime: 4, // months
  },
  culturalCompetencyTraining: {
    feasibility: 100,
    costEffectiveness: 88,
    patientAcceptance: 91,
    implementationTime: 2, // months
  },
};

// ROI scenarios for language services implementation
export const roiScenarios = {
  yearOne: {
    implementationCost: 350000,
    maintenanceCost: 180000,
    additionalPatients: 850,
    avgRevenuePerPatient: 3400,
    projectedRevenue: 2890000,
    netProfit: 2360000,
    roi: 674,
  },
  yearTwo: {
    implementationCost: 0, // already implemented
    maintenanceCost: 195000,
    additionalPatients: 1850,
    avgRevenuePerPatient: 3550,
    projectedRevenue: 6567500,
    netProfit: 6372500,
    roi: 3268,
  },
  yearThree: {
    implementationCost: 0,
    maintenanceCost: 205000,
    additionalPatients: 3200,
    avgRevenuePerPatient: 3700,
    projectedRevenue: 11840000,
    netProfit: 11635000,
    roi: 5676,
  },
  fiveYearTotal: {
    totalInvestment: 1350000,
    totalRevenue: 45200000,
    totalNetProfit: 43850000,
    averageAnnualROI: 3248,
    paybackPeriod: 0.4, // years
  },
};
