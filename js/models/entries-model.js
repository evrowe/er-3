/* globals App, Ember */
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

        var entries = [],
            i = 0;

        for (i = 0; i < data.length; i++) {

          entries.push(data[i]);
        }

        // filter items by category
        if ( options && options.category ) {

          entries = entries.filterBy('category', options.category);
        }

        // filter items by tag
        if ( options && options.tag ) {

          entries = entries.filter(function(item) {

            if ( item.tags.indexOf(options.tag) !== -1 ) {

              return true;
            }
          });
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