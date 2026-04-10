import React from 'react';
import { TextSection as TextSectionType } from '../types/section.types';

interface TextSectionProps {
  data: TextSectionType;
}

// ============================================================
// COMPONENTE DE SEÇÃO TEXTO (Requisito #6)
// ============================================================
// Cada seção tem seu próprio componente dedicado.
// Isso evita o "god component" que faz tudo.
export default function TextSection({ data }: TextSectionProps) {
  // Tratamento de erro: se content for vazio, não renderiza nada
  if (!data.content || data.content.trim() === '') {
    return null;
  }
  return <p>{data.content}</p>;
}