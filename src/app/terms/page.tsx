import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { BreadcrumbsJsonLd } from '@/components/common/JsonLd';
import { UnderlineScribble, CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export const metadata: Metadata = constructMetadata({
  title: '服务条款｜万达云 Wanda Cloud',
  description:
    '万达云服务使用条款与合理使用规范，明确网络服务边界、禁止滥用行为与用户权责。',
  canonicalUrl: '/terms',
});

export default function TermsPage() {
  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '服务条款', url: '/terms' },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 顶部标题区 */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-surface border border-electricCyan/30 text-xs font-mono text-electricCyan">
            <CoordinateCrosshair className="w-3.5 h-3.5" />
            <span>TERMS OF SERVICE // 服务协议与权责规范</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-doodleWhite tracking-tight">
            万达云
            <span className="relative inline-block text-electricCyan ml-2">
              服务条款
              <UnderlineScribble className="absolute -bottom-2 left-0 w-full h-2.5 text-electricCyan" />
            </span>
          </h1>

          <p className="text-xs font-mono text-mutedText">
            最后修订与生效日期：2026年10月23日 · 适用于 wandayun.rest 全站与服务
          </p>
        </div>

        {/* 条款正文 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow space-y-8 text-xs sm:text-sm text-mutedText leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electricCyan" />
              一、协议接受与法律适用
            </h2>
            <p>
              欢迎使用万达云（Wanda Cloud，以下简称“本服务”）。当您访问本网站、注册账户或购买任何订阅方案时，即表示您已充分阅读并同意受本服务条款的约束。若您不同意本条款的任何内容，请立即停止访问并终止使用本服务。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-starlightPurple" />
              二、合理使用规范 (Fair Use Policy)
            </h2>
            <p>
              为了保障所有订阅用户的公共网络带宽资源不被极少数异常行为恶意透支，用户在使用中应当严格遵守以下合理使用规范：
            </p>
            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/60 text-xs space-y-1.5">
              <p>• <strong>严禁公共转售与账号共享</strong>：个人套餐仅限用户本人及其家庭/指定设备使用，严禁在网络论坛公开分享订阅直链或二次打包出租；</p>
              <p>• <strong>严禁网络攻击行为</strong>：严禁利用节点发起分布式拒绝服务攻击（DDoS）、端口扫描、暴力破解或漏洞探测；</p>
              <p>• <strong>严禁垃圾邮件与欺诈</strong>：严禁通过节点批量发送未经许可的商业垃圾邮件（SPAM）或从事任何网络钓鱼欺诈；</p>
              <p>• <strong>高并发 P2P/BT 限制</strong>：为了防止节点出口公网 IP 被版权机构连带投诉或触发服务商封锁，专线节点不建议进行大规模公网 BT/PT 种子长时间做种。</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-starlightYellow" />
              三、计费周期、到期与流量重置规则
            </h2>
            <p>用户需充分理解本服务采用的计费逻辑：</p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li><strong>周期性计费</strong>：月付、季付、半年付与年付按对应自然天数计算；</li>
              <li><strong>续费与重置包的区别</strong>：续费仅追加到期时间，不重置当月已耗尽的流量；如需当期立刻恢复，需选购临时重置包；</li>
              <li><strong>流量清零</strong>：每个周期未使用的结余流量不结转至下一周期。</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              四、免责声明与服务可用性边界
            </h2>
            <p>
              网络中继服务的物理传输严重依赖国际跨国海缆、两端电信运营商的互联互通质量以及不可抗力因素（包括但不限于自然灾害、海底地震造成的光缆中断、跨国骨干网临时维护等）。本服务在骨干段配置了冗余路由，但<strong>不对服务的 100% 绝对不中断作物理不可能的担保</strong>。因用户本地软硬件故障或目标网站自身宕机导致的访问不可达，不属于本服务的违约范围。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400" />
              五、服务终止与滥用处置
            </h2>
            <p>
              若用户存在严重违反本条款的滥用行为，万达云有权在无需事先通知的情况下暂停、限制或永久终止该账户的使用权限，且不承担任何由此产生的赔偿责任。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
