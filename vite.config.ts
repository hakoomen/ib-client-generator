import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: { lib: { entry: resolve(__dirname, "./src/index.ts") } },
  plugins: [tsconfigPaths()],
});
