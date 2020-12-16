const chai = require('chai');
chai.use(require('chai-match'));

const fs = require('fs');
const {JSDOM} = require("jsdom");

const {expect} = chai

describe('ssg', () => {
  it('should contains 10 heading and paragraph', () => {
    const file = fs.readFileSync('dist/index.html', 'utf8');

    const dom = new JSDOM(file, {url: 'http://localhost:3000'},);
    const element = dom.window.document.querySelector(".vue-horizontal .v-hl-container");
    element.childNodes.forEach(value => {
      expect(value.textContent).to.match(/Heading [0-9] Paragraph [0-9]/);
    })

    expect(element.textContent).to.match(/(Heading [0-9] Paragraph [0-9]){9}/);
  });
});
