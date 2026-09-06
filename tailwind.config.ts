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
        // One grotesque for the whole site, the way jvm.com and sp.design each
        // run a single house face. Geist is self-hosted through the npm package.
        sans: ["var(--font-geist-sans)", "Helvetica Neue", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: {
          DEFAULT: "var(--paper)",
          sunk: "var(--paper-sunk)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
          faint: "var(--ink-faint)",
        },
        rule: {
          DEFAULT: "var(--rule)",
          soft: "var(--rule-soft)",
        },
        brand: {
          red: "var(--brand-red)",
          "red-ink": "var(--brand-red-ink)",
          instagram: "#e1306c",
          facebook: "#1877f2",
          linkedin: "#0a66c2",
          tiktok: "#0d0d0d",
        },
      },
      // Shape lock: surfaces 12px, controls 8px. Nothing else is offered.
      borderRadius: {
        surface: "var(--r-surface)",
        control: "var(--r-control)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        mask: "var(--ease-mask)",
      },
    },
  },
  plugins: [typography],
};
export default config;
