# 万达云 Wanda Cloud 官方网站代码库
**Official Website of Wanda Cloud — https://wandayun.rest/**

一套采用 **Hand-Drawn Digital Universe（手绘涂鸦 × 数字宇宙）** 品牌视觉识别体系的万达云第一方品牌官方网站。基于 Next.js App Router、TypeScript 与 Tailwind CSS 开发，全面遵循 Bing 技术 SEO 与 Webmaster Guidelines，实现 100% 静态预渲染与极速响应。

---

## 🌟 核心特性与技术亮点

1. **原创手绘涂鸦 × 数字宇宙视觉识别体系**：
   - 深邃宇宙背景色（`#070B1B`, `#10152D`, `#131C35`）；
   - 电光青 `#43DDE6`、星轨紫 `#9674FF`、星光黄 `#F7D675`、手绘白 `#F4F1E8`；
   - 原创万达云 SVG 徽标与手绘天体坐标组件；
   - 采用 SVG `stroke-dasharray` 与 `stroke-dashoffset` 实现的渐次线稿成形动画。
2. **完整页面结构与 100% 静态预渲染 (SSG)**：
   - 涵盖全部 21 个核心业务路由，首次加载共享 JS 仅 87.1 kB；
   - Bingbot 与各类搜索引擎爬虫无需执行 JavaScript 即可读取 100% 完整正文。
3. **真实客观的套餐对比与选购星图**：
   - 交互式天体轨道节点选择器（150GB 至 1200GB）；
   - 严格区分基准核实数据与待确认数据，严禁虚构非官方报价；
   - 详尽解析周期续费（仅加时长）与流量重置包（立刻恢复流量）的业务差异。
4. **7 篇深度原创品牌博文（总字数超 10,000 字）**：
   - 独立 H2/H3 结构与排他性搜索意图；
   - 包含光速极限延迟推导、月度流量测算数学公式、全家多端配额拆解与四阶排障漏斗。
5. **完整 Bing SEO 与 IndexNow 自动化支持**：
   - 自动生成绝对规范的 `sitemap.xml` 与 `robots.txt`；
   - 全页面独立 Title / Description 与自指绝对 Canonical；
   - 严格合规的 JSON-LD 结构化数据（WebSite, Breadcrumbs, Article, 仅限已核验方案的 Product）；
   - 配备一键 IndexNow 推送脚本：`npm run indexnow <API_KEY>`。
6. **空值安全的外部业务链接管理**：
   - `src/config/site.ts` 统一管理注册、登录、订阅与客服外部链接；
   - 未配置时展示友好提示弹窗，不执行错误跳转，不制造虚假购买。

---

## 📁 核心目录架构

```
wandayun.rest/
├── public/                 # 静态静态资源与验证文件
├── scripts/
│   └── indexnow.mjs        # IndexNow 自动化批量推送脚本
├── docs/
│   └── BING_SEO_GUIDE.md   # Bing 网站管理员工具与技术 SEO 运维实操手册
├── src/
│   ├── app/                # Next.js App Router 页面路由
│   │   ├── layout.tsx      # 根布局与全局 JSON-LD
│   │   ├── page.tsx        # 官网首页（9大核心板块）
│   │   ├── pricing/        # 套餐价格与多周期对比
│   │   ├── features/       # 服务特点与技术架构
│   │   ├── guide/          # 跨平台（Win/Android/iOS）使用指南
│   │   ├── blog/           # 知识中心博文索引
│   │   │   └── [slug]/     # 7 篇独立原创博文详情页 (SSG)
│   │   ├── faq/            # 10 个常见问题解答
│   │   ├── about/          # 关于万达云第一方品牌
│   │   ├── privacy/        # 隐私政策
│   │   ├── terms/          # 服务条款
│   │   ├── not-found.tsx   # 自定义 404 深空漂流页面
│   │   ├── sitemap.ts      # 规范站点地图
│   │   └── robots.ts       # 爬虫抓取协议
│   ├── components/         # 模块化 UI 组件库
│   │   ├── universe/       # 数字宇宙主视觉与动效
│   │   ├── doodles/        # 原创手绘矢量套件 (Logo, 箭头, 坐标, 星球)
│   │   ├── pricing/        # 套餐星图与对比器
│   │   ├── navigation/     # 响应式导航栏与页脚
│   │   └── common/         # 禁用弹窗、折叠面板、Markdown 渲染器、Schema
│   ├── config/
│   │   └── site.ts         # 站点全局配置与外部直链管理
│   ├── data/
│   │   ├── plans.ts        # 官方套餐数据模型与核实状态
│   │   ├── articles.ts     # 7 篇原创深度文章完整数据库
│   │   └── faqs.ts         # 10 项权威常见问答数据库
│   ├── lib/
│   │   └── seo/            # SEO 动态元数据生成器
│   └── styles/
│       └── globals.css     # Tailwind 样式与手绘线描动画关键帧
├── REFERENCE_AUDIT.md           # 参考站点深入调研报告
├── CONTENT_ORIGINALITY_AUDIT.md # 原创性与反同质化审查报告
├── SITE_AUDIT_REPORT.md         # 上线前两轮二次全景审计报告
├── package.json
└── tsconfig.json
```

---

## 🚀 本地开发与生产部署

### 1. 安装依赖
```bash
npm install
```

### 2. 启动本地开发服务
```bash
npm run dev
```
本地访问：`http://localhost:3000`

### 3. 生产静态构建与验证
```bash
npm run build
```
构建将执行全量 TypeScript 校验并预渲染所有 21 个静态页面。

### 4. 生产运行
```bash
npm run start
```

### 5. 提交 IndexNow 更新
当站长发布新文章或调整套餐后：
```bash
npm run indexnow <BING_INDEXNOW_KEY>
```

---

## 📝 站长部署配置指南

请在正式对外开放前编辑 `src/config/site.ts`：
```typescript
export const siteConfig = {
  // 填写站长拥有的真实生产环境直链
  registrationUrl: 'https://...',  // 注册下单地址
  loginUrl: 'https://...',         // 用户控制台登录地址
  subscriptionUrl: 'https://...',  // 订阅直链
  supportUrl: 'https://...',       // 客服支持渠道
  contactEmail: 'contact@...',     // 联络邮箱
};
```
修改后执行 `npm run build` 重新部署即可全站联动生效！
