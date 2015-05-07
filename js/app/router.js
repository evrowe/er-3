App.Router.map(function() {

  this.route('about');

  this.route('contact');

  this.resource('journal', function() {

      this.route('entry', {
        path: '/entry/:entry_id'
      });

      this.route('category', {
        path: '/category/:category_id'
      });

      this.route('tag', {
        path: '/tag/:tag_id'
      });

      this.route('page', {
        path: '/page/:page_id'
      });

  });

  this.resource('work', function() {

    this.route('item', {
      path: '/:item_id'
    });

  });

});