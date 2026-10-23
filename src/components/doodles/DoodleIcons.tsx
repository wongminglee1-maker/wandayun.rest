import React from 'react';

/**
 * 原创手绘涂鸦 × 数字宇宙 SVG 矢量视觉套件
 * 彻底杜绝通用模板图标，纯手工矢量几何与手绘笔触
 */

export function WandaLogo({ className = 'w-8 h-8', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className={`relative ${className} flex items-center justify-center shrink-0`}>
        {/* 微弱手绘星轨光晕背景 */}
        <div className="absolute -inset-1 rounded-full bg-electricCyan/20 blur-sm pointer-events-none" />
        <img
          src="/logo.png"
          alt="万达云 Wanda Cloud 官方标志"
          className="w-full h-full object-contain relative z-10 rounded-full"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-bold text-lg tracking-wider text-doodleWhite flex items-center gap-1.5 leading-none">
            万达云
            <span className="text-[10px] font-mono tracking-widest text-electricCyan uppercase border border-electricCyan/30 px-1 py-0.5 rounded">
              Wanda Cloud
            </span>
          </span>
          <span className="text-[10px] text-mutedText tracking-widest font-mono mt-0.5">
            wandayun.rest
          </span>
        </div>
      )}
    </div>
  );
}

/** 手绘强调下划波浪线 */
export function UnderlineScribble({ className = 'w-24 h-3 text-electricCyan' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 7C22 2 45 10 68 5C85 1.5 102 9 118 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="doodle-stroke"
      />
    </svg>
  );
}

/** 手绘指示箭头 */
export function HandDrawnArrow({ className = 'w-6 h-6 text-starlightYellow' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 16C12 14 18 15 26 16M26 16L19 10M26 16L20 22"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="doodle-stroke"
      />
    </svg>
  );
}

/** 宇宙星际坐标刻度十字 */
export function CoordinateCrosshair({ className = 'w-5 h-5 text-starlightPurple/60' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** 手绘星光闪烁标志 */
export function StarSparkle({ className = 'w-4 h-4 text-starlightYellow' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
    </svg>
  );
}

/** 手绘带环星球图标 */
export function RingedPlanetDoodle({ className = 'w-8 h-8 text-electricCyan' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="10" stroke="#F4F1E8" strokeWidth="2" className="doodle-stroke" />
      <ellipse
        cx="20"
        cy="20"
        rx="18"
        ry="6"
        transform="rotate(-20 20 20)"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeDasharray="4 2"
        className="doodle-stroke"
      />
      <circle cx="16" cy="16" r="2" fill="#F7D675" />
    </svg>
  );
}
