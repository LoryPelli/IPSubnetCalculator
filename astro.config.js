import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    output: 'server',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [svelte()],
    adapter: cloudflare(),
});
