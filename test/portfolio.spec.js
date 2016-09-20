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

    it('should exist @navbar', () => {
      assert.isOk(navbar, 'We need a `.navbar` element.');
    });

    it('should have changed the contents of `.navbar-brand` @navbar-brand', () => {
      const el = navbar.querySelector('.navbar-brand');
      assert.isOk(el, 'Our `.navbar` needs a `.navbar-brand` element.');
      assert.notEqual('brand', el.textContent.trim().toLowerCase(), 'The `.navbar-brand` element needs a text that is different than the default "Brand".');
    });

    it('should have have changed menu items @navbar-menu', () => {
      const menuItems = Array.from(navbar.querySelectorAll('.nav li a'));
      assert.isAtLeast(menuItems.length, 2, 'Our menu needs at least 2 `li` elements.');

      // Does home link exist?
      const homeLink = menuItems.find(el => /home/i.test(el.textContent));
      assert.isOk(homeLink, 'Our menu needs at least one link that reads "Home".');

      // Does about link exist?
      const aboutLink = menuItems.find(el => /about/i.test(el.textContent));
      assert.isOk(aboutLink, 'Our menu needs at least one link that reads "About".');
    });
  });

  /**
   * STEP 2: CAROUSEL
   */
  describe('carousel', () => {

    let carousel;

    beforeEach(() => carousel = doc.querySelector('.carousel'));

    it('should exist @carousel', () => {
      assert.isOk(carousel, 'We need a `.carousel` element.');
    });

    it('should have at least 3 items and have them modified @carousel-items', () => {
      const items = Array.from(carousel.querySelectorAll('.item'));
      assert.isAtLeast(items.length, 3, 'Our carousel needs at least 3 `.item` elements.');

      items.forEach(item => {

        // Does each item contain an `<h1>` tag?
        const h1 = item.querySelector('h1');
        assert.isOk(h1, 'Each carousel item needs an `h1` element.');
        assert.notEqual(h1.textContent.trim(), 'Example headline', 'Every `h1` inside the carousel items need a customized text content.');

        // Does each item contain an `<p>` tag?
        const p = item.querySelector('p');
        assert.isOk(p, 'Each carousel item needs a `p` element.');
        assert.isNotOk(p.textContent.trim().startsWith('Cras justo odio', 'Every `p` element inside carousel items need a customized text content.'));
      });
    });
  });

  /**
   * STEP 3: GRID SYSTEM
   */
  describe('marketing grid', () => {
    let marketing;

    beforeEach(() => marketing = doc.querySelector('.marketing'));

    it('should exist @marketing', () => {
      assert.isOk(marketing, 'We need a `.marketing` element.');
    });

    it('should have a cointainer @marketing', () => {
      const el = marketing.querySelector('.container');
      assert.isOk(el, 'Our `.marketing` element needs a `.container` element.');
    });

    it('should have a row @marketing', () => {
      const el = marketing.querySelector('.container .row');
      assert.isOk(el, 'Our marketing `.container` needs a `.row` element.');
    });

    describe('columns', () => {
      let columns;

      beforeEach(() => columns = Array.from(marketing.querySelectorAll('.row .col-sm-4, .row .col-md-4, .row .col-lg-4')))

      it('should exist at least 3 @marketing-columns', () => {
        assert.equal(columns.length, 3, 'Our `.row` element needs at least 3 column elements.');
      });

      it('should have an icon with the glyphicon icon class @marketing-columns', () => {
        columns.forEach(column => {
          const icon = column.querySelector('.glyphicon');
          const iconClasses = Array.from(icon.classList);
          assert.isOk(icon, 'Every marketing row column needs an icon.');
          assert.isOk(
            iconClasses.find(className => className.startsWith('glyphicon-')),
            'Our marketing icons needs a class that starts with `glaphicon-` to describe which icon graphic it should contain.'
          );
        });
      });

      it('should have a non-empty `<h2>` title @marketing-columns', () => {
        columns.forEach(column => {
          const h2 = column.querySelector('h2');
          assert.isOk(h2, 'Every marketing column needs an `h2` element.');
          assert.isOk(h2.textContent.trim() !== '', 'Our marketing column `h2` elements cannot be empty.');
        })
      });

      it('should have a non-empty paragraph @marketing-columns', () => {
        columns.forEach(column => {
          const p = column.querySelector('p');
          assert.isOk(p, 'Every marketing column needs a `p` element.');
          assert.isOk(p.textContent.trim() !== '', 'Our marketing column `p` elements cannot be empty.');
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

    it('should exist @footer', () => {
      assert.isOk(footer, 'We need a `.footer` element.');
    });

    it('should have a container @footer', () => {
      const el = footer.querySelector('.container');
      assert.isOk(el, 'We need a `.container` element inside our `footer`.');
    });

    it('should have a non-empty `<h3>` title @footer-elements', () => {
      let el = footer.querySelector('.container h3');
      assert.isOk(el, 'Our footer needs an `h3` element.');
      assert.isOk(el.textContent.trim() !== '', 'Our footer\'s `h3` element cannot be empty');
    });

    it('should have a non-empty `<p>` tag @footer-elements', () => {
      let el = footer.querySelector('.container p');
      assert.isOk(el, 'Our footer needs a `p` element.');
      assert.isOk(el.textContent.trim() !== '', 'Our footer\'s `p` element cannot be empty');
    });
  });

  /**
   * STEP 5: ELEMENTS THAT SHOULD BE REMOVED
   */
  describe('will have removed and', () => {
    it('should not contain the `.header` element @removal', () => {
      const el = doc.querySelector('body > .header');
      assert.isNotOk(el, 'Our old `.header` element needs to be removed.');
    });

    it('should not contain the `.contact` element @removal', () => {
      const el = doc.querySelector('body > .contact');
      assert.isNotOk(el, 'Our old `.contact` element needs to be removed.');
    });

    it('should not contain the `.tagline` element @removal', () => {
      const el = doc.querySelector('body > .tagline');
      assert.isNotOk(el, 'Our old `.tagline` element needs to be removed.');
    });
  });

});
