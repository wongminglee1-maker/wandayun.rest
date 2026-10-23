import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          darkest: '#070B1B', // 宇宙深蓝
          surface: '#10152D', // 深海紫黑
          card: '#131C35',    // 星空蓝黑
          border: 'rgba(150, 116, 255, 0.22)',
          borderGlow: 'rgba(67, 221, 230, 0.45)',
        },
        electricCyan: '#43DDE6',  // 电光青
        starlightPurple: '#9674FF', // 星轨紫
        starlightYellow: '#F7D675', // 星光黄
        doodleWhite: '#F4F1E8',     // 手绘白
        mutedText: '#B8C2D6',       // 辅助正文
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Noto Sans SC"',
          'sans-serif',
        ],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'orbit-spin': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
