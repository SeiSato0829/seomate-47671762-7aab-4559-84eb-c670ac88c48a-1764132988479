import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seo-site.netlify.app',
  sitemap: true,
  integrations: [],
  vite: {
    define: {
      'import.meta.env.SITE_NAME': JSON.stringify('無題のスプレッドシート'),
      'import.meta.env.SITE_DOMAIN': JSON.stringify('seo-site.netlify.app'),
      'import.meta.env.THEME': JSON.stringify('default')
    }
  }
});
