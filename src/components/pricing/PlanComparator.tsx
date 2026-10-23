'use client';

import React, { useState } from 'react';
import { WANDA_PLANS, BillingCycleKey, WandaPlan } from '@/data/plans';
import { ConfigurableActionButton } from '@/components/common/DisabledActionModal';
import { StarSparkle, CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export function PlanComparator() {
  const [selectedCycle, setSelectedCycle] = useState<BillingCycleKey>('monthly');
  const [filterType, setFilterType] = useState<'all' | 'verified' | 'dedicated'>('all');

  const cycleLabels: { key: BillingCycleKey; label: string; note: string }[] = [
    { key: 'monthly', label: '按月支付', note: '官方核对基准单价' },
    { key: 'quarterly', label: '按季支付 (3个月)', note: '候选周期折扣' },
    { key: 'half_year', label: '半年支付 (6个月)', note: '进阶周期折扣' },
    { key: 'yearly', label: '按年支付 (12个月)', note: '长期使用等效单价' },
  ];

  // 过滤方案
  const filteredPlans = WANDA_PLANS.filter((plan) => {
    if (filterType === 'verified') return plan.verified;
    if (filterType === 'dedicated') return plan.networkType.includes('专线');
    return true;
  });

  return (
    <div className="w-full space-y-8">
      {/* 顶部控制栏：周期切换与方案类型筛选 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-cosmic-surface/80 border border-cosmic-border">
        {/* 付款周期切换 */}
        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="付款周期选择">
          {cycleLabels.map((c) => {
            const isSelected = selectedCycle === c.key;
            return (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCycle(c.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-electricCyan text-cosmic-darkest font-bold shadow-[0_0_12px_rgba(67,221,230,0.3)]'
                    : 'text-mutedText hover:text-doodleWhite hover:bg-cosmic-card'
                }`}
              >
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* 方案类型筛选 */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-mutedText/70 font-mono">筛选：</span>
          <button
            type="button"
            onClick={() => setFilterType('all')}
            className={`px-2.5 py-1 rounded-lg border transition-colors ${
              filterType === 'all'
                ? 'border-starlightPurple text-starlightPurple bg-starlightPurple/10'
                : 'border-cosmic-border/60 text-mutedText hover:text-doodleWhite'
            }`}
          >
            全部方案 ({WANDA_PLANS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType('verified')}
            className={`px-2.5 py-1 rounded-lg border transition-colors ${
              filterType === 'verified'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-950/30'
                : 'border-cosmic-border/60 text-mutedText hover:text-doodleWhite'
            }`}
          >
            已核准方案
          </button>
          <button
            type="button"
            onClick={() => setFilterType('dedicated')}
            className={`px-2.5 py-1 rounded-lg border transition-colors ${
              filterType === 'dedicated'
                ? 'border-starlightYellow text-starlightYellow bg-starlightYellow/10'
                : 'border-cosmic-border/60 text-mutedText hover:text-doodleWhite'
            }`}
          >
            仅专线高速
          </button>
        </div>
      </div>

      {/* 方案网格卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => {
          // 查找对应周期的价格选项
          const currentOption = plan.billingOptions.find((opt) => opt.cycleKey === selectedCycle) ||
            plan.billingOptions[0];

          return (
            <div
              key={plan.id}
              className={`rounded-2xl bg-cosmic-surface border transition-all flex flex-col justify-between relative overflow-hidden p-6 cosmic-card-shadow ${
                plan.isPopular
                  ? 'border-starlightPurple ring-1 ring-starlightPurple/40'
                  : 'border-cosmic-border hover:border-electricCyan/50'
              }`}
            >
              {/* 顶部标签 */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cosmic-card text-electricCyan border border-cosmic-border/70">
                    {plan.networkType}
                  </span>
                  {plan.isPopular && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-starlightYellow/15 text-starlightYellow border border-starlightYellow/30 flex items-center gap-1">
                      <StarSparkle className="w-2.5 h-2.5" />
                      推荐款
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-doodleWhite">{plan.name}</h3>
                <p className="text-xs text-mutedText mt-1 line-clamp-2">{plan.tagline}</p>

                {/* 价格显示区 */}
                <div className="my-5 p-4 rounded-xl bg-cosmic-card/70 border border-cosmic-border/50">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-mutedText font-mono">
                      {currentOption.cycleName} 实付：
                    </span>
                    <div className="text-2xl font-bold font-mono text-electricCyan">
                      <span className="text-sm mr-0.5">¥</span>
                      {currentOption.totalPrice.toFixed(2)}
                    </div>
                  </div>

                  {currentOption.months > 1 && (
                    <div className="flex items-baseline justify-between pt-2 mt-2 border-t border-cosmic-border/40 text-xs text-mutedText">
                      <span>折算月均：</span>
                      <span className="font-mono text-starlightYellow font-medium">
                        ¥{currentOption.monthlyEquivalentPrice.toFixed(2)} / 月
                      </span>
                    </div>
                  )}

                  {!currentOption.verified && (
                    <div className="mt-2 pt-1 text-[11px] font-mono text-amber-400/90">
                      * 周期折让金额为候选参考，以控制台结算为准
                    </div>
                  )}
                </div>

                {/* 核心规格清单 */}
                <div className="space-y-2.5 text-xs pb-6">
                  <div className="flex items-center justify-between border-b border-cosmic-border/30 pb-1.5">
                    <span className="text-mutedText">每月流量额度</span>
                    <span className="font-mono font-bold text-doodleWhite">
                      {plan.monthlyTrafficGB} GB
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-cosmic-border/30 pb-1.5">
                    <span className="text-mutedText">在线设备上限</span>
                    <span className="text-doodleWhite font-medium">
                      {plan.deviceLimitText}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-cosmic-border/30 pb-1.5">
                    <span className="text-mutedText">接入速率指标</span>
                    <span className="text-doodleWhite font-medium">
                      {plan.advertisedSpeedText}
                    </span>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-medium text-electricCyan block mb-1">
                      适合场景：
                    </span>
                    <p className="text-[11px] text-mutedText leading-relaxed">
                      {plan.suitableFor}
                    </p>
                  </div>
                </div>
              </div>

              {/* 底部按钮与核验状态 */}
              <div className="pt-4 border-t border-cosmic-border/50 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  {plan.verified ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      ● 已核验基准方案
                    </span>
                  ) : (
                    <span className="text-amber-400 flex items-center gap-1">
                      ○ 待站长确认全部细节
                    </span>
                  )}
                  <span className="text-mutedText/60">wandayun.rest</span>
                </div>

                <ConfigurableActionButton
                  actionType="subscribe"
                  label="订购此方案"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-electricCyan/15 hover:bg-electricCyan text-electricCyan hover:text-cosmic-darkest border border-electricCyan/40 hover:border-electricCyan transition-all text-center block"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 补充合规说明 */}
      <div className="p-4 rounded-xl bg-cosmic-surface/40 border border-cosmic-border/40 text-xs text-mutedText/80 space-y-1">
        <p className="font-semibold text-doodleWhite flex items-center gap-1.5">
          <CoordinateCrosshair className="w-3.5 h-3.5 text-electricCyan" />
          万达云透明定价与服务规则声明：
        </p>
        <p>
          1. 所有套餐的月度流量按自然计费周期结算。续费仅顺延服务到期日，不提前重置当月已用流量；如需当月提前恢复流量，请在控制台选购临时重置包。
        </p>
        <p>
          2. 季付、半年付与年付的价格以官方控制台最终上架确认金额为准，本站杜绝任何形式的虚构打折陷阱。
        </p>
      </div>
    </div>
  );
}
