import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, waitUntil } from '@ember/test-helpers';

const TEMPLATE = hbs`
    <Time::TimeElapsed
      @initialTime={{this.initialTime}}
    />
  `;

module('Integration | component | time-elapsed', function (hooks) {
  setupRenderingTest(hooks);

  test('the displayed elapsed time updates over time', async function (assert) {
    this.initialTime = Date.now();

    await render(TEMPLATE);

    assert.dom('[data-test-time-elapsed]').hasAnyText();

    const initialValue = find('[data-test-time-elapsed]').textContent;

    await waitUntil(
      () => find('[data-test-time-elapsed]').textContent !== initialValue,
      { timeout: 2000 }
    );

    assert.ok('it should update the value');
  });
});
