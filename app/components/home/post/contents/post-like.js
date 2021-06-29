import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * The Like/Unlike button
 *
 * @param {boolean} isPostLiked - whether the Post is liked
 * @param {function} onLikePost - callback for liking the post
 */
export default class PostLike extends Component {
  @action
  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    this.args.onLikePost();
  }
}
