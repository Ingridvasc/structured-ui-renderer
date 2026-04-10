import React from 'react';
import { ListSection as ListSectionType } from '../types/section.types';

interface ListSectionProps {
  data: ListSectionType;
}

// ============================================================
// COMPONENTE DE SEÇÃO LISTA (Requisito #6)
// ============================================================
export default function ListSection({ data }: ListSectionProps) {
  // Tratamento de erro: se items não for array (veio null/undefined), usamos array vazio
  const items = Array.isArray(data.items) ? data.items : [];
  
  if (items.length === 0) {
    return null;  // não renderiza lista vazia
  }
  
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}