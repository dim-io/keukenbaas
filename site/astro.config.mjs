import { defineConfig } from 'astro/config';

// Voor GitHub Pages: zet SITE_URL (bijv. https://gebruiker.github.io) en BASE_PATH (bijv. /keukenbaas).
// Lokaal en op een eigen domein volstaan de standaardwaarden.
const site = process.env.SITE_URL || 'https://keukenbaas.nl';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
