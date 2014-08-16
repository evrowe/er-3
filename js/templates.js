Ember.TEMPLATES["_journal-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n			");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "journal.entry", "id", options) : helperMissing.call(depth0, "link-to", "journal.entry", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n		<span class=\"updated\">Updated on ");
  stack1 = helpers._triageMustache.call(depth0, "updated", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" at ");
  stack1 = helpers._triageMustache.call(depth0, "updatedTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n			");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.content", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n		");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n			");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "excerpt", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n		");
  return buffer;
  }

  data.buffer.push("<article>\n	<h2>\n		");
  stack1 = helpers['if'].call(depth0, "model.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</h2>\n	<div class=\"meta\">\n		<span class=\"creation\">Published on ");
  stack1 = helpers._triageMustache.call(depth0, "created", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" at ");
  stack1 = helpers._triageMustache.call(depth0, "createdTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n		");
  stack1 = helpers['if'].call(depth0, "updated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n\n	<div class=\"body\">\n		");
  stack1 = helpers['if'].call(depth0, "model.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n</article>");
  return buffer;
  
});
Ember.TEMPLATES["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"large-8 columns\">\n  <h2>Who I am and what I do</h2>\n  <p>I am an interactive developer and designer, living in Portland, OR. I take pride in my ability to create living web experiences that bring joy to their users and owners alike.</p>\n\n  <p>I am well versed in latest web standards using <b>HTML5</b> and <b>CSS3</b>*. I spent many years in a serious relationship with <b>jQuery</b>; we remain close friends who talk often, but my heart now belongs to <b>Ember.js.</b></p>\n\n  <p>Nowadays, my focus lies almost entirely on building web applications in <b>Ember</b>. Previously my energy was focused on creating traditional informational sites driven by popular CMS platforms like <b>ExpressionEngine</b> and <b>WordPress</b>. I don't see those two as often anymore but we've been known to get together and make some magic from time to time.</p>\n\n  <h2>A bit of background on me</h2>\n  <p>I hold a BFA in Graphic Design from Oregon State Univeristy, combined with six years of professional experience in design and development for the web. This gives me the unique ability to bring an interdisciplinary knowledge to the practice and ensure both the design and development sides of the creative exercise are well-informed by the requirements, abilities and limitations of each.</p>\n\n  <p>Outside of work, I enjoy the following (in no particular order)</p>\n  <ul>\n    <li>Drinking coffee (preferably <a href=\"http://ristrettoroasters.com\" target=\"_blank\">Ristretto Roasters</a>, <a href=\"http://www.heartroasters.com\" target=\"_blank\">Heart</a> or <a href=\"http://www.wateravenuecoffe.com\" target=\"_blank\">Water Ave.</a>)</li>\n    <li>Attending/watching Portland Timbers games</li>\n    <li>Video games (yes, I'm that kind of nerd)</li>\n    <li>Running</li>\n    <li>Playing indoor soccer</li>\n    <li>Working on my home and yard</li>\n    <li>Cooking and eating delicious things (e.g. ramen burgers)</li>\n  </ul>\n\n  <sub>*Well, technicaly I write mostly in <b>Handlebars</b> and <b>SCSS</b> now, but you get the idea.</sub>\n</div>");
  
});
Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"img/er-mark-full.png\" width=\"35\">");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<header>\n  <nav class=\"row\">\n    <div class=\"large-12 columns\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("logo large-1 medium-1 small-3")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      \n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("large-1 medium-1 small-3")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("large-1 medium-1 small-3")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </nav>\n</header>\n\n<section class=\"row primary\">\n  <div class=\"large-12 columns\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</section>\n\n<footer>\n  <div class=\"row\">\n    <div class=\"large-3 small-8 small-push-2 medium-4 medium-push-0 columns\">\n      <img src=\"img/er-large.png\">\n    </div>\n    <div class=\"large-4 medium-6 small-8 medium-pull-0 small-pull-2 columns\">\n      <p>Built on <a href=\"http://www.emberjs.com\" target=\"_blank\">Ember.js</a> and constructed mercilessly from <a href=\"https://github.com/jneurock/viking-base\" target=\"_blank\">Viking Base</a>; Source available on <a href=\"http://www.github.com/evrowe/er-3\" target=\"_blank\">Github</a></p>\n      <p>Hosted on <a href=\"http://www.mediatemple.com\" target=\"_blank\">MediaTemple (gs)</a> with continuous integration via <a href=\"http://www.codeship.com\" target=\"_blank\">Codeship</a></p>\n      <p>&copy;2014 Evan Rowe</p>\n    </div>\n  </div>\n</footer>\n");
  return buffer;
  
});
Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"large-8 columns\">\n  <h2>How to Reach Me</h2>\n\n  <p>I once said of myself, \"I'm entirely too easy to google.\" However, considering that you are already here, I'll save you some effort. Here are a few specific links may be more useful to you.</p>\n  <ul class=\"no-bullet\">\n    <li><a href=\"http://www.twitter.com/ev_rowe\">@ev_rowe</a></li>\n    <li><a href=\"http://www.github.com/evrowe\">GitHub</a></li>\n    <li><a href=\"http://www.linkedin.com/in/evrowe\">LinkedIn</a></li>\n    <li><a href=\"http://www.instagram.com/ev_rowe\">Instagram</a></li>\n    <li>er[at]evan-rowe[dot]com</li>\n  </ul>\n\n  <p><a href=\"content/evan-rowe-resume-2012.pdf\">My Resume</a>, for those interested.</p>\n\n  <h2>Some Folks I Like</h2>\n\n  <p>I've had the pleasure of working with some pretty excellent people over the years. While it's impractical to list them all, these are the some of the ones who left a lasting impression.</p>\n  <ul class=\"no-bullet\">\n    <li><a href=\"http://www.vikingglory.com\" target=\"_blank\">Rocky Neurock</a></li>\n    <li><a href=\"http://www.departmentofdigitalwizardry.com\" target=\"_blank\">Patrick Walsh</a></li>\n    <li><a href=\"http://www.spaceninja.com\" target=\"_blank\">Scott Vandehey</a></li>\n    <li><a href=\"http://www.dabealan.com\" target=\"_blank\">Dabe Alan</a></li>\n    <li><a href=\"http://www.allanwhite.info\" target=\"_blank\">Allan White</a></li>\n    <li><a href=\"http://www.spokebranding.com\" target=\"_blank\">Brian Kerr</a></li>\n    <li><a href=\"http://www.youfoundashley.com\" target=\"_blank\">Ashley Pieren</a></li>\n  </ul>\n</div>");
  
});
Ember.TEMPLATES["entry"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "journal-item", options) : helperMissing.call(depth0, "partial", "journal-item", options))));
  
});
Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"large-4 medium-6 small-12 columns work-item\">\n      <h4 class=\"title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n      <a class=\"image\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      </a>\n      <div class=\"info\">\n        <span><strong>Role:</strong> ");
  stack1 = helpers._triageMustache.call(depth0, "roles", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <span><strong>URL:</strong> <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">");
  stack1 = helpers._triageMustache.call(depth0, "linkText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></span>\n      </div>\n    </div>\n  ");
  return buffer;
  }

  data.buffer.push("\n\n<section class=\"row greeting\" id=\"greeting\">\n  <div class=\"large-12 columns\">\n    <h1>Hello.</h1>\n    <h2>My name is Evan.</h2>\n    <h2>This is some of my recent work.</h2>\n  </div>\n</section>\n\n<section class=\"row\" id=\"work\">\n\n  ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</section>");
  return buffer;
  
});
Ember.TEMPLATES["journalIndex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "journal-item", options) : helperMissing.call(depth0, "partial", "journal-item", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});
Ember.TEMPLATES["work"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});