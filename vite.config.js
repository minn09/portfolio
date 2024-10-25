import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@components/*": ["src/components/*"],
      "@pages/*": ["src/pages/*"],
      "@assets/*": ["src/assets/*"],
      "@styles/*": ["src/styles/*"],
      "@layouts/*": ["src/layouts/*"],
    },
  },
});

