import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { BreadcrumbsJsonLd } from '@/components/common/JsonLd';
import { UnderlineScribble, CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export const metadata: Metadata = constructMetadata({
  title: '隐私政策｜万达云 Wanda Cloud',
  description:
    '万达云隐私保护声明，承诺最小化数据采集、不审计用户通信内容、保护个人数字资产安全。',
  canonicalUrl: '/privacy',
});

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '隐私政策', url: '/privacy' },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 顶部标题区 */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-surface border border-electricCyan/30 text-xs font-mono text-electricCyan">
            <CoordinateCrosshair className="w-3.5 h-3.5" />
            <span>COMPLIANCE & PRIVACY // 隐私保护准则</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-doodleWhite tracking-tight">
            万达云
            <span className="relative inline-block text-electricCyan ml-2">
              隐私政策
              <UnderlineScribble className="absolute -bottom-2 left-0 w-full h-2.5 text-electricCyan" />
            </span>
          </h1>

          <p className="text-xs font-mono text-mutedText">
            最后修订与生效日期：2026年10月23日 · 适用于 wandayun.rest 全站与服务
          </p>
        </div>

        {/* 政策正文 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow space-y-8 text-xs sm:text-sm text-mutedText leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electricCyan" />
              一、引言与数据最小化承诺
            </h2>
            <p>
              万达云（以下简称“本服务”或“我们”）深知个人隐私对于网络用户的重要性。本隐私政策旨在向您说明本网站（wandayun.rest）及万达云网络中继服务如何收集、处理和保护您的信息。我们郑重承诺严格贯彻<strong>数据最小化原则（Data Minimization）</strong>，仅采集维持基本账户身份和网络计费所必须的最少数据。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-starlightPurple" />
              二、我们绝不收集的信息
            </h2>
            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/60 text-xs space-y-1.5">
              <p>• <strong>不记录通信内容</strong>：我们绝不监控、解析或留存用户通过加密隧道传输的任何网页访问明文、即时通讯内容或文件传输；</p>
              <p>• <strong>不记录目标日志</strong>：我们不建立用户账号与具体访问的目标网址（DNS 解析历史）之间的关联日志；</p>
              <p>• <strong>不主动收集硬件设备隐私</strong>：客户端配置不索取用户的手机通讯录、短信、相册或物理定位权限。</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-starlightYellow" />
              三、我们收集的有限必要信息
            </h2>
            <p>为了保障系统的基本账务结算与节点调度，我们仅在以下范围内记录基本元数据：</p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li><strong>账户凭证</strong>：注册时填写的合法电子邮箱地址以及经强哈希算法（如 Bcrypt/Argon2）加密后的密码摘要；</li>
              <li><strong>计费元数据</strong>：您的套餐类型、剩余流量、有效到期时间以及订购历史；</li>
              <li><strong>连接活跃数</strong>：用于校验同时在线设备数量是否超出套餐上限的临时心跳状态（不存储长期历史）。</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              四、安全防护与数据保存期限
            </h2>
            <p>
              我们采用现代行业标准的安全传输层协议（TLS 1.3）对全站及控制台交互进行加密传输。您的密码等核心凭证均以不可逆的散列形式保存。当您选择注销或终止账户时，相关的计费状态数据将依法依规执行安全抹除。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400" />
              五、政策更新与联系方式
            </h2>
            <p>
              随着网络技术的演进与法规要求的变化，本政策可能会适时修订并在本页面公示更新日期。若您对个人数据安全有任何疑问，请通过官方公布的正式支持渠道与我们联系。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
