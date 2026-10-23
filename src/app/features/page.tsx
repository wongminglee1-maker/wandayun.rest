import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo/metadata';
import { BreadcrumbsJsonLd } from '@/components/common/JsonLd';
import { UnderlineScribble, CoordinateCrosshair, RingedPlanetDoodle, HandDrawnArrow } from '@/components/doodles/DoodleIcons';

export const metadata: Metadata = constructMetadata({
  title: '万达云服务特点｜网络架构、专线传输与安全边界 - Wanda Cloud',
  description:
    '深入解析万达云的核心技术架构特点，包括全中转线路、企业级专线隧道、多端设备并发管理与透明的服务边界说明。',
  canonicalUrl: '/features',
});

export default function FeaturesPage() {
  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '服务特点', url: '/features' },
  ];

  const features = [
    {
      code: '01',
      title: '多线 BGP 优质中继接入',
      tag: '中转技术',
      desc: '在国内多核心枢纽部署高速接入节点，自动智能探测电信、联通、移动、教育网等本地运营商路由，就近握手，极力压缩本地第一公里握手耗时。',
      points: ['消除跨运营商跨省绕路', '智能 DNS 入口解析分流', '高防数据中心冗余保障'],
    },
    {
      code: '02',
      title: '点对点企业级骨干专线隧道',
      tag: '专线网络',
      desc: '在 300GB 及以上高级方案中，采用端到端光纤内网专线互联，完全绕避公网国际海缆出口的晚高峰高丢包拥塞，为实时通讯与音视频提供极低网络抖动。',
      points: ['晚高峰（20:00-23:00）抗拥塞能力强', '物理抖动控制在极低水平', '丢包率通常稳定在 0.1% 以下'],
    },
    {
      code: '03',
      title: '标准通用协议与开源客户端支持',
      tag: '开放生态',
      desc: '坚守用户设备安全底线，不捆绑任何不透明的闭源第三方流氓程序。全面兼容 Clash Verge、Sing-box、Mihomo 等国际公认开源客户端，保护系统凭证与隐私。',
      points: ['跨平台支持 Windows/Android/iOS/macOS', '免除高危破解版软件后门隐患', '绝不要求关闭系统防火墙与杀毒软件'],
    },
    {
      code: '04',
      title: '智能规则分流与零流量损耗',
      tag: '规则引擎',
      desc: '支持预置完备的国内主流网站直连规则库。访问国内网银、外卖、视频与日常搜索直接走本地宽带，不消耗任何万达云套餐流量配额，亦不产生异地风控。',
      points: ['国内流量毫秒直连，零套餐损耗', '仅对特定跨境需求触发加密转发', '支持个人自定义域名白名单与黑名单'],
    },
    {
      code: '05',
      title: '全球核心区域落地节点集群',
      tag: '节点网络',
      desc: '节点覆盖中国香港、日本东京、新加坡、美西洛杉矶、英国伦敦、德国法兰克福等全球主要数字互联枢纽，原生支持主流学术文献检索、开源软件仓库与国际流媒体。',
      points: ['24+ 全球核心国家与地区布局', '智能负载均衡与健康状态自愈', '支持 IPv4 / IPv6 双栈网络调度'],
    },
    {
      code: '06',
      title: '透明可信的理性服务边界',
      tag: '工程态度',
      desc: '我们秉持严谨求实的工程态度，不宣传违反物理常识的“绝对100%稳定”。明确公示本地宽带、WiFi环境及海外目标服务器对实际体验的决定性影响。',
      points: ['真实界定服务责任与技术极限', '提供完整的工程师级分层排错文档', '无套路计费，拒绝终身买断陷阱'],
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 顶部标题 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-surface border border-electricCyan/30 text-xs font-mono text-electricCyan">
            <CoordinateCrosshair className="w-3.5 h-3.5" />
            <span>ARCHITECTURE // 网络架构与特点</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-doodleWhite tracking-tight">
            万达云核心
            <span className="relative inline-block text-electricCyan ml-2">
              服务特点
              <UnderlineScribble className="absolute -bottom-2 left-0 w-full h-2.5 text-electricCyan" />
            </span>
          </h1>

          <p className="text-sm sm:text-base text-mutedText leading-relaxed pt-2">
            从底层多线 BGP 接入、企业级骨干专线隧道，到开放透明的开源客户端规范。我们用真实可靠的工程实践，为您构建稳固的数字连接桥梁。
          </p>
        </div>

        {/* 特点卡片矩阵 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.code}
              className="p-8 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow cosmic-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cosmic-card text-electricCyan border border-cosmic-border/70">
                    {feat.tag}
                  </span>
                  <span className="text-2xl font-mono font-bold text-cosmic-border">
                    {feat.code}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-doodleWhite mb-3">{feat.title}</h2>
                <p className="text-xs sm:text-sm text-mutedText leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-cosmic-border/40 space-y-2 text-xs">
                {feat.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-mutedText/90">
                    <span className="text-electricCyan">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 底部 CTA 卡片 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cosmic-surface via-cosmic-card to-cosmic-surface border border-cosmic-border text-center space-y-6">
          <RingedPlanetDoodle className="w-12 h-12 text-electricCyan mx-auto" />
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-doodleWhite">
              准备好开始您的探索了吗？
            </h3>
            <p className="text-xs sm:text-sm text-mutedText">
              查看透明的套餐价格与周期规则，或直接阅读我们为 Windows、Android 与 iOS 设备编写的快速配置指南。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-6 py-2.5 rounded-xl font-bold text-xs bg-electricCyan text-cosmic-darkest hover:bg-electricCyan/90 transition-all shadow-[0_0_16px_rgba(67,221,230,0.3)]"
            >
              浏览套餐价格
            </Link>
            <Link
              href="/guide"
              className="px-6 py-2.5 rounded-xl font-medium text-xs bg-cosmic-surface text-doodleWhite border border-cosmic-border hover:border-electricCyan/60 transition-all"
            >
              阅读使用指南
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
