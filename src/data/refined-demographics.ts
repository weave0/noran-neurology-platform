// Updated demographics with refined research from Migration Policy Institute & Minnesota Compass (2023)

export interface RefinedDemographicData {
  source: string;
  year: number;
  totalPopulation: number;
  foreignBorn: number;
  foreignBornPercent: number;
  detailedOrigins: {
    africa: number;
    asia: number;
    europe: number;
    latinAmerica: number;
    oceania: number;
  };
  topOriginCountries: {
    country: string;
    population: number;
    percentOfForeignBorn: number;
  }[];
  periodOfEntry: {
    before1990: number;
    y1990to1999: number;
    y2000to2009: number;
    since2010: number;
  };
  citizenship: {
    naturalized: number;
    nonCitizens: number;
  };
  demographics: {
    medianAge: number;
    married: number;
    femalePercent: number;
  };
}

// Minnesota statewide data - Migration Policy Institute 2023
export const minnesotaStateData: RefinedDemographicData = {
  source: 'Migration Policy Institute - American Community Survey 2023',
  year: 2023,
  totalPopulation: 5742563,
  foreignBorn: 495352,
  foreignBornPercent: 8.6,
  detailedOrigins: {
    africa: 141090, // 28.5% of foreign-born
    asia: 173322, // 35.0% of foreign-born
    europe: 42452, // 8.6% of foreign-born
    latinAmerica: 125237, // 25.3% of foreign-born
    oceania: 3033, // 0.6% of foreign-born
  },
  topOriginCountries: [
    { country: 'Mexico', population: 64597, percentOfForeignBorn: 13.0 },
    { country: 'Somalia', population: 42503, percentOfForeignBorn: 8.6 }, // From MN Compass
    { country: 'India', population: 35537, percentOfForeignBorn: 7.2 },
    { country: 'Hmong (Laos/Thailand)', population: 29034, percentOfForeignBorn: 5.9 }, // From MN Compass
    { country: 'Ethiopia', population: 22453, percentOfForeignBorn: 4.5 },
    { country: 'Vietnam', population: 17822, percentOfForeignBorn: 3.6 },
    { country: 'China', population: 17718, percentOfForeignBorn: 3.6 },
    { country: 'Philippines', population: 14551, percentOfForeignBorn: 2.9 },
    { country: 'Korea', population: 11057, percentOfForeignBorn: 2.2 },
    { country: 'Liberia', population: 12446, percentOfForeignBorn: 2.5 },
    { country: 'Kenya', population: 11181, percentOfForeignBorn: 2.3 },
    { country: 'El Salvador', population: 9015, percentOfForeignBorn: 1.8 },
    { country: 'Russia', population: 8139, percentOfForeignBorn: 1.6 },
  ],
  periodOfEntry: {
    before1990: 84314, // 17.0% - Long-established, likely English proficient
    y1990to1999: 86648, // 17.5% - Moderate English proficiency
    y2000to2009: 119762, // 24.2% - Building proficiency
    since2010: 204628, // 41.3% - Highest LEP risk
  },
  citizenship: {
    naturalized: 286914, // 57.9%
    nonCitizens: 208438, // 42.1%
  },
  demographics: {
    medianAge: 40.6,
    married: 56.2,
    femalePercent: 50.1,
  },
};

// Minneapolis-St. Paul Metro Area (7-county) - Extrapolated from state data
export const mspMetroRefinedData: RefinedDemographicData = {
  source: 'Estimated from MPI state data + Metro Council demographics',
  year: 2023,
  totalPopulation: 3700000, // MSP metro
  foreignBorn: 362000, // 73% of state foreign-born concentrated in metro
  foreignBornPercent: 9.8, // Higher than state average
  detailedOrigins: {
    africa: 103000, // Higher concentration in MSP
    asia: 126500,
    europe: 31000,
    latinAmerica: 91500,
    oceania: 2200,
  },
  topOriginCountries: [
    { country: 'Mexico', population: 47000, percentOfForeignBorn: 13.0 },
    { country: 'Somalia', population: 39000, percentOfForeignBorn: 10.8 }, // Nearly all in MSP
    { country: 'India', population: 28500, percentOfForeignBorn: 7.9 },
    { country: 'Hmong (Laos/Thailand)', population: 27000, percentOfForeignBorn: 7.5 },
    { country: 'Ethiopia', population: 20500, percentOfForeignBorn: 5.7 },
    { country: 'Vietnam', population: 16500, percentOfForeignBorn: 4.6 },
    { country: 'China', population: 16000, percentOfForeignBorn: 4.4 },
    { country: 'Philippines', population: 13000, percentOfForeignBorn: 3.6 },
    { country: 'Liberia', population: 11500, percentOfForeignBorn: 3.2 },
    { country: 'Kenya', population: 10500, percentOfForeignBorn: 2.9 },
    { country: 'Korea', population: 10000, percentOfForeignBorn: 2.8 },
  ],
  periodOfEntry: {
    before1990: 61500,
    y1990to1999: 63000,
    y2000to2009: 87500,
    since2010: 149500, // 41% - Critical LEP population
  },
  citizenship: {
    naturalized: 209600, // 57.9%
    nonCitizens: 152400, // 42.1%
  },
  demographics: {
    medianAge: 39.2, // Slightly younger than state
    married: 54.8,
    femalePercent: 50.3,
  },
};

