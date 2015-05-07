/* globals App, Ember */
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
          function () {

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