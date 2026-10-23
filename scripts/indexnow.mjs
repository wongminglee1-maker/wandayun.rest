/**
 * 万达云 (Wanda Cloud) IndexNow 批量提交脚本
 *
 * 使用指引：
 * 1. 在 Bing Webmaster Tools 或 IndexNow 官网生成专属 key（例如：wandayun-indexnow-key.txt）；
 * 2. 将 key 文件放置于 /public 目录下，使可通过 https://wandayun.rest/[key].txt 访问校验；
 * 3. 运行 node scripts/indexnow.mjs --key [YOUR_KEY] 提交变更的 URL；
 * 4. 注意：仅在有新文章发布或页面实质性更新时提交，切勿高频重复提交无变动页面。
 */

import https from 'https';

const SITE_URL = 'https://wandayun.rest';

// 当前站点核心有效 URL 清单
const URL_LIST = [
  `${SITE_URL}/`,
  `${SITE_URL}/pricing`,
  `${SITE_URL}/features`,
  `${SITE_URL}/guide`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/blog/what-is-wandayun-brand-guide`,
  `${SITE_URL}/blog/wandayun-plan-selection-analysis`,
  `${SITE_URL}/blog/wandayun-line-types-latency-guide`,
  `${SITE_URL}/blog/wandayun-windows-client-setup-guide`,
  `${SITE_URL}/blog/wandayun-mobile-android-ios-guide`,
  `${SITE_URL}/blog/wandayun-traffic-planning-management`,
  `${SITE_URL}/blog/wandayun-connection-troubleshooting-method`,
  `${SITE_URL}/faq`,
  `${SITE_URL}/about`,
  `${SITE_URL}/privacy`,
  `${SITE_URL}/terms`,
];

async function submitIndexNow(apiKey) {
  if (!apiKey) {
    console.error('❌ 错误：请提供 IndexNow API 验证密钥。');
    console.log('用法：node scripts/indexnow.mjs <API_KEY>');
    process.exit(1);
  }

  const payload = JSON.stringify({
    host: 'wandayun.rest',
    key: apiKey,
    keyLocation: `https://wandayun.rest/${apiKey}.txt`,
    urlList: URL_LIST,
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  };

  console.log(`🚀 正在向 IndexNow 提交 ${URL_LIST.length} 个规范 URL...`);

  const req = https.request(options, (res) => {
    console.log(`📡 IndexNow 响应状态码: ${res.statusCode}`);
    if (res.statusCode === 200) {
      console.log('✅ URL 提交成功！搜索引擎将尽快抓取索引。');
    } else if (res.statusCode === 202) {
      console.log('✅ 提交已被接收，等待密钥校验与批处理。');
    } else {
      console.warn(`⚠️ 响应非 200/202，请检查密钥与域名有效性。`);
    }
  });

  req.on('error', (e) => {
    console.error('❌ 提交异常:', e.message);
  });

  req.write(payload);
  req.end();
}

const key = process.argv[2];
submitIndexNow(key);
