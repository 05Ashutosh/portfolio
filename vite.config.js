// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add aliases if needed
    },
  },
  build: {
    rollupOptions: {
      external: [
        "react-icons/fa", // Explicitly mark react-icons as external
      ],
    },
  },
});
