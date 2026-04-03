import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  /** 使用相对路径，便于直接打开 dist/index.html（file://）或部署到子目录 */
  base: './',
});
