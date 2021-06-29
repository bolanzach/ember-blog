import Route from '@ember/routing/route';

/**
 * Route for viewing a single Post
 */
export default class extends Route {
  async model({ id }) {
    const post = await this.store.queryRecord('post', { id });

    return { post };
  }
}
