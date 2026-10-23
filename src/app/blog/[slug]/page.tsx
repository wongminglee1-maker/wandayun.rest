import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WANDA_ARTICLES } from '@/data/articles';
import { constructMetadata } from '@/lib/seo/metadata';
import { BreadcrumbsJsonLd, ArticleJsonLd } from '@/components/common/JsonLd';
import { MarkdownRenderer } from '@/components/common/MarkdownRenderer';
import { CoordinateCrosshair, HandDrawnArrow } from '@/components/doodles/DoodleIcons';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return WANDA_ARTICLES.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = WANDA_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return constructMetadata({
    title: `${article.title} - 万达云知识中心`,
    description: article.summary,
    canonicalUrl: `/blog/${article.slug}`,
    keywords: article.keywords,
  });
}

export default function ArticleDetailPage({ params }: Props) {
  const article = WANDA_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '知识中心', url: '/blog' },
    { name: article.title, url: `/blog/${article.slug}` },
  ];

  // 推荐相关阅读 (取其他分类的博文)
  const relatedArticles = WANDA_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="w-full py-12 sm:py-16">
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <ArticleJsonLd article={article} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 返回博客列表 */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-mutedText hover:text-electricCyan transition-colors"
          >
            <span>←</span>
            <span>返回知识中心索引</span>
          </Link>
        </div>

        {/* 文章头部元数据 */}
        <header className="space-y-4 pb-8 border-b border-cosmic-border/60">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-cosmic-card text-electricCyan border border-cosmic-border">
              {article.category}
            </span>
            <span className="text-mutedText">发布于 {article.publishedAt}</span>
            <span className="text-mutedText/50">•</span>
            <span className="text-mutedText">更新于 {article.updatedAt}</span>
            <span className="text-mutedText/50">•</span>
            <span className="text-starlightYellow">{article.readTime}阅读</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-doodleWhite leading-tight tracking-tight">
            {article.title}
          </h1>

          <div className="p-4 rounded-xl bg-cosmic-surface border border-cosmic-border/70 text-xs sm:text-sm text-mutedText leading-relaxed">
            <span className="font-semibold text-doodleWhite block mb-1">
              ✦ 内容摘要与阅读目标：
            </span>
            {article.summary}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-mutedText/80 font-mono">
            <span>编写组：{article.author}</span>
            <div className="flex flex-wrap gap-1.5">
              {article.keywords.map((kw, i) => (
                <span key={i} className="text-electricCyan/80">
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* 正文渲染 */}
        <article className="prose prose-invert max-w-none text-mutedText">
          <MarkdownRenderer content={article.content} />
        </article>

        {/* 底部版权与防假声明 */}
        <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border text-xs text-mutedText space-y-2">
          <div className="font-bold text-doodleWhite flex items-center gap-1.5">
            <CoordinateCrosshair className="w-3.5 h-3.5 text-electricCyan" />
            <span>万达云第一方品牌原创文档声明</span>
          </div>
          <p>
            本文由万达云（Wanda Cloud）官方技术与产品团队撰写并维护，版权归属于 wandayun.rest 官方所有。任何未经验证的第三方商业转载或镜像改写均属于非官方行为。
          </p>
        </div>

        {/* 相关推荐阅读 */}
        <div className="pt-8 border-t border-cosmic-border/60 space-y-6">
          <h2 className="text-lg font-bold text-doodleWhite flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-starlightPurple" />
            拓展探索 · 相关推荐指南
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-5 rounded-2xl bg-cosmic-surface/60 border border-cosmic-border hover:border-electricCyan/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-electricCyan block mb-1">
                    {rel.category}
                  </span>
                  <h3 className="text-xs font-bold text-doodleWhite group-hover:text-electricCyan transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
                <div className="mt-3 text-[11px] font-mono text-mutedText/70 flex items-center gap-1 pt-2 border-t border-cosmic-border/30">
                  <span>阅读全文</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
