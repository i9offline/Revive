// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://i9offline.github.io',
  base: process.env.NODE_ENV === 'production' ? '/Revive' : '/',
  output: 'static',
});
