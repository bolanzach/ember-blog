import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';

/**
 * Not as important as a primary-post, but more important than a basic-post
 *
 * This is the most complex post however as it shifts how it renders based on
 * the screen width breakpoints. (Except for hovering) most of the dynamic layout
 * is handled through CSS
 */
export default class CuratedPost extends Component {
  // Track hovering state to toggle multiple element classes
  @tracked isHovering = false;

  /**
   * Sanitize the src to place into an html attribute
   */
  get backgroundImageUrl() {
    return htmlSafe(this.args.post.imageSrc);
  }

  @action
  handleMouseEnter() {
    this.isHovering = true;
  }

  @action
  handleMouseExit() {
    this.isHovering = false;
  }
}
