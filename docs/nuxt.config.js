import theme from '@nuxt/content-theme-docs'
import path from "path";

export default theme({
  docs: {
    primaryColor: '#202D39',
  },
  css: [
    'assets/css/main.css',
  ],
  plugins: [
    path.resolve(__dirname, 'plugins/gtag.client'),
  ],
  buildModules: [
    '@nuxt/typescript-build',
  ],
  content: {
    markdown: {
      remarkPlugins: [
        path.resolve(__dirname, 'plugins/remark-snippet.ts'),
      ],
    },
  },
  hooks: {
    'components:dirs': async (dirs) => {
      dirs.push({
        path: path.resolve(__dirname, 'content/snippets'),
        global: true
      })
    }
  }
})
