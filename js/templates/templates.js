// This file is auto-generated and should be ignored from version control.
(function(){
  var template = Ember.Handlebars.template, templates = Ember.TEMPLATES = Ember.TEMPLATES || {};
  templates['_journal-item'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", stack1, hashTypes, hashContexts, escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    function program1(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push("\n\t\t\t");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n\t\t");
        return buffer;
    }
    function program3(depth0, data) {
        var buffer = "", stack1, stack2, hashTypes, hashContexts, options;
        data.buffer.push("\n\t\t\t");
        hashTypes = {};
        hashContexts = {};
        options = {hash:{}, inverse:self.noop, fn:self.program(4, program4, data), contexts:[depth0, depth0], types:["STRING", "ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
        stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "journal.entry", "id", options) : helperMissing.call(depth0, "link-to", "journal.entry", "id", options));
        if (stack2 || stack2 === 0) {
            data.buffer.push(stack2);
        }
        data.buffer.push("\n\t\t");
        return buffer;
    }
    function program4(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push(" ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push(" ");
        return buffer;
    }
    function program6(depth0, data) {
        var buffer = "", hashContexts, hashTypes;
        data.buffer.push("\n\t\t\t");
        hashContexts = {"unescaped":depth0};
        hashTypes = {"unescaped":"STRING"};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "body", {hash:{"unescaped":("true")}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n\t\t");
        return buffer;
    }
    data.buffer.push("<article>\n\t<h2>\n\t\t");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers["if"].call(depth0, "body", {hash:{}, inverse:self.program(3, program3, data), fn:self.program(1, program1, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n\t</h2>\n\t<div class=\"meta\">");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "date", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push(" at ");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "time", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push("</div>\n\t\n\t<div class=\"body\">\n\t\t");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers["if"].call(depth0, "body", {hash:{}, inverse:self.program(6, program6, data), fn:self.program(6, program6, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n\t</div>\n</article>");
    return buffer;
}
);
  templates['about'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    data.buffer.push("<h1>Hello!</h1>\n\n<h2>Who I am and what I do</h2>\n<p>I am an interactive developer and designer, living in Portland, OR. I take pride in my ability to create living web experiences that bring joy to their users and owners alike.</p>\n\n<p>I am well versed in latest web standards using <b>HTML5</b> and <b>CSS3</b>*. I spent many years in a serious relationship with <b>jQuery</b>; we remain close friends who talk often, but my heart now belongs to <b>Ember.js.</b></p>\n\n<p>Nowadays, my focus lies almost entirely on building web applications in <b>Ember</b>. Previously my energy was focused on creating traditional informational sites driven by popular CMS platforms like <b>ExpressionEngine</b> and <b>WordPress</b>. I don't see those two as often anymore but we've been known to get together and make some magic every so often.</p>\n\n<h2>A bit of background on me</h2>\n<p>I hold a BFA in Graphic Design from Oregon State Univeristy, combined with six years of professional experience in design and development for the web. This gives me the unique ability to bring an interdisciplinary knowledge to the practice and ensure both the design and development sides of the creative exercise are well-informed by the requirements, abilities and limitations of each.</p>\n\n<p>Outside of work, I enjoy the following (in no particular order)</p>\n<ul>\n  <li>Drinking coffee (preferably <a href=\"http://ristrettoroasters.com\" target=\"_blank\">Ristretto Roasters</a>, <a href=\"http://www.heartroasters.com\" target=\"_blank\">Heart</a> or <a href=\"http://www.wateravenuecoffe.com\" target=\"_blank\">Water Ave.</a>)</li>\n  <li>Attending/watching Portland Timbers games</li>\n  <li>Video games (yes, I'm that kind of nerd)</li>\n  <li>Running</li>\n  <li>Playing indoor soccer</li>\n  <li>Working on my home and yard</li>\n  <li>Cooking and eating delicious things (e.g. ramen burgers)</li>\n</ul>\n\n<sub>*Well, technicaly I write mostly in <b>Handlebars</b> and <b>SCSS</b> now, but you get the idea.</sub>\n");
}
);
  templates['application'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", stack1, stack2, hashTypes, hashContexts, options, self = this, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression;
    function program1(depth0, data) {
        data.buffer.push("work");
    }
    function program3(depth0, data) {
        data.buffer.push("journal");
    }
    function program5(depth0, data) {
        data.buffer.push("HOME");
    }
    function program7(depth0, data) {
        data.buffer.push("about");
    }
    function program9(depth0, data) {
        data.buffer.push("contact");
    }
    data.buffer.push("<header>\n  <nav class=\"row\">\n    ");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "work", options) : helperMissing.call(depth0, "link-to", "work", options));
    if (stack2 || stack2 === 0) {
        data.buffer.push(stack2);
    }
    data.buffer.push("\n    ");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, inverse:self.noop, fn:self.program(3, program3, data), contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "journal", options) : helperMissing.call(depth0, "link-to", "journal", options));
    if (stack2 || stack2 === 0) {
        data.buffer.push(stack2);
    }
    data.buffer.push("\n    ");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, inverse:self.noop, fn:self.program(5, program5, data), contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
    if (stack2 || stack2 === 0) {
        data.buffer.push(stack2);
    }
    data.buffer.push("\n    ");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, inverse:self.noop, fn:self.program(7, program7, data), contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
    if (stack2 || stack2 === 0) {
        data.buffer.push(stack2);
    }
    data.buffer.push("\n    ");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, inverse:self.noop, fn:self.program(9, program9, data), contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
    if (stack2 || stack2 === 0) {
        data.buffer.push(stack2);
    }
    data.buffer.push("\n  </nav>\n</header>\n\n<section class=\"row primary\">\n  <div class=\"large-12 columns\">\n    ");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push(" \n  </div>\n</section>\n\n<footer> \n  <div class=\"row\">\n    &copy;2014 Evan Rowe. Built on <a href=\"http://www.emberjs.com\" target=\"_blank\">Ember.js</a> and constructed mercilessly from <a href=\"https://github.com/jneurock/viking-base\">Viking Base</a>.\n  </div>\n</footer>\n");
    return buffer;
}
);
  templates['contact'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    data.buffer.push("<h1>How to Reach Me</h1>\n<blockquote>\"I'm entirely too easy to google.\"</blockquote>\n\n<p>That being said, some specific links may be more useful to you:</p>\n<ul>\n  <li><a href=\"http://www.twitter.com/ev_rowe\">@ev_rowe</a></li>\n  <li><a href=\"http://www.github.com/evrowe\">GitHub</a></li>\n  <li><a href=\"http://www.linkedin.com/in/evrowe\">LinkedIn</a></li>\n  <li><a href=\"http://www.instagram.com/ev_rowe\">Instagram</a></li>\n  <li>er[at]evan-rowe[dot]com</li>\n</ul>\n\n<p><a href=\"./resume.pdf\">My Resume</a>, for those interested.</p>\n");
}
);
  templates['entry'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var stack1, hashTypes, hashContexts, options, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression;
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "journal-item", options) : helperMissing.call(depth0, "partial", "journal-item", options))));
}
);
  templates['index'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    data.buffer.push("<img src=\"./img/home-02.jpg\">\n");
}
);
  templates['journalIndex'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var stack1, hashTypes, hashContexts, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression, self = this;
    function program1(depth0, data) {
        var buffer = "", stack1, hashTypes, hashContexts, options;
        data.buffer.push("\n  ");
        hashTypes = {};
        hashContexts = {};
        options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
        data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "journal-item", options) : helperMissing.call(depth0, "partial", "journal-item", options))));
        data.buffer.push("\n");
        return buffer;
    }
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers.each.call(depth0, {hash:{}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    } else {
        data.buffer.push("");
    }
}
);
}());