import Component from '@glimmer/component';

/**
 * Renders a list of posts as basic-posts, in chronological order, based on when
 * the post was published.
 *
 * @param {object[]} posts - the posts to render
 */
export default class CuratedPost extends Component {
  get orderedPosts() {
    return this.args.posts?.sortBy('publishedTimestamp').reverse();
  }
}
