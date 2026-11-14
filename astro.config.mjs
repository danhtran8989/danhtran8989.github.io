import { defineConfig } from 'astro/config';

export default defineConfig({
  // 1. Your exact GitHub Pages URL
  site: 'https://danhtran8989.github.io', 
  
  // 2. MUST be a single forward slash for username.github.io sites
  base: '/', 
  
  output: 'static',
});