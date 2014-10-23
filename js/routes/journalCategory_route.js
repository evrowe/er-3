/**
 * An Ember route for the journal entries list
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.JournalCategoryRoute = Ember.Route.extend({

  // Overrides
  /**
   * Specify the route's model
   *
   * @memberof App.JournalCategoryRoute
   * @instance
   * @returns {Array.<EntryItem>}
   */
  model: function(params) {

    return App.Entries.findAll({
      category: params.category_id
    });

  },

  /**
   * Render the journal index template
   *
   * @memberof App.JournalCategoryRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('journalIndex');

  }

});