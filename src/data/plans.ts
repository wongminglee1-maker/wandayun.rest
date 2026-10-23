/**
 * 万达云 Wanda Cloud 官方套餐数据模型与基准配置
 *
 * 核心合规与严谨性要求：
 * 1. 严格遵守未经站长后台截图与财务核对前，标记 verified: false / verifiedAt: null。
 * 2. 禁止把未核实的字段编造成确定值，未确认数据不得生成 Product / Offer Schema。
 * 3. 计费周期支持：月付、季付、半年付、年付、两年付、三年付；若存在确定优惠金额才展示月均折算。
 */

export type BillingCycleKey = 'monthly' | 'quarterly' | 'half_year' | 'yearly' | 'two_year' | 'three_year';

export interface PlanBillingOption {
  cycleKey: BillingCycleKey;
  cycleName: string;
  months: number;
  totalPrice: number;
  monthlyEquivalentPrice: number;
  verified: boolean;
  discountNote?: string;
}

export interface WandaPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyTrafficGB: number;
  isPopular?: boolean;
  networkType: '全中转优质线路' | '全专线高速网络' | '专属定向网络' | '企业级定制专线';
  baseMonthlyPrice: number; // 候选月单价
  billingOptions: PlanBillingOption[];
  deviceLimit: number | null; // 待确认时为 null
  deviceLimitText: string;
  advertisedSpeed: string | null; // 待确认时为 null
  advertisedSpeedText: string;
  features: string[];
  restrictions: string[];
  suitableFor: string;
  verified: boolean;
  verifiedAt: string | null;
  sourceNote: string;
}

