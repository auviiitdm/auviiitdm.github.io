import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// ({ mode }) => {
//   return defineConfig({
//     plugins: [react()],
//     define: {
//       "process.env.NODE_ENV": `"${mode}"`,
//     },
//   });
// };
export default defineConfig(({ mode }) => {
  // ...
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "./",
    plugins: [react()],
    assetsInclude: ["**/*.gltf", "**/*.JPG", "**/*.PNG"],
    server: {
      port: 3000,
    },
    define: {
      __APP_ENV: env.REACT_APP,
    },
  };
});
