module.exports = {
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1536px",
        '3xl': "1680px",
        '4xl': "1920px",
      }
    }
  },
  purge: {
    content: [
      'content/**/*.md',
      'content/snippets/**/*.vue',
    ]
  },
}
