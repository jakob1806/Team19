import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        emerald: {
          accent: "#10b981",
        },
        purple: {
          accent: "#8b5cf6",
        },
        brand: {
          red: "#e01d33",
          instagram: "#e1306c",
          facebook: "#1877f2",
          linkedin: "#0a66c2",
          tiktok: "#25f4ee",
          ink: "#0b0c10",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(224,29,51,0.18) 0%, rgba(224,29,51,0) 70%)",
      },
    },
  },
  plugins: [typography],
};
export default config;
