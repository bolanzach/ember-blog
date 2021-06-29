import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import sinon from 'sinon';

const TEMPLATE = hbs`
    <Home::CuratedPosts
      @posts={{this.posts}}
      @onLikePost={{this.onLikePost}}
    />
  `;

module('Integration | component | curated-posts', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the posts', async function (assert) {
    this.posts = [
      { title: 'mock' },
      { title: 'mock' },
      { title: 'mock' },
      { title: 'mock' },
      { title: 'mock' },
    ];
    this.onLikePost = sinon.stub();

    await render(TEMPLATE);

    assert
      .dom('[data-test-base-post]')
      .exists({ count: 5 }, '5 total posts should render');
    assert
      .dom('[data-test-primary-post]')
      .exists({ count: 2 }, '2 primary posts should render');
    assert
      .dom('[data-test-curated-post]')
      .exists({ count: 3 }, '3 curated posts should render');
  });
});
