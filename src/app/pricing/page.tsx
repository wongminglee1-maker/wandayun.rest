import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { PlanComparator } from '@/components/pricing/PlanComparator';
import { PlanConstellation } from '@/components/pricing/PlanConstellation';
import { BreadcrumbsJsonLd, VerifiedProductsJsonLd } from '@/components/common/JsonLd';
import { UnderlineScribble, CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export const metadata: Metadata = constructMetadata({
  title: '万达云套餐价格｜流量方案、订阅周期与费用说明',
  description:
    '万达云套餐价格明细，涵盖150GB至1200GB全中转与全专线方案、月付与年付周期对比，透明展示已核实基准费用与设备限制。',
  canonicalUrl: '/pricing',
});

export default function PricingPage() {
  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '套餐价格', url: '/pricing' },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <VerifiedProductsJsonLd />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 顶部标题区 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-surface border border-electricCyan/30 text-xs font-mono text-electricCyan">
            <CoordinateCrosshair className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING MATRIX // 透明价格矩阵</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-doodleWhite tracking-tight">
            万达云套餐价格与
            <span className="relative inline-block text-electricCyan ml-2">
              订阅方案
              <UnderlineScribble className="absolute -bottom-2 left-0 w-full h-2.5 text-electricCyan" />
            </span>
          </h1>

          <p className="text-sm sm:text-base text-mutedText leading-relaxed pt-2">
            我们为不同规模的数据传输需求提供清晰透明的计费方案。从 150GB 的日常轻度使用，到 1200GB 的企业级全专线互联，拒绝隐藏套路与模糊消费。
          </p>
        </div>

        {/* 交互式套餐星图 */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-starlightPurple uppercase tracking-wider mb-2">
            <span>ORBIT SELECTOR // 星轨方案选择器</span>
          </div>
          <PlanConstellation />
        </div>

        {/* 完整套餐多周期对比器 */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-starlightYellow uppercase tracking-wider mb-2">
            <span>DETAILED COMPARATOR // 多周期详细比对</span>
          </div>
          <PlanComparator />
        </div>

        {/* 订购核心须知与退款合规说明 */}
        <div className="p-6 sm:p-8 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow text-xs sm:text-sm text-mutedText space-y-4">
          <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electricCyan" />
            万达云服务订购须知与事实边界说明
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/50 space-y-1">
              <span className="font-semibold text-doodleWhite block">① 周期续费与重置包机制</span>
              <p>
                用户在控制台续费，是将当前套餐的有效到期日往后追加一个周期，不会提前清零已用尽的当月流量。若当月流量提前耗尽，请在控制台选购临时重置包恢复。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/50 space-y-1">
              <span className="font-semibold text-doodleWhite block">② 速率指标与环境差异</span>
              <p>
                宣传峰值速率（如 1000Mbps、1500Mbps）为万达云服务器出口接入能力。在实际使用中，测速结果受本地 WiFi 信号、运营商骨干网跨网负载及目标网站限速影响。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
