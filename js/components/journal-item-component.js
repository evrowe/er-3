/* globals App, Ember */
/**
 * Regular Journal Items
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Component
 */
App.JournalItemComponent = Ember.Component.extend({
  /**
   * Is this the last item in the list? Not being used in the list display curretnly.
   *
   * @memberof App.JournalItemComponent
   * @instance
   * @return {boolean}
   */
  isLast: Ember.computed('index', 'listSize', function(){

    var output = false;

    if ( this.get('index') === (this.get('listSize') - 1) ) {

      output = true;
    }

    return output;
  }),
  /**
   * Override the default tag name
   *
   * @memberof App.JournalItemComponent
   * @instance
   * @type {string}
   */
  tagName: 'article'
});