import Component from '@glimmer/component';

const NUMBER_OF_PRIMARY_POSTS = 2;

/**
 * Renders a predefined layout of posts as "cards". The first 2 posts are determined
 * to be the most important and are displayed larger than the rest. The remaining posts
 * are rendered as curated-post
 *
 * @param {object[]} posts - the list of posts to render
 * @param {function} onLikePost - callback to like/unlike a single post
 */
export default class CuratedPosts extends Component {
  get primaryBlogPosts() {
    return this.args.posts.reduce((acc, post) => {
      return acc.length < NUMBER_OF_PRIMARY_POSTS ? [...acc, post] : acc;
    }, []);
  }

  get curatedPosts() {
    const primaryBlogPosts = this.primaryBlogPosts;
    return this.args.posts.filter((post) => !primaryBlogPosts.includes(post));
  }
}
