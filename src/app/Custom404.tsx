// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-4xl font-bold text-gray-800 mt-4">Oops! Lost in the Lab?</h1>
      <p className="text-lg text-gray-600 mt-2">
        It seems you've stumbled upon a page that's still under development... or maybe it's just gone missing like a rogue Viking longboat.
      </p>
      <p className="text-lg text-gray-600 mt-2">
      Don't worry, we're not lost like the recipe for Swedish meatballs without potatoes. 
      </p>
      <p className="text-lg text-gray-600 mt-2">
      We're working on getting things back on track. In the meantime...
      </p>

      <Link href="/" className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Back to the Workshop
      </Link>

      <p className="text-lg text-gray-600 mt-4">
        Or, if you need some inspiration while you wait... how about some ABBA?
      </p>
      <Link href="https://open.spotify.com/artist/0LcJLqbBmaguU1xlIracnL" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Listen to ABBA on Spotify
      </Link>
    </div>
  );
}