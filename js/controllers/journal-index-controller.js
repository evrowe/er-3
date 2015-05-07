/* globals App, Ember */
/**
 * The controller for the journal route (handles journal index, category view and tag view)
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.ArrayController
 */
App.JournalIndexController = Ember.ArrayController.extend({
  // Properties
  /**
   * Whether to use the grid or list layout for displaying entries
   *
   * @memberof App.JournalIndexController
   * @instance
   * @type {boolean}
   */
  gridLayout: false,

  // Actions
  actions: {
    /**
     * Pass through action for the controller's toggleProperty method
     *
     * @memberof App.JournalController
     * @instance
     * @param {string} property The property on the controller to toggle
     */
    toggleProp: function(property) {

      this.toggleProperty(property);
    }
  }
});