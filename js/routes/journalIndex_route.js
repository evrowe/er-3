/**
 * An Ember route for the journal entries list
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.JournalIndexRoute = Ember.Route.extend({

  // Overrides
  /**
   * Specify the route's model
   *
   * @memberof App.JournalRoute
   * @instance
   * @returns {Array.<EntryItem>}
   */
  model: function() {

    return App.Entries.findAll();

  },

  /**
   * Render the journal index template
   *
   * @memberof App.JournalRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('journalIndex');

  }

});