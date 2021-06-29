import { module, only } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import sinon from 'sinon';

const TEMPLATE = hbs`
    <Home::Posts
      @posts={{this.posts}}
      @onLikePost={{this.onLikePost}}
    />
  `;

module('Integration | component | posts', function (hooks) {
  setupRenderingTest(hooks);

  only('it renders the basic-posts in order', async function (assert) {
    this.posts = [
      { title: 'second', publishedTimestamp: 888 },
      { title: 'fifth', publishedTimestamp: 111 },
      { title: 'third', publishedTimestamp: 777 },
      { title: 'fourth', publishedTimestamp: 333 },
      { title: 'first', publishedTimestamp: 999 },
    ];
    this.onLikePost = sinon.stub();

    await render(TEMPLATE);

    assert
      .dom('[data-test-basic-post]')
      .exists({ count: 5 }, '5 basic posts should render');

    const [first, second, third, fourth, fifth] = findAll(
      '[data-test-basic-post]'
    );

    assert.dom('[data-test-basic-post-header]', first).hasText('first');
    assert.dom('[data-test-basic-post-header]', second).hasText('second');
    assert.dom('[data-test-basic-post-header]', third).hasText('third');
    assert.dom('[data-test-basic-post-header]', fourth).hasText('fourth');
    assert.dom('[data-test-basic-post-header]', fifth).hasText('fifth');
  });
});
