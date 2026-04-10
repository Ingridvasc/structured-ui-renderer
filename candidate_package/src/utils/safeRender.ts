// ============================================================
// UTILITÁRIOS DE SEGURANÇA (Requisito #4)
// ============================================================
// Funções auxiliares para validação de dados.
// Evita repetição de lógica de validação nos componentes.

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isArray = <T>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

export const hasValidContent = (content: unknown): boolean => {
  return isString(content) && content.trim() !== '';
};