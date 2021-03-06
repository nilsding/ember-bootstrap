import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-dropdown/menu/item', 'Integration | Component | bs dropdown/menu/item', {
  integration: true
});

test('it has correct markup', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#bs-dropdown/menu/item}}
      template block text
    {{/bs-dropdown/menu/item}}
  `);

  assert.equal(findAll('li').length, 1, 'renders as <li> element');
  assert.equal(find('*').textContent.trim(), 'template block text');
});
