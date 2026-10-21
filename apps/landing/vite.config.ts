import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this app under /personal-plus/; set DEPLOY_TARGET there.
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/personal-plus/' : '/',
});
