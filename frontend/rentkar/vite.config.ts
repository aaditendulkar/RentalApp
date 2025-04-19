import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";  // Using SWC for faster builds
import path from "path";
import { componentTagger } from "lovable-tagger";  // For component tagging in dev mode

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Listen on all interfaces (IPv6)
    port: 8080, // Change port if necessary
  },
  plugins: [
    react(),  // React plugin for SWC (faster builds)
    
    // Only apply the componentTagger plugin in development mode
    mode === "development" && componentTagger(),
  ].filter(Boolean), // Removes any falsy values (like if the mode isn't development)
  
  resolve: {
    alias: {
      // Alias '@' to the src directory for easier imports
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
