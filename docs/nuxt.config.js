import theme from '@nuxt/content-theme-docs'
import path from "path";
import u from "unist-builder";

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
        ['remark-code-import-replace', {
          baseDir: 'content/snippets',
          replace: (node, meta, {u}) => {
            const padding = meta.padding ?? '2rem'
            const component = meta.file.name

            return [
              u('html', {value: `<snippet-mock-browser>`}),
              u('html', {value: `<div style="padding: ${padding}">`}),
              u('html', {value: `<${component}>`}),
              u('html', {value: `</${component}>`}),
              u('html', {value: `</div>`}),
              u('html', {value: `<template v-slot:snippet>`}),
              node,
              u('html', {value: `</template>`}),
              u('html', {value: `</snippet-mock-browser>`}),
            ]
          }
        }],
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
