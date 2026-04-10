// ============================================================
// TIPOS DAS SEÇÕES
// ============================================================
// Cada tipo de seção tem sua própria interface.
// Isso garante type safety e evita campos opcionais desnecessários.
// O union type `Section` é usado para validar arrays de seções.

export type TextSection = {
  type: 'text';           // discriminador para identificar o tipo
  content: string;        // conteúdo textual da seção
};

export type ListSection = {
  type: 'list';
  items: string[];        // array de strings para a lista
};

export type HighlightSection = {
  type: 'highlight';
  content: string;
};

// ============================================================
// NOVA SEÇÃO: METRIC (Requisito #3)
// ============================================================
// Adicionada conforme solicitado. Suporta label e value,
// sendo value do tipo string ou number para flexibilidade.
export type MetricSection = {
  type: 'metric';
  label: string;
  value: string | number;
};

// Union type de todas as seções possíveis
export type Section = TextSection | ListSection | HighlightSection | MetricSection;

// Payload completo recebido pela API/componente pai
export type DataPayload = {
  title: string;
  sections: Section[];
};