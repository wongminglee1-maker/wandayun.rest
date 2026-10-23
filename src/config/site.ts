/**
 * 万达云 Wanda Cloud 官方网站核心配置
 * 官网域名：https://wandayun.rest
 *
 * 注意事项：
 * 1. 注册、登录、订阅及客服相关外部链接暂时设为 null。
 * 2. 外部链接未配置时，前端界面展示合法的友好提示或禁用态，不执行错误跳转，不制造假购买。
 * 3. 站长后续在生产环境配置实际链接后，全站按钮自动生效。
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export interface SiteConfig {
  brandName: string;
  englishName: string;
  shortDescription: string;
  siteUrl: string;
  registrationUrl: string | null;
  loginUrl: string | null;
  subscriptionUrl: string | null;
  supportUrl: string | null;
  contactEmail: string | null;
  statusUrl: string | null;
  navItems: NavItem[];
  footerNav: {
    service: NavItem[];
    guides: NavItem[];
    compliance: NavItem[];
  };
  keywords: string[];
}

export const siteConfig: SiteConfig = {
  brandName: '万达云',
  englishName: 'Wanda Cloud',
  shortDescription: '万达云第一方品牌官方网站，提供网络连接方案、套餐对比、多终端客户端配置指引与技术解析。',
  siteUrl: 'https://wandayun.rest',

  // 站长正式授权注册与购买链接
  registrationUrl: 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa',
  loginUrl: 'https://varnexa.lingdongaff.com/#/login',
  subscriptionUrl: 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa',
  supportUrl: null,
  contactEmail: null,
  statusUrl: null,

  navItems: [
    { label: '首页', href: '/' },
    { label: '服务特点', href: '/features', description: '理性认识网络连接架构与服务边界' },
    { label: '套餐价格', href: '/pricing', description: '透明核实的流量方案与周期成本' },
    { label: '使用指南', href: '/guide', description: 'Windows、Android、iOS 连接配置帮助' },
    { label: '知识中心', href: '/blog', description: '原创深度文章、网络协议与流量规划' },
    { label: '常见问题', href: '/faq', description: '解答关于套餐到期、流量重置与网络排查' },
    { label: '关于我们', href: '/about', description: '万达云品牌服务定位与运营原则' },
  ],

  footerNav: {
    service: [
      { label: '套餐价格', href: '/pricing' },
      { label: '服务特点', href: '/features' },
      { label: '常见问题', href: '/faq' },
      { label: '知识博客', href: '/blog' },
    ],
    guides: [
      { label: 'Windows 配置帮助', href: '/guide#windows' },
      { label: 'Android 配置帮助', href: '/guide#android' },
      { label: 'iOS 配置帮助', href: '/guide#ios' },
      { label: '连接故障排查方法', href: '/guide#troubleshooting' },
    ],
    compliance: [
      { label: '服务条款', href: '/terms' },
      { label: '隐私政策', href: '/privacy' },
      { label: '关于万达云', href: '/about' },
    ],
  },

  keywords: [
    '万达云',
    '万达云官网',
    '万达云VPN',
    'wandayun',
    'wandayun官网',
    '万达云套餐',
    '万达云价格',
    '万达云注册',
    '万达云订阅',
    '万达云客户端',
    '万达云使用教程',
    '万达云节点',
    '万达云网络加速',
    'Wanda Cloud',
  ],
};
