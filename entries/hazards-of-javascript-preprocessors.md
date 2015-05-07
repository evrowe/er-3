---
title: The Hazards of JavaScript Preprocessors
id: hazards-of-javascript-preprocessors
category: development, javascript
excerpt: Tersely formatted pseudolanguages are convenient, but they can be potentially harmful to the ecosystem at large.
created: 05/7/2015
createdTime: 3:58pm
updated: null
updatedTime: null
tags:
headerImage: http://f.cl.ly/items/2u2R0S1R0C320B1I3O0X/stupid-coffeescript-header.jpg
---

## Why The Double Standard?

It's no secret that CoffeeScript is an extremely popular language for writing JavaScript. [Dropbox JS](https://github.com/dropbox/dropbox-js) is written nearly entirely in CoffeeScript. [Github's Atom](https://atom.io/) leverages it extensively. So do Airbnb, Basecamp, Cloudapp, and [many others](https://github.com/jashkenas/coffeescript/wiki/In-The-Wild). CoffeeScript is highly compatible with popular JS frameworks like [Ember](https://www.emberjs.com), [Underscore](https://www.underscorejs.org) and [Angular](https://www.angularjs.org). Small wonder, that; CoffeeScript's lean syntax and convenient shortcuts allow you to accomplish more in less time, and that's something most people would consider to be a win.

My colleagues at [HealthSparq](https://www.healthsparq.com) and myself all seem to be cut from a similar cloth, however, in that none of us has any interest in using CoffeeScript, and most of us actively dislike it. This isn't a coincidence; this is a team of hand-picked inviduals who were selected largely in part because their way of thinking already aligned closely with our existing methodologies. That isn't to say we're against using good tools for doing our work more efficiently, though. We are big fans of SCSS/SASS, and we are constantly evaluating new options for enhancing our workflow.

A few weeks ago, one of our User Experience Designers asked the question in our frontend Slack group:

> "So, why is okay for SASS to preprocess CSS but not ok for CoffeeScript to preprocess JS?"

This is a really good question. At first some trollish non-answers along the lines of "Because reasons!" were floated, but after taking a few minutes to consider the question (and pull from bits and pieces offered by my colleagues), I arrived at a more accurate way to articulate the reasoning behind our stance.

### It's Not About Preprocessing

Preprocessing is an advantage, sure, but that's not really all that CoffeeScript does. Preprocessing is merely a side effect of the fact that the CoffeeScript compiler has to translate its input into vanilla JavaScript. The issue is not necessarily about whether it's ok to do preprocess with one thing and not with another. Technically speaking, our build system does some amount of "preprocessing" for us by concatenating and minifying our JavaScript and our compiled CSS.

I like SCSS because it's a superset of existing CSS. It still requires that you have a full understanding of the CSS syntax and all of its properties in order to use it. Furthermore, it's not going to magically fix incompatibilities for you. It will give you tools (e.g. mixins) to make addressing things like vendor prefixing much easier, but you still have to know how to implement those things on their own in order to make use of SCSS' conveniences.

SCSS extends CSS and builds upon that foundation to give you a powerful set of tools to save yourself time, reduce redundancy in your code, and enable you to focus on what's important. It does all of this by being additive; it doesn't hide one thing behind another. You can drop standard CSS into an SCSS file and it will still build/validate without any issues.

### Obfuscation is Bad

My main gripe with CoffeeScript is that it's not a superset or an extension of JavaScript. It is essentially it's own language; it's very smiliar to JavaScript, and it compiles to JavaScript, but it *is not* JavaScript; it obfuscates JavaScript behind its own set of conventions. Granted, it's arguably easier to work with (you certainly will write fewer lines of code), but it can be harder to understand what is actually going on, or what the implications of a given line of code could be.

Ultimately, CoffeeScript is an abstraction of JavaScript; it utilizes similar (but different) syntax, and it alters the way that you write and think about your code. Moreover, CoffeeScript (not unlike jQuery) is something that newer developers can learn *instead of* learning proper JavaScript, and go on to write code with for years before ever touching vanilla JS. You don't necessarily need to know JavaScript to learn CoffeeScript, which means you could easily go for years lacking a fundamental understanding of what is actually happening in the code that you write.

### What Does This Even Say How Did This Get Here I am Not Good With Computers

I would also argue that, like with HAML, readability of the code suffers. Yeah there's less code to wade through, and yes, anybody who knows the language can read it just fine, but I can't tell you how many times I've found a solution to a code problem on Stack Overflow written in CoffeeScript instead of JavaScript, thus rendering it nearly useless to me. I shouldn't need to learn another language's syntax in order to translate documented solutions into something I can use; nor should I have to run that code through a compiler to get usable code out of it. This is simply bad practice; in this case, CoffeeScript becomes a **dependency** for implementing a solution, which makes little sense considering that JavaScript is universal.

In the hands of seasoned JavaScript developers, CoffeeScript can be a useful tool. However, I worry that the degree to which CoffeeScript abstracts away the actual code being written is problematic, and it's potentially creating developers who don't know what's actually going on with the code they write. Even looking at the primary examples on CoffeeScript's homepage, I can see numerous potential gaps in understanding for a developer who never bothered to learn JavaScript proper:

#### Example 1: Inversed Pattern for Logical Conditions

**CoffeScript**

    number = -42 if opposite

**Compiled JavaScript**

    if (opposite) {

      number = -42;
    }

The order of operations for performing this logic check is switched around from what we're used to seeing in JavaScript; it's an entirely different pattern from the convention in JavaScript proper, and this could lead to confusion for somebody jumping straight in with CoffeeScript. I'm curious why this can't be/isn't written as `if opposite number = -42`. That would follow the typical cause > effect pattern we're used to seeing, not just in JavaScript, but many other languages.

#### Example 2: Truthiness Checking, More Inverse Patterns

**CoffeScript**

    alert "I knew it!" if elvis?

**Compiled JavaScript**

    if (typeof elvis !== "undefined" && elvis !== null) {

      alert("I knew it!");
    }

There are two things that really irk me here; the first is the shortcut on checking `elvis`'s truthiness. Sure this is a whole 44 characters shorter, BUT if a developer is learning CoffeeScript and skipping a lot of JavaScript, they'll miss the fundamental concept of what's going with the truthiness check. Would this developer understand why we're looking for `"undefined"` rather than `undefined`, and what the differenec between the two is? Do they understand why it's important to check for both `"undefined"` as well as `null`? Also, does this particular logic satisfy all of a given use case's conditions?

Secondly, again, we see the inverse logical condition pattern, which is rapildy developing into something of a bad habit.

#### Example 3: Function Declarations with Variable Argument Lengths

**CoffeScript**

    race = (winner, runners...) ->
      print winner, runners

**Compiled JavaScript**

    race = function() {

      var runners, winner;
      winner = arguments[0], runners = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      return print(winner, runners);
    };

CoffeeScript provides a feature called "splats", represented by the ellipsis (`…`), which allow for denotation of optional arguments which may not always be present when a function is called. This is a nice convenience if you're used to dealing with the headache of reassigning argument values, but it would prevent a new developer from properly understanding how to handle this situation in JavaScript, and the importance of writing these checks in your code.

#### Example 4: Scoping Obfuscation

Throughout the CoffeeScript examples, variables are *never* explicitly declared. Not once. With CoffeeScript, you are allowed to throw variables around at leisure, trusting the compiler to handle declaring them for you when you're done. Again, this is nice, but what happens when our hypothetical CoffeeScript-only dev has to make the move back to JavaScript? Will they understand that they need to explicitly declare their variables? Will they further understand the difference between `var foo = 'bar';` inside and outside of a block? Will they even know they should use `var` inside of blocks when reusing variable names if they want those variables to be discrete?

### Not the Same as a Framework

One could easily make counter points to many of my arguments.

**"Well what about Ember and Handlebars? You have to *learn* those too!"**

Ember is not an abstraction language; it is a robust framework with an API built strictly on JavaScript. It does some really great things for you, but you need to know JavaScript proper to really do much with it beyond the basic implementations, let alone actually understand Ember itself. It doesn't allow you to shortcut your JavaScript knowledge; if anything, it relies on it, and it will help you build that knowledge over time.

**"Nobody would actually learn CoffeeScript without learning JavaScript!"**

This is, in my mind, a poor argument. Some people *absolutely would* skip over JavaScript straight to CoffeeScript. I see it all the time with back-end developers looking to jump into JavaScript, either to accomplish something quickly or to not have to deal with learning all of JavaScript's ins and outs. I will be one of the first to admit to (and agree with) the fact that JavaScript has many quirks and idiosyncracies that can trip you up if you're not careful. That doesn't mean you shouldn't be aware of them, though; knowing what can bite you if you're not careful can save you loads of headache down the road, and it can come in very handy when troubleshooting your code, or somebody else's!

Furthermore, this been happening with jQuery for a very long time already; jQuery is essentially a gateway into JavaScript for a lot of web developers. Hell, that's how I got started, and while it was a nice way to get going quickly, the knowledge gap that created for me took a good while to overcome. Note that jQuery still uses standard JavaScript syntax, so at least it's teaching you to write your code correctly(ish) even if you don't know what's actually happening under the hood!

**"Javascript is just an abstraction of machine code that has to go through it's own compiler!"**

Trolls are really obnoxious, aren't they?

## Lesser of Two Evils

JavaScript gets a ton of flak in the larger development community, sometimes deservedly so. It's full of idiosyncracies you won't find in most "proper" languages, and the fact that so much work is going on in the JS community to make it behave less like a scripting language is very telling. That being said, I still think it can be extremely powerful, and the past few years have demonstrated that not only is is immensely capable, but that it's potential is growing rapidly. All of that capability doesn't just come for free, though. The only way to manage those idiosyncracies gracefully is to gain experience with the language as it was intended.

Then again, CoffeeScript has been around since 2010 and is only growing in popularity. I cloud just be a grump who's ignoring something that's very cool and potentially extremely useful. Although, maybe there's a good reason modern framework documentation isn't written in CoffeeScript. What do I know?

## FINALE

The path to making JavaScript more elegant isn't through layers of abstraction. It's through gradual refinement of the language ([TC39](https://github.com/tc39)), and smart implementations like Ember that bring familiar patterns from other languages into the JavaScript world, while working within the constraints of what the language can already achieve in the meantime.

#### Extended Reading

- [The Rise of TypeScript](http://developer.telerik.com/featured/the-rise-of-typescript/)
- [Rhino JavaScript Compiler](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino/JavaScript_Compiler)