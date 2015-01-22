/*
 * Viking Base registers gulp tasks for you.
 * For more information and examples see the
 * project on GitHub (https://github.com/jneurock/viking-base).
 */

var gulp = require('gulp'),
    local = null,
    plugins = require('gulp-load-plugins')(),
    vb = require('./bower_components/viking-base/node_modules/viking-base');

function build() {

  // Set module refeneces on vb object
  vb.gulp = gulp;
  vb.plugins = plugins;

    // Output updates
  vb.output.content = 'content';
  vb.output.fonts = 'fonts';
  vb.output.img = 'img';
  vb.output.post = 'content/entries';
  vb.output.posts = '../entries.json';

  // Source updates
  vb.sources.content = 'content/**/*';
  vb.sources.fonts = 'fonts/**/*';
  vb.sources.img = 'img/**/*';
  vb.sources.posts = 'entries/**/*.md'

  // Task updates
  vb.tasks.build.depends = [
    'handlebars',
    'img',
    'fonts',
    'js-doc',
    'content',
    'posts',
    'root'
  ];

  // Update dependencies
  vb.tasks.handlebars.depends = ['img'];
  vb.tasks.sass.depends = ['fonts'];
  vb.tasks.root.depends = ['content'];

  // Task for building images
  vb.tasks.img = {
    cb: function() {

      return gulp.src( this.sources.img )
        .pipe( gulp.dest( this.output.publish + this.output.img ) );
    }
  };

  // Task for building misc site content
  vb.tasks.content = {
    cb: function() {

      return gulp.src( this.sources.content )
        .pipe( gulp.dest( this.output.publish + this.output.content ) );
    }
  };

  // Task for building custom fonts
  vb.tasks.fonts = {
    cb: function() {

      return gulp.src( this.sources.fonts )
        .pipe( gulp.dest( this.output.publish + this.output.fonts ) );
    }
  };

  // Task for building and outputting posts
  vb.tasks.posts = {
    cb: function() {

      return gulp.src( this.sources.posts )
        .pipe( plugins.vikingPosts() )
        .pipe( gulp.dest( this.output.publish + this.output.post ) )
        .pipe( plugins.concat( this.output.posts, {
          newLine: ','
        }))
        .pipe( plugins.vikingPosts({
          concat: true
        }))
        .pipe( gulp.dest( this.output.publish + this.output.post ) );
    }
  };

  // Modify tasks as you need before calling vb.registerGulpTasks
  vb.registerGulpTasks();
}

function doBuild() {

  try {

    local = require('./viking-base');

    if ( typeof local !== 'function' ) {

      throw 'Local Viking Base file must export a function';
    }

  } catch( ex ) {

    // If no local Viking Base file, mimic the expected module output
    local = function( gulp, plugins, vb, cb ) {

      cb();
    }
  }

  local( gulp, plugins, vb, build );
}

doBuild();