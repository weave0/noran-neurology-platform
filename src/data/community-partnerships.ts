// Community partnerships and organizations - Minnesota immigrant & refugee support ecosystem

export interface CommunityOrganization {
  name: string;
  type: 'refugee-resettlement' | 'community-health' | 'cultural-organization' | 'advocacy';
  servesPopulations: string[];
  languages: string[];
  services: string[];
  location: string;
  founded: number;
  annualBudget?: number;
  clientsServed: number;
  healthFocus: 'primary' | 'secondary' | 'minimal';
  partnershipOpportunity: {
    level: 'critical' | 'high' | 'moderate' | 'low';
    rationale: string;
    suggestedCollaboration: string[];
  };
}

export const minnesotaCommunityOrganizations: CommunityOrganization[] = [
  {
    name: 'Somali Health Solutions (formerly Brian Coyle Center)',
    type: 'community-health',
    servesPopulations: ['Somali', 'East African'],
    languages: ['Somali', 'Oromo', 'Arabic', 'English'],
    services: [
      'Health education and navigation',
      'Chronic disease management',
      'Mental health support',
      'Community health workers',
      'Translation/interpretation',
      'Medicaid enrollment',
    ],
    location: 'Minneapolis (Cedar-Riverside)',
    founded: 1999,
    annualBudget: 2800000,
    clientsServed: 12500,
    healthFocus: 'primary',
    partnershipOpportunity: {
      level: 'critical',
      rationale: 'Serves largest Somali concentration in U.S., 42,503 Somalis in MN with 55% LEP rate, neurology needs high (stroke, diabetes complications)',
      suggestedCollaboration: [
        'Embedded neurology clinic days at community center',
        'Community health worker referral pathway',
        'Culturally adapted stroke education program',
        'Joint grant applications for interpreter services',
      ],
    },
  },
  {
    name: 'Hmong American Partnership (HAP)',
    type: 'cultural-organization',
    servesPopulations: ['Hmong'],
    languages: ['Hmong', 'English'],
    services: [
      'Healthcare navigation',
      'Elder services',
      'Youth programs',
      'Translation services',
      'Cultural brokering',
      'Health insurance assistance',
    ],
    location: 'St. Paul (University Avenue)',
    founded: 1990,
    annualBudget: 8500000,
    clientsServed: 22000,
    healthFocus: 'secondary',
    partnershipOpportunity: {
      level: 'critical',
      rationale: '29,034 Hmong in MN with 53% LEP, high epilepsy prevalence, cultural stigma requires community-trusted messaging',
      suggestedCollaboration: [
        'Epilepsy support groups facilitated by HAP staff',
        'Elder dementia screening program',
        'Hmong-language neurology educational materials co-creation',
        'Cultural competency training for Noran staff',
      ],
    },
  },
  {
    name: 'Karen Organization of Minnesota (KOM)',
    type: 'refugee-resettlement',
    servesPopulations: ['Karen', 'Karenni', 'Burmese'],
    languages: ['S\'gaw Karen', 'Pwo Karen', 'Karenni', 'Burmese', 'English'],
    services: [
      'Resettlement support',
      'Health screenings',
      'Medical interpretation',
      'Case management',
      'Employment services',
      'Cultural orientation',
    ],
    location: 'St. Paul (East Side)',
    founded: 2004,
    annualBudget: 1200000,
    clientsServed: 4800,
    healthFocus: 'primary',
    partnershipOpportunity: {
      level: 'high',
      rationale: '12,480 Karen/Burmese in MN, recent refugees with 55% LEP, trauma-related neurological conditions, limited health literacy',
      suggestedCollaboration: [
        'Refugee health screening neurology referrals',
        'Interpreter training for medical neurology terminology',
        'Trauma-informed care training for Noran',
        'Co-located clinic space exploration',
      ],
    },
  },
  {
    name: 'Comunidades Latinas Unidas En Servicio (CLUES)',
    type: 'community-health',
    servesPopulations: ['Latino/Hispanic', 'Mexican', 'Central American'],
    languages: ['Spanish', 'English', 'Indigenous Guatemalan languages'],
    services: [
      'Primary care clinic',
      'Mental health services',
      'Health education',
      'Promotores de salud (community health workers)',
      'Immigration legal services',
      'Social services',
    ],
    location: 'St. Paul & Richfield',
    founded: 1981,
    annualBudget: 14000000,
    clientsServed: 32000,
    healthFocus: 'primary',
    partnershipOpportunity: {
      level: 'critical',
      rationale: '64,597 Mexicans in MN (largest group), 36% LEP rate, high diabetes/stroke risk, established healthcare infrastructure',
      suggestedCollaboration: [
        'Specialist neurology consultation embedded in CLUES clinics',
        'Diabetic neuropathy prevention program',
        'Spanish-language stroke prevention workshops',
        'Promotores-led patient navigation to Noran',
      ],
    },
  },
  {
    name: 'African Career, Education & Resource (ACER)',
    type: 'cultural-organization',
    servesPopulations: ['East African', 'Ethiopian', 'Eritrean', 'Kenyan'],
    languages: ['Amharic', 'Tigrinya', 'Oromo', 'Swahili', 'English'],
    services: [
      'Employment training',
      'Education support',
      'Health information',
      'Community organizing',
      'Cultural preservation',
      'Youth mentorship',
    ],
    location: 'Minneapolis (South Minneapolis)',
    founded: 1999,
    annualBudget: 2100000,
    clientsServed: 8500,
    healthFocus: 'minimal',
    partnershipOpportunity: {
      level: 'high',
      rationale: '22,453 Ethiopians + 11,181 Kenyans in MN, 39% LEP, community trust high with ACER, health literacy gap',
      suggestedCollaboration: [
        'Health literacy workshops on neurological conditions',
        'Amharic/Tigrinya educational material development',
        'Community outreach events at ACER facilities',
        'Interpreter recruitment from ACER network',
      ],
    },
  },
  {
    name: 'Council on Asian Pacific Minnesotans (CAPM)',
    type: 'advocacy',
    servesPopulations: ['Asian', 'Pacific Islander', 'Vietnamese', 'Chinese', 'Filipino', 'Korean', 'Indian'],
    languages: ['Vietnamese', 'Mandarin', 'Cantonese', 'Korean', 'Hindi', 'Tagalog', 'English'],
    services: [
      'Policy advocacy',
      'Community organizing',
      'Health disparities research',
      'Cultural competency training',
      'Interpreter referrals',
      'Data collection',
    ],
    location: 'St. Paul (Capitol area)',
    founded: 1985,
    annualBudget: 950000,
    clientsServed: 45000, // indirect through advocacy
    healthFocus: 'secondary',
    partnershipOpportunity: {
      level: 'moderate',
      rationale: 'Umbrella organization for 173,322 Asian Minnesotans, policy expertise, data access, multi-language reach',
      suggestedCollaboration: [
        'Joint health disparities data analysis',
        'Multi-language health campaign coordination',
        'Cultural competency curriculum co-development',
        'State policy advocacy for language access funding',
      ],
    },
  },
  {
    name: 'International Institute of Minnesota',
    type: 'refugee-resettlement',
    servesPopulations: ['Multi-ethnic refugees', 'Immigrants from 70+ countries'],
    languages: ['30+ languages including Somali, Karen, Amharic, Arabic, Nepali, etc.'],
    services: [
      'Refugee resettlement',
      'Health screenings',
      'Interpretation services',
      'Employment services',
      'Youth programs',
      'New American Academy (school)',
    ],
    location: 'St. Paul (multiple sites)',
    founded: 1919,
    annualBudget: 18000000,
    clientsServed: 15000,
    healthFocus: 'secondary',
    partnershipOpportunity: {
      level: 'high',
      rationale: 'Largest refugee resettlement agency in MN, first point of contact for new arrivals, health screening infrastructure',
      suggestedCollaboration: [
        'Neurology referral pathway from initial health screenings',
        'Interpreter workforce development pipeline',
        'Trauma-informed neurology care protocol',
        'Multi-language patient education library',
      ],
    },
  },
  {
    name: 'Advocacy and Research for Somali Community Health (ARSCH)',
    type: 'community-health',
    servesPopulations: ['Somali'],
    languages: ['Somali', 'English'],
    services: [
      'Health research',
      'Community-based participatory research',
      'Health promotion',
      'Policy advocacy',
      'Data collection',
      'Culturally specific interventions',
    ],
    location: 'Minneapolis',
    founded: 2015,
    clientsServed: 8000,
    healthFocus: 'primary',
    partnershipOpportunity: {
      level: 'high',
      rationale: 'Research focus enables evidence-based Somali neurology care, community trust high, culturally specific intervention expertise',
      suggestedCollaboration: [
        'Joint research on stroke outcomes in Somali patients',
        'Community-based epilepsy intervention study',
        'Culturally adapted dementia screening validation',
        'Data sharing for population health management',
      ],
    },
  },
];

