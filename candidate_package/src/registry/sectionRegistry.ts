// ============================================================
// REGISTRY DE COMPONENTES (Requisito #2 - Sistema extensível)
// ============================================================
// Este arquivo implementa o padrão Registry/Strategy.
// Ele mapeia um string (tipo da seção) para um componente React.
// 
// Vantagens sobre if/else ou switch:
// 1. Novo tipo de seção só precisa ser adicionado AQUI e criar o componente
// 2. Nenhuma modificação no código existente (Open/Closed Principle)
// 3. Fácil de testar (mock do registry)
// 4. Pode ser carregado dinamicamente (ex: do backend)

import React from 'react';
import TextSection from '../components/TextSection';
import ListSection from '../components/ListSection';
import HighlightSection from '../components/HighlightSection';
import MetricSection from '../components/MetricSection';
import UnknownSection from '../components/UnknownSection';

// Tipo do componente: recebe `data` (qualquer tipo de seção)
type SectionComponent = React.ComponentType<{ data: any }>;

// Registry: objeto que mapeia type → componente
export const sectionRegistry: Record<string, SectionComponent> = {
  text: TextSection,
  list: ListSection,
  highlight: HighlightSection,
  metric: MetricSection,  // <-- adicionado para o requisito #3
};

// ============================================================
// Função para obter o componente correto (Requisito #4 - Error handling)
// ============================================================
// Se o tipo não existir no registry, retorna UnknownSection (fallback)
// Isso garante que o app não quebra com tipos desconhecidos.
export const getSectionComponent = (type: string): SectionComponent => {
  return sectionRegistry[type] || UnknownSection;
};