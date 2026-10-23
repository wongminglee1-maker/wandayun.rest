'use client';

import React, { useEffect, useState } from 'react';

/**
 * 手绘涂鸦 × 数字宇宙 品牌主视觉绘制动效
 * 页面加载时：
 * 1. 一条细线开始绘制多重倾斜天体轨道 (stroke-dasharray / stroke-dashoffset)
 * 2. 轨道连接多个发光星点坐标 (香港、新加坡、东京、洛杉矶、法兰克福等抽象节点)
 * 3. 星点逐渐交织成分布式加密传输网络
 * 4. 环状星轨环绕万达云核心标志
 */
export function HandDrawnHeroVisual() {
  const [mounted, setMounted] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 节点坐标定义 (代表全球核心加速枢纽)
  const nodes = [
    { id: 1, name: '中国香港 HKG', x: 280, y: 170, color: '#43DDE6', delay: '0.8s' },
    { id: 2, name: '日本东京 NRT', x: 380, y: 120, color: '#9674FF', delay: '1.1s' },
    { id: 3, name: '新加坡 SIN', x: 230, y: 260, color: '#F7D675', delay: '1.4s' },
    { id: 4, name: '美西洛杉矶 LAX', x: 440, y: 240, color: '#43DDE6', delay: '1.7s' },
    { id: 5, name: '德国法兰克福 FRA', x: 120, y: 190, color: '#9674FF', delay: '2.0s' },
    { id: 6, name: '伦敦 LHR', x: 150, y: 110, color: '#F7D675', delay: '2.3s' },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[16/11] flex items-center justify-center select-none">
      {/* 背景微弱深空星尘光晕 */}
      <div className="absolute inset-0 bg-radial-gradient from-starlightPurple/15 via-electricCyan/5 to-transparent blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 560 380"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 电光青渐变线 */}
          <linearGradient id="orbitCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43DDE6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#9674FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#43DDE6" stopOpacity="0.3" />
          </linearGradient>

          {/* 星轨紫渐变线 */}
          <linearGradient id="orbitPurpleGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9674FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F7D675" stopOpacity="0.4" />
          </linearGradient>

          {/* 节点光晕发光滤镜 */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. 宇宙天文经纬刻度辅助网格 (极度轻量) */}
        <g opacity="0.25" stroke="#9674FF" strokeWidth="0.8" strokeDasharray="3 4">
          <line x1="40" y1="190" x2="520" y2="190" />
          <line x1="280" y1="30" x2="280" y2="350" />
          <circle cx="280" cy="190" r="140" fill="none" />
        </g>

        {/* 2. 第一重手绘主星轨（大椭圆 - 逐步线描绘制） */}
        <ellipse
          cx="280"
          cy="190"
          rx="220"
          ry="95"
          transform="rotate(-18 280 190)"
          fill="none"
          stroke="url(#orbitCyanGrad)"
          strokeWidth="2.2"
          className={mounted ? 'animate-draw' : ''}
          strokeLinecap="round"
        />

        {/* 3. 第二重手绘反向交错星轨 */}
        <ellipse
          cx="280"
          cy="190"
          rx="195"
          ry="80"
          transform="rotate(22 280 190)"
          fill="none"
          stroke="url(#orbitPurpleGrad)"
          strokeWidth="1.8"
          strokeDasharray="6 3"
          className={mounted ? 'animate-draw-delayed' : ''}
          strokeLinecap="round"
        />

        {/* 4. 第三重精密近地轨道线 */}
        <circle
          cx="280"
          cy="190"
          r="65"
          fill="none"
          stroke="#F4F1E8"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          className={mounted ? 'animate-draw-slow' : ''}
          opacity="0.6"
        />

        {/* 5. 星点拓扑连接线（抽象网状专线拓扑） */}
        <g stroke="#43DDE6" strokeWidth="1.2" strokeOpacity="0.45" strokeDasharray="2 3">
          <line x1="150" y1="110" x2="280" y2="170" />
          <line x1="120" y1="190" x2="280" y2="170" />
          <line x1="280" y1="170" x2="380" y2="120" />
          <line x1="380" y1="120" x2="440" y2="240" />
          <line x1="280" y1="170" x2="230" y2="260" />
          <line x1="230" y1="260" x2="440" y2="240" />
          <line x1="120" y1="190" x2="230" y2="260" />
        </g>

        {/* 6. 核心万达云品牌枢纽 (中心星核) */}
        <g transform="translate(245, 155)">
          {/* 星核环形光晕 */}
          <circle cx="35" cy="35" r="32" fill="#10152D" stroke="#43DDE6" strokeWidth="2" filter="url(#neonGlow)" />
          {/* 官方万达云标志 */}
          <image
            href="/logo.png"
            x="13"
            y="13"
            width="44"
            height="44"
            preserveAspectRatio="xMidYMid meet"
          />
          {/* 星核指示中文字 */}
          <text
            x="35"
            y="64"
            textAnchor="middle"
            fill="#43DDE6"
            fontSize="7.5"
            fontFamily="monospace"
            letterSpacing="1.5"
          >
            WANDA CORE
          </text>
        </g>

        {/* 7. 全球分布式网络节点 */}
        {nodes.map((node) => {
          const isHovered = activeNode === node.id;
          return (
            <g
              key={node.id}
              className="cursor-pointer transition-transform duration-200"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              transform={`translate(${node.x}, ${node.y})`}
            >
              {/* 外圈呼吸光环 */}
              <circle
                cx="0"
                cy="0"
                r={isHovered ? 12 : 7}
                fill={node.color}
                fillOpacity={isHovered ? 0.35 : 0.15}
                className="transition-all duration-300"
              />
              {/* 核心实体星点 */}
              <circle
                cx="0"
                cy="0"
                r={isHovered ? 4.5 : 3}
                fill={node.color}
                stroke="#070B1B"
                strokeWidth="1.5"
                filter="url(#neonGlow)"
              />
              {/* 手绘节点外框十字光标 */}
              <path
                d="M-6 0H6M0 -6V6"
                stroke={node.color}
                strokeWidth="1"
                opacity={isHovered ? 1 : 0.6}
              />
              {/* 悬停信息气泡 */}
              <g
                className={`transition-opacity duration-200 ${
                  isHovered ? 'opacity-100' : 'opacity-80'
                }`}
              >
                <rect
                  x="-45"
                  y="-26"
                  width="90"
                  height="18"
                  rx="4"
                  fill="#10152D"
                  stroke={node.color}
                  strokeWidth="0.8"
                  strokeOpacity="0.7"
                />
                <text
                  x="0"
                  y="-14"
                  textAnchor="middle"
                  fill="#F4F1E8"
                  fontSize="8.5"
                  fontWeight="500"
                  fontFamily="system-ui, sans-serif"
                >
                  {node.name}
                </text>
              </g>
            </g>
          );
        })}

        {/* 8. 散落的手绘星座闪烁微星 */}
        <g fill="#F7D675" opacity="0.7">
          <circle cx="80" cy="80" r="1.5" className="animate-shimmer" />
          <circle cx="490" cy="70" r="1.2" className="animate-shimmer" />
          <circle cx="470" cy="320" r="1.8" className="animate-shimmer" />
          <circle cx="100" cy="310" r="1.3" className="animate-shimmer" />
          <circle cx="330" cy="50" r="1" />
          <circle cx="210" cy="340" r="1.4" />
        </g>

        {/* 手绘提示性文字与坐标标记 */}
        <text
          x="30"
          y="360"
          fill="#B8C2D6"
          fontSize="9"
          fontFamily="monospace"
          opacity="0.6"
        >
          SYS://LAT-22.3°N LON-114.1°E // GLOBAL MESH STATUS: READY
        </text>
      </svg>
    </div>
  );
}
