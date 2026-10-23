# 万达云（wandayun.rest）Bing 技术 SEO 与 IndexNow 实操手册
**Bing Webmaster Tools & Technical SEO Playbook**

---

## 1. 域名所有权验证 (Domain Ownership Verification)

1. **登录平台**：访问 [Bing Webmaster Tools](https://www.bing.com/webmasters) 使用微软账户登录；
2. **添加站点**：输入官方主域名 `https://wandayun.rest/`；
3. **推荐验证方式**：
   - **方式 A（强烈推荐，全站生效）**：在 Cloudflare / DNS 服务商处添加 Bing 提供的 `CNAME` 或 `TXT` 验证记录；
   - **方式 B（静态文件验证）**：将 Bing 提供的 `BingSiteAuth.xml` 放置于网站 `public/` 目录下，部署后点击验证。

---

## 2. Sitemap 提交与更新规范 (Sitemap Submission)

1. **提交地址**：进入后台【Sitemaps】面板，提交 `https://wandayun.rest/sitemap.xml`；
2. **抓取周期**：Bingbot 会在 24-48 小时内对 Sitemap 进行初次解析；
3. **维护规范**：
   - 本项目通过 `src/app/sitemap.ts` 原生静态导出；
   - 包含规范规范化 URL，不包含重定向或 404 死链；
   - 严禁每天通过脚本全量自动伪造修改 `lastmod`，仅在页面发生实质性文章修改时更新日期。

---

## 3. URL Inspection 检查 (单页快速诊断)

1. 在 Bing 网站管理员工具顶部输入任意 URL（如 `https://wandayun.rest/` 或单篇博文）；
2. 点击 **【URL Inspection / 检查】**；
3. 重点查看：
   - **HTTP 响应码**：必须为 `200 OK`；
   - **发现方式**：Sitemap 发现还是外链发现；
   - **已抓取的 HTML 内容**：确认 Bing 渲染出的 HTML 中包含文章完整的 H1/H2 以及正文，验证服务端渲染 (SSR/SSG) 是否生效。

---

## 4. IndexNow 实时推送配置 (Instant Indexing)

IndexNow 允许网站在内容发布后秒级通知 Bing、Yandex 等搜索引擎：

1. **生成密钥**：在 Bing Webmaster 后台【IndexNow】板块一键生成 32 位十六进制密钥；
2. **部署密钥文件**：将密钥保存为 `public/[API_KEY].txt`（文件内容也是该密钥字符串）；
3. **触发推送**：
   ```bash
   node scripts/indexnow.mjs [API_KEY]
   ```
4. **提交原则**：仅在发布新博文、调整套餐参数或更新条款时提交。切勿高频重复提交无变动页面，防止被风控降权。

---

## 5. 抓取状态检查与爬虫控制 (Crawl Control)

1. 在【Crawl Control】面板中，可以查看 Bingbot 的抓取频率分布；
2. 网站服务器若位于香港或海外，建议将默认抓取时区设置为北京时间（UTC+8）凌晨低谷期（02:00 - 06:00），避免高峰期影响普通访客访问。

---

## 6. 索引覆盖问题排查 (Index Coverage Issues)

进入【URL 状态 / 索引覆盖率】排查常见状态：
- **Excluded by 'noindex'**：检查页面是否有误配 `noindex`（本项目全站仅在不存在的动态路径中返回真实 404）；
- **Disallowed by robots.txt**：本站 `robots.txt` 已放行所有正式页面，若出现此错误请核验是否有 CDN WAF 误杀；
- **Crawled but not indexed (已抓取未索引)**：通常由于内容字数过少或同质化导致。本项目 7 篇博客均在 1000-1500 字以上，具有明确独立搜索意图。

---

## 7. 搜索表现与品牌关键词分析 (Performance & Brand Entities)

在【Search Performance】面板跟踪核心词表现：
- **核心品牌词**：`万达云`, `万达云官网`, `wandayun`, `万达云VPN`, `Wanda Cloud`；
- **业务转化词**：`万达云套餐`, `万达云价格`, `万达云订阅`；
- **技术指导词**：`万达云使用教程`, `万达云客户端`, `万达云连接失败`, `万达云节点`；
- **分析重点**：关注展示量 (Impressions) 与点击率 (CTR)，根据点击波动优化文章 Title 与 Meta 吸引力。

---

## 8. 重复页面与 Canonical 规范化 (Canonical Auditing)

1. **绝对主域名统一**：全站强制使用 `https://wandayun.rest`；
2. **尾部斜杠规范**：通过 `next.config.mjs` 统一保持无斜杠（除根路径外），杜绝 `/pricing` 与 `/pricing/` 双重页面；
3. **每个页面配备自指绝对 Canonical**：
   ```html
   <link rel="canonical" href="https://wandayun.rest/pricing" />
   ```

---

## 9. 低质量与同质化内容自查 (Content Hygiene)

Bing 算法高度严打以下行为（本项目已全部规避）：
- ❌ 严禁生成批量“城市+万达云”或“地区+节点”的批量泛目录页面；
- ❌ 严禁隐藏关键词（如与背景同色的文字）；
- ❌ 严禁在每篇文章结尾硬塞完全相同的千篇一律广告文案；
- ❌ 严禁伪造虚假的“用户评分 (AggregateRating)”结构化数据。

---

## 10. 长期维护与内容迭代步骤

1. **每月周期巡检**：检查【SEO 建议 (SEO Reports)】是否有缺失 Alt 或 Title 过长警报；
2. **套餐变动更新**：若站长更新了套餐价格，需同步修改 `src/data/plans.ts`，重新构建部署，并执行一次 IndexNow 推送；
3. **技术博文扩充**：随着 Windows/iOS 系统新版本升级，保持维护 `/guide` 与 `/blog` 中的排障建议。
