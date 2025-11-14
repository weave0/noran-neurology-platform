'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, FileText, FileSpreadsheet, FileJson, Download, Loader2, CheckCircle } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export type ExportFormat = 'pdf' | 'csv' | 'xlsx' | 'json';

interface ExportData {
  title: string;
  summary: {
    totalPopulation: number;
    foreignBorn: number;
    lepPopulation: number;
    marketOpportunity: number;
    projectedRevenue: number;
    roi: number;
  };
  marketSegments?: any[];
  demographics?: any[];
  predictions?: any[];
  competitive?: any[];
}

interface ExportManagerProps {
  data: ExportData;
  format: ExportFormat;
  onComplete?: () => void;
}

export function ExportManager({ data, format, onComplete }: ExportManagerProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Title
    doc.setFontSize(20);
    doc.setTextColor(31, 41, 55);
    doc.text('Noran Neurology', pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(16);
    doc.text('Globalization Analytics Report', pageWidth / 2, 30, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(107, 114, 128);
    doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth / 2, 38, { align: 'center' });

    // Executive Summary
    doc.setFontSize(14);
    doc.setTextColor(31, 41, 55);
    doc.text('Executive Summary', 14, 50);
    
    const summaryData = [
      ['Total Population', data.summary.totalPopulation.toLocaleString()],
      ['Foreign-Born Population', data.summary.foreignBorn.toLocaleString()],
      ['LEP Population', data.summary.lepPopulation.toLocaleString()],
      ['Market Opportunity', `${data.summary.marketOpportunity.toLocaleString()} patients/year`],
      ['Projected Annual Revenue', `$${data.summary.projectedRevenue.toFixed(1)}M`],
      ['Year 1 ROI', `${data.summary.roi}%`],
    ];

    autoTable(doc, {
      startY: 55,
      head: [['Metric', 'Value']],
      body: summaryData,
      theme: 'striped',
      headStyles: { fillColor: [59, 130, 246] },
    });

    // Market Segments
    if (data.marketSegments && data.marketSegments.length > 0) {
      const finalY = (doc as any).lastAutoTable.finalY || 55;
      doc.setFontSize(14);
      doc.text('Market Segments Analysis', 14, finalY + 15);
      
      const segmentData = data.marketSegments.map((seg: any) => [
        seg.name,
        seg.population.toLocaleString(),
        `${seg.roi}%`,
        `${seg.growthRate}%`,
      ]);

      autoTable(doc, {
        startY: finalY + 20,
        head: [['Segment', 'Population', 'ROI', 'Growth Rate']],
        body: segmentData,
        theme: 'striped',
        headStyles: { fillColor: [59, 130, 246] },
      });
    }

    // Data Sources
    doc.addPage();
    doc.setFontSize(14);
    doc.text('Data Sources & Methodology', 14, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(55, 65, 81);
    const sources = [
      'US Census Bureau - Metropolitan statistical area demographics',
      'Minnesota Compass - Regional diversity indices and immigrant growth rates',
      'Migration Policy Institute - Country-of-origin data and LEP statistics',
      'Minnesota Department of Health - Healthcare access barriers and coverage rates',
      'American Community Survey - ZIP code-level demographic estimates',
    ];
    
    let yPos = 30;
    sources.forEach((source) => {
      doc.text(`• ${source}`, 14, yPos);
      yPos += 7;
    });

    // Footer
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(156, 163, 175);
      doc.text(
        `Page ${i} of ${pageCount} | Noran Neurology Globalization Analytics | Confidential`,
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 10,
        { align: 'center' }
      );
    }

    doc.save(`noran-neurology-analytics-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const generateCSV = () => {
    const rows = [
      ['Noran Neurology - Globalization Analytics Report'],
      [`Generated: ${new Date().toLocaleDateString()}`],
      [''],
      ['Executive Summary'],
      ['Metric', 'Value'],
      ['Total Population', data.summary.totalPopulation.toString()],
      ['Foreign-Born Population', data.summary.foreignBorn.toString()],
      ['LEP Population', data.summary.lepPopulation.toString()],
      ['Market Opportunity (patients/year)', data.summary.marketOpportunity.toString()],
      ['Projected Annual Revenue ($M)', data.summary.projectedRevenue.toString()],
      ['Year 1 ROI (%)', data.summary.roi.toString()],
      [''],
    ];

    if (data.marketSegments && data.marketSegments.length > 0) {
      rows.push(['Market Segments']);
      rows.push(['Segment', 'Population', 'ROI (%)', 'Growth Rate (%)']);
      data.marketSegments.forEach((seg: any) => {
        rows.push([seg.name, seg.population.toString(), seg.roi.toString(), seg.growthRate.toString()]);
      });
    }

    const csvContent = rows.map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `noran-neurology-analytics-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const generateJSON = () => {
    const jsonData = {
      title: data.title,
      generatedDate: new Date().toISOString(),
      executiveSummary: data.summary,
      marketSegments: data.marketSegments || [],
      demographics: data.demographics || [],
      predictions: data.predictions || [],
      competitive: data.competitive || [],
      dataSources: [
        'US Census Bureau',
        'Minnesota Compass',
        'Migration Policy Institute',
        'Minnesota Department of Health',
        'American Community Survey',
      ],
    };

    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `noran-neurology-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const handleExport = async () => {
    setIsExporting(true);
    setExportStatus('processing');

    try {
      // Simulate processing time for better UX
      await new Promise((resolve) => setTimeout(resolve, 800));

      switch (format) {
        case 'pdf':
          generatePDF();
          break;
        case 'csv':
          generateCSV();
          break;
        case 'json':
          generateJSON();
          break;
        case 'xlsx':
          // For now, fallback to CSV (could add xlsx library later)
          generateCSV();
          break;
      }

      setExportStatus('success');
      setTimeout(() => {
        setExportStatus('idle');
        setIsExporting(false);
        onComplete?.();
      }, 2000);
    } catch (error) {
      console.error('Export error:', error);
      setExportStatus('error');
      setTimeout(() => {
        setExportStatus('idle');
        setIsExporting(false);
      }, 2000);
    }
  };

  return null; // This component doesn't render UI, just handles exports
}

// Hook for using the export functionality
export function useExport() {
  const [isExporting, setIsExporting] = useState(false);

  const exportData = async (data: ExportData, format: ExportFormat) => {
    setIsExporting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      switch (format) {
        case 'pdf': {
          const doc = new jsPDF();
          const pageWidth = doc.internal.pageSize.getWidth();
          
          doc.setFontSize(20);
          doc.setTextColor(31, 41, 55);
          doc.text('Noran Neurology', pageWidth / 2, 20, { align: 'center' });
          
          doc.setFontSize(16);
          doc.text('Globalization Analytics Report', pageWidth / 2, 30, { align: 'center' });
          
          doc.setFontSize(10);
          doc.setTextColor(107, 114, 128);
          doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth / 2, 38, { align: 'center' });

          doc.setFontSize(14);
          doc.setTextColor(31, 41, 55);
          doc.text('Executive Summary', 14, 50);
          
          const summaryData = [
            ['Total Population', data.summary.totalPopulation.toLocaleString()],
            ['Foreign-Born Population', data.summary.foreignBorn.toLocaleString()],
            ['LEP Population', data.summary.lepPopulation.toLocaleString()],
            ['Market Opportunity', `${data.summary.marketOpportunity.toLocaleString()} patients/year`],
            ['Projected Annual Revenue', `$${data.summary.projectedRevenue.toFixed(1)}M`],
            ['Year 1 ROI', `${data.summary.roi}%`],
          ];

          autoTable(doc, {
            startY: 55,
            head: [['Metric', 'Value']],
            body: summaryData,
            theme: 'striped',
            headStyles: { fillColor: [59, 130, 246] },
          });

          if (data.marketSegments && data.marketSegments.length > 0) {
            const finalY = (doc as any).lastAutoTable.finalY || 55;
            doc.setFontSize(14);
            doc.text('Market Segments Analysis', 14, finalY + 15);
            
            const segmentData = data.marketSegments.map((seg: any) => [
              seg.name,
              seg.population.toLocaleString(),
              `${seg.roi}%`,
              `${seg.growthRate}%`,
            ]);

            autoTable(doc, {
              startY: finalY + 20,
              head: [['Segment', 'Population', 'ROI', 'Growth Rate']],
              body: segmentData,
              theme: 'striped',
              headStyles: { fillColor: [59, 130, 246] },
            });
          }

          doc.addPage();
          doc.setFontSize(14);
          doc.text('Data Sources & Methodology', 14, 20);
          
          doc.setFontSize(10);
          doc.setTextColor(55, 65, 81);
          const sources = [
            'US Census Bureau - Metropolitan statistical area demographics',
            'Minnesota Compass - Regional diversity indices',
            'Migration Policy Institute - LEP statistics',
            'Minnesota Department of Health - Healthcare access data',
            'American Community Survey - ZIP code demographics',
          ];
          
          let yPos = 30;
          sources.forEach((source) => {
            doc.text(`• ${source}`, 14, yPos);
            yPos += 7;
          });

          const pageCount = doc.getNumberOfPages();
          for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(156, 163, 175);
            doc.text(
              `Page ${i} of ${pageCount} | Noran Neurology Globalization Analytics | Confidential`,
              pageWidth / 2,
              doc.internal.pageSize.getHeight() - 10,
              { align: 'center' }
            );
          }

          doc.save(`noran-neurology-analytics-${new Date().toISOString().split('T')[0]}.pdf`);
          break;
        }
        case 'csv': {
          const rows = [
            ['Noran Neurology - Globalization Analytics Report'],
            [`Generated: ${new Date().toLocaleDateString()}`],
            [''],
            ['Executive Summary'],
            ['Metric', 'Value'],
            ['Total Population', data.summary.totalPopulation.toString()],
            ['Foreign-Born Population', data.summary.foreignBorn.toString()],
            ['LEP Population', data.summary.lepPopulation.toString()],
            ['Market Opportunity', data.summary.marketOpportunity.toString()],
            ['Revenue ($M)', data.summary.projectedRevenue.toString()],
            ['ROI (%)', data.summary.roi.toString()],
          ];

          const csvContent = rows.map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');
          const blob = new Blob([csvContent], { type: 'text/csv' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `noran-neurology-analytics-${new Date().toISOString().split('T')[0]}.csv`;
          link.click();
          break;
        }
        case 'json': {
          const jsonData = {
            title: data.title,
            generated: new Date().toISOString(),
            summary: data.summary,
            segments: data.marketSegments,
          };
          const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `noran-neurology-analytics-${new Date().toISOString().split('T')[0]}.json`;
          link.click();
          break;
        }
      }

      setIsExporting(false);
      return true;
    } catch (error) {
      console.error('Export failed:', error);
      setIsExporting(false);
      return false;
    }
  };

  return { exportData, isExporting };
}
