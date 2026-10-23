import React from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ActionModalProvider } from '@/components/common/DisabledActionModal';
import { WebSiteJsonLd } from '@/components/common/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: '万达云官网｜套餐价格、VPN服务与使用指南 - Wanda Cloud',
  description:
    '万达云 Wanda Cloud 品牌网站，提供网络连接服务介绍、150GB至1200GB套餐信息、流量选择指南、客户端使用说明以及常见连接问题解答。查看已确认的服务规则与最新套餐信息。',
  canonicalUrl: '/',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-cosmic-darkest text-doodleWhite antialiased selection:bg-electricCyan/20 selection:text-electricCyan">
        <WebSiteJsonLd />
        <ActionModalProvider>
          {/* 页面主导航 */}
          <Navbar />

          {/* 核心内容区 */}
          <main className="flex-grow flex flex-col">
            {children}
          </main>

          {/* 页脚 */}
          <Footer />
        </ActionModalProvider>
      </body>
    </html>
  );
}
