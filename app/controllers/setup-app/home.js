import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class HomeController extends Controller {
  /**
   * Handles toggling isLikedByUser and saving the Post record by making an api call.
   * @param {object} post - the Post record to update
   */
  @action
  handleLikePost(post) {
    post.isLikedByUser = !post.isLikedByUser;
    post.save();
  }
}
