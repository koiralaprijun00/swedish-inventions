import React from 'react';
import ReactMarkdown from 'react-markdown';
import { allPosts } from 'content-collections';
import { getTranslations } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function SinglePostPage(props: Props) {
  const params = await props.params;
  const { locale, slug } = params;

  // Construct the expected path based on locale and slug
  const expectedPath = `${locale}/${slug}`;
  const post = allPosts.find((p) => p._meta.path === expectedPath && p.locale === locale);

  if (!post) {
    const t = await getTranslations('Translations.categories.Blog');
    return (
      <div className="max-w-3xl mx-auto my-24 px-4">
        <h1 className="text-3xl font-bold">{t('notFound', { defaultMessage: 'Post not found' })}</h1>
        <p>{t('notFoundMessage', { defaultMessage: 'We couldn’t find a blog post for this slug.' })}</p>
      </div>
    );
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