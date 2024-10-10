/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      black: '#000000',
      white: '#f6f6f6',
      red: '#D6173A',
      gray: {
        10: '#F3F4F6',
        50: '#6B7280',
        80: '#111927',
      },
      purple: {
        10: '#F4ECFC',
        30: '#eac1f9',
        50: '#760DDE',
      },
      yellow: {
        50: '#FFD400',
      },
      blue: {
        10: '#FAF9FF',
      },
      'sky-blue': {
        50: '#8eeefd',
      },
      green: {
        50: '#98f49b',
      },
      orange: {
        50: '#facf8f',
      },
      pink: {
        50: '#f8b9f2',
      },
    },
  },
};
