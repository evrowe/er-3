module.exports = function( gulp, plugins, vb, cb ) {

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
  vb.sources.posts = 'entries/**/*.md';

  // Task updates
  vb.tasks.build.depends = [
    'htmlbars',
    'img',
    'fonts',
    'js-doc',
    'content',
    'posts',
    'root'
  ];

  // Update dependencies
  vb.tasks.htmlbars.depends = ['img'];
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

  // kick off the build
  cb();
}