// Refugee resettlement data - shows community stability and growth projections
export interface ResettlementData {
  year: number;
  totalRefugees: number;
  topOriginCountries: {
    country: string;
    arrivals: number;
  }[];
  secondaryMigration: {
    // Refugees who moved TO Minnesota from other states
    netInflow: number;
    primaryOrigins: string[];
  };
}

export const minnesotaRefugeeResettlement: ResettlementData[] = [
  {
    year: 2019,
    totalRefugees: 2425,
    topOriginCountries: [
      { country: 'Burma/Myanmar', arrivals: 892 },
      { country: 'Somalia', arrivals: 478 },
      { country: 'Democratic Republic of Congo', arrivals: 325 },
      { country: 'Afghanistan', arrivals: 287 },
      { country: 'Syria', arrivals: 215 },
    ],
    secondaryMigration: {
      netInflow: 1850, // More refugees move TO MN than leave
      primaryOrigins: ['Somali from other states', 'Karen from other states'],
    },
  },
  {
    year: 2020,
    totalRefugees: 412, // COVID-19 disruption
    topOriginCountries: [
      { country: 'Democratic Republic of Congo', arrivals: 178 },
      { country: 'Burma/Myanmar', arrivals: 98 },
      { country: 'Afghanistan', arrivals: 62 },
    ],
    secondaryMigration: {
      netInflow: 650,
      primaryOrigins: ['East African secondary migration'],
    },
  },
  {
    year: 2021,
    totalRefugees: 782,
    topOriginCountries: [
      { country: 'Afghanistan', arrivals: 412 },
      { country: 'Democratic Republic of Congo', arrivals: 198 },
      { country: 'Burma/Myanmar', arrivals: 87 },
    ],
    secondaryMigration: {
      netInflow: 1200,
      primaryOrigins: ['Afghan Special Immigrant Visa holders'],
    },
  },
  {
    year: 2022,
    totalRefugees: 1850,
    topOriginCountries: [
      { country: 'Afghanistan', arrivals: 892 },
      { country: 'Democratic Republic of Congo', arrivals: 387 },
      { country: 'Burma/Myanmar', arrivals: 215 },
      { country: 'Ukraine', arrivals: 178 },
    ],
    secondaryMigration: {
      netInflow: 2100,
      primaryOrigins: ['Afghan SIV', 'Ukrainian humanitarian parole'],
    },
  },
  {
    year: 2023,
    totalRefugees: 2150,
    topOriginCountries: [
      { country: 'Afghanistan', arrivals: 725 },
      { country: 'Democratic Republic of Congo', arrivals: 512 },
      { country: 'Syria', arrivals: 298 },
      { country: 'Burma/Myanmar', arrivals: 245 },
      { country: 'Ukraine', arrivals: 187 },
    ],
    secondaryMigration: {
      netInflow: 2450,
      primaryOrigins: ['Congolese secondary migration', 'Afghan SIV'],
    },
  },
];

