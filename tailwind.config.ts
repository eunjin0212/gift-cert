import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '1': '1'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        main: {
          placeholder: '#929292',
          'not-selected': '#B9B9B9',
          positive: '#007AFF',
          secondary: '#F8F8F8',
        }
      },
      fontFamily: {
        pretendard: ['Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
