'use client';

import React, { createContext, useContext, useState } from 'react';
import { siteConfig } from '@/config/site';

interface ActionModalContextType {
  openPendingModal: (actionName?: string) => void;
  closePendingModal: () => void;
}

const ActionModalContext = createContext<ActionModalContextType>({
  openPendingModal: () => {},
  closePendingModal: () => {},
});

export const useActionModal = () => useContext(ActionModalContext);

export function ActionModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState('订阅服务');

  const openPendingModal = (actionName = '订阅服务') => {
    setCurrentAction(actionName);
    setIsOpen(true);
  };

  const closePendingModal = () => {
    setIsOpen(false);
  };

  return (
    <ActionModalContext.Provider value={{ openPendingModal, closePendingModal }}>
      {children}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cosmic-darkest/80 backdrop-blur-sm"
          onClick={closePendingModal}
        >
          <div
            className="relative w-full max-w-md p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow text-doodleWhite"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 顶部手绘装饰点 */}
            <div className="flex items-center justify-between pb-3 border-b border-cosmic-border/50">
              <div className="flex items-center gap-2 text-electricCyan text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-electricCyan animate-pulse" />
                <span>万达云 · 官方服务提示</span>
              </div>
              <button
                type="button"
                onClick={closePendingModal}
                className="text-mutedText hover:text-doodleWhite text-lg leading-none p-1 rounded-md transition-colors"
                aria-label="关闭提示"
              >
                ✕
              </button>
            </div>

            {/* 弹窗主体内容 */}
            <div className="mt-4 space-y-3">
              <h3 className="text-lg font-bold text-doodleWhite flex items-center gap-2">
                <span>{currentAction}通道暂未对外开放</span>
              </h3>
              <p className="text-sm text-mutedText leading-relaxed">
                依据万达云官方第一方运营规范，生产环境的注册、在线下单及个人控制台接入链接当前处于系统配置阶段（配置变量暂时保持为安全空值）。
              </p>
              <div className="p-3 rounded-lg bg-cosmic-card border border-cosmic-border/60 text-xs text-mutedText space-y-1.5 font-sans">
                <div className="text-starlightYellow font-medium flex items-center gap-1.5">
                  <span>✦ 站长与用户须知：</span>
                </div>
                <div>• 本站不制造虚假注册成功或虚构付款流程；</div>
                <div>• 站长在后台配置正式业务链接后，全站按钮将自动联动；</div>
                <div>• 建议先阅读站内【使用指南】或【套餐价格】了解服务规则。</div>
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="mt-6 flex justify-end gap-3">
              <a
                href="/pricing"
                onClick={closePendingModal}
                className="px-4 py-2 text-xs rounded-lg border border-cosmic-border hover:border-electricCyan text-mutedText hover:text-doodleWhite transition-colors"
              >
                查看套餐详情
              </a>
              <button
                type="button"
                onClick={closePendingModal}
                className="px-4 py-2 text-xs rounded-lg bg-electricCyan/15 hover:bg-electricCyan/25 text-electricCyan border border-electricCyan/40 transition-colors font-medium"
              >
                我知道了
              </button>
            </div>
          </div>
        </div>
      )}
    </ActionModalContext.Provider>
  );
}

/** 通用订阅/注册按钮组件：当外部链接未配置时触发弹窗，配置后自动跳转 */
export function ConfigurableActionButton({
  actionType = 'register',
  label,
  className = '',
}: {
  actionType?: 'register' | 'login' | 'subscribe';
  label?: string;
  className?: string;
}) {
  const { openPendingModal } = useActionModal();

  let targetUrl: string | null = null;
  let defaultLabel = '立即订阅';

  if (actionType === 'register') {
    targetUrl = siteConfig.registrationUrl;
    defaultLabel = '注册 / 订购';
  } else if (actionType === 'login') {
    targetUrl = siteConfig.loginUrl;
    defaultLabel = '用户登录';
  } else {
    targetUrl = siteConfig.subscriptionUrl;
    defaultLabel = '选择此套餐';
  }

  const finalLabel = label || defaultLabel;

  if (targetUrl) {
    return (
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {finalLabel}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => openPendingModal(finalLabel)}
      className={`${className} cursor-pointer`}
      title="当前官方通道尚未配置外部直链，点击查看说明"
    >
      {finalLabel}
    </button>
  );
}
