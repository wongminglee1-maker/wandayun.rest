import React from 'react';
import Link from 'next/link';
import { RingedPlanetDoodle, HandDrawnArrow, CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow relative">
        <div className="flex justify-center">
          <RingedPlanetDoodle className="w-16 h-16 text-electricCyan animate-bounce" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono text-starlightPurple uppercase tracking-widest flex items-center justify-center gap-1.5">
            <CoordinateCrosshair className="w-3.5 h-3.5" />
            <span>404 // DEEP SPACE DRIFT</span>
          </div>
          <h1 className="text-3xl font-extrabold text-doodleWhite">
            宇宙坐标未找到
          </h1>
          <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
            您探索的星图路径似乎脱离了已知轨道，或该页面已被迁移至新的空间节点。
          </p>
        </div>

        <div className="p-3 rounded-xl bg-cosmic-card border border-cosmic-border/50 text-[11px] font-mono text-mutedText/80">
          STATUS: HTTP 404 NOT FOUND // TARGET UNREACHABLE
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs bg-electricCyan text-cosmic-darkest hover:bg-electricCyan/90 transition-all flex items-center justify-center gap-1.5"
          >
            <span>返回官网首页</span>
            <HandDrawnArrow className="w-3.5 h-3.5 text-cosmic-darkest" />
          </Link>
          <Link
            href="/guide"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-medium text-xs bg-cosmic-surface text-doodleWhite border border-cosmic-border hover:border-electricCyan transition-all"
          >
            查阅使用指南
          </Link>
        </div>
      </div>
    </div>
  );
}
