import { sites } from "@openai/sites-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const staticHostingEntrypoint = (): Plugin => ({
  name: "static-hosting-entrypoint",
  apply: "build",
  generateBundle() {
    this.emitFile({
      type: "asset",
      fileName: "server/index.js",
      source: "export default { fetch(request, env) { return env.ASSETS.fetch(request); } };\n",
    });
  },
});
export default defineConfig({
  plugins: [react(), sites(), staticHostingEntrypoint()],
});
