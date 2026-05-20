import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D2240',
          mid: '#1A3A5C',
          light: '#1e4d7a',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8B84B',
          dark: '#C8952A',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#F0EBE1',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
