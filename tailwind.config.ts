import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: '#C92071',
        secondary: '#B5B6F2',
        tertiary: '#991956',
        error: '#EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',
        darkGray: '#1F1F1F',
        darkGray2: '#474747',
        darkGray3: '#666666',
        lightGray: '#8F8F8F',
        lightGray2: '#CCCCCC',
        lightGray3: '#F5F5F5',
        white: '#FFFFFF',
        white2: '#F9F8FE',
        productBlue: '#D8E3F2',
        productOff: '#E7FF86',
        productBg: '#E2E3FF',
        productBg1: '#FFE8BC',
        productBg2: '#FFC0BC',
        productBg3: '#DEC699',
        productBg4: '#E8DFCF',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

export default config
