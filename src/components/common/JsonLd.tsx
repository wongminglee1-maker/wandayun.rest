import React from 'react';
import { siteConfig } from '@/config/site';
import { WANDA_PLANS } from '@/data/plans';
import { Article } from '@/data/articles';

/** WebSite 搜索实体结构化数据 */
export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.brandName,
    alternateName: siteConfig.englishName,
    url: siteConfig.siteUrl,
    description: siteConfig.shortDescription,
    inLanguage: 'zh-CN',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** 面包屑结构化数据 */
export function BreadcrumbsJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** 文章结构化数据 */
export function ArticleJsonLd({ article }: { article: Article }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    url: `${siteConfig.siteUrl}/blog/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/blog/${article.slug}`,
    },
    inLanguage: 'zh-CN',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** 套餐结构化数据（严格限制：仅对 verified === true 的方案输出 Product / Offer） */
export function VerifiedProductsJsonLd() {
  const verifiedPlans = WANDA_PLANS.filter((p) => p.verified);

  const schemas = verifiedPlans.map((plan) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${siteConfig.brandName} - ${plan.name}`,
    description: plan.tagline,
    brand: {
      '@type': 'Brand',
      name: siteConfig.brandName,
    },
    offers: {
      '@type': 'Offer',
      price: plan.baseMonthlyPrice.toFixed(2),
      priceCurrency: 'CNY',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.siteUrl}/pricing`,
      priceValidUntil: '2027-12-31',
    },
  }));

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
