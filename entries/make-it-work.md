---
title: Make it Work, Then Make it better
id: make-it-work
category: ui design
excerpt: Or, "How Kicking CMSes to the Curb Helped Me to Start Writing Again."
created: 10/22/2014
createdTime: 5:42pm
updated: null
updatedTime: null
tags: ['tag1', 'tag2']
headerImage: http://f.cl.ly/items/383O2F1w42442z1c1G0N/viperHeadingToDock.jpg
---

## Context

When I finally sat down to start remaking my site in earnest (a task I've been putting off for about four years now), I knew I needed to do things "the right way." This means a a lot of things to a lot of different people, but for me it ultimately meant that whatever I created had to meet the following criteria:
- It must be built on a framework of technologies that I actively work with
- It must be easy to maintain
- It must be easier still to iterate upon, change, and completely rework if necessay
- It must play host to and perform three primary functions:
  1. An online portfolio
  2. An easy to use writing platform
  3. A well-defined web presence

This seems like a short enough list that could be easily satisfied by a number of existing solutions, but each of those line items contains a deeper list of sub-criteria, many of which contain their own sub-criteria, none of which I will bother listing here, but the jist is that making this thing exactly as I wanted it was going to be difficult because of my tendency to set high standards for myself.

The above list has existed in one form or another for a number of years, and the details have shifted and become more challenging to satisfy over time. The result was that my portfolio and blog sat relatively untouched for years, until I suddenly had an urgent need to retool my portfolio to aid in my search for a new job two years ago. Naturally I did the obvious thing: a quickly executed minimum viable product in the form of a one page site containing a list of things I'd done and links to those projects, as well as some basic contact information. It was sufficient for the task at hand, but it wasn't a proper expression of what I *could* do.

So here we are two years later, after which I've learned more than I probably did in the five preceding it, and I find myself at a point where my skill set and available tools feel extremely well-suited to achieving the goals I have in mind.

## Concept

Since coming to work at [HealthSparq](http://www.healthsparq.com), I have had the opportunity to learn a great deal more about JavaScript, web development and environment management than I would have expected possible in such a short span of time. As the company has matured from a scrappy, 20-something person startup to a full-fledged web software development company roughly 7-8 times the size it was when I joined, so too has our front-end stack matured.

The structure of our front-end applications when I started here was thoroughly entrenched within JSPs (and the JSTL tag logic nightmares that accompany them). Over the course of the next twelve months my colleagues and I helped realize the vision of shifting our structure over to decoupled back-end and front-end applications that communicated completely via RESTful APIs. Granted, this sort of thing was rapidly becoming an industry standard in other, more advanced sectors, but in the world of Healthcare IT, such a thing was practically unheard of.

After building one application entirely on jQuery (a fool's errand and matainability horrorscape which I do not recommend) and another on Dojo (which was arguably better but still really not a great idea), we finally graduated to building applications based on a combination of Zurb's [Foundation](http://foundation.zurb.com) and Tilde's [EmberJS](http://www.emberjs.com). As we spent more time developing these applications, we also spent time refining our stack and our application build process, something which [Rocky](http://www.vikingglory.com) has done a really fantastic job with.

The result is the current state of our tool set, which utilizes [gulp.js](http://gulpjs.com/) for lightning-fast, extensible and highly configurable builds. The entire site processes is ready to deploy in under 300ms, a dramatic shift from our old ANT-based build system that could take 17-25 seconds to complete (or several minutes for a production build with lots of images).

This set of tools was originally put together with the purpose of interfacing with some kind of server-side application, but it is also extremely well-suited for standalone use.

## Content Management Schism

Content Management Systems are a wonderful thing; they make it relatively easy to publish and maintain content, particularly for users who are more comfortable with filling out a form than they are writing code. They're great at organization, and many of them are highly extensible. Where they tend to fall short, for me, is the amount of time it takes to install, configure, and customize them. That last part is particularly important; you can do a great deal to customize most CMS installs, but if you want anything that deviates from an existing add-on/plugin/theme you'll have to spend some time writing code, and a fair bit more than you should really have to in my experience.

Content Management Systems have a few other issues, not the least of which is performance. Of course this can be solved via caching mechnisms, but those present other problems you need to code around. The reliance on a database connection means that if a new feature requires new data structure, moving that structure up into higher environments during and after testing without affecting production can be tedious. The dependence on a database connection can also brings up potential security vulnerabilities. For most people this isn't a problem, but if you're at all concerned about security, and if you are in charge of ever building even just one medium-to-high profile product, it's the sort of thing that you can lose a few hours of sleep over.

Oh, and let's also not also forget how annoying it can sometimes be if you want to do something crazy like use a slightly different (or completely different) layout for a particular piece of content. Traditional CMS solutions don't really play well with customizable or modular templates and layouts.

Ultimately, my takeaway from working with CMSes over the years is that if you want to do anything remotely interesting with them, and if you want to use them the right way, they *can* get the job done, but they will grow in complexity relatively quickly.There's too much overhead there, and the mere thought of everything involved with setting up a new CMS-based site as a personal endeavor sends me running and screaming from the room, my laptop spinning through the air in the opposite direction. This may explain why it's taken me so long to get around to making a new thing.

Part of the problem is starting with the assumption that a content-based site of any kind requires the use of a traditional CMS platform. This assumption is patently false. A CMS is an option, not a requirement, and in many cases it is the wrong option. For somebody like me, who wants to focus on producing content (and occasionally creating new experiences around that content), it is definitely the wrong option. Why spend all of that time building and maintaining a CMS? That's time I could be spending writing entirely too long pieces like this one!

<div class="large-8 large-push-2">
<blockquote class="twitter-tweet" lang="en"><p>Starting a basic website in 2014:&#10;&#10;1. Install Node&#10;2. Install Bower&#10;3. Pick CSS framework&#10;4. Pick responsive approach&#10;…&#10;&#10;47. Write some HTML</p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/517616294909464576">October 2, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

So obviously, I did what every javascript developer is doing these days; I decided to build my site in Ember.

## Execution

The real beauty of this solution is that it doesn't just allow me to have fun writing the javascript parts that make the site go, it lets me focus on producing content quickly and without fuss. It also makes it incredibly fast and easy to build and extend functionality around new content or metadata with minimal time spent.

I also have the flexibility to decide where my content is stored and how its presented. Journal entries here on the site start life as Markdown files (minimal formatting markup is a wonderful thing), with custom YAML front-matter containing their meta data. The build system parses all of this into JSON so that it can be easily consumed by the Ember application and presented via the Handlebars templates. If I want to add new kind of metadata (like tags, categories, share images, geolocation), it's as simple as dropping it into the front-matter of a post and adding a quick reference to it in a template. No plugin installations, no additional libraries, it just works.

My content lives as a part of my git repository, which removes another dependency and a potential point of failure; I don't have a database server I need to worry about anymore, so as long as my web server is up (and it essentially always is), my site is up and fully functional. Typically I would advocate for content living separately from the application, but for now this solution works very well for me. I can work on posts over time, and publish them when I'm ready with a simple commit to the master branch (a post-commit hook on that branch fires off the deployment process in my Continuous Integration Envieronment).

One might consider it a disadvantage that I have to be able to access my repo to publish content, but as far as I'm concerned, if I'm going to sit down to write something, it's going to be long form, and that's not the sort of thing I want to do in a browser (or on a smartphone) in the first place. There's nothing better for editing text than a text editor.

## i++

![Minimum Viable Product, the right way](http://f.cl.ly/items/021v401j00263K1G2k1J/mvp.png)
<small>Image credit: [Henrik Kniberg](http://blog.crisp.se/2014/10/08/henrikkniberg/what-is-scrum)</small>

The approach I've taken with this incarnation of my site is one of iteration. Aside from my disinterest in wanting to set up yet another CMS-based personal site, the other major factor that kept me from making a new site for years was that I had convinced myself that I needed to launch with a full feature set right out the gate, essentially making the same mistake I've secretly cursed others for making for years now. Waiting longer to launch a full-featured solution typically means that the timeline and scope are subject to constant creep, and a product may never really come to fruition as a result.

Instead, taking an iterative approach is much more satisfying. It enabled me to relaunch quickly, spending less than a day on creating the core application, and now I can show progress at regular intervals every time a new feature launches (like this journal).

I have some more features for the journal itself that are still in development, which I decided weren't necessary to get the journal off the ground, and didn't make a ton of sense to implement until there was more content anyway. I have aspirations to build a proper portfolio section that treats each item as a case study, which also will enable me to showcase work that isn't publicly available on the web. I've also got plans to rework the landing page so that it incorporates content from multiple sources.

Had I tried to execute all of this in the first go, I'd have never gotten this thing back up off the ground. I probably wouldn't even be writing this post right now, the code instead languishing on my hard drive, being continually ignored in favor of less time-consuming efforts.

Now, instead, the work of building the platform has been minimized and is largely out of the way, which means that when I get those ideas for op-eds or technical posts (that nobody will ever read), I can actually publish them, instead of thinking about how nice it would be if only I had a means to do so.