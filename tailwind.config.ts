import type { Config } from 'tailwindcss'

const config: Config = {
  plugins: [],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: '976px',
      md: '768px',
      sm: '480px',
      xl: '1440px',
      'lg-md': '1066px',
      'no-hover': { raw: '(hover: none)' },
      'global-hover': { raw: '(hover: hover)' },
    },
    extend: {
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
      fontWeight: {
        weight400: '400',
        weight500: '500',
        weight600: '600',
        weight700: '700',
      },
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        blue: {
          500: "#2b77e7",
        },
        black: {
          500: "#1D2235",
          DEFAULT: "#000",
        },
      },
      fontSize: {
        lg: ['18px', { lineHeight: '24px' }],
        md: ['16px', { lineHeight: '24px' }],
        sm: ['14px', { lineHeight: '24px' }],
        xl: ['20px', { lineHeight: '36px' }],
        xs: ['12px', { lineHeight: '16px' }],
        xxl: ['26px', { lineHeight: '36px' }],
      },
    },
  },
}

export default config
