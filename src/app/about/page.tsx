import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo/metadata';
import { BreadcrumbsJsonLd } from '@/components/common/JsonLd';
import { UnderlineScribble, CoordinateCrosshair, WandaLogo } from '@/components/doodles/DoodleIcons';

export const metadata: Metadata = constructMetadata({
  title: '关于万达云｜Wanda Cloud品牌服务介绍',
  description:
    '了解万达云 Wanda Cloud 的第一方品牌定位、运营原则、网络加速架构理念与服务边界说明。',
  canonicalUrl: '/about',
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '关于万达云', url: '/about' },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 顶部标题区 */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-surface border border-electricCyan/30 text-xs font-mono text-electricCyan">
            <CoordinateCrosshair className="w-3.5 h-3.5" />
            <span>BRAND PRINCIPLES // 品牌定位与原则</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-doodleWhite tracking-tight">
            关于万达云
            <span className="relative inline-block text-electricCyan ml-2">
              Wanda Cloud
              <UnderlineScribble className="absolute -bottom-2 left-0 w-full h-2.5 text-electricCyan" />
            </span>
          </h1>

          <p className="text-sm sm:text-base text-mutedText leading-relaxed pt-2">
            坚持严谨工程纪律与真实信息透明，为用户提供清晰理性的网络中继与多端互联服务。
          </p>
        </div>

        {/* 核心品牌卡片 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow space-y-6">
          <div className="flex items-center gap-4 border-b border-cosmic-border/60 pb-6">
            <WandaLogo className="w-12 h-12" showText={false} />
            <div>
              <h2 className="text-xl font-bold text-doodleWhite">万达云第一方品牌声明</h2>
              <span className="text-xs font-mono text-electricCyan">
                OFFICIAL ENTITY // wandayun.rest
              </span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-mutedText leading-relaxed">
            <p>
              万达云（Wanda Cloud）本官方网站（域名：<code className="text-electricCyan font-mono">https://wandayun.rest/</code>）是由站长授权代表的第一方品牌官方网站。我们的核心目标是为广大用户建立一个信息透明、没有虚假宣传、拒绝恶意加价与钓鱼软件的权威窗口。
            </p>
            <p>
              我们深知，长期以来网络连接服务市场充斥着夸大其词的“100% 永不断线”、“秒开 8K 零延迟”等反科学营销。万达云坚决不参与此类浮夸宣讲，亦不做第三方竞品排行或推广中介。我们只提供清晰的真实套餐参数、受行业审计的开源客户端指引以及客观的物理网络常识。
            </p>
          </div>
        </div>

        {/* 核心价值观与运营原则 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-electricCyan/15 border border-electricCyan/40 flex items-center justify-center text-electricCyan font-bold text-xs font-mono">
              01
            </div>
            <h3 className="text-base font-bold text-doodleWhite">隐私第一与数据最小化</h3>
            <p className="text-xs text-mutedText leading-relaxed">
              我们不记录用户通信的明文数据，不审计用户的访问内容。所有加密隧道均基于现代前向保密协议，保护用户的数字资产免受公网嗅探。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-starlightPurple/15 border border-starlightPurple/40 flex items-center justify-center text-starlightPurple font-bold text-xs font-mono">
              02
            </div>
            <h3 className="text-base font-bold text-doodleWhite">开源生态与安全接入</h3>
            <p className="text-xs text-mutedText leading-relaxed">
              我们拒绝闭源流氓软件包，全面兼容主流经过审计的开源客户端（如 Clash Verge Rev、Sing-box 等），绝不要求用户关闭安全杀毒软件。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-starlightYellow/15 border border-starlightYellow/40 flex items-center justify-center text-starlightYellow font-bold text-xs font-mono">
              03
            </div>
            <h3 className="text-base font-bold text-doodleWhite">透明资费与清晰规则</h3>
            <p className="text-xs text-mutedText leading-relaxed">
              明示中转线路与专线隧道的区别，明确设备在线上限与流量重置机制。严禁利用含糊条款诱导消费，让每一分支出都明明白白。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-400/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono">
              04
            </div>
            <h3 className="text-base font-bold text-doodleWhite">理性服务与责任边界</h3>
            <p className="text-xs text-mutedText leading-relaxed">
              清晰界定物理骨干网海缆维护对连接的影响，提供详实的工程师级排查漏斗，帮助用户在遇到网络波动时具备自主排错能力。
            </p>
          </div>
        </div>

        {/* 底部导航连接 */}
        <div className="p-6 rounded-2xl bg-cosmic-surface/60 border border-cosmic-border text-center space-y-4">
          <p className="text-xs text-mutedText">
            如果您希望进一步核对我们的法律合规政策与套餐明细，请访问：
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <Link href="/terms" className="text-electricCyan hover:underline">
              服务条款 (Terms)
            </Link>
            <span className="text-cosmic-border">•</span>
            <Link href="/privacy" className="text-electricCyan hover:underline">
              隐私政策 (Privacy)
            </Link>
            <span className="text-cosmic-border">•</span>
            <Link href="/pricing" className="text-electricCyan hover:underline">
              套餐价格与参数
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
