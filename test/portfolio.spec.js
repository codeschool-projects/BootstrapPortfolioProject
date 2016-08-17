// Libraries
const fs = require('fs');
const jsdom = require('jsdom');
const { assert } = require('chai');

// HTML
const srcHtml = fs.readFileSync('./src/index.html');
const doc = jsdom.jsdom(srcHtml);

// Tests
describe('The webpage', () => {

  /**
   * STEP 1: NAVBAR
   */
  describe('navbar', () => {
    let navbar;

    beforeEach(
      () => navbar = doc.querySelector('.navbar')
    );

    it('should exist', () => {
      assert.isOk(navbar);
    });

    it('should have changed the contents of `.navbar-brand`', () => {
      const el = navbar.querySelector('.navbar-brand');
      assert.isOk(el);
      assert.notEqual('brand', el.textContent.trim().toLowerCase());
    });

    it('should have have changed menu items', () => {
      const menuItems = Array.from(navbar.querySelectorAll('.nav li a'));
      assert.isAtLeast(menuItems.length, 2);

      // Does home link exist?
      const homeLink = menuItems.find(el => /home/i.test(el.textContent));
      assert.isOk(homeLink);

      // Does about link exist?
      const aboutLink = menuItems.find(el => /about/i.test(el.textContent));
      assert.isOk(aboutLink);
    });
  });

  /**
   * STEP 2: CAROUSEL
   */
  describe('carousel', () => {

    let carousel;

    beforeEach(() => carousel = doc.querySelector('.carousel'));

    it('should exist', () => {
      assert.isOk(carousel);
    });

    it('should have at least 3 items and have them modified', () => {
      const items = Array.from(carousel.querySelectorAll('.item'));
      assert.isAtLeast(items.length, 3);

      items.forEach(item => {

        // Does each item contain an `<h1>` tag?
        const h1 = item.querySelector('h1');
        assert.isOk(h1);
        assert.notEqual(h1.textContent.trim(), 'Example headline');

        // Does each item contain an `<p>` tag?
        const p = item.querySelector('p');
        assert.isOk(p);
        assert.isNotOk(p.textContent.trim().startsWith('Cras justo odio'));
      });
    });
  });

  /**
   * STEP 3: GRID SYSTEM
   */
  describe('marketing grid', () => {
    let marketing;

    beforeEach(() => marketing = doc.querySelector('.marketing'));

    it('should exist', () => {
      assert.isOk(marketing);
    });

    it('should have a cointainer', () => {
      const el = marketing.querySelector('.container');
      assert.isOk(el);
    });

    it('should have a row', () => {
      const el = marketing.querySelector('.container .row');
      assert.isOk(el);
    });

    describe('columns', () => {
      let columns;

      beforeEach(() => columns = Array.from(marketing.querySelectorAll('.row .col-sm-4, .row .col-md-4, .row .col-lg-4')))

      it('should exist at least 3', () => {
        assert.equal(columns.length, 3);
      });

      it('should have an icon with the glyphicon icon class', () => {
        columns.forEach(column => {
          const icon = column.querySelector('.glyphicon');
          const iconClasses = Array.from(icon.classList);
          assert.isOk(icon);
          assert.isOk(
            iconClasses.find(className => className.startsWith('glyphicon-'))
          );
        });
      });

      it('should have a non-empty `<h2>` title', () => {
        columns.forEach(column => {
          const h2 = column.querySelector('h2');
          assert.isOk(h2);
          assert.isOk(h2.textContent.trim() !== '');
        })
      });

      it('should have a non-empty paragraph', () => {
        columns.forEach(column => {
          const p = column.querySelector('p');
          assert.isOk(p);
          assert.isOk(p.textContent.trim() !== '');
        });
      });
    });
  });


  /**
   * STEP 3: GRID SYSTEM
   */
  describe('footer', () => {
    let footer;
    beforeEach(() => footer = doc.querySelector('.footer'));

    it('should exist', () => {
      assert.isOk(footer);
    });

    it('should have a non-empty `<h3>` title', () => {
      let el = footer.querySelector('h3');
      assert.isOk(el);
      assert.isOk(el.textContent.trim() !== '');
    });

    it('should have a non-empty `<p>` tag', () => {
      let el = footer.querySelector('p');
      assert.isOk(el);
      assert.isOk(el.textContent.trim() !== '');
    });
  });

  /**
   * STEP 5: ELEMENTS THAT SHOULD BE REMOVED
   */
  describe('will have removed and', () => {
    it('should not contain the `.header` element', () => {
      const el = doc.querySelector('body > .header');
      assert.isNotOk(el);
    });

    it('should not contain the `.contact` element', () => {
      const el = doc.querySelector('body > .contact');
      assert.isNotOk(el);
    });

    it('should not contain the `.tagline` element', () => {
      const el = doc.querySelector('body > .tagline');
      assert.isNotOk(el);
    });
  });

});
