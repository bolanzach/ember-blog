import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

const ONE_SECOND_IN_MS = 1000;

export default class TimeElapsedService extends Service {
  // Updates every second in order to track the elapsed time since booting the app
  @tracked _timeElapsed = Date.now();

  // The interval to cancel
  _intervalId;

  constructor() {
    super(...arguments);

    this._intervalId = window.setInterval(() => {
      this._timeElapsed += ONE_SECOND_IN_MS;
    }, ONE_SECOND_IN_MS);
  }

  /**
   * Returns how much time has elapsed since the given fixedOriginalTime. As this method
   * itself is autotracked and updates every second, consumers can use this method within
   * their own autotracked getters in order to have an ever increasing elapsed time counter.
   * The time accuracy is not guaranteed, but is about a second.
   *
   * @param {number} fixedOriginalTime - calculate the time elapsed since this point in time
   * @returns {string} formatted time since the fixedOriginalTime
   */
  getFormattedElapsedTime(fixedOriginalTime) {
    const millisecondsSinceFixedTime = this._timeElapsed - fixedOriginalTime;
    return this.formatTime(millisecondsSinceFixedTime);
  }

  /**
   * Formats the given milliseconds into minutes, hours, days, etc.
   *
   * !NOTE: This is really only a stub. An actual implementation would probably offload
   * to a library for better accuracy.
   *
   * @param {number} milliseconds
   * @returns {string}
   */
  formatTime(milliseconds) {
    if (isNaN(milliseconds)) {
      return '';
    }

    if (milliseconds < ONE_SECOND_IN_MS) {
      return 'now';
    }

    const seconds = Math.round(milliseconds / ONE_SECOND_IN_MS);
    if (seconds < 60) {
      return `${seconds} ${seconds < 2 ? 'second' : 'seconds'}`;
    }

    const minutes = Math.round(seconds / 60);
    if (minutes < 60) {
      return `${minutes} ${minutes < 2 ? 'minute' : 'minutes'}`;
    }

    const hours = Math.round(minutes / 60);
    if (hours < 24) {
      return `${hours} ${hours < 2 ? 'hour' : 'hours'}`;
    }

    const days = Math.round(hours / 24);
    if (days < 30) {
      return `${days} ${days < 2 ? 'day' : 'days'}`;
    }

    // starting to get less accurate
    const months = Math.round(days / 30);
    return `${months} ${months < 2 ? 'month' : 'months'}`;

    // etc...
  }

  willDestroy() {
    window.clearInterval(this._intervalId);
  }
}
