import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { componentTagger } from "lovable-tagger"
 
export default defineConfig({
  plugins: [react(), componentTagger()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080
  }
})
