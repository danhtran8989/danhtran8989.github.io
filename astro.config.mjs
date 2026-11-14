import { defineConfig } from 'astro/config';
import githubPages from '@astrojs/github-pages';

export default defineConfig({
  // REPLACE 'danhtran8989' WITH YOUR ACTUAL GITHUB USERNAME
  site: 'https://danhtran8989.github.io', 
  
  // If your repo is named 'danhtran8989.github.io', use '/'
  // If your repo is named something else (e.g., 'portfolio'), use '/portfolio'
  base: '/', 
  
  output: 'static',
  adapter: githubPages(),
});