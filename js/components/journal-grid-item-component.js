/* globals App, Ember */
/**
 * Journal items with a grid display! These need special classes and an extra binding
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Component
 */
App.JournalGridItemComponent = Ember.Component.extend({
  /**
   * Special class binding so the last item in a row doesn't float away
   *
   * @memberof App.JournalGridItemComponent
   * @instance
   * @type {Array}
   */
  classNameBindings: ['isLast:end'],
  /**
   * Static classes for displaying the grid items
   *
   * @memberof App.JournalGridItemComponent
   * @instance
   * @type {Array}
   */
  classNames: ['small-12', 'medium-6', 'large-4', 'columns'],
  /**
   * Is this the last item in the list?
   *
   * @memberof App.JournalGridItemComponent
   * @instance
   * @return {boolean}
   */
  isLast: Ember.computed('index', 'listSize', function(){

    var output = false;

    if ( this.get('index') === (this.get('listSize') - 1) ) {

      output = true;
    }

    return output;
  })
});