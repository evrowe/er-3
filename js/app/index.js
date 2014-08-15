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

/**
 * The work items model
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Object
 */

App.Work = Ember.Object.extend();

App.Work.reopenClass({
  /**
   * @memberof App.Work
   *
   * @instance
   * @param {object} options An object containing optional filter parameters
   * @returns {Array.<Object>}
   */
  findAll: function(options) {

    return $.ajax('content/work.json').then(

      // Success
      function(data) {

        var items = [];

        for (i = 0; i < data.length; i++) {

          items.push(data[i]);

        }

        return items;

      },

      // Fail
      function(data) {

        console.log(data);
        console.error('App.Work.findAll: AJAX error');

      }

    );

  }

});