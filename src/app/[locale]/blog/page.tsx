import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allPosts } from 'content-collections';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: {
    locale: string;
  };
};

export default async function BlogListPage({ params }: Props) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const posts = allPosts.filter((post) => post.locale === locale);

  const t = await getTranslations('Translations.categories.Blog');
  return (
    <div className="max-w-5xl mx-auto mt-24 mb-48 px-4 py-12">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">{t('heading', { defaultMessage: 'Blog' })}</h1>
        <p className="text-lg text-gray-600">{t('subheading', { defaultMessage: 'Latest posts' })}</p>
      </header>
      <main>
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post._meta.path} className="border-t border-gray-200 pt-10">
              <div className="flex flex-col md:flex-row gap-24 justify-start items-start">
                <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1 transform scale-90">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={200}
                      height={100}
                      className="w-full h-auto rounded-lg"
                    />
                  )}
                </div>
                <div className="w-full md:w-2/3 order-1 md:order-2">
                  <div className="flex items-center text-gray-500 mb-4">
                    <span>{post.readingDuration ?? 'N/A'}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(post.categories ?? []).map((category, index) => (
                      <span key={category} className="text-sm font-medium text-primaryBlue">
                        {category}
                        {index < (post.categories?.length ?? 0) - 1 && (
                          <span className="ml-2 mr-2 text-gray-300">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <Link
                    href={`/${locale}/blog/${post._meta.path.split('/')[1]}`}
                    className="inline-flex items-center text-primaryBlue hover:font-bold"
                  >
                    {t('readMore', { defaultMessage: 'Read more →' })}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}