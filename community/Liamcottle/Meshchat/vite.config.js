import path from "path";
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default {

    plugins: [
        vue(),
        vuetify(),
    ],

    // vite app is loaded from /src/frontend
    root: path.join(__dirname, "src", "frontend"),

    build: {

        // we want to compile vite app to /public which is bundled and served by the python executable
        outDir: path.join(__dirname, "public"),
        emptyOutDir: true,

        rollupOptions: {
            input: {

                // we want to use /src/frontend/index.html as the entrypoint for this vite app
                app: path.join(__dirname, "src", "frontend", "index.html"),

                // we want to use /src/frontend/call.html as the entrypoint for the phone call app
                call: path.join(__dirname, "src", "frontend", "call.html"),

            },
        },
    },

}
