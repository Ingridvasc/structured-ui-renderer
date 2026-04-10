import React from 'react';

type Section = {
  type: string;
  content?: string;
  items?: string[];
  label?: string;
  value?: string | number;
};

type DataPayload = {
  title: string;
  sections: Section[];
};

const TextSection = ({ content }: { content: string }) => <p>{content}</p>;
const ListSection = ({ items }: { items: string[] }) => (
  <ul>{items?.map((item, i) => <li key={i}>{item}</li>)}</ul>
);
const HighlightSection = ({ content }: { content: string }) => <strong>{content}</strong>;
const MetricSection = ({ label, value }: { label: string; value: string | number }) => (
  <div style={{ margin: '8px 0', padding: '8px', background: '#f5f5f5', borderRadius: '4px' }}>
    <strong>{label}:</strong> {value}
  </div>
);
const UnknownSection = ({ type }: { type: string }) => (
  <div style={{ color: '#999', fontStyle: 'italic' }}>⚠️ Unsupported section: {type}</div>
);

const sectionRegistry: Record<string, React.ComponentType<any>> = {
  text: TextSection,
  list: ListSection,
  highlight: HighlightSection,
  metric: MetricSection,
};

export default function ResultView({ data }: { data: DataPayload }) {
  if (!data?.title) return <div>Unable to load content</div>;

  const sections = Array.isArray(data.sections) ? data.sections : [];

  return (
    <div>
      <h1>{data.title}</h1>
      {sections.map((section, idx) => {
        const Component = sectionRegistry[section.type] || UnknownSection;
        return <Component key={idx} {...section} />;
      })}
    </div>
  );
}