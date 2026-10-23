import React from 'react';
import Link from 'next/link';
import { HandDrawnHeroVisual } from '@/components/universe/HandDrawnHeroVisual';
import { PlanConstellation } from '@/components/pricing/PlanConstellation';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { WANDA_ARTICLES } from '@/data/articles';
import { WANDA_FAQS } from '@/data/faqs';
import { UnderlineScribble, CoordinateCrosshair, HandDrawnArrow, StarSparkle } from '@/components/doodles/DoodleIcons';
import { VerifiedProductsJsonLd } from '@/components/common/JsonLd';

export default function HomePage() {
  return (
    <div className="w-full relative overflow-hidden">
      <VerifiedProductsJsonLd />

      {/* SECTION 01：宇宙入口 (Hero) */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-cosmic-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* 顶栏徽标 */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-surface/90 border border-electricCyan/40 text-xs font-mono text-electricCyan shadow-[0_0_15px_rgba(67,221,230,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-electricCyan animate-pulse" />
              <span>HAND-DRAWN DIGITAL UNIVERSE // 官方第一方站点</span>
            </div>

            {/* 首页 H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-doodleWhite leading-[1.15]">
              万达云 · 探索更清晰的
              <span className="relative inline-block text-electricCyan ml-2">
                数字连接体验
                <UnderlineScribble className="absolute -bottom-3 left-0 w-full h-3 text-electricCyan" />
              </span>
            </h1>

            {/* 首页副标题 */}
            <p className="text-base sm:text-lg text-mutedText max-w-3xl mx-auto leading-relaxed pt-2">
              在万达云了解网络连接方案、不同流量套餐、个人设备配置与使用指南。以清晰的服务信息和简洁的操作流程，帮助用户找到适合自己的连接方式。
            </p>

            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-electricCyan hover:bg-electricCyan/90 text-cosmic-darkest transition-all shadow-[0_0_24px_rgba(67,221,230,0.35)] flex items-center justify-center gap-2 group"
              >
                <span>了解套餐</span>
                <HandDrawnArrow className="w-4 h-4 text-cosmic-darkest group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/guide"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm bg-cosmic-surface hover:bg-cosmic-card text-doodleWhite border border-cosmic-border hover:border-electricCyan/60 transition-all flex items-center justify-center gap-2"
              >
                <span>查看使用指南</span>
              </Link>
            </div>
          </div>

          {/* 原创数字宇宙线稿动效 */}
          <div className="mt-12 sm:mt-16">
            <HandDrawnHeroVisual />
          </div>
        </div>
      </section>

      {/* SECTION 02：认识万达云 (400-600字独立品牌介绍) */}
      <section className="py-20 bg-cosmic-surface/40 border-b border-cosmic-border/50 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-starlightPurple/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-mono text-starlightPurple mb-3">
              <CoordinateCrosshair className="w-4 h-4 text-starlightPurple" />
              <span>BRAND STATEMENT // 品牌真实介绍</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-doodleWhite tracking-tight mb-6">
              万达云 Wanda Cloud：从连接需求出发
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-mutedText leading-relaxed">
              <p>
                万达云（Wanda Cloud）是一套专注为个人知识探索者、远程开发者与跨境商务工作者构建的高性能网络中继与加密加速方案。在日常跨国访问中，公网国际海缆出口的高峰拥堵、自治域路由绕路以及偶发性丢包，往往严重阻碍了全球协同与数字资源的顺畅获取。万达云通过在核心骨干节点部署优质中转线路与低抖动专线隧道，致力于为用户提供清晰、稳定、合乎技术规律的网络中继支持。
              </p>
              <p>
                在万达云的服务理念中，我们坚信用户应当对自己的网络消费拥有完全的知情权。不同用户对于流量的需求截然不同：纯文字与代码检索一个月通常只需几十吉字节，而 4K 超清流媒体与大型模型同步则需要数百吉字节的吞吐空间。因此，万达云将方案细分为 150GB、300GB、600GB 及 1200GB 等梯度方案。不同档位不仅体现为流量额度差异，更对应着底层全中转线路与全专线链路的技术分级，以及 5 台至 10 台以上的在线设备并发限制。
              </p>
              <p>
                作为第一方品牌官方网站，本站坚持提供经过核实的资费数据、客观的系统连接排障步骤以及开源规范的客户端设置指导。我们不虚构未经测试的所谓“极速神话”，亦不隐瞒物理公网波动对连接体验的客观影响。在选购任何方案前，用户应当根据自身主力设备（Windows、Android、iOS 等）的操作环境、本地宽带运营商品质以及月度实际用量进行理性衡量，从而建立持久、可靠的数字化连接习惯。
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-cosmic-border/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-mutedText/80">
              <span className="text-electricCyan">✓ 第一方品牌授权直属</span>
              <span className="text-starlightYellow">✦ 杜绝第三方加价与钓鱼软件</span>
              <span className="text-starlightPurple">○ 透明计费与服务边界</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03：宇宙连接概念 (5个手绘星轨网络概念) */}
      <section className="py-20 border-b border-cosmic-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-electricCyan uppercase tracking-widest">
              NETWORK CONCEPTS // 基础知识
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-doodleWhite mt-2">
              理解网络连接的核心星轨法则
            </h2>
            <p className="text-sm text-mutedText mt-3">
              理性的网络认知是获得优质连接的前提。我们把复杂通信原理梳理为五个清晰的节点概念：
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 概念 1：流量额度 */}
            <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow cosmic-card-hover">
              <div className="w-10 h-10 rounded-xl bg-electricCyan/15 border border-electricCyan/40 flex items-center justify-center text-electricCyan font-mono font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-doodleWhite mb-2">流量额度 (Quota)</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                流量是您在一个自然计费周期内通过加密隧道传输数据的物理上限。文字和开源代码耗费极低，而 4K 视频是流量消耗的大头。额度按周期重置，超额后需购买重置包恢复。
              </p>
            </div>

            {/* 概念 2：网络延迟 */}
            <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow cosmic-card-hover">
              <div className="w-10 h-10 rounded-xl bg-starlightPurple/15 border border-starlightPurple/40 flex items-center justify-center text-starlightPurple font-mono font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-doodleWhite mb-2">网络延迟与抖动 (RTT & Jitter)</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                延迟受限于光速与物理距离，沿海至香港约 20-35ms，至美西约 130-160ms。比低延迟更关键的是抖动控制，抖动越小，实时音视频与远程交互越平稳不卡顿。
              </p>
            </div>

            {/* 概念 3：线路选择 */}
            <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow cosmic-card-hover">
              <div className="w-10 h-10 rounded-xl bg-starlightYellow/15 border border-starlightYellow/40 flex items-center justify-center text-starlightYellow font-mono font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-doodleWhite mb-2">中转线路 vs 专线链路</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                中转线路依托国内多线 BGP 进行公网优化转发，兼具性价比与广覆盖；专线链路则租用独立骨干光纤内网，彻底绕开晚高峰公网国际海缆出口拥塞。
              </p>
            </div>

            {/* 概念 4：设备兼容 */}
            <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow cosmic-card-hover">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-mono font-bold mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-doodleWhite mb-2">设备并发与协议兼容</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                每个套餐具有清晰的并发设备数量限制（5台至10台以上）。支持主流标准订阅接口，可在 Windows、Android、iOS、macOS 平台规范接入。
              </p>
            </div>

            {/* 概念 5：使用规则 */}
            <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow cosmic-card-hover md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-pink-400/15 border border-pink-400/40 flex items-center justify-center text-pink-400 font-mono font-bold mb-4">
                05
              </div>
              <h3 className="text-lg font-bold text-doodleWhite mb-2">规则分流与合理使用准则 (Fair Use)</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                强烈建议启用“规则分流模式”：国内常用服务直接走本地网络全速运行，仅境外学术与国际服务经过中继加速。这不仅极大节约套餐流量，更能避免触发本地网银异地风控。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04：探索套餐星图 (Plan Constellation) */}
      <section className="py-20 bg-cosmic-surface/30 border-b border-cosmic-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-starlightPurple uppercase tracking-widest">
              CONSTELLATION MATRIX // 方案星图
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-doodleWhite mt-2">
              探索万达云套餐星图
            </h2>
            <p className="text-sm text-mutedText mt-3">
              交互式天体轨道节点，直观对比 150GB 至 1200GB 方案的核准价格、网络类型与适用规模：
            </p>
          </div>

          <PlanConstellation />

          <div className="text-center mt-6">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-xs font-mono text-electricCyan hover:underline"
            >
              <span>查看全部多周期折让与完整参数对比表格</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 05：服务信息 (手绘横向线条与独立段落解释) */}
      <section className="py-20 border-b border-cosmic-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <span className="text-xs font-mono text-starlightYellow uppercase tracking-widest">
              SERVICE PRINCIPLES // 运营规范
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-doodleWhite mt-2">
              服务信息与理性选择须知
            </h2>
          </div>

          {/* 条目 1 */}
          <div className="space-y-3 pb-8 border-b border-cosmic-border/60">
            <h3 className="text-lg font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electricCyan" />
              不同套餐之间的流量差异与实际意义
            </h3>
            <p className="text-sm text-mutedText leading-relaxed">
              150GB 方案主要解决个人基础工作学习所需，涵盖代码拉取、网页检索与低频流媒体；而 300GB 方案则是承载全天候在线、全高清视频流与多终端协同的主力方案。超出 600GB 的方案主要服务于重度视频创作者与跨境团队。选择时请根据您的真实需求选购，切忌盲目追求与自身不匹配的超大流量。
            </p>
          </div>

          {/* 条目 2 */}
          <div className="space-y-3 pb-8 border-b border-cosmic-border/60">
            <h3 className="text-lg font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-starlightPurple" />
              不同设备数量限制的实际含义
            </h3>
            <p className="text-sm text-mutedText leading-relaxed">
              “支持 5 台或 10 台设备同时在线”是指在同一时间点，能够与万达云节点成功建立活跃网络连接的独立 IP 终端数量。这是为了保护节点带宽免遭无节制扩散与滥用。只要单时刻在线设备未超过上限，您可以在任意多台电脑和手机上安装客户端。
            </p>
          </div>

          {/* 条目 3 */}
          <div className="space-y-3 pb-8 border-b border-cosmic-border/60">
            <h3 className="text-lg font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-starlightYellow" />
              网络环境如何影响实际测速结果
            </h3>
            <p className="text-sm text-mutedText leading-relaxed">
              服务商承诺的速率是节点骨干出口的吞吐能力。在终端实际体验中，本地 WiFi 信号质量、运营商骨干网互联调度、目标海外网站服务器自身的防御规则，都会对瞬时网速产生影响。万达云坚决不使用“100% 绝对稳定”这类违背通信工程规律的虚假宣传。
            </p>
          </div>

          {/* 条目 4 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-doodleWhite flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              如何科学选择合适的服务周期
            </h3>
            <p className="text-sm text-mutedText leading-relaxed">
              对于首次接触万达云的用户，官方始终建议首月选择“月付”。以最低的尝试成本在您本人的真实网络环境下验证连接质量；确认完全契合后，再按需选择季付或年付以享受长期折让。
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 06：开始使用 (宇宙航线四阶段路径图) */}
      <section className="py-20 bg-cosmic-surface/40 border-b border-cosmic-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-electricCyan uppercase tracking-widest">
              FLIGHT PATH // 航线指引
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-doodleWhite mt-2">
              四步开启万达云数字宇宙
            </h2>
            <p className="text-sm text-mutedText mt-3">
              简单清晰的接入逻辑，真实呈现每一个环节的必要操作：
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* 阶段 1 */}
            <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border relative flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-electricCyan">01</span>
                <h3 className="text-base font-bold text-doodleWhite mt-3 mb-2">了解万达云定位</h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  阅读本站官方介绍与网络科普，理解全中转与专线架构，明确个人或团队的真实使用边界。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-cosmic-border/40 text-[11px] text-electricCyan font-mono">
                STAGE // RECON
              </div>
            </div>

            {/* 阶段 2 */}
            <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border relative flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-starlightPurple">02</span>
                <h3 className="text-base font-bold text-doodleWhite mt-3 mb-2">对比套餐规则</h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  在套餐星图中对比 150GB 至 1200GB 方案的月均成本与在线设备数，按需锁定适合的额度。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-cosmic-border/40 text-[11px] text-starlightPurple font-mono">
                STAGE // SELECT
              </div>
            </div>

            {/* 阶段 3 */}
            <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border relative flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-starlightYellow">03</span>
                <h3 className="text-base font-bold text-doodleWhite mt-3 mb-2">注册并完成订阅</h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  在官方正式开放注册后，使用安全邮箱创建账户，选购方案并获取专属加密订阅接口。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-cosmic-border/40 text-[11px] text-starlightYellow font-mono">
                STAGE // ACTIVATE
              </div>
            </div>

            {/* 阶段 4 */}
            <div className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border relative flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-emerald-400">04</span>
                <h3 className="text-base font-bold text-doodleWhite mt-3 mb-2">阅读设备连接教程</h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  参考本站 [使用指南](/guide)，在 Windows、Android 或 iOS 设备中导入订阅，畅享高速网络。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-cosmic-border/40 text-[11px] text-emerald-400 font-mono">
                STAGE // CONNECT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07：知识探索 (展示7篇原创深度文章) */}
      <section className="py-20 border-b border-cosmic-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono text-starlightPurple uppercase tracking-widest">
                KNOWLEDGE BASE // 官方深度博文
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-doodleWhite mt-2">
                知识探索 · 深度技术与使用干货
              </h2>
              <p className="text-sm text-mutedText mt-2">
                由万达云技术团队撰写的原创科普，涵盖线路原理、套餐决策与排障实战：
              </p>
            </div>
            <Link
              href="/blog"
              className="text-xs font-mono text-electricCyan hover:underline flex items-center gap-1"
            >
              <span>浏览全部 7 篇博文</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WANDA_ARTICLES.slice(0, 6).map((art) => (
              <article
                key={art.slug}
                className="p-6 rounded-2xl bg-cosmic-surface border border-cosmic-border cosmic-card-shadow cosmic-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-mutedText mb-3">
                    <span className="px-2 py-0.5 rounded bg-cosmic-card text-electricCyan border border-cosmic-border/60">
                      {art.category}
                    </span>
                    <span>{art.publishedAt}</span>
                  </div>
                  <h3 className="text-base font-bold text-doodleWhite line-clamp-2 hover:text-electricCyan transition-colors">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h3>
                  <p className="text-xs text-mutedText mt-2.5 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-cosmic-border/40 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-mutedText/70">{art.readTime}阅读</span>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="font-medium text-electricCyan hover:text-doodleWhite transition-colors flex items-center gap-1"
                  >
                    <span>阅读全文</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08：常见问题 (FAQ 手绘轨道收束) */}
      <section className="py-20 bg-cosmic-surface/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-starlightYellow uppercase tracking-widest">
              HELP & RESOLUTION // 疑难解答
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-doodleWhite mt-2">
              常见问题解答
            </h2>
            <p className="text-sm text-mutedText mt-2">
              涵盖套餐续费规则、客户端支持、故障排查与计费周期的常见疑问：
            </p>
          </div>

          <FaqAccordion items={WANDA_FAQS} />

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-electricCyan hover:underline"
            >
              <span>查看完整常见问题知识库与技术答疑专区</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
