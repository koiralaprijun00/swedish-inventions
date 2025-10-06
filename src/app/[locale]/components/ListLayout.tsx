import React from 'react';
import InventionCard from './InventionCard';

type Invention = {
  id: string;
  name: string;
  imageSrc: string;
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
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-secondary max-w-3xl">
            {description}
          </p>
        )}
      </header>

      <main>
        <div className="space-y-1">
          {inventions.map((invention) => (
            <InventionCard
              key={invention.id}
              name={invention.name}
              imageSrc={invention.imageSrc}
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