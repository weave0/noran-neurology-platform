// Advanced data processing and analytics utilities

export interface AnalyticsMetrics {
  totalReach: number;
  growthVelocity: number;
  marketPenetration: number;
  opportunityScore: number;
  competitiveIndex: number;
}

export interface PredictiveModel {
  year: number;
  predictedPopulation: number;
  predictedForeignBorn: number;
  confidence: number;
  factors: string[];
}

export interface MarketSegment {
  name: string;
  size: number;
  growth: number;
  priority: 'critical' | 'high' | 'medium' | 'low';
  revenueOpportunity: number;
  penetrationCost: number;
  roi: number;
}

// Monte Carlo simulation for revenue projections
export function simulateRevenueProjection(
  basePatients: number,
  conversionRate: number,
  avgRevenuePerPatient: number,
  iterations: number = 1000
): { mean: number; min: number; max: number; stdDev: number } {
  const results: number[] = [];
  
  for (let i = 0; i < iterations; i++) {
    // Add randomness to conversion rate (±20%)
    const randomConversion = conversionRate * (0.8 + Math.random() * 0.4);
    // Add randomness to revenue (±15%)
    const randomRevenue = avgRevenuePerPatient * (0.85 + Math.random() * 0.3);
    
    const patients = Math.floor(basePatients * randomConversion);
    const revenue = patients * randomRevenue;
    results.push(revenue);
  }
  
  const mean = results.reduce((a, b) => a + b, 0) / results.length;
  const variance = results.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / results.length;
  const stdDev = Math.sqrt(variance);
  
  return {
    mean: Math.round(mean),
    min: Math.round(Math.min(...results)),
    max: Math.round(Math.max(...results)),
    stdDev: Math.round(stdDev),
  };
}

// Calculate market penetration score (0-100)
export function calculateMarketPenetration(
  currentPatients: number,
  targetPopulation: number,
  competitors: number
): number {
  const rawPenetration = (currentPatients / targetPopulation) * 100;
  const competitorAdjustment = Math.max(0, 100 - (competitors * 5));
  return Math.min(100, rawPenetration * (competitorAdjustment / 100));
}

// Language priority scoring algorithm
export function calculateLanguagePriority(
  speakers: number,
  growthRate: number,
  healthcareDemand: 'high' | 'medium' | 'low',
  currentSupport: boolean
): number {
  const speakerScore = Math.log10(speakers) * 20; // Logarithmic scale
  const growthScore = growthRate * 10;
  const demandScore = healthcareDemand === 'high' ? 30 : healthcareDemand === 'medium' ? 15 : 5;
  const supportPenalty = currentSupport ? -10 : 0;
  
  return Math.round(speakerScore + growthScore + demandScore + supportPenalty);
}

// Diversity index calculation (Simpson's Diversity Index)
export function calculateDiversityIndex(populations: number[]): number {
  const total = populations.reduce((a, b) => a + b, 0);
  const sumOfSquares = populations.reduce((sum, pop) => {
    const proportion = pop / total;
    return sum + (proportion * proportion);
  }, 0);
  
  return 1 - sumOfSquares; // 0 = no diversity, 1 = maximum diversity
}

// Compound Annual Growth Rate (CAGR)
export function calculateCAGR(
  startValue: number,
  endValue: number,
  years: number
): number {
  return (Math.pow(endValue / startValue, 1 / years) - 1) * 100;
}

// Patient acquisition cost with language barriers
export function calculateAcquisitionCost(
  baseCAC: number,
  languageBarrier: boolean,
  culturalSupport: boolean
): number {
  let multiplier = 1;
  if (languageBarrier) multiplier *= 1.8; // 80% higher cost
  if (!culturalSupport) multiplier *= 1.4; // 40% higher cost
  return Math.round(baseCAC * multiplier);
}

// ROI calculation for language services
export function calculateLanguageServicesROI(
  implementationCost: number,
  annualMaintenanceCost: number,
  additionalPatients: number,
  revenuePerPatient: number,
  years: number
): { roi: number; paybackPeriod: number; npv: number } {
  const totalCost = implementationCost + (annualMaintenanceCost * years);
  const totalRevenue = additionalPatients * revenuePerPatient * years;
  const netProfit = totalRevenue - totalCost;
  const roi = (netProfit / totalCost) * 100;
  
  // Calculate payback period
  const annualRevenue = additionalPatients * revenuePerPatient;
  const paybackPeriod = implementationCost / (annualRevenue - annualMaintenanceCost);
  
  // Simple NPV calculation (assuming 7% discount rate)
  const discountRate = 0.07;
  let npv = -implementationCost;
  for (let year = 1; year <= years; year++) {
    const cashFlow = (additionalPatients * revenuePerPatient) - annualMaintenanceCost;
    npv += cashFlow / Math.pow(1 + discountRate, year);
  }
  
  return {
    roi: Math.round(roi * 10) / 10,
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    npv: Math.round(npv),
  };
}

// Time series forecasting using exponential smoothing
export function forecastExponentialSmoothing(
  historicalData: number[],
  periods: number,
  alpha: number = 0.3
): number[] {
  const forecast: number[] = [];
  let lastValue = historicalData[historicalData.length - 1];
  let lastSmoothed = historicalData[historicalData.length - 1];
  
  for (let i = 0; i < periods; i++) {
    const predicted = lastSmoothed + alpha * (lastValue - lastSmoothed);
    forecast.push(Math.round(predicted));
    lastValue = predicted;
    lastSmoothed = predicted;
  }
  
  return forecast;
}

// Competitive advantage score
export function calculateCompetitiveAdvantage(
  languageSupport: number,
  culturalCompetency: number,
  technologyAdoption: number,
  marketPresence: number
): { score: number; category: 'leader' | 'challenger' | 'follower' | 'niche' } {
  const score = (languageSupport * 0.35 + culturalCompetency * 0.25 + 
                 technologyAdoption * 0.25 + marketPresence * 0.15);
  
  let category: 'leader' | 'challenger' | 'follower' | 'niche';
  if (score >= 80) category = 'leader';
  else if (score >= 60) category = 'challenger';
  else if (score >= 40) category = 'follower';
  else category = 'niche';
  
  return { score: Math.round(score), category };
}

// Geographic coverage analysis
export function analyzeGeographicCoverage(
  locations: { lat: number; lng: number; radius: number }[],
  targetArea: number
): number {
  // Simplified coverage calculation
  const totalCoverage = locations.reduce((sum, loc) => {
    const area = Math.PI * Math.pow(loc.radius, 2);
    return sum + area;
  }, 0);
  
  return Math.min(100, (totalCoverage / targetArea) * 100);
}

// Patient journey friction score
export function calculateFrictionScore(
  languageBarrier: boolean,
  appointmentDifficulty: number,
  formComplexity: number,
  communicationGaps: number
): { score: number; severity: 'critical' | 'high' | 'medium' | 'low' } {
  let score = 0;
  
  if (languageBarrier) score += 40;
  score += appointmentDifficulty * 0.3;
  score += formComplexity * 0.2;
  score += communicationGaps * 0.5;
  
  let severity: 'critical' | 'high' | 'medium' | 'low';
  if (score >= 75) severity = 'critical';
  else if (score >= 50) severity = 'high';
  else if (score >= 25) severity = 'medium';
  else severity = 'low';
  
  return { score: Math.round(score), severity };
}
