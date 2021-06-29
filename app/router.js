import EmberRouter from '@ember/routing/router';
import config from 'ember-blog/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('setup-app', { path: '/' }, function () {
    this.route('home', { path: '/' });
    this.route('post', { path: 'post/:id' }, function () {});
  });
});
