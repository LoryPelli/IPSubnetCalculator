import cloudflare from '@astrojs/cloudflare';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'server',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [svelte(), vue()],
    adapter: cloudflare(),
});
