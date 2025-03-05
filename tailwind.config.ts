import type { Config } from "tailwindcss";

export const flowmateColors: { [key: string]: { [key: string]: string } } = {
  primary: {
    'tint-1': "#F4EEFF",
    'tint-2': "#E3D8F8",
    'tint-3': "#C6B1F1",
    'tint-4': "#AA8BEB",
    'tint-5': "#8D64E4",
    'tint-6': "#713DDD",
  },
  secondary: {
    'tint-1': "#E5EFFF",
    'tint-2': "#CCE0FF",
    'tint-3': "#99C0FF",
    'tint-4': "#66A1FF",
    'tint-5': "#3381FF",
    'tint-6': "#0062FF",
  },
  greyscale: {
    '0': "#F8F9FB",
    '25': "#F8F9FB",
    '50': "#ECEFF3",
    '100': "#DFE1E6",
    '200': "#C1C7CF",
    '300': "#A4ABB8",
    '400': "#808897",
    '500': "#666D80",
    '600': "#353849",
    '700': "#272835",
    '800': "#1A1B25",
    '900': "#0D0D12",
  },
  sky: {
    '0': "#EFFBFF",
    '25': "#D1F0F9",
    '50': "#7EDCF1",
    '100': "#33CFFF",
    '200': "#106A97",
    '300': "#0C4D6E",
  },
  success: {
    '0': "#EFFEFA",
    '25': "#DDF2EE",
    '50': "#9DE0D3",
    '100': "#40C4AA",
    '200': "#287F6E",
    '300': "#174E43",
  },
  warning: {
    '0': "#FFF6E0",
    '25': "#F9ECCB",
    '50': "#FBD982",
    '100': "#FFBD4C",
    '200': "#956321",
    '300': "#5B3D1E",
  },
  error: {
    '0': "#FEEFF2",
    '25': "#FADAE1",
    '50': "#ED8296",
    '100': "#DF1C41",
    '200': "#95122B",
    '300': "#710E21",
  }
}

const config: Config = {
  content: ["./src/app/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors:flowmateColors,
      fontFamily: {
        interTight: ["var(--font-interTight)", "sans-serif"],
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
};

export default config;
