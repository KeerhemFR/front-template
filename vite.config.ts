import { resolve, join } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Define vite configuration
 * More information: https://vitejs.dev/config/
 * @returns {UserConfigExport}
 */
export default defineConfig({
	plugins: [
		react(),
	],
	envPrefix: 'LVMH_',
	build: {
		minify: true,
		emptyOutDir: true,
		outDir: join('../', 'dist'),
	},
	server: {
		watch: {
			usePolling: true,
		},
	},
	resolve: {
		alias: [
			{ find: '~/', replacement: resolve('./', 'src') },
      { find: '~assets', replacement: resolve('./', 'src/assets')},
      { find: '~components', replacement: resolve('./', 'src/components')},	
			{ find: '~content', replacement: resolve('./', 'src/content' )}	
		],
	},
});