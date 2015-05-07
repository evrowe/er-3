/* globals App, Ember */
/**
 * The application controller
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Controller
 */
App.ApplicationController = Ember.Controller.extend({
  // Overrides
  /**
   * The controller's init method
   *
   * @memberof App.ApplicationController
   * @instance
   */
  init: function() {

    this._super();

    // If the site is running on localhost (e.g. dev), disable google analytics
    if ( window.location.hostname === 'localhost' ) {

      App.set('GAAccount', 'XX-XXXXXXX-X');
    }

    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create', App.get('GAAccount'));
  }
});