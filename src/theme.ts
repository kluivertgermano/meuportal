import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          // Laranja Claro
          orange: { value: "#FF8C42" },
          orangeHover: { value: "#FFA366" },
          orangeLight: { value: "#FFF4ED" },
          
          // Neutros
          white: { value: "#FFFFFF" },
          offWhite: { value: "#F8FAFC" },
          silver: { value: "#E2E8F0" },
          gray: { value: "#64748B" },
          charcoal: { value: "#1E293B" },
          
          // Preto fosco para dark mode
          black: { value: "#0A0A0A" },
          blackSoft: { value: "#111111" },
          blackMuted: { value: "#1A1A1A" },
        }
      },
      fonts: {
        heading: { value: "'Poppins', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        "brand.bg": {
          value: { base: "#F8FAFC", _dark: "#0A0A0A" }
        },
        "brand.card": {
          value: { base: "#FFFFFF", _dark: "#111111" }
        },
        "brand.text": {
          value: { base: "#1E293B", _dark: "#FFFFFF" }
        },
        "brand.subtle": {
          value: { base: "#64748B", _dark: "#9CA3AF" }
        },
        "brand.border": {
          value: { base: "#E2E8F0", _dark: "#2D2D2D" }
        },
        "brand.accent": {
          value: { base: "#FF8C42", _dark: "#FF8C42" }
        },
        "brand.accentHover": {
          value: { base: "#FFA366", _dark: "#FFA366" }
        },
        "brand.footer": {
          value: { base: "#FFFFFF", _dark: "#0A0A0A" }
        }
      }
    }
  }
});

const system = createSystem(defaultConfig, config);
export default system;