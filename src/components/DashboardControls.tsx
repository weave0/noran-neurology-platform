'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Download, RefreshCw, Calendar, Target, TrendingUp } from 'lucide-react';
import { useExport } from '@/lib/export';
import { marketSegments } from '@/data/advanced-analytics';

interface DashboardControlsProps {
  onTimeRangeChange?: (range: TimeRange) => void;
  onMetricFilterChange?: (metrics: string[]) => void;
  onExport?: (format: ExportFormat) => void;
  onRefresh?: () => void;
}

export type TimeRange = '1M' | '3M' | '6M' | '1Y' | '3Y' | '5Y' | 'ALL';
export type ExportFormat = 'pdf' | 'csv' | 'xlsx' | 'json';

const timeRanges: { value: TimeRange; label: string }[] = [
  { value: '1M', label: '1 Month' },
  { value: '3M', label: '3 Months' },
  { value: '6M', label: '6 Months' },
  { value: '1Y', label: '1 Year' },
  { value: '3Y', label: '3 Years' },
  { value: '5Y', label: '5 Years' },
  { value: 'ALL', label: 'All Time' },
];

const metricFilters = [
  { value: 'population', label: 'Population', icon: Target },
  { value: 'growth', label: 'Growth Rate', icon: TrendingUp },
  { value: 'revenue', label: 'Revenue', icon: TrendingUp },
  { value: 'roi', label: 'ROI', icon: TrendingUp },
  { value: 'market', label: 'Market Share', icon: Target },
  { value: 'language', label: 'Languages', icon: Target },
];

const exportFormats: { value: ExportFormat; label: string }[] = [
  { value: 'pdf', label: 'PDF Report' },
  { value: 'csv', label: 'CSV Data' },
  { value: 'xlsx', label: 'Excel Spreadsheet' },
  { value: 'json', label: 'JSON Data' },
];

export function DashboardControls({
  onTimeRangeChange,
  onMetricFilterChange,
  onExport,
  onRefresh,
}: DashboardControlsProps) {
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>('5Y');
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(['population', 'growth', 'revenue', 'roi']);
  const [showFilters, setShowFilters] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { exportData, isExporting } = useExport();

  const handleTimeRangeChange = (range: TimeRange) => {
    setSelectedTimeRange(range);
    onTimeRangeChange?.(range);
  };

  const handleMetricToggle = (metric: string) => {
    const newMetrics = selectedMetrics.includes(metric)
      ? selectedMetrics.filter((m) => m !== metric)
      : [...selectedMetrics, metric];
    setSelectedMetrics(newMetrics);
    onMetricFilterChange?.(newMetrics);
  };

  const handleExport = async (format: ExportFormat) => {
    const exportPayload = {
      title: 'Noran Neurology Globalization Analytics',
      summary: {
        totalPopulation: 3700000,
        foreignBorn: 490000,
        lepPopulation: 135000,
        marketOpportunity: 14500,
        projectedRevenue: 21.0,
        roi: 674,
      },
      marketSegments: marketSegments.map(seg => ({
        name: seg.name,
        population: seg.population,
        roi: seg.roi,
        growthRate: seg.growthRate,
      })),
    };
    
    await exportData(exportPayload, format);
    onExport?.(format);
    setShowExport(false);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefresh?.();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 mb-8 border border-white/10"
    >
      <div className="flex flex-wrap gap-4 items-center justify-between">
        {/* Time Range Selector */}
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-300" />
          <span className="text-sm text-gray-300 mr-2">Time Range:</span>
          <div className="flex gap-1 bg-black/30 rounded-lg p-1">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => handleTimeRangeChange(range.value)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  selectedTimeRange === range.value
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Metric Filters */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 rounded-lg text-sm font-medium text-purple-200 transition-all"
            >
              <Filter className="w-4 h-4" />
              Filters ({selectedMetrics.length})
            </button>
            
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute right-0 mt-2 w-64 glass rounded-xl p-4 border border-white/10 shadow-2xl z-50"
              >
                <h3 className="text-sm font-semibold text-white mb-3">Metric Filters</h3>
                <div className="space-y-2">
                  {metricFilters.map((filter) => {
                    const Icon = filter.icon;
                    return (
                      <label
                        key={filter.value}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedMetrics.includes(filter.value)}
                          onChange={() => handleMetricToggle(filter.value)}
                          className="w-4 h-4 rounded border-white/30 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <Icon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{filter.label}</span>
                      </label>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>

          {/* Export Button */}
          <div className="relative">
            <button
              onClick={() => setShowExport(!showExport)}
              disabled={isExporting}
              className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 rounded-lg text-sm font-medium text-green-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className={`w-4 h-4 ${isExporting ? 'animate-pulse' : ''}`} />
              {isExporting ? 'Exporting...' : 'Export'}
            </button>
            
            {showExport && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 glass rounded-xl p-2 border border-white/10 shadow-2xl z-50"
              >
                {exportFormats.map((format) => (
                  <button
                    key={format.value}
                    onClick={() => handleExport(format.value)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-gray-300 transition-colors"
                  >
                    {format.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-lg text-sm font-medium text-blue-200 transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {/* Active Filters Display */}
      {selectedMetrics.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 pt-4 border-t border-white/10"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-400">Active Metrics:</span>
            {selectedMetrics.map((metric) => {
              const filter = metricFilters.find((f) => f.value === metric);
              return (
                <span
                  key={metric}
                  className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-200"
                >
                  {filter?.label}
                </span>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
