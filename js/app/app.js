/* globals Ember */
/**
 * Ember.js - A framework for creating <strong>ambitious</strong> web applications
 *
 * @external Ember
 * @see {@link http://emberjs.com/api/}
 */

/**
 * Ember's Application class
 *
 * @name external:Ember.Application
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Application.html}
 */

/**
 * Ember's Route class
 *
 * @name external:Ember.Route
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Route.html}
 */

/**
 * The instance of Ember.Application used throughout the app
 *
 * @namespace
 * @name App
 * @extends external:Ember.Application
 */
var App = Ember.Application.create({
  // Properties
  /**
   * Google analytics account number
   *
   * @memberof App.ApplicationController
   * @instance
   * @type {string}
   */
  GAAccount: 'UA-3657515-3',

  // Methods
  trackPageView: function() {
    ga('send', 'pageview');
  }
});

/**
 * The App's Router; reopens it so that we can
 * enable functionality on all Routes.
 *
 * @extends external:Ember.Route
 */
App.Router.reopen({
  /**
   * Custom method to enable pageview tracking on route transitions
   *
   * @memberof Ember.Route
   * @instance
   */
  notifyGoogleAnalytics: function() {

    return ga('send', 'pageview', {
      'page': this.get('url'),
      'title': this.get('url')
    });
  }.on('didTransition')
});

/* Universal AJAX settings */
$.ajaxSetup({

  contentType: 'application/json' // always expect responses in JSON format
});

/* Fixed nav on scroll (lives outside context of Ember app) */
/* Keep this for later; may want it back for parallax scrolling or something. */

/*var _er = {};
_er.navFixed = false,
_er.latestKnownScrollY = 0,
_er.ticking = false,

_er.onScroll = function() {
  _er.latestKnownScrollY = window.scrollY;
  _er.requestTick();
  _er.navBar(_er.latestKnownScrollY);
},

_er.requestTick = function() {
    if(!_er.ticking) {

        if (window.requestAnimationFrame) {
            requestAnimationFrame(_er.update);
        } else if ( window.mozRequestAnimationFrame ) {
            window.mozRequestAnimationFrame(_er.update);
        } else if ( window.webkitRequestAnimationFrame ) {
            window.webkitRequestAnimationFrame(_er.update);
        } else {
            _er.update();
        }

    }
    _er.ticking = true;
},

_er.update = function() {
    _er.ticking = false;
    var currentScrollY = _er.latestKnownScrollY;
},

_er.navBar = function(currentScrollY) {

    var contentOffset = $('section.primary').offset().top;

    if ( currentScrollY >= 0 && !_er.navFixed ) {

        $('body').addClass('fixed-nav')

        $('section.primary').css('margin-top',contentOffset+'px');

        _er.navFixed = true;

    } else if ( currentScrollY === 0 && _er.navFixed ) {

        $('body').removeClass('fixed-nav');

        $('section.primary').css('margin-top','');

        _er.navFixed = false;

    }

};

window.onscroll = function() {
    _er.onScroll();
}
*/

// Initialize Foundation
$(document).foundation();