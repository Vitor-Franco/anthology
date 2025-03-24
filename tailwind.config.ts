import type { Config } from 'tailwindcss';
import { colors, black, currentColor, transparent, white } from './src/tokens/colors';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
  theme: {
    colors: {
      ...colors,
      black,
      currentColor,
      transparent,
      white,
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
    },
  },
} satisfies Config;
