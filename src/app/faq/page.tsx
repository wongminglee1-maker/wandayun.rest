import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { FaqClientView } from '@/components/faq/FaqClientView';

export const metadata: Metadata = constructMetadata({
  title: '万达云常见问题｜套餐订阅、客户端与连接异常',
  description:
    '汇总解答万达云用户关心的核心问题，包括套餐续费与重置包区别、客户端平台支持、节点速度影响因素与连接排查。',
  canonicalUrl: '/faq',
});

export default function FaqPage() {
  return <FaqClientView />;
}