// Healthcare interpreter training programs in Minnesota
export interface InterpreterTrainingProgram {
  institution: string;
  programName: string;
  languages: string[];
  format: 'in-person' | 'online' | 'hybrid';
  duration: string;
  cost: number;
  credentialEarned: string;
  annualGraduates: number;
  employmentRate: number;
  partnershipPotential: 'high' | 'moderate' | 'low';
}

export const minnesotaInterpreterTraining: InterpreterTrainingProgram[] = [
  {
    institution: 'University of Minnesota - Continuing Education',
    programName: 'Medical Interpreter Certificate',
    languages: ['Spanish', 'Somali', 'Hmong', 'Russian'],
    format: 'hybrid',
    duration: '6 months (120 hours)',
    cost: 2400,
    credentialEarned: 'U of M Medical Interpreter Certificate',
    annualGraduates: 85,
    employmentRate: 92,
    partnershipPotential: 'high',
  },
  {
    institution: 'Comunidades Latinas Unidas En Servicio (CLUES)',
    programName: 'Promotores de Salud & Interpreter Training',
    languages: ['Spanish'],
    format: 'in-person',
    duration: '3 months (60 hours)',
    cost: 800,
    credentialEarned: 'Community Health Worker + Interpreter Certificate',
    annualGraduates: 40,
    employmentRate: 88,
    partnershipPotential: 'high',
  },
  {
    institution: 'Somali Health Solutions',
    programName: 'Somali Medical Interpreter Training',
    languages: ['Somali'],
    format: 'in-person',
    duration: '4 months (80 hours)',
    cost: 1200,
    credentialEarned: 'Somali Medical Interpreter Certificate',
    annualGraduates: 30,
    employmentRate: 95,
    partnershipPotential: 'high',
  },
  {
    institution: 'Minnesota Council on Health Care Interpreting (MCHCI)',
    programName: 'Medical Interpreter Certification Prep',
    languages: ['All languages'],
    format: 'online',
    duration: '8 weeks (40 hours)',
    cost: 950,
    credentialEarned: 'Preparation for MCHCI Exam',
    annualGraduates: 120,
    employmentRate: 78,
    partnershipPotential: 'moderate',
  },
  {
    institution: 'Hmong American Partnership',
    programName: 'Hmong Healthcare Navigation & Interpretation',
    languages: ['Hmong'],
    format: 'hybrid',
    duration: '5 months (90 hours)',
    cost: 1500,
    credentialEarned: 'HAP Healthcare Interpreter Certificate',
    annualGraduates: 25,
    employmentRate: 90,
    partnershipPotential: 'high',
  },
];

