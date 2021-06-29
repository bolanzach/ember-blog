import Model, { attr, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
  @attr userId;
  @hasMany('post') featuredPosts;
  @hasMany('post') posts;
}
