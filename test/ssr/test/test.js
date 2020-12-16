const chai = require('chai');
chai.use(require('chai-http'));
chai.use(require('chai-match'));

const {JSDOM} = require("jsdom");

const {expect} = chai

describe('ssr', () => {
  it('should contains 10 heading and paragraph', (done) => {

    chai.request('http://localhost:3000')
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;

        const dom = new JSDOM(res.text, {url: 'http://localhost:3000'},);
        const element = dom.window.document.querySelector(".vue-horizontal .v-hl-container");

        element.childNodes.forEach(value => {
          expect(value.textContent).to.match(/Heading [0-9] Paragraph [0-9]/);
        })

        expect(element.textContent).to.match(/(Heading [0-9] Paragraph [0-9]){9}/);

        done();
      });
  });
});
