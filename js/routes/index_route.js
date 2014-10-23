/**
 * An Ember route for the site's homepage
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.IndexRoute = Ember.Route.extend({
  // Overrides
  /**
   * Specify the route's model
   *
   * @memberof App.IndexRoute
   * @instance
   * @returns {Array.<EntryItem>}
   */
  model: function() {

    return App.Work.findAll();

  }

});