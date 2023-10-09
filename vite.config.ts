import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import htmlPurge from "vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        htmlPurge({
            content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
        }) as PluginOption,
        react(),
    ],
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, "index.html"),
            },
        },
    },
});
