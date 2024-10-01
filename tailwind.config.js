/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        desktop: "1200px",
        tablet: "1024px",
        mobile: "800px",
      },
      colors: {
        border: "hsla(var(--border))",
        input: "hsla(var(--input))",
        ring: "hsla(var(--ring))",
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        primary: {
          DEFAULT: "hsla(var(--primary))",
          foreground: "hsla(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary))",
          foreground: "hsla(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsla(var(--tertiary))",
          black: "hsla(var(--black))",
          black50: " hsla(0, 11%, 22%, 0.5)",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsla(var(--muted))",
          foreground: "hsla(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsla(var(--popover))",
          foreground: "hsla(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsla(var(--card))",
          foreground: "hsla(var(--card-foreground))",
        },
        gray: {
          DEFAULT: "hsla(var(--accent-gray))",
        },
        accent: {
          gray: {
            DEFAULT: "hsla(var(--accent-gray))",
          },
        },
      },
      fontSize: {
        xs: "13px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "25px",
        "2xl": "31px",
        "3xl": "36px",
        overline: "10px",
      },
      borderRadius: {
        xs: "calc(var(--radius) - 6px)",
        sm: "calc(var(--radius) - 4px)",
        md: "var(--radius)",
        lg: "calc(var(--radius) + 4px)",
      },
      gap: {
        sm: "15px",
        md: "24px",
      },
      space: {
        sm: "15px",
        md: "24px",
      },
      padding: {
        sm: "10px",
        md: "16px",
        lg: "32px",
      },
      margin: { sm: "10px", md: "16px", lg: "32px" },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [],
};
