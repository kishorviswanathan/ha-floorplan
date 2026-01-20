import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { execSync } from 'child_process';

const commitHash = execSync('git describe --tags --always').toString().trim();

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify(commitHash)
  },
  build: {
    sourcemap: true
  }
})
