/* globals App, Ember */
/**
 * An Ember route for the journal entries list
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.JournalRoute = Ember.Route.extend({

  // Overrides
  /**
   * Specify the route's model
   *
   * @memberof App.JournalIndexRoute
   * @instance
   * @returns {Array.<EntryItem>}
   */
  model: function() {

    return App.Entries.findAll();
  }
});