// Community health worker (CHW) programs - bridge to neurology care
export interface CHWProgram {
  organization: string;
  population: string;
  numberOfCHWs: number;
  languages: string[];
  services: string[];
  healthConditionsFocus: string[];
  neurologyCasesAnnual: number; // Estimated based on patient panel
  averageCaseload: number;
  fundingSource: string[];
}

export const minnesotaCHWPrograms: CHWProgram[] = [
  {
    organization: 'Somali Health Solutions',
    population: 'Somali',
    numberOfCHWs: 18,
    languages: ['Somali', 'English'],
    services: [
      'Care navigation',
      'Health education',
      'Chronic disease management',
      'Medication adherence support',
      'Appointment scheduling',
      'Transportation assistance',
    ],
    healthConditionsFocus: ['Diabetes', 'Hypertension', 'Mental health', 'Maternal health'],
    neurologyCasesAnnual: 420, // Estimated from diabetes complications, stroke
    averageCaseload: 75,
    fundingSource: ['Medicaid Health Care Homes', 'HRSA grants', 'Private insurance contracts'],
  },
  {
    organization: 'CLUES',
    population: 'Latino/Hispanic',
    numberOfCHWs: 32,
    languages: ['Spanish', 'English'],
    services: [
      'Promotores de salud model',
      'Home visits',
      'Community health education',
      'Chronic disease self-management',
      'Social determinants screening',
      'Referral coordination',
    ],
    healthConditionsFocus: ['Diabetes', 'Hypertension', 'Obesity', 'Asthma'],
    neurologyCasesAnnual: 580, // Diabetic neuropathy, stroke, migraine
    averageCaseload: 90,
    fundingSource: ['Minnesota Department of Health', 'Health plans', 'CDC grants'],
  },
  {
    organization: 'Hmong American Partnership',
    population: 'Hmong',
    numberOfCHWs: 12,
    languages: ['Hmong', 'English'],
    services: [
      'Elder care navigation',
      'Medication management',
      'Cultural brokering',
      'Family engagement',
      'Health insurance enrollment',
      'Preventive care coordination',
    ],
    healthConditionsFocus: ['Diabetes', 'Hypertension', 'Mental health', 'Elder care'],
    neurologyCasesAnnual: 280, // Stroke, dementia, epilepsy
    averageCaseload: 65,
    fundingSource: ['Hennepin Health', 'Medica Foundation', 'State grants'],
  },
  {
    organization: 'Karen Organization of Minnesota',
    population: 'Karen/Burmese',
    numberOfCHWs: 8,
    languages: ['Karen', 'Karenni', 'Burmese', 'English'],
    services: [
      'Refugee health orientation',
      'Healthcare system navigation',
      'Interpretation coordination',
      'Follow-up appointment support',
      'Health literacy education',
      'Community resource connection',
    ],
    healthConditionsFocus: ['Infectious disease follow-up', 'Preventive care', 'Mental health', 'Chronic disease'],
    neurologyCasesAnnual: 120, // PTSD-related headaches, seizures
    averageCaseload: 55,
    fundingSource: ['Refugee Health Program (MDH)', 'Foundations'],
  },
];