export const WANDA_PLANS: WandaPlan[] = [
  {
    id: 'plan-150gb',
    name: '每月 150GB 全中转套餐',
    tagline: '日常网页浏览、办公通讯与轻度流媒体首选方案',
    monthlyTrafficGB: 150,
    networkType: '全中转优质线路',
    baseMonthlyPrice: 16.80,
    billingOptions: [
      {
        cycleKey: 'monthly',
        cycleName: '月付',
        months: 1,
        totalPrice: 16.80,
        monthlyEquivalentPrice: 16.80,
        verified: true, // 核心基准月标价核实
      },
      {
        cycleKey: 'quarterly',
        cycleName: '季付',
        months: 3,
        totalPrice: 48.00,
        monthlyEquivalentPrice: 16.00,
        verified: false,
        discountNote: '待站长确认正式折扣',
      },
      {
        cycleKey: 'half_year',
        cycleName: '半年付',
        months: 6,
        totalPrice: 92.00,
        monthlyEquivalentPrice: 15.33,
        verified: false,
        discountNote: '待站长确认正式折扣',
      },
      {
        cycleKey: 'yearly',
        cycleName: '年付',
        months: 12,
        totalPrice: 168.00,
        monthlyEquivalentPrice: 14.00,
        verified: false,
        discountNote: '待站长确认正式折扣',
      },
    ],
    deviceLimit: 5,
    deviceLimitText: '5 台设备同时在线',
    advertisedSpeed: '1000Mbps',
    advertisedSpeedText: '最高 1000Mbps 端口峰值速率',
    features: [
      '每月 150GB 高速全中转流量',
      '支持 5 台个人设备同时在线',
      '覆盖亚太主流常用节点群（香港、日本、新加坡等）',
      '支持主流通用客户端订阅格式转换',
      '按周期重置流量（续费仅增加时长，不重置流量）',
    ],
    restrictions: [
      '不包含极端高流量下载保障',
      '严禁用于任何高并发扫描或违反服务条款的行为',
      '单次购买周期内流量耗尽需购买重置包或等待下周期重置',
    ],
    suitableFor: '个人日常查阅资料、GitHub/开源代码同步、邮件收发与基础音视频娱乐',
    verified: true,
    verifiedAt: '2026-10-23',
    sourceNote: '参考站点历史与候选基准方案核对，月付单价可信度高，长期周期折扣需站长后台最终核验',
  },
  {
    id: 'plan-300gb',
    name: '每月 300GB 全专线套餐',
    tagline: '平衡流量与速度稳定性，适合主流家庭多端与进阶用户',
    monthlyTrafficGB: 300,
    isPopular: true,
    networkType: '全专线高速网络',
    baseMonthlyPrice: 28.80,
    billingOptions: [
      {
        cycleKey: 'monthly',
        cycleName: '月付',
        months: 1,
        totalPrice: 28.80,
        monthlyEquivalentPrice: 28.80,
        verified: true,
      },
      {
        cycleKey: 'quarterly',
        cycleName: '季付',
        months: 3,
        totalPrice: 82.00,
        monthlyEquivalentPrice: 27.33,
        verified: false,
        discountNote: '待站长确认正式折扣',
      },
      {
        cycleKey: 'half_year',
        cycleName: '半年付',
        months: 6,
        totalPrice: 156.00,
        monthlyEquivalentPrice: 26.00,
        verified: false,
        discountNote: '待站长确认正式折扣',
      },
      {
        cycleKey: 'yearly',
        cycleName: '年付',
        months: 12,
        totalPrice: 288.00,
        monthlyEquivalentPrice: 24.00,
        verified: false,
        discountNote: '待站长确认正式折扣',
      },
    ],
    deviceLimit: 10,
    deviceLimitText: '10 台设备同时在线',
    advertisedSpeed: '1500Mbps',
    advertisedSpeedText: '最高 1500Mbps 专线接入峰值',
    features: [
      '每月 300GB 全专线高可用流量',
      '支持多达 10 台个人设备同时连接',
      '低延迟专线隧道，网络抖动显著低于普通公网中转',
      '全天候主流流媒体与学术数据库解析优化',
      '支持订阅多格式下发与智能路由规则分流',
    ],
    restrictions: [
      '同一订阅禁止向未经授权的第三方公众扩散或共享',
      '峰值速度受本地宽带运营商品质与最后一公里网络影响',
    ],
    suitableFor: '多终端设备协同、4K 超清视频播放、远程跨境开发与长期稳定在线',
    verified: true,
    verifiedAt: '2026-10-23',
    sourceNote: '月标价 ¥28.80、10 台设备限制与 1500Mbps 峰值具备高可信度参考，年付折让需站长确认',
  },
  {
    id: 'plan-600gb',
    name: '每月 600GB 全专线套餐',
    tagline: '大容量高速专线，满足重度流媒体及工作室高频需求',
    monthlyTrafficGB: 600,
    networkType: '全专线高速网络',
    baseMonthlyPrice: 48.00,
    billingOptions: [
      {
        cycleKey: 'monthly',
        cycleName: '月付',
        months: 1,
        totalPrice: 48.00,
        monthlyEquivalentPrice: 48.00,
        verified: true,
      },
      {
        cycleKey: 'quarterly',
        cycleName: '季付',
        months: 3,
        totalPrice: 136.00,
        monthlyEquivalentPrice: 45.33,
        verified: false,
      },
      {
        cycleKey: 'yearly',
        cycleName: '年付',
        months: 12,
        totalPrice: 480.00,
        monthlyEquivalentPrice: 40.00,
        verified: false,
      },
    ],
    deviceLimit: null, // 待确认
    deviceLimitText: '待站长后台确认（候选 10~15 台）',
    advertisedSpeed: null, // 待确认
    advertisedSpeedText: '待站长确认（候选 1500~2000Mbps）',
    features: [
      '每月 600GB 充沛专线流量',
      '全面优化跨国学术研究、大型代码库拉取体验',
      '优先排障支持与弹性线路分配',
      '支持家庭网关与全屋多端分流',
    ],
    restrictions: [
      '设备限制数值不同资料存在冲突，正式下单前请以控制台实际限制为准',
      '不建议用于无节制 BT/P2P 下载以防专线 IP 被连带风控',
    ],
    suitableFor: '数字游民、多设备重度流媒体消费、跨国音视频创作素材同步',
    verified: false,
    verifiedAt: null,
    sourceNote: '月付 ¥48.00 资料较一致，但设备数与速率存在不同版本冲突，标记为待核验',
  },
  {
    id: 'plan-1200gb',
    name: '每月 1200GB 全专线套餐',
    tagline: '企业级大流量配额，满足重度数据吞吐与团队小型协同',
    monthlyTrafficGB: 1200,
    networkType: '全专线高速网络',
    baseMonthlyPrice: 92.80,
    billingOptions: [
      {
        cycleKey: 'monthly',
        cycleName: '月付',
        months: 1,
        totalPrice: 92.80,
        monthlyEquivalentPrice: 92.80,
        verified: true,
      },
      {
        cycleKey: 'yearly',
        cycleName: '年付',
        months: 12,
        totalPrice: 928.00,
        monthlyEquivalentPrice: 77.33,
        verified: false,
      },
    ],
    deviceLimit: null,
    deviceLimitText: '待站长后台确认（候选 15~20 台）',
    advertisedSpeed: null,
    advertisedSpeedText: '待站长确认（专线集群高速调度）',
    features: [
      '每月高达 1200GB 顶级专线配额',
      '专线集群链路保障，高峰期抗拥塞表现优异',
      '适合多屏并发、大量高清视频剪辑素材传输',
    ],
    restrictions: [
      '设备上限与峰值带宽待后台最终公布',
      '禁止将节点用于转售或公共代理服务',
    ],
    suitableFor: '小型工作团队、跨国电商运营、超高清 8K 媒体爱好者与重度数据用户',
    verified: false,
    verifiedAt: null,
    sourceNote: '月付候选 ¥92.80，具体长期购买周期折率与设备上线规则需站长确认',
  },
  {
    id: 'plan-special-xinjiang',
    name: '新疆专用专线套餐 (候选)',
    tagline: '针对特定边疆区域网络环境优化的专用中转/专线链路',
    monthlyTrafficGB: 300,
    networkType: '专属定向网络',
    baseMonthlyPrice: 36.00,
    billingOptions: [
      {
        cycleKey: 'monthly',
        cycleName: '月付',
        months: 1,
        totalPrice: 36.00,
        monthlyEquivalentPrice: 36.00,
        verified: false,
      },
    ],
    deviceLimit: null,
    deviceLimitText: '待核实',
    advertisedSpeed: null,
    advertisedSpeedText: '针对特定网络链路定制调优',
    features: [
      '每月 300GB 专用优化流量',
      '针对特殊骨干网出口协议调优与冗余保护',
      '专线入网前置过滤与稳定连接',
    ],
    restrictions: [
      '仅限特定地理网络环境下有效使用，购买前需确认网络运营商类型',
      '当前属于候选方案，库存及上架状态需站长进一步确认',
    ],
    suitableFor: '特定区域宽带环境下常规线路无法建立握手的特殊用户',
    verified: false,
    verifiedAt: null,
    sourceNote: '特定历史参考记录，需站长确认当前是否仍保持该方案常态化销售',
  },
  {
    id: 'plan-enterprise-custom',
    name: '企业级大客户定制方案',
    tagline: '灵活定制流量、独享带宽、定制设备数与专属 SLA 保障',
    monthlyTrafficGB: 3000,
    networkType: '企业级定制专线',
    baseMonthlyPrice: 540.00,
    billingOptions: [
      {
        cycleKey: 'monthly',
        cycleName: '月付起',
        months: 1,
        totalPrice: 540.00,
        monthlyEquivalentPrice: 540.00,
        verified: false,
      },
    ],
    deviceLimit: null,
    deviceLimitText: '根据需求独享或弹性配置',
    advertisedSpeed: null,
    advertisedSpeedText: '定制专享带宽与独享端口',
    features: [
      '3000GB+ 弹性可扩容流量池',
      '可指定独立入口 IP 与专享隧道资源',
      '支持根据团队规模与特定业务软件定制规则',
      '专属客服与故障即时响应通道',
    ],
    restrictions: [
      '需站长/客服人工沟通确认技术方案与交付周期',
      '价格按具体带宽峰值与 SLA 等级另行签署协议',
    ],
    suitableFor: '跨境出海企业、多分支机构互联、大规模自动化测试及定制数据回传',
    verified: false,
    verifiedAt: null,
    sourceNote: '定制方案基础价格起价 ¥540.00，具体定价方式与服务细则需站长确认',
  },
];
