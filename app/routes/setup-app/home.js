import Route from '@ember/routing/route';

/**
 * The homepage
 */
export default class extends Route {
  /**
   * Fetches the blogSummary schema. There is a single blogSummary per user which is
   * constructed by the backend using a *very* complex and proprietary algorithm that
   * determines which blog posts are most relevant to the user.
   *
   * @returns blogSummary model
   */
  async model() {
    const blogSummary = await this.store.queryRecord('blog-summary', {
      userId: '123',
    });

    return { blogSummary };
  }
}
