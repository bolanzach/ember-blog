import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

/**
 * A simple wrapper to "lazy load" an image and render a placeholder while the
 * request is in flight.
 *
 * An immediate next step would be to add an onError handler
 */
export default class LazyImage extends Component {
  @tracked _isImageLoaded = false;

  /**
   * Used to initialize the image when this component receives the image src from args.
   * This always returns false so that isImageLoaded is the source of truth.
   */
  get initialImageState() {
    if (this._isImageLoaded) {
      return true;
    }

    const image = new Image();
    image.src = this.args.src;
    image.onload = this.onLoad.bind(this);
    return false;
  }

  /**
   * Whether the image is ready and loaded.
   */
  get isImageLoaded() {
    return this._isImageLoaded;
  }

  onLoad() {
    this._isImageLoaded = true;
  }
}
