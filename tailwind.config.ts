import type { Config } from 'tailwindcss';

const config = {
  content: ['./app/**/{**,.client,.server}/**/*.{ts,tsx}'],
} satisfies Config;

export default config;
