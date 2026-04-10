import React from 'react';
import { HighlightSection as HighlightSectionType } from '../types/section.types';

interface HighlightSectionProps {
  data: HighlightSectionType;
}

// ============================================================
// COMPONENTE DE SEÇÃO DESTAQUE (Requisito #6)
// ============================================================
export default function HighlightSection({ data }: HighlightSectionProps) {
  // Tratamento de erro: se content for vazio, não renderiza
  if (!data.content || data.content.trim() === '') {
    return null;
  }
  return <strong>{data.content}</strong>;
}