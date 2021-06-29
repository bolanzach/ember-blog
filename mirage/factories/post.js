import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
import { getImageFromCDN, getRandomDate } from '../utils';

export default Factory.extend({
  title() {
    return faker.lorem.sentence(8, 3);
  },

  content() {
    return faker.lorem.paragraphs(8);
  },

  imageSrc() {
    return getImageFromCDN();
  },

  publishedTimestamp() {
    return getRandomDate();
  },

  isLikedByUser() {
    return false;
  },
});
