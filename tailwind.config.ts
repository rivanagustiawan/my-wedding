import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        podkova: ["Podkova"],
        podkovaBold: ["PodkovaBold", "serif"],
        playball: ["Playball"],
        poorstory: ["PoorStory"],
        poppinLight: ["PoppinLight"],
        poppinRegular: ["PoppinRegular"],
        poppinSemibold: ["PoppinSemibold"],
      },
      colors: {
        "primary": '#A48DE9'
      }
    },
    screens: {
      'ph-1': '360px',
      'ph-2': '390px',
      'tab': '648px',
      'tab-2': '768px',
      'desk': '1028px',
    },
  },
} satisfies Partial<Config>
