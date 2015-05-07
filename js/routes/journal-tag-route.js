/* globals App, Ember */
/**
 * An Ember route for the journal entries list
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.JournalTagRoute = Ember.Route.extend({
  // Overrides
  /**
   * Specify the route's model
   *
   * @memberof App.JournalTagRoute
   * @instance
   * @returns {Array.<EntryItem>}
   */
  model: function(params) {

    return App.Entries.findAll({
      tag: params.tag_id
    });
  },
  /**
   * Render the journal index template
   *
   * @memberof App.JournalTagRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('journalIndex');
  }
});