// Language groups with speaker populations (Minnesota Compass + ACS 2023)
export interface LanguageGroup {
  languageFamily: string;
  languages: string[];
  speakerPopulation: number;
  lepPopulation: number; // Limited English Proficiency
  lepPercent: number;
  primaryOrigins: string[];
  concentration: 'metro' | 'statewide';
  healthcareNeed: 'critical' | 'high' | 'moderate';
}

export const refinedLanguageGroups: LanguageGroup[] = [
  {
    languageFamily: 'Spanish',
    languages: ['Spanish'],
    speakerPopulation: 145000, // MPI + MN Compass
    lepPopulation: 52000, // ~36% LEP rate
    lepPercent: 35.9,
    primaryOrigins: ['Mexico', 'El Salvador', 'Guatemala', 'Ecuador'],
    concentration: 'metro',
    healthcareNeed: 'critical',
  },
  {
    languageFamily: 'Cushitic (Somali/Oromo)',
    languages: ['Somali', 'Oromo'],
    speakerPopulation: 58000, // Somalia + partial Ethiopia
    lepPopulation: 32000, // ~55% LEP rate (recent arrivals)
    lepPercent: 55.2,
    primaryOrigins: ['Somalia', 'Ethiopia'],
    concentration: 'metro',
    healthcareNeed: 'critical',
  },
  {
    languageFamily: 'Hmong',
    languages: ['Hmong'],
    speakerPopulation: 35000,
    lepPopulation: 18500, // ~53% LEP rate (elders especially)
    lepPercent: 52.9,
    primaryOrigins: ['Laos', 'Thailand'],
    concentration: 'metro',
    healthcareNeed: 'critical',
  },
  {
    languageFamily: 'Vietnamese',
    languages: ['Vietnamese'],
    speakerPopulation: 21000,
    lepPopulation: 9800, // ~47% LEP rate
    lepPercent: 46.7,
    primaryOrigins: ['Vietnam'],
    concentration: 'metro',
    healthcareNeed: 'high',
  },
  {
    languageFamily: 'Karen',
    languages: ['Karen', 'Karenni'],
    speakerPopulation: 15000,
    lepPopulation: 8200, // ~55% LEP rate (recent refugees)
    lepPercent: 54.7,
    primaryOrigins: ['Myanmar/Burma', 'Thailand'],
    concentration: 'metro',
    healthcareNeed: 'high',
  },
  {
    languageFamily: 'Chinese',
    languages: ['Mandarin', 'Cantonese'],
    speakerPopulation: 22000,
    lepPopulation: 7500, // ~34% LEP rate
    lepPercent: 34.1,
    primaryOrigins: ['China', 'Taiwan'],
    concentration: 'metro',
    healthcareNeed: 'moderate',
  },
  {
    languageFamily: 'Amharic',
    languages: ['Amharic', 'Tigrinya'],
    speakerPopulation: 18000,
    lepPopulation: 7000, // ~39% LEP rate
    lepPercent: 38.9,
    primaryOrigins: ['Ethiopia', 'Eritrea'],
    concentration: 'metro',
    healthcareNeed: 'high',
  },
  {
    languageFamily: 'Lao',
    languages: ['Lao'],
    speakerPopulation: 11000,
    lepPopulation: 5800, // ~53% LEP rate
    lepPercent: 52.7,
    primaryOrigins: ['Laos'],
    concentration: 'metro',
    healthcareNeed: 'high',
  },
  {
    languageFamily: 'Indian Languages',
    languages: ['Hindi', 'Telugu', 'Tamil', 'Punjabi', 'Gujarati'],
    speakerPopulation: 38000,
    lepPopulation: 8500, // ~22% LEP rate (higher education)
    lepPercent: 22.4,
    primaryOrigins: ['India'],
    concentration: 'metro',
    healthcareNeed: 'moderate',
  },
  {
    languageFamily: 'Russian',
    languages: ['Russian'],
    speakerPopulation: 12000,
    lepPopulation: 4200, // ~35% LEP rate
    lepPercent: 35.0,
    primaryOrigins: ['Russia', 'Ukraine'],
    concentration: 'metro',
    healthcareNeed: 'moderate',
  },
  {
    languageFamily: 'Korean',
    languages: ['Korean'],
    speakerPopulation: 14000,
    lepPopulation: 4500, // ~32% LEP rate
    lepPercent: 32.1,
    primaryOrigins: ['South Korea'],
    concentration: 'metro',
    healthcareNeed: 'moderate',
  },
  {
    languageFamily: 'African Languages (Other)',
    languages: ['Swahili', 'Kinyarwanda', 'Kirundi', 'Lingala'],
    speakerPopulation: 28000,
    lepPopulation: 14000, // ~50% LEP rate
    lepPercent: 50.0,
    primaryOrigins: ['Kenya', 'Rwanda', 'Burundi', 'Congo'],
    concentration: 'metro',
    healthcareNeed: 'high',
  },
];

