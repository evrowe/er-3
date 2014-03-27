/**
 * Ember.js - A framework for creating <strong>ambitious</strong> web applications
 *
 * @external Ember
 * @see {@link http://emberjs.com/api/}
 */

/**
 * Ember's Application class
 *
 * @name external:Ember.Application
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Application.html}
 */

/**
 * Ember's Route class
 *
 * @name external:Ember.Route
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Route.html}
 */

/**
 * The instance of Ember.Application used throughout the app
 *
 * @namespace
 * @name App
 * @extends external:Ember.Application
 */
App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route("about");
  this.resource("caseStudies", {path: "/case-studies"}, function() {
    this.route("study", {path: "/case-studies/study:id" });
  });
  this.route("contact");
  this.resource("journal", function() {
    this.route("entry");
  });
});

App.JournalRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("journal");
  }
});

App.EntryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("entry", params.entry_id);
  }
});

/**
 * An Ember route for the application itself
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
