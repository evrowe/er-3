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
App = Ember.Application.create();


App.Router.map(function() {
  // put your routes here
  this.route("about");
  this.resource("work", function() {
    this.route("item", {path: "/work/item:id" });
  });
  this.route("contact");
  this.resource("journal", function() {
    this.route("entry");
  });
});


App.JournalRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("journal");
  }
});


App.EntryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("entry", params.entry_id);
  }
});


/**
 * An Ember route for the application itself
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});


/* Fixed nav on scroll (lives outside context of Ember app) */

var _er = {};
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
