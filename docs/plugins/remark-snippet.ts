import path from "path";
import fs from "fs";

import u from "unist-builder";
import visit from "unist-util-visit";
import {Transformer} from 'unified';
import {Code, Parent} from 'mdast';

function importSnippet(): Transformer {
  return function transformer(tree, file) {
    function visitor(node: Code, index: number, parent: Parent): void {
      if (!node.lang) {
        return
      }

      const match = /vue\[(snippets\/([a-z-]+\/)*(.+)(\.vue))]/.exec(node.lang)
      if (!match) {
        return;
      }

      const snippetPath = path.resolve(file.cwd, `content/${match[1]}`)
      const content = fs.readFileSync(snippetPath, 'utf-8')
      node.value = content.trim()

      const component = u('div', [
        u('html', {value: `<snippet-mock-browser>`}),
        u('html', {
          value: `<${match[3]}>`
        }),
        u('html', {
          value: `</${match[3]}>`
        }),
        u('html', {value: `<template v-slot:snippet>`}),
        node,
        u('html', {value: `</template>`}),
        u('html', {value: `</snippet-mock-browser>`}),
      ]);

      // @ts-ignore
      parent.children.splice(index, 1, component);
    }

    // @ts-ignore
    visit(tree, 'code', visitor);
  };
}

module.exports = importSnippet;
