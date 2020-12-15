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
})
