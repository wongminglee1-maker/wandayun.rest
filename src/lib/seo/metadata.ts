import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function constructMetadata({
  title,
  description,
  canonicalUrl,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = canonicalUrl
    ? canonicalUrl.startsWith('http')
      ? canonicalUrl
      : `${siteConfig.siteUrl}${canonicalUrl}`
    : siteConfig.siteUrl;

  const finalKeywords = keywords && keywords.length > 0 ? keywords : siteConfig.keywords;

  return {
    title,
    description,
    keywords: finalKeywords,
    authors: [{ name: siteConfig.brandName, url: siteConfig.siteUrl }],
    creator: siteConfig.brandName,
    publisher: siteConfig.brandName,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: url,
    },
    icons: {
      icon: [
        { url: '/logo.svg', type: 'image/svg+xml' },
        { url: '/logo.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/logo.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url,
      title,
      description,
      siteName: `${siteConfig.brandName} - ${siteConfig.englishName}`,
      images: [
        {
          url: '/logo.png',
          width: 500,
          height: 500,
          alt: `${siteConfig.brandName} 官方标志`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.png'],
    },
  };
}
