import React from 'react';

interface UnknownSectionProps {
  data: { type?: string };
}

// ============================================================
// FALLBACK PARA TIPOS DESCONHECIDOS (Requisito #4)
// ============================================================
// Se o registry não encontrar um componente para o tipo,
// este componente é renderizado. Isso evita crash e informa o usuário.
export default function UnknownSection({ data }: UnknownSectionProps) {
  return (
    <div style={{ color: '#999', fontStyle: 'italic', padding: '4px 0' }}>
      ⚠️ Unsupported section type: {data?.type || 'unknown'}
    </div>
  );
}