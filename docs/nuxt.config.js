import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#202D39',
  },
  css: [
    'assets/css/main.css',
  ],
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/google-analytics', {
      id: 'UA-9F84Z4QRLF',
    }],
  ]
})