// Healthcare-specific LEP data
export interface HealthcareLEPData {
  totalLEPPopulation: number;
  medicallyUnderserved: number;
  facingAccessBarriers: {
    schedulingDifficulty: number;
    navigationChallenges: number;
    formCompletion: number;
    medicationInstructions: number;
    appointmentAttendance: number;
    trustBarriers: number;
  };
  insuranceCoverage: {
    privateInsurance: number;
    medicaid: number;
    medicare: number;
    uninsured: number;
  };
  utilizationPatterns: {
    primaryCareVisits: number; // annual average
    emergencyRoomUse: number; // vs general population multiplier
    specialtyCarAccess: number; // percent who can access specialists
  };
}

export const mspHealthcareLEPData: HealthcareLEPData = {
  totalLEPPopulation: 171700, // Refined from language group data
  medicallyUnderserved: 89500, // 52% facing significant barriers
  facingAccessBarriers: {
    schedulingDifficulty: 115000, // 67% (national studies)
    navigationChallenges: 92700, // 54%
    formCompletion: 121900, // 71%
    medicationInstructions: 111500, // 65%
    appointmentAttendance: 75500, // 44% missed appointments
    trustBarriers: 60000, // 35% cultural mistrust
  },
  insuranceCoverage: {
    privateInsurance: 94400, // 55% (lower than general pop 71%)
    medicaid: 60100, // 35%
    medicare: 10300, // 6%
    uninsured: 6900, // 4% (lower due to MNsure/ACA)
  },
  utilizationPatterns: {
    primaryCareVisits: 2.8, // vs 4.1 general population
    emergencyRoomUse: 1.82, // 1.82x more ER visits than general pop
    specialtyCarAccess: 42, // 42% vs 68% general population
  },
};

// Neurology-specific considerations
export interface NeurologyLanguageNeeds {
  condition: string;
  prevalenceInLEP: number; // per 100,000
  languageBarrierImpact: 'severe' | 'high' | 'moderate';
  culturalConsiderations: string[];
  communicationCritically: 'critical' | 'important' | 'standard';
}

