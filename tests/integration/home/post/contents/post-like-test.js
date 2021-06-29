import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import sinon from 'sinon';
import click from '@ember/test-helpers/dom/click';

const TEMPLATE = hbs`
    <Home::Post::Contents::PostLike
      @isPostLiked={{this.isPostLiked}}
      @onLikePost={{this.onLikePost}}
    />
  `;

module('Integration | component | post-like', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onLikePost = sinon.stub();
  });

  test('it renders the liked state', async function (assert) {
    this.isPostLiked = true;

    await render(TEMPLATE);

    assert
      .dom('[data-test-post-like]')
      .hasClass('post-like--liked', 'it should have the correct class');
  });

  test('it renders the unliked state', async function (assert) {
    this.isPostLiked = false;

    await render(TEMPLATE);

    assert
      .dom('[data-test-post-like]')
      .hasClass('post-like--not-liked', 'it should have the correct class');
  });

  test('it invokes the onLikePost callback', async function (assert) {
    this.isPostLiked = true;

    await render(TEMPLATE);

    assert.notOk(this.onLikePost.calledOnce, 'callback not invoked yet');

    await click('[data-test-post-like]');

    assert.ok(this.onLikePost.calledOnce);
  });
});
