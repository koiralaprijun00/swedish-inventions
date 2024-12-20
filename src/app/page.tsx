import React from 'react';
import inventionsData from "./inventionsData"
import Image from 'next/image';
import "./style.css"

// Define types for the Section component props
interface SectionProps {
  title: string;  // The title prop will be a string
  children: React.ReactNode;  // children can be any valid JSX content
}

// Define the prop types for InventionCard
interface InventionCardProps {
  name: string;
  description: string;
  imageSrc: string;
  link?: string;  // link is optional
}

export default function Home() {
  return (
    <div className="justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="text-start">
        <h1>Famous Swedish Inventions</h1>
        <p>Discovering Sweden&#39;s Contributions to the World</p>
      </header>

      {/* Main Content */}
      <main>
        {inventionsData.map((category, index) =>
          <Section key={index} title={category.category}>
            {category.items.map((item, idx) => <InventionCard key={idx} name={item.name} description={item.description} imageSrc={item.imageSrc} link={item.link} />)}
          </Section>
        )}
      </main>
    </div>
  )
}

// Section Component
function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>
      <div className="grid-container">
        {children}
      </div>
    </section>
  )
}

// InventionCard Component
function InventionCard({ name, description, imageSrc, link }: InventionCardProps) {
  return (
    <div className="invention-card">
      {/* Left Section: Image and Text */}
      <div className="invention-card-content">
      <Image
          src={imageSrc}
          alt={name}
          width={300} // Adjust the width based on your layout needs
          height={200} // Adjust the height as well
          className="rounded-md" // Optional: add some styling like border radius
        />
        <h3>
          {name}
        </h3>
        <p>
          {description}
        </p>
      </div>

      {/* Right Section: Wikipedia Logo Link */}
      {link &&
        <a href={link} target="_blank" rel="noopener noreferrer" className="wikipedia-link">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg" alt="Wikipedia" />
        </a>}
    </div>
  )
}
