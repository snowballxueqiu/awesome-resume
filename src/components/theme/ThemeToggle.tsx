'use client';

import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun, IconFileExport } from '@tabler/icons-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const [exporting, setExporting] = useState(false);

  const handleExportPDF = async () => {
    if (exporting) return;
    setExporting(true);

    try {
      const container = document.getElementById('resume-container');
      if (!container) return;

      const doc = new jsPDF('p', 'mm', 'a4');
      const canvas = await html2canvas(container, {
        scale: 3,
        useCORS: true,
        logging: false,
        scrollX: 0,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
        allowTaint: true,
        letterRendering: true,
        dpi: 300,
        scale: window.devicePixelRatio * 2,
        ignoreElements: (element) => element.tagName === 'IFRAME'
      });

      const imgData = canvas.toDataURL('image/png');
      const imgWidth = doc.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // 计算需要多少页
      const pageHeight = doc.internal.pageSize.getHeight();
      let heightLeft = imgHeight;
      let position = 0;

      // 第一页
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // 剩余页
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save('resume.pdf');
    } catch (error) {
      console.error('导出失败:', error);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="flex gap-2">
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        {computedColorScheme === 'light' ? (
          <IconMoon style={{ width: '70%', height: '70%' }} stroke={1.5} />
        ) : (
          <IconSun style={{ width: '70%', height: '70%' }} stroke={1.5} />
        )}
      </ActionIcon>

      <ActionIcon
        onClick={handleExportPDF}
        variant="default"
        size="xl"
        aria-label="Export to PDF"
      >
        <IconFileExport style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
    </div>
  );
}