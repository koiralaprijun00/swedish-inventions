// app/page.tsx
import WordOfTheDay from "../[locale]/components/WordOfTheDay"; // Adjust path based on your folder structure

export default function Home() {
  return (
    <main>
      <WordOfTheDay />
    </main>
  );
}

export const revalidate = 3600; // Optional: Revalidate every hour for ISR