import React from 'react';
import Image from 'next/image';

const ListLayout = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Release of Tailwind Next.js Starter Blog v2.0",
      readingDuration: "3 min read",
      excerpt: "Release of Tailwind Next.js Starter Blog template v2.0, refactored with Next.js App directory and React Server Components setup. Discover the new features and how to migrate from v1.",
      categories: ["NEXT-JS", "TAILWIND", "GUIDE", "FEATURE"],
      image: "/swedish-inventions-thumbnail.jpg"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto mt-24 mb-48 px-4 py-12">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-lg text-gray-600">  </p>
      </header>

      <main>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-t border-gray-200 pt-10">
              <div className="flex flex-col md:flex-row gap-24 justify-start items-start">
                {/* Image on the left side */}
                <div className="w-full md:w-1/3  flex-shrink-0 order-2 md:order-1 transform scale-90">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    width={200}
                    height={100}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Content on the right side */}
                <div className="w-full md:w-2/3 order-1 md:order-2">
                  <div className="flex items-center text-gray-500 mb-4">
                    <span>{post.readingDuration}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category, index) => (
                      <span key={category} className="text-sm font-medium text-pink-500">
                        {category}
                        {index < post.categories.length - 1 && (
                          <span className="ml-2 mr-2 text-gray-300">•</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  <a 
                    href="#" 
                    className="inline-flex items-center text-pink-500 hover:text-pink-600"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ListLayout;