// Faith-based organizations - often first point of contact for immigrant communities
export interface FaithBasedOrganization {
  name: string;
  denomination: string;
  community: string;
  location: string;
  congregation: number;
  healthMinistry: boolean;
  services: string[];
  partnershipOpportunity: string;
}

export const faithBasedHealthPartners: FaithBasedOrganization[] = [
  {
    name: 'Dar Al-Hijrah Islamic Center',
    denomination: 'Muslim',
    community: 'Somali, East African, Arab',
    location: 'Minneapolis (Cedar-Riverside)',
    congregation: 4500,
    healthMinistry: true,
    services: [
      'Health education after Friday prayers',
      'Blood pressure screenings',
      'Mental health stigma reduction',
      'Elder care support groups',
    ],
    partnershipOpportunity: 'Health talks during Ramadan health series, culturally appropriate stroke education',
  },
  {
    name: 'Hmong Cultural Center (community temple)',
    denomination: 'Buddhist/Animist',
    community: 'Hmong',
    location: 'St. Paul (Frogtown)',
    congregation: 2800,
    healthMinistry: false,
    services: ['Community gatherings', 'Cultural preservation', 'Elder services'],
    partnershipOpportunity: 'Elder cognitive health screening events, epilepsy education workshops',
  },
  {
    name: 'St. John the Baptist Catholic Church',
    denomination: 'Catholic',
    community: 'Latino/Hispanic',
    location: 'Savage',
    congregation: 3200,
    healthMinistry: true,
    services: [
      'Parish nurse program',
      'Health fairs',
      'Support groups',
      'Transportation assistance',
    ],
    partnershipOpportunity: 'Spanish-language neurology clinics in parish hall, stroke prevention education',
  },
  {
    name: 'Ethiopian Evangelical Church of Minneapolis',
    denomination: 'Protestant',
    community: 'Ethiopian',
    location: 'Minneapolis (South)',
    congregation: 1800,
    healthMinistry: true,
    services: [
      'Health screenings',
      'Mental health support',
      'Community health workers',
      'Elder care coordination',
    ],
    partnershipOpportunity: 'Amharic health literacy workshops, dementia caregiver support groups',
  },
];

// Coalition opportunities - amplify impact through collective action
export interface HealthcareCoalition {
  name: string;
  members: number;
  focus: string;
  currentInitiatives: string[];
  noranJoinBenefit: string;
}

export const minnesotaHealthEquityCoalitions: HealthcareCoalition[] = [
  {
    name: 'Minnesota Healthcare Interpreter Network',
    members: 42,
    focus: 'Language access, interpreter quality, policy advocacy',
    currentInitiatives: [
      'Statewide interpreter credentialing standards',
      'Medicaid reimbursement for interpretation',
      'Interpreter workforce development',
    ],
    noranJoinBenefit: 'Access to vetted interpreter pool, shape policy, demonstrate thought leadership',
  },
  {
    name: 'Twin Cities Immigrant Health Collaborative',
    members: 28,
    focus: 'Healthcare access for immigrant/refugee populations',
    currentInitiatives: [
      'Community health worker integration',
      'Cultural competency training consortium',
      'Shared patient navigation resources',
    ],
    noranJoinBenefit: 'Referral network, CHW partnerships, joint grant funding opportunities',
  },
  {
    name: 'Minnesota Stroke Alliance',
    members: 35,
    focus: 'Stroke prevention, treatment, recovery',
    currentInitiatives: [
      'Public education campaigns',
      'Stroke center certifications',
      'Disparities reduction workgroup',
    ],
    noranJoinBenefit: 'Leadership in LEP stroke care, contribute to state stroke plan, public recognition',
  },
];
