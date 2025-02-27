import React from 'react';
import ReactMarkdown from 'react-markdown';
import { allPosts } from 'content-collections';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Simplify the approach - use the exact structure Next.js/Vercel expects
export default async function SinglePostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;

  // Construct the expected path based on locale and slug
  const expectedPath = `${locale}/${slug}`;
  const post = allPosts.find((p) => p._meta.path === expectedPath && p.locale === locale);

  if (!post) {
    const t = await getTranslations('Translations.categories.Blog');
    return (
      <div className="max-w-3xl mx-auto my-24 px-4">
        <h1 className="text-3xl font-bold">{t('notFound', { defaultMessage: 'Post not found' })}</h1>
        <p>{t('notFoundMessage', { defaultMessage: 'We cannot find a blog post for this slug.' })}</p>
      </div>
    );
    // Alternatively: notFound();
  }

  return (
    <div className="max-w-3xl mx-auto my-24 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.summary}</p>
      <article className="prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}

// Add generateStaticParams for Vercel static generation
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    locale: post.locale,
    slug: post._meta.path.split('/')[1], // Adjust if your path structure differs
  }));
}