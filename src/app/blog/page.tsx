import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo/metadata';
import { WANDA_ARTICLES } from '@/data/articles';
import { BreadcrumbsJsonLd } from '@/components/common/JsonLd';
import { UnderlineScribble, CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export const metadata: Metadata = constructMetadata({
  title: '万达云知识中心｜套餐分析、线路知识与网络使用教程',
  description:
    '万达云官方原创技术与服务博客，提供中转线路与专线解析、套餐流量规划、移动端分流配置以及网络测速科普。',
  canonicalUrl: '/blog',
});

export default function BlogIndexPage() {
  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '知识中心', url: '/blog' },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 顶部标题区 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-surface border border-electricCyan/30 text-xs font-mono text-electricCyan">
            <CoordinateCrosshair className="w-3.5 h-3.5" />
            <span>KNOWLEDGE HUB // 原创深度博文库</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-doodleWhite tracking-tight">
            万达云官方
            <span className="relative inline-block text-electricCyan ml-2">
              知识中心
              <UnderlineScribble className="absolute -bottom-2 left-0 w-full h-2.5 text-electricCyan" />
            </span>
          </h1>

          <p className="text-sm sm:text-base text-mutedText leading-relaxed pt-2">
            我们拒绝千篇一律的营销口号，坚持输出由工程团队编写的真实网络干货。从专线底层技术、流量精细化计算，到多终端排障实战。
          </p>
        </div>

        {/* 文章网格列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WANDA_ARTICLES.map((art, idx) => (
            <article
              key={art.slug}
              className="p-8 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow cosmic-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-mutedText mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-cosmic-card text-electricCyan border border-cosmic-border/60">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>{art.publishedAt}</span>
                    <span className="text-cosmic-border">•</span>
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-doodleWhite leading-snug hover:text-electricCyan transition-colors">
                  <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-mutedText mt-3 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>

                {/* 关键词标签 */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {art.keywords.slice(0, 4).map((kw, kIdx) => (
                    <span
                      key={kIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-cosmic-card/70 text-mutedText/80 border border-cosmic-border/40"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-cosmic-border/50 flex items-center justify-between text-xs">
                <span className="text-mutedText/70 font-mono">作者: {art.author}</span>
                <Link
                  href={`/blog/${art.slug}`}
                  className="font-bold text-electricCyan hover:text-doodleWhite transition-colors flex items-center gap-1 group"
                >
                  <span>阅读全文</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
