/* globals App, Ember */
/**
 * An Ember route for a single journal entry
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.JournalEntryRoute = Ember.Route.extend({

  // Overrides
  /**
   * Specify the route's model
   *
   * @memberof App.JournalEntryRoute
   * @instance
   * @returns {Array.<EntryItem>}
   */
  model: function(params) {

    return App.Entry.find(params.entry_id);
  }
});