export const neurologyLEPNeeds: NeurologyLanguageNeeds[] = [
  {
    condition: 'Stroke & TIA',
    prevalenceInLEP: 380, // Higher in immigrant populations
    languageBarrierImpact: 'severe',
    culturalConsiderations: [
      'Time-sensitive symptom recognition',
      'Family decision-making protocols',
      'Rehabilitation instruction comprehension',
      'Medication adherence communication',
    ],
    communicationCritically: 'critical',
  },
  {
    condition: 'Epilepsy/Seizure Disorders',
    prevalenceInLEP: 145,
    languageBarrierImpact: 'severe',
    culturalConsiderations: [
      'Stigma in Somali, Hmong, and Ethiopian communities',
      'Traditional medicine interactions',
      'Detailed seizure description needed',
      'Complex medication titration instructions',
    ],
    communicationCritically: 'critical',
  },
  {
    condition: 'Migraine & Headache',
    prevalenceInLEP: 520,
    languageBarrierImpact: 'high',
    culturalConsiderations: [
      'Pain description varies culturally',
      'Trigger identification requires dialogue',
      'Preventive vs acute medication confusion',
    ],
    communicationCritically: 'important',
  },
  {
    condition: 'Peripheral Neuropathy',
    prevalenceInLEP: 425, // High in diabetic populations (Somali, Hispanic)
    languageBarrierImpact: 'high',
    culturalConsiderations: [
      'Diabetes management education critical',
      'Symptom description (numbness, tingling) varies',
      'Foot care instructions essential',
    ],
    communicationCritically: 'important',
  },
  {
    condition: 'Dementia & Memory Disorders',
    prevalenceInLEP: 310,
    languageBarrierImpact: 'severe',
    culturalConsiderations: [
      'Baseline cognitive testing in native language required',
      'Family caregiver education intensive',
      'Cultural attitudes toward elder care',
      'Advanced directive discussions complex',
    ],
    communicationCritically: 'critical',
  },
  {
    condition: 'Multiple Sclerosis',
    prevalenceInLEP: 85,
    languageBarrierImpact: 'high',
    culturalConsiderations: [
      'Long-term treatment adherence critical',
      'Complex symptom monitoring',
      'Injection technique instruction',
    ],
    communicationCritically: 'important',
  },
  {
    condition: "Parkinson's Disease",
    prevalenceInLEP: 175,
    languageBarrierImpact: 'high',
    culturalConsiderations: [
      'Medication timing precision essential',
      'Motor symptom description varies',
      'Caregiver training intensive',
    ],
    communicationCritically: 'important',
  },
];

// Competitor analysis - Twin Cities neurology practices
export interface CompetitorPractice {
  name: string;
  locations: number;
  neurologists: number;
  languageServices: {
    onSite: string[];
    telephonic: boolean;
    writtenMaterials: string[];
  };
  marketShare: number; // estimated LEP patient share
  strengths: string[];
  gaps: string[];
}

export const twinCitiesNeurologyCompetitors: CompetitorPractice[] = [
  {
    name: 'Minnesota Neurology',
    locations: 6,
    neurologists: 18,
    languageServices: {
      onSite: ['Spanish'],
      telephonic: true,
      writtenMaterials: ['Spanish'],
    },
    marketShare: 15,
    strengths: [
      'Largest practice footprint',
      'Some Spanish capacity',
      'Telephonic interpretation available',
    ],
    gaps: [
      'No Somali/East African language support',
      'No Asian language capacity',
      'Limited written materials',
      'No community outreach programs',
    ],
  },
  {
    name: 'Twin Cities Neurology Group',
    locations: 3,
    neurologists: 12,
    languageServices: {
      onSite: [],
      telephonic: false,
      writtenMaterials: [],
    },
    marketShare: 8,
    strengths: ['Academic affiliation', 'Subspecialty expertise'],
    gaps: [
      'Zero language services',
      'No interpreter access',
      'English-only materials',
      'No cultural competency training visible',
    ],
  },
  {
    name: 'Regional Neuroscience Center',
    locations: 2,
    neurologists: 8,
    languageServices: {
      onSite: [],
      telephonic: true,
      writtenMaterials: ['Spanish'],
    },
    marketShare: 12,
    strengths: ['Hospital-based access to interpreters', 'Spanish materials'],
    gaps: [
      'Limited to hospital interpreter pool',
      'No dedicated multilingual staff',
      'Suburban locations inaccessible to urban LEP populations',
    ],
  },
  {
    name: 'Independent Practitioners (aggregate)',
    locations: 15,
    neurologists: 22,
    languageServices: {
      onSite: [],
      telephonic: false,
      writtenMaterials: [],
    },
    marketShare: 22,
    strengths: ['Geographic distribution', 'Personal relationships'],
    gaps: [
      'No systematic language access',
      'Rely on family members for interpretation (unsafe)',
      'No cultural training',
      'Fragmented care coordination',
    ],
  },
];
