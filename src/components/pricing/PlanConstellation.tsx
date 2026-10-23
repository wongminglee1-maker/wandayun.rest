'use client';

import React, { useState } from 'react';
import { WANDA_PLANS, WandaPlan } from '@/data/plans';
import { RingedPlanetDoodle, CoordinateCrosshair, StarSparkle } from '@/components/doodles/DoodleIcons';
import { ConfigurableActionButton } from '@/components/common/DisabledActionModal';

export function PlanConstellation() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(WANDA_PLANS[1].id); // 默认选中 300GB 旗舰款
  const selectedPlan = WANDA_PLANS.find((p) => p.id === selectedPlanId) || WANDA_PLANS[0];

  // 轨道节点配置
  const orbitNodes = [
    { planId: 'plan-150gb', label: '150GB', orbitRadius: '110px', angle: 210, color: '#43DDE6' },
    { planId: 'plan-300gb', label: '300GB', orbitRadius: '170px', angle: 330, color: '#9674FF', highlight: true },
    { planId: 'plan-600gb', label: '600GB', orbitRadius: '230px', angle: 80, color: '#F7D675' },
    { planId: 'plan-1200gb', label: '1200GB', orbitRadius: '280px', angle: 150, color: '#43DDE6' },
  ];

  return (
    <div className="w-full my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* 左侧：手绘星图轨道交互区 */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-cosmic-surface/60 border border-cosmic-border relative overflow-hidden">
          <div className="text-center mb-4">
            <span className="text-xs font-mono text-electricCyan uppercase tracking-widest flex items-center justify-center gap-1.5">
              <CoordinateCrosshair className="w-3.5 h-3.5" />
              CONSTELLATION NAVIGATOR
            </span>
            <p className="text-xs text-mutedText mt-1">点击天体节点切换核准方案</p>
          </div>

          {/* 星球轨道可视化 */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center select-none">
            {/* 多重发光轨道环 */}
            <div className="absolute w-44 h-44 rounded-full border border-electricCyan/25 border-dashed animate-orbit-slow" />
            <div className="absolute w-60 h-60 rounded-full border border-starlightPurple/20 border-dotted" />
            <div className="absolute w-72 h-72 rounded-full border border-doodleWhite/15" />

            {/* 中心星核 */}
            <div className="w-20 h-20 rounded-full bg-cosmic-card border border-electricCyan flex flex-col items-center justify-center z-10 shadow-[0_0_20px_rgba(67,221,230,0.3)]">
              <RingedPlanetDoodle className="w-8 h-8 text-electricCyan animate-pulse-slow" />
              <span className="text-[10px] font-mono font-bold text-doodleWhite mt-0.5">WANDA</span>
            </div>

            {/* 环形分布的星球节点 */}
            {WANDA_PLANS.slice(0, 4).map((plan, index) => {
              const isSelected = selectedPlanId === plan.id;
              // 4个星球在轨道上的不同象限
              const positions = [
                { top: '15%', left: '15%' },
                { top: '12%', right: '15%' },
                { bottom: '15%', right: '18%' },
                { bottom: '18%', left: '15%' },
              ];
              const pos = positions[index];

              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  style={pos}
                  className={`absolute p-2.5 rounded-full flex flex-col items-center gap-1 transition-all z-20 group focus:outline-none ${
                    isSelected
                      ? 'scale-110 bg-cosmic-card border-2 border-electricCyan shadow-[0_0_16px_rgba(67,221,230,0.5)]'
                      : 'bg-cosmic-surface/90 border border-cosmic-border hover:border-starlightYellow hover:scale-105'
                  }`}
                  aria-label={`选择 ${plan.name}`}
                >
                  <div className="relative">
                    <span
                      className={`w-3.5 h-3.5 rounded-full block ${
                        index === 0
                          ? 'bg-electricCyan'
                          : index === 1
                          ? 'bg-starlightPurple'
                          : index === 2
                          ? 'bg-starlightYellow'
                          : 'bg-doodleWhite'
                      }`}
                    />
                    {isSelected && (
                      <span className="absolute -inset-1 rounded-full border border-electricCyan animate-ping opacity-75" />
                    )}
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold ${
                      isSelected ? 'text-electricCyan' : 'text-mutedText group-hover:text-doodleWhite'
                    }`}
                  >
                    {plan.monthlyTrafficGB}G
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-[11px] text-mutedText/80 font-mono mt-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-electricCyan" /> 150G 中转
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-starlightPurple" /> 300G 专线
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-starlightYellow" /> 600G+
            </span>
          </div>
        </div>

        {/* 右侧：所选星球方案的深度核准信息 */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow relative">
          {/* 状态徽章 */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-starlightPurple/15 text-starlightPurple border border-starlightPurple/30">
                {selectedPlan.networkType}
              </span>
              {selectedPlan.isPopular && (
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-starlightYellow/15 text-starlightYellow border border-starlightYellow/40 flex items-center gap-1">
                  <StarSparkle className="w-3 h-3" />
                  热门推荐
                </span>
              )}
            </div>

            {/* 核实状态标签 */}
            {selectedPlan.verified ? (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-1">
                ✓ 已核实基准 (2026-10-23)
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-500/30 flex items-center gap-1">
                ⏳ 待站长确认全部字段
              </span>
            )}
          </div>

          {/* 方案主标题与价格 */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-cosmic-border/60">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-doodleWhite">{selectedPlan.name}</h3>
              <p className="text-xs text-mutedText mt-1">{selectedPlan.tagline}</p>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono text-mutedText">候选基准月付</div>
              <div className="text-3xl font-bold font-mono text-electricCyan flex items-baseline">
                <span className="text-base text-electricCyan/80 mr-0.5">¥</span>
                {selectedPlan.baseMonthlyPrice.toFixed(2)}
                <span className="text-xs font-sans text-mutedText ml-1.5 font-normal">/ 月</span>
              </div>
            </div>
          </div>

          {/* 核心技术参数网格 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
            <div className="p-3 rounded-xl bg-cosmic-card border border-cosmic-border/50">
              <div className="text-[11px] text-mutedText">每月流量额度</div>
              <div className="text-base font-bold font-mono text-doodleWhite mt-0.5">
                {selectedPlan.monthlyTrafficGB} GB
              </div>
            </div>
            <div className="p-3 rounded-xl bg-cosmic-card border border-cosmic-border/50">
              <div className="text-[11px] text-mutedText">在线设备限制</div>
              <div className="text-sm font-semibold text-doodleWhite mt-0.5">
                {selectedPlan.deviceLimit ? `${selectedPlan.deviceLimit} 台设备` : '待核实'}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-cosmic-card border border-cosmic-border/50 col-span-2 sm:col-span-1">
              <div className="text-[11px] text-mutedText">网络速率指标</div>
              <div className="text-sm font-semibold text-doodleWhite mt-0.5">
                {selectedPlan.advertisedSpeed || '待核实'}
              </div>
            </div>
          </div>

          {/* 特性要点与服务限制 */}
          <div className="space-y-4 text-xs">
            <div>
              <h4 className="font-semibold text-doodleWhite mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electricCyan" />
                服务特性与技术优势
              </h4>
              <ul className="space-y-1.5 text-mutedText">
                {selectedPlan.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-electricCyan">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-amber-300 mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                理性使用限制说明
              </h4>
              <p className="text-mutedText leading-relaxed">
                {selectedPlan.restrictions[0]}
              </p>
            </div>
          </div>

          {/* 行动按钮 */}
          <div className="mt-6 pt-5 border-t border-cosmic-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-mutedText/70 font-mono">
              来源注解: {selectedPlan.sourceNote}
            </span>
            <ConfigurableActionButton
              actionType="subscribe"
              label={`订购 ${selectedPlan.monthlyTrafficGB}G 方案`}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs bg-electricCyan hover:bg-electricCyan/90 text-cosmic-darkest transition-all shadow-[0_0_20px_rgba(67,221,230,0.3)] text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
