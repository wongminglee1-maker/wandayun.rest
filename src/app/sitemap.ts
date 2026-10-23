import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { WANDA_ARTICLES } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  // 核心静态页面及其真实修改维护时间
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: '2026-10-23',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: '2026-10-23',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: '2026-10-23',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: '2026-10-23',
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: '2026-10-23',
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: '2026-10-23',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2026-10-23',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: '2026-10-23',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: '2026-10-23',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // 7 篇深度原创博客文章
  const articleRoutes: MetadataRoute.Sitemap = WANDA_ARTICLES.map((art) => ({
    url: `${baseUrl}/blog/${art.slug}`,
    lastModified: art.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
