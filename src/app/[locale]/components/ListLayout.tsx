import React from 'react';
import InventionCard from './InventionCard';

type Invention = {
  id: string;
  name: string;
  inventorName?: string;
  year?: string;
  category?: string;
  description?: string;
};

type ListLayoutProps = {
  inventions: Invention[];
  locale: string;
  title?: string;
  description?: string;
};

const ListLayout = ({ inventions, locale, title = "Swedish Inventions", description }: ListLayoutProps) => {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          {title}
        </h1>
        {description && (
          <p style={{ fontSize: '0.875rem', color: '#555', marginTop: '0.25rem' }}>
            {description}
          </p>
        )}
      </header>

      <main>
        <div className="inv-grid">
          {inventions.map((invention) => (
            <InventionCard
              key={invention.id}
              name={invention.name}
              inventorName={invention.inventorName}
              year={invention.year}
              locale={locale}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ListLayout;