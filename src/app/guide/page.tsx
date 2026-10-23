import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo/metadata';
import { BreadcrumbsJsonLd } from '@/components/common/JsonLd';
import { UnderlineScribble, CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export const metadata: Metadata = constructMetadata({
  title: '万达云使用指南｜Windows、Android与iOS设备连接帮助',
  description:
    '万达云跨平台客户端配置指引，提供Windows、Android与iOS设备安全连接方法、订阅更新步骤及常见网络故障排查。',
  canonicalUrl: '/guide',
});

export default function GuidePage() {
  const breadcrumbs = [
    { name: '首页', url: '/' },
    { name: '使用指南', url: '/guide' },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 顶部标题区 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-surface border border-electricCyan/30 text-xs font-mono text-electricCyan">
            <CoordinateCrosshair className="w-3.5 h-3.5" />
            <span>SETUP & CLIENT PROTOCOLS // 客户端安全配置</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-doodleWhite tracking-tight">
            万达云跨平台
            <span className="relative inline-block text-electricCyan ml-2">
              使用指南
              <UnderlineScribble className="absolute -bottom-2 left-0 w-full h-2.5 text-electricCyan" />
            </span>
          </h1>

          <p className="text-sm sm:text-base text-mutedText leading-relaxed pt-2">
            为不同操作系统量身定制的安全接入指引。本站倡导使用行业审计过的通用开源客户端，拒绝闭源流氓捆绑，保障设备安全与通信顺畅。
          </p>
        </div>

        {/* 快速锚点导航 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#windows"
            className="px-4 py-2 rounded-xl text-xs font-mono font-medium bg-cosmic-surface border border-cosmic-border hover:border-electricCyan text-doodleWhite transition-colors"
          >
            # Windows 桌面端
          </a>
          <a
            href="#android"
            className="px-4 py-2 rounded-xl text-xs font-mono font-medium bg-cosmic-surface border border-cosmic-border hover:border-starlightPurple text-doodleWhite transition-colors"
          >
            # Android 移动端
          </a>
          <a
            href="#ios"
            className="px-4 py-2 rounded-xl text-xs font-mono font-medium bg-cosmic-surface border border-cosmic-border hover:border-starlightYellow text-doodleWhite transition-colors"
          >
            # iOS 苹果设备
          </a>
          <a
            href="#troubleshooting"
            className="px-4 py-2 rounded-xl text-xs font-mono font-medium bg-cosmic-surface border border-cosmic-border hover:border-emerald-400 text-doodleWhite transition-colors"
          >
            # 常见排障方法
          </a>
        </div>

        {/* 安全指引红线声明 */}
        <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 space-y-2">
          <div className="font-bold text-amber-300 flex items-center gap-1.5 text-sm">
            <span>⚠️ 万达云安全规范与底线原则：</span>
          </div>
          <p>
            1. <strong>绝不提供虚构或来源不明的客户端直链</strong>：我们坚决要求用户通过官方 GitHub Releases 或官方应用商店下载正规客户端，谨防钓鱼安装包劫持设备；
          </p>
          <p>
            2. <strong>绝不指示用户关闭安全防线</strong>：任何正规的代理客户端均不需要用户彻底关闭 Windows Defender 或关闭手机安全扫描。凡索要短信、通讯录权限的安装包均为仿冒程序。
          </p>
        </div>

        {/* SECTION: Windows 指南 */}
        <section id="windows" className="p-8 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow space-y-6">
          <div className="flex items-center justify-between border-b border-cosmic-border/60 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-electricCyan/15 border border-electricCyan/40 text-electricCyan font-mono font-bold flex items-center justify-center text-sm">
                WIN
              </span>
              <h2 className="text-xl font-bold text-doodleWhite">Windows 桌面端配置指引 (10 / 11)</h2>
            </div>
            <span className="text-xs font-mono text-mutedText">支持 x64 / ARM64</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-mutedText leading-relaxed">
            <div className="space-y-1">
              <h3 className="font-bold text-doodleWhite">第一步：挑选并下载正规开源客户端</h3>
              <p>
                推荐在 GitHub 搜索并下载 <strong>Clash Verge Rev</strong>、<strong>Mihomo Party</strong> 或 <strong>Sing-box</strong> 的最新发布版本。下载时请核对自己电脑的系统类型（绝大部分 Intel/AMD 电脑下载 <code className="text-electricCyan">x64-setup.exe</code>，轻薄高通本下载 <code className="text-starlightPurple">arm64-setup.exe</code>）。
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-doodleWhite">第二步：导入万达云官方订阅链接</h3>
              <p>
                在万达云控制台复制您的专属订阅 URL，打开客户端中的“订阅 / Profiles”界面，粘贴链接并点击“下载 / Download”。客户端会自动拉取最新的加密专线节点列表。
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-doodleWhite">第三步：选择节点并启用系统代理或 TUN 模式</h3>
              <p>
                建议将路由分流模式设置为 <strong>“规则（Rule）”</strong>，并在节点列表中选择一个延迟较低的节点（如中国香港、日本或新加坡节点）。最后打开“系统代理”开关即可开始使用。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/50 text-xs">
              <span className="font-semibold text-electricCyan block mb-1">
                ✦ 进阶阅读推荐：
              </span>
              <p>
                如需了解 Windows 系统时间校准、证书错误处理与 TUN 虚拟网卡冲突解决，请阅读深度文章：
                <Link href="/blog/wandayun-windows-client-setup-guide" className="text-starlightYellow hover:underline ml-1">
                  《万达云Windows使用指南：客户端下载前的检查与常见配置问题》→
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Android 指南 */}
        <section id="android" className="p-8 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow space-y-6">
          <div className="flex items-center justify-between border-b border-cosmic-border/60 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-starlightPurple/15 border border-starlightPurple/40 text-starlightPurple font-mono font-bold flex items-center justify-center text-sm">
                AND
              </span>
              <h2 className="text-xl font-bold text-doodleWhite">Android 安卓手机与平板指引</h2>
            </div>
            <span className="text-xs font-mono text-mutedText">Android 8.0+</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-mutedText leading-relaxed">
            <div className="space-y-1">
              <h3 className="font-bold text-doodleWhite">第一步：获取可靠的通用安卓客户端</h3>
              <p>
                建议通过 Google Play 商店搜索下载，或访问开源项目的官方 GitHub Release 页面获取 APK 安装包（例如 <strong>Clash Meta for Android</strong>、<strong>Flclash</strong> 或 <strong>Sing-box for Android</strong>）。
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-doodleWhite">第二步：配置订阅与授权 VPNService 权限</h3>
              <p>
                将控制台的订阅链接导入客户端，并在首次点击启动连接时，系统会弹出“网络连接请求（钥匙图标）”窗口，请点击“确定授权”。客户端仅申请建立虚拟网络隧道，不获取手机内部个人隐私。
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-doodleWhite">第三步：设置后台保活与电池优化白名单</h3>
              <p>
                进入手机“系统设置” → “应用管理” → 找到对应客户端，将“省电策略 / 电池优化”设为 <strong>“无限制”</strong>，避免手机锁屏后系统自动杀死后台进程导致断连。
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: iOS 指南 */}
        <section id="ios" className="p-8 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow space-y-6">
          <div className="flex items-center justify-between border-b border-cosmic-border/60 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-starlightYellow/15 border border-starlightYellow/40 text-starlightYellow font-mono font-bold flex items-center justify-center text-sm">
                IOS
              </span>
              <h2 className="text-xl font-bold text-doodleWhite">iOS 苹果设备配置指引 (iPhone / iPad)</h2>
            </div>
            <span className="text-xs font-mono text-mutedText">iOS 14.0+</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-mutedText leading-relaxed">
            <div className="space-y-1">
              <h3 className="font-bold text-doodleWhite">第一步：确认 App Store 区域环境</h3>
              <p>
                由于应用分发政策，网络扩展类应用通常需在非国区（美区/港区/日区等）App Store 获取。
                <strong className="text-amber-300 ml-1">
                  安全警示：切勿在 iPhone“系统设置”登录任何他人提供的共享 Apple ID，仅可在 App Store 内部临时登录！
                </strong>
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-doodleWhite">第二步：一键导入或扫描二维码订阅</h3>
              <p>
                支持在 Shadowrocket 或 Sing-box 中点击右上角添加配置，选择类型为 Subscribe，粘贴订阅链接或直接扫描控制台提供的二维码即可自动同步节点。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/50 text-xs">
              <span className="font-semibold text-starlightPurple block mb-1">
                ✦ 移动端深度教程：
              </span>
              <p>
                了解更多关于 5G 与 WiFi 切换时的自愈机制与规则分流防风控细节，请阅读：
                <Link href="/blog/wandayun-mobile-android-ios-guide" className="text-starlightYellow hover:underline ml-1">
                  《万达云手机使用说明：Android与iOS设备的配置思路和注意事项》→
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: 常见排障方法 */}
        <section id="troubleshooting" className="p-8 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow space-y-6">
          <div className="border-b border-cosmic-border/60 pb-4">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              ENGINEER FUNNEL // 四阶排障法
            </span>
            <h2 className="text-xl font-bold text-doodleWhite mt-1">
              网络连接异常的快速排查清单
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/50 space-y-1.5">
              <span className="font-bold text-electricCyan block">1. 检查物理网络连通性</span>
              <p className="text-mutedText leading-relaxed">
                完全退出代理软件，打开国内大型网站测试。若国内网站打不开，说明本地路由器死锁或宽带掉线，需重启本地网络设备。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/50 space-y-1.5">
              <span className="font-bold text-starlightPurple block">2. 核准系统本地时钟</span>
              <p className="text-mutedText leading-relaxed">
                现代加密协议要求设备时钟偏差在 60 秒以内。Windows 与手机用户请前往系统设置点击“立即同步网络时间”。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/50 space-y-1.5">
              <span className="font-bold text-starlightYellow block">3. 强制在客户端刷新订阅</span>
              <p className="text-mutedText leading-relaxed">
                节点专线入口会定期轮换优化。在客户端订阅卡片右键选择“更新”，拉取最新生效的服务器地址与秘钥。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cosmic-card border border-cosmic-border/50 space-y-1.5">
              <span className="font-bold text-emerald-400 block">4. 检查账户流量与到期状态</span>
              <p className="text-mutedText leading-relaxed">
                登录万达云控制台查看套餐是否到期或流量是否耗尽。流量耗尽请订购重置包（注意：常规续费不重置当月流量）。
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/blog/wandayun-connection-troubleshooting-method"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-electricCyan hover:underline"
            >
              <span>查看完整的《万达云连接失败系统排查与工单提交指南》</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
