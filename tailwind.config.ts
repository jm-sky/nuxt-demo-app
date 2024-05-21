import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    variables: {
      '.bg-gradient-radial': {
        'gradient-shape': {
          DEFAULT: 'circle',
        },
        'gradient-position': {
          DEFAULT: 'bottom',
        },
      },
    },
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-shape) at var(--gradient-position), var(--tw-gradient-stops))',
      },
      colors: {
        secondary: {
          ...colors.violet,
          DEFAULT: colors.violet[500],
        },
      },
    },
  },
  plugins: [
    require('@mertasan/tailwindcss-variables'),
  ],
}
