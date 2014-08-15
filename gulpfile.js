/*
 * Viking Base registers gulp tasks for you.
 * For more information and examples see the
 * project on GitHub (https://github.com/jneurock/viking-base).
 */

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    vb = require('./bower_components/viking-base/node_modules/viking-base');

// Set module refeneces on vb object
vb.gulp = gulp;
vb.plugins = plugins;

// Output updates
vb.output.content = 'content';
vb.output.fonts = 'fonts';
vb.output.img = 'img';

// source updates
vb.sources.content = 'content/**/*';
vb.sources.fonts = 'fonts/**/*';
vb.sources.img = 'img/**/*';

// task updates
vb.tasks.build.depends = [
  'handlebars',
  'img',
  'fonts',
  'js-doc',
  'content',
  'root'
];

// update dependencies
vb.tasks.handlebars.depends = ['img'];
vb.tasks.sass.depends = ['fonts'];
vb.tasks.root.depends = ['content'];

vb.tasks.img = {
  cb: function() {

    return gulp.src( this.sources.img )
      .pipe( gulp.dest( this.output.publish + this.output.img ) );
  }
};

vb.tasks.content = {
  cb: function() {

    return gulp.src( this.sources.content )
      .pipe( gulp.dest( this.output.publish + this.output.content ) );
  }
};

vb.tasks.fonts = {
  cb: function() {

    return gulp.src( this.sources.fonts )
      .pipe( gulp.dest( this.output.publish + this.output.fonts ) );
  }
};

// Modify tasks as you need before calling vb.registerGulpTasks
vb.registerGulpTasks();