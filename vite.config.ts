import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

const repoName = "Zschem";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? `/${repoName}/` : "/",
  define: {
    __APP_BUILD_ID__: JSON.stringify(process.env.GITHUB_SHA ?? Date.now().toString())
  },
  resolve: {
    alias: {
      "@app": fileURLToPath(new URL("./src/app", import.meta.url)),
      "@config": fileURLToPath(new URL("./src/config", import.meta.url)),
      "@domain": fileURLToPath(new URL("./src/domain", import.meta.url)),
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@shared": fileURLToPath(new URL("./src/shared", import.meta.url))
    }
  }
});
