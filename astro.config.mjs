import { defineConfig } from 'astro/config';

// Keep this in sync with `domain` in `src/config/site.yaml`.
export default defineConfig({
  site: 'https://danhtran2mind.github.io',
  base: '/', // Use '/' ONLY if your repo is named exactly "danhtran2mind.github.io"
});
