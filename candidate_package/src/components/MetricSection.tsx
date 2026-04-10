import React from 'react';
import { MetricSection as MetricSectionType } from '../types/section.types';

interface MetricSectionProps {
  data: MetricSectionType;
}

// ============================================================
// NOVA SEÇÃO: METRIC (Requisito #3)
// ============================================================
// Exibe um par label + valor, com estilo visual simples.
// O design é clean e pode ser facilmente customizado depois.
export default function MetricSection({ data }: MetricSectionProps) {
  // Tratamento de erro: fallback para valores ausentes
  const label = data.label || 'Metric';
  const value = data.value !== undefined && data.value !== null ? data.value : '—';
  
  return (
    <div style={{ 
      margin: '8px 0', 
      padding: '8px', 
      backgroundColor: '#f5f5f5', 
      borderRadius: '4px' 
    }}>
      <span style={{ fontWeight: 'bold' }}>{label}:</span>
      <span style={{ marginLeft: '8px' }}>{value}</span>
    </div>
  );
}