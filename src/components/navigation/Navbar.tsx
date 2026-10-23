'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { WandaLogo } from '@/components/doodles/DoodleIcons';
import { ConfigurableActionButton } from '@/components/common/DisabledActionModal';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cosmic-border/60 bg-cosmic-darkest/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* 左侧 Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-electricCyan rounded-lg py-1 px-1.5"
          aria-label="万达云官网首页"
        >
          <WandaLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="主要导航">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors relative ${
                  isActive
                    ? 'text-electricCyan bg-cosmic-surface border border-cosmic-border'
                    : 'text-mutedText hover:text-doodleWhite hover:bg-cosmic-surface/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-electricCyan rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* 右侧行动区 */}
        <div className="hidden sm:flex items-center gap-3">
          <ConfigurableActionButton
            actionType="register"
            label="注册 / 订阅"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-electricCyan/15 hover:bg-electricCyan/25 text-electricCyan border border-electricCyan/50 hover:border-electricCyan transition-all shadow-[0_0_12px_rgba(67,221,230,0.15)]"
          />
        </div>

        {/* 移动端汉堡菜单按钮 */}
        <div className="flex sm:hidden items-center gap-2">
          <ConfigurableActionButton
            actionType="register"
            label="订阅"
            className="px-2.5 py-1 text-xs font-medium rounded bg-electricCyan/15 text-electricCyan border border-electricCyan/40"
          />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-mutedText hover:text-doodleWhite hover:bg-cosmic-surface focus:outline-none focus:ring-2 focus:ring-electricCyan"
            aria-expanded={mobileMenuOpen}
            aria-label="打开网站导航菜单"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 移动端抽屉菜单 */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-cosmic-border/60 bg-cosmic-surface/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          <div className="text-[11px] font-mono text-starlightPurple uppercase tracking-wider px-2 py-1">
            EXPLORE UNIVERSE // 导航
          </div>
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-electricCyan bg-cosmic-card border border-cosmic-border'
                    : 'text-mutedText hover:text-doodleWhite hover:bg-cosmic-card/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-electricCyan font-mono">CURRENT</span>}
                </div>
                {item.description && (
                  <p className="text-[11px] text-mutedText/80 mt-0.5 line-clamp-1">{item.description}</p>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
