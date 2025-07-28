// Utility to export a DOM node as PDF using html2pdf.js
// Usage: exportAsPDF(document.getElementById('content'))
import html2pdf from 'html2pdf.js';

export function exportAsPDF(element, options = {}) {
  if (!element) return;
  
  const defaultOptions = {
    margin: 10,
    filename: 'aj_villalobos_ruby_on_rails_developer_resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['css', 'legacy'] },
  };
  
  // Merge options but ensure filename is always set correctly
  const finalOptions = {
    ...defaultOptions,
    ...options,
    filename: 'aj_villalobos_ruby_on_rails_developer_resume.pdf'
  };
  
  html2pdf().set(finalOptions).from(element).save();
}