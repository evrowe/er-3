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

    this.render('journal');

  }

});


/**
 * The journal model
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Object
 */

App.Entries = Ember.Object.extend();

App.Entries.reopenClass({
  /**
   * @memberof App.Journal
   * @instance
   * @param {object} [options] An object containing optional filter parameters
    * @param {string} [category] A category to filter by
    * @param {number} [page] Which page of posts to return
   * @returns {Array.<Object>}
   */
  findAll: function(options) {

    return $.ajax('content/entries.json').then(

      // Success
      function(data) {

        /*var endEntryIndex = 0,
            i = 0,
            entries = [],
            entriesPerPage = 5, // TODO: tie this to an app property
            startPostIndex = 0;*/

        var entries = [];

        for (i = 0; i < data.length; i++) {

          entries.push(data[i]);

        }

        return entries;

      },

      // Fail
      function(data) {

        console.log(data);
        console.error('App.Journal.findAll: AJAX error');

      }

    );

  }

});


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

  },

  /**
   * Render the journal entry template
   *
   * @memberof App.JournalEntryRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('entry');

  }

});


/**
 * The entry model
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Object
 */

App.Entry = Ember.Object.extend();

App.Entry.reopenClass({
  /**
   * @memberof App.JournalEntry
   * @instance
   * @param {string} id The model's ID
   * @returns {Object}
   */
  find: function(id) {

    try {

      if (id) {

        return $.ajax('content/entries/' + id + '.json').then(

          // Success
          function (data) {

            //App.setPageTitle(data.title);

            return data;

          },

          // Fail
          function (data) {

            console.error('App.Entry.find: AJAX error');

          }

        );

      } else {

        throw 'Entry ID missing';

      }

    } catch(e) {

      console.error('App.Entry.find:');
      console.error(e);

    }

  }

});