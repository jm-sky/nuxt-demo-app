import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at botom, var(--tw-gradient-stops))',
      },
      colors: {
        primary: colors.blue,
      },
    },
  },
}
