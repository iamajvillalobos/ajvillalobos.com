// Utility to export a DOM node as PDF using html2pdf.js
// Usage: exportAsPDF(document.getElementById('content'))

export async function exportAsPDF(element, options = {}) {
  if (!element) return;
  
  try {
    // Dynamic import to avoid build-time issues
    const { default: html2pdf } = await import('html2pdf.js');
    
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
  } catch (error) {
    console.error('Failed to load html2pdf:', error);
    // Fallback to CDN version
    await loadHtml2PdfFromCDN();
    const finalOptions = {
      margin: 10,
      filename: 'aj_villalobos_ruby_on_rails_developer_resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] },
      ...options,
      filename: 'aj_villalobos_ruby_on_rails_developer_resume.pdf'
    };
    window.html2pdf().set(finalOptions).from(element).save();
  }
}

// Fallback CDN loader
const loadHtml2PdfFromCDN = () => {
  return new Promise((resolve, reject) => {
    if (window.html2pdf) {
      resolve(window.html2pdf);
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = () => resolve(window.html2pdf);
    script.onerror = reject;
    document.head.appendChild(script);
  });
};