import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { WandaLogo, CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-cosmic-border/60 bg-cosmic-darkest/95 text-mutedText pt-16 pb-12 relative overflow-hidden">
      {/* 顶部微弱手绘星轨线装饰 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-electricCyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cosmic-border/40">
          {/* 品牌概览 */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block" aria-label="万达云官网首页">
              <WandaLogo className="w-9 h-9" />
            </Link>
            <p className="text-xs text-mutedText leading-relaxed">
              万达云（Wanda Cloud）第一方官方品牌网站。为个人开发者与团队提供透明、理性、清晰的网络连接方案与跨终端配置指引。
            </p>
            <div className="text-[11px] font-mono text-starlightPurple flex items-center gap-1.5 pt-1">
              <CoordinateCrosshair className="w-3.5 h-3.5 text-electricCyan" />
              <span>OFFICIAL DOMAIN // wandayun.rest</span>
            </div>
          </div>

          {/* 核心服务 */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider text-doodleWhite uppercase mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-electricCyan" />
              服务与套餐
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNav.service.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-electricCyan transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 使用指南 */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider text-doodleWhite uppercase mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-starlightYellow" />
              配置与支持
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNav.guides.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-starlightYellow transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 合规与政策 */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider text-doodleWhite uppercase mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-starlightPurple" />
              品牌合规
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNav.compliance.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-starlightPurple transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部声明栏：明确无第三方推广、第一方品牌运营声明 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mutedText/70 gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p>© {currentYear} 万达云 Wanda Cloud (wandayun.rest). 保留所有权利。</p>
            <p className="text-[11px] text-mutedText/50">
              声明：本站为由站长授权代表的万达云官方网站。不提供第三方推广合作，不做竞品评测排行榜。
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-electricCyan">TLS 1.3 SECURE</span>
            <span className="text-mutedText/40">|</span>
            <span>BING INDEX COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
