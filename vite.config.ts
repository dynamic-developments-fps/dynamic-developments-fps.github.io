import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	resolve: { alias: { '@/': '/src/' } },
	build: {
		rollupOptions: {
			input: {
				"index": "index.html",
				"404": "404.html"
			},
			output: {
				manualChunks: {
					preact: ['preact', 'preact-iso', 'preact/hooks', 'preact/compat'],
					home: ['./src/pages/Home/index.tsx', './src/pages/Home/Home.css'],
					index: ['./src/index.tsx', './src/globals.css'],
					notfound: ['./src/pages/_404.tsx'],
					header: [
						'./src/components/Header.tsx',
						'./src/components/Header.css',
					],
				},
			},
		},
	},
	preview: { port: 8000 },
	server: { port: 8000 },
	plugins: [preact()],
});
