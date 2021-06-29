import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  // Fetch and include related data. This incldues hasMany Models in the response
  alwaysIncludeLinkageData: true,
});
