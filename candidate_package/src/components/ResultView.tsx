import React from 'react';

interface Section {
  type: string;
  content?: string;
  items?: string[];
  label?: string;
  value?: string | number;
}

interface ResultViewProps {
  data: {
    title: string;
    sections: Section[];
  };
}

export default function ResultView({ data }: ResultViewProps) {
  if (!data || !data.title) {
    return <div>Unable to load content</div>;
  }

  const sections = Array.isArray(data.sections) ? data.sections : [];

  const renderSection = (section: Section, idx: number) => {
    switch (section.type) {
      case 'text':
        return <p key={idx}>{section.content}</p>;
      case 'list':
        return (
          <ul key={idx}>
            {section.items?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      case 'highlight':
        return <strong key={idx}>{section.content}</strong>;
      case 'metric':
        return (
          <div key={idx} style={{ margin: '8px 0', padding: '8px', background: '#f5f5f5' }}>
            <strong>{section.label}:</strong> {section.value}
          </div>
        );
      default:
        return <div key={idx}>Unknown section type: {section.type}</div>;
    }
  };

  return (
    <div>
      <h1>{data.title}</h1>
      {sections.map(renderSection)}
    </div>
  );
}