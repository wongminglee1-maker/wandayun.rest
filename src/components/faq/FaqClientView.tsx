'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { WANDA_FAQS } from '@/data/faqs';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { BreadcrumbsJsonLd } from '@/components/common/JsonLd';
import { UnderlineScribble, CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export function FaqClientView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: '全部问题' },
    { key: 'about', label: '品牌与服务' },
    { key: 'plans', label: '套餐与流量' },
    { key: 'billing', label: '续费与周期' },
    { key: 'client', label: '客户端支持' },
    { key: 'network', label: '网络与排障' },
  ];

  const filteredFaqs = WANDA_FAQS.filter((faq) => {
    if (selectedCategory === 'all') return true;
    return faq.category === selectedCategory;
  });

  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '常见问题', url: '/faq' },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 顶部标题区 */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-surface border border-electricCyan/30 text-xs font-mono text-electricCyan">
            <CoordinateCrosshair className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE // 权威问答汇总</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-doodleWhite tracking-tight">
            万达云
            <span className="relative inline-block text-electricCyan ml-2">
              常见问题
              <UnderlineScribble className="absolute -bottom-2 left-0 w-full h-2.5 text-electricCyan" />
            </span>
          </h1>

          <p className="text-sm sm:text-base text-mutedText leading-relaxed pt-2">
            我们汇总了关于服务定位、套餐选购、多设备支持、计费机制及连接排查的真实常见疑问，帮您迅速建立对万达云的全面认知。
          </p>
        </div>

        {/* 分类切换器 */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-cosmic-surface/60 border border-cosmic-border">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-electricCyan text-cosmic-darkest font-bold shadow-[0_0_12px_rgba(67,221,230,0.3)]'
                    : 'text-mutedText hover:text-doodleWhite hover:bg-cosmic-card'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ 折叠组件 */}
        <div>
          <FaqAccordion items={filteredFaqs} />
        </div>

        {/* 未解决问题指引 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow text-center space-y-3">
          <h2 className="text-base font-bold text-doodleWhite">
            还有其他未解答的技术疑问？
          </h2>
          <p className="text-xs sm:text-sm text-mutedText max-w-xl mx-auto">
            您可以前往我们的 [知识中心](/blog) 查阅关于中转专线原理、Windows/移动端设置及流量精细化管理的 7 篇深度技术文档。
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/blog"
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-cosmic-card hover:bg-cosmic-card/80 text-electricCyan border border-electricCyan/40 transition-colors"
            >
              浏览深度博文库
            </Link>
            <Link
              href="/guide"
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-cosmic-card hover:bg-cosmic-card/80 text-starlightYellow border border-starlightYellow/40 transition-colors"
            >
              查阅设备配置指南
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
