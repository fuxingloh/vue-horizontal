export default {
  target: 'static',
  head: {
    title: 'ssg',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],
}
