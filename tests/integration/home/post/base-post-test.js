import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | component | base-post', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders yielded content', async function (assert) {
    this.post = {};
    this.onLikePost = sinon.stub();

    await render(hbs`
      <Home::Post::BasePost @post={{this.post}} @onLikePost={{this.onLikePost}} id="post" as |post|>
        {{#if post.isContent}}
          <div id="test"></div>
        {{/if}}
        {{#if post.isFooterContent}}
          <div id="footer-test"></div>
        {{/if}}
      </Home::Post::BasePost>
    `);

    assert.dom('[data-test-base-post]').exists('it should render');
    assert.dom('[data-test-post-footer]').exists('it should render the footer');
    assert.dom('#post').exists('it should splattribute');
    assert.dom('#test').exists('it should render the yielded content');
    assert
      .dom('#footer-test')
      .exists('it should render the yielded footer content');
  });
});
