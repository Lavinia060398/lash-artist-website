import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from Figma ("Eyelashes Artist Website" → 💌 3.2 – UI Design).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        cream: "#FCF3EA", // Backgound color
        ink: "#342B28", // H1 color
        body: "#5F5F5F", // ph color
        "body-dark": "#49423F", // Paragraph/dark
        "body-alt": "#373737",
        accent: {
          DEFAULT: "#664229", // Accent color
          hover: "#4B2F1C", // ~3-4 nuanțe mai închis, pentru hover pe butoanele principale
        },
        line: "#BEB5A4", // light grey
        "footer-text": "#DED5CC",
        "footer-muted": "#B69279",
        "logo-tint": "#FFECD3",
        alert: "#D20000",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      maxWidth: {
        container: "1170px",
      },
      fontSize: {
        btn: ["18px", { lineHeight: "1.39" }],
      },
      boxShadow: {
        "inset-soft": "inset 0 2px 10px 0 rgba(52, 43, 40, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
