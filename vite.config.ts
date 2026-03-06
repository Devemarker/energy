import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // Determine base path for GitHub Pages
  // When deployed to GitHub Pages, the URL is usually https://<username>.github.io/<repo-name>/
  // So the base should be '/<repo-name>/'
  // We can extract this from the GITHUB_REPOSITORY environment variable if available
  const githubRepo = process.env.GITHUB_REPOSITORY;
  const basePath = githubRepo ? `/${githubRepo.split('/')[1]}/` : '/';

  return {
    base: basePath,
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
