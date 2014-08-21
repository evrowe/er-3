---
title: Scaffolding the Anatomy of an Entry
id: anatomy-of-an-entry
category: ui design
excerpt: Or, "Why I Started Writing Again"
created: 8/19/2014
createdTime: 5:34pm
updated:
updatedTime:
tags: ['tag1', 'tag2']
headerImage: http://f.cl.ly/items/383O2F1w42442z1c1G0N/viperHeadingToDock.jpg
---

## Context

> Some text is here and isn't that fun, yay!

When I finally sat down to start remaking my site in earnest, a task I've been putting off for about five years now, I knew I needed to do things "the right way." This means a a lot of things to a lot of different people, but for me it ultimately meant that whatever I created had to meet the following criteria:
- It must be built on a framework of technologies that I actively work with
- It must be easy to maintain
- It must be easier still to iterate, change and rework at will
- It must play host to and perform three primary functions:
  1. An online portfolio
  2. An easy to use writing platform
  3. A general, well-defined web presence

This seems like a short enough list that could be easily satisfied by a number of existing solutions, but each of those line items contains a deeper list of sub-criteria, many of which contain their own sub-criteria, none of which I will bother listing here, but the jist is that making this thing exactly as I wanted it was going to be difficult because I have a tendency to set high standards for myself.

The list has existed in one form or another for a number of years, and the details have shifted and become more challenging to meet over time. The result is that my portfolio and blog sat relatively untouched for years, until I suddenly had an urgent need to retool my portfolio to aid in my search for a new job two years ago. Naturally I did the obvious thing: a quickly executed minimum viable product in the form of a one page site containing a list of things I'd done and links to those projects, as well as some basic contact information. It was sufficient for the task at hand, but it wasn't a proper expression of what I *could* do.

So here we are two years later, whence I've learned more in that two years than I probably did in the five preceding it, and I find myself at a point where my skill set and available tools feel extremely well-suited to achieving the goals I have in mind.

## Execution

Since coming to work at [HealthSparq](http://www.healthsparq.com), I have had the opportunity to learn a great deal more about JavaScript, web development and environment management than I would have expected possible in such a short span of time. As the company has matured from a scrappy, 20-something person startup to a full-fledged web software development company roughly 7-8 times the size it was when I joined up, so too has our front-end stack matured.

The structure of our front-end applications when I started here was thoroughly ingrained in JSPs (and the JSTL tag logic nightmares that accompany them), and over the course of the next twelve months my colleagues and I helped realize the vision of shifting our structure over to decoupled back-end and front-end applications that communicated completely via RESTful APIs. Granted, this sort of thing was rapidly becoming an industry standard in other, more advanced sectors, but in the world of Healthcare IT, such a thing was practically unheard of.

After building one application entirely on jQuery (which I do not recommend) and another on Dojo (which was arguably better but still really not a great idea), we finally graduated to building applications based on a combination of Zurb's [Foundation](http://foundation.zurb.com) and Tilde's [EmberJS](http://www.emberjs.com). As we spent more time developing these applications, we also spent time refinind our stack and our application build process, something which [Rocky](http://www.vikingglory.com) has done a really fantastic job with.