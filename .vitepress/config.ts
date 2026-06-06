import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Game Rules',
  description: 'Board game rulebooks',
  base: '/gamerule/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Games',
        items: [
          { text: 'Ark Nova', link: '/ark-nova' },
          { text: 'Beer & Bread', link: '/beer-and-bread' },
          { text: 'Challengers Beach Cup', link: '/challengers-beach-cup' },
          { text: 'Living Forest Duel', link: '/living-forest-duel' },
          { text: 'Stardew Valley', link: '/stardew-valley' },
          { text: 'Starfarers Duel', link: '/starfarers-duel' },
          { text: 'White Castle Duel', link: '/white-castle-duel' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
  },
})
