import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

/**
 * Renders a message indicating how much time has elapsed since the provided initialTime.
 * The message automatically updates about once every second.
 *
 * @param {number} initialTime - will display the time elapsed since this time
 */
export default class TimeElapsed extends Component {
  @service timeElapsed;

  get formattedTime() {
    return this.timeElapsed.getFormattedElapsedTime(this.args.initialTime);
  }
}
