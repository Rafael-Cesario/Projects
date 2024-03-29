import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		// watch: false,
		environment: 'jsdom',
		reporters: 'verbose',
		globals: true,
		css: false,

		deps: {
			fallbackCJS: true,
		},
	},
});
