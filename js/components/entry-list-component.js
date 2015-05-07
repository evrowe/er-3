/* global App, Ember */
/**
 * Component for controlling the display of entries. Juggles components for display type and tracks the size of the entries list.
 *
 * @memberof App
 * @constructor
 */
App.EntryListComponent = Ember.Component.extend({
  /**
   * How long is the list of entries?
   *
   * @memberof App.EntryListComponent
   * @instance
   * @return {number}
   */
  listSize: Ember.computed('posts.@each', function() {

    var output = 0;

    if ( this.get('posts') instanceof Array ) {

      output = this.get('posts').length;
    }

    return output;
  })
});