---
title: About
description: 'Vue Horizontal recipes, over 100 crafted recipes of horizontal layout with various design choices and control mechanisms ready for your needs.'
position: 500
category: Recipes
---

<alert type="warning">

  Keep a look out on this space. Constantly adding more recipes over the next few months.
  [Give this repo a star, it will help out greatly!](https://github.com/fuxingloh/vue-horizontal)

</alert>

## What is recipes?

* Vue Horizontal is required, and you need to [install it](/installation).
* Recipes follow the design language defined in the [design principle](/design/principles).
* You should be able to extract the code snippet and use it as a single file component.
* If you are consistently recycling a design pattern, you should abstract your SFC.
* It might look different on your website due various parent CSS rules. Tailwind is used under the hood with normalizing, that might be different from your default settings.

## Recipes are designed for?

* For the responsive web [using the default breakpoints](/design/responsive).
* For mobile first design, [peeking navigation](/design/principles#peeking) will be used on the mobile.
  Assumption is made that you have a padding of 24px on the left and right on the mobile viewport.
  The 24px is then removed and added into the `<vue-horizontal>` as scroll padding.
* For broad usage pattern, you should take it and edit it your needs.

## Recipes are complex?

> Why is it not shipped together with vue-horizontal?

* You control how to structure your content with HTML
* You control how it looks with CSS

To give you greater control of your website and thus your code, vue-horizontal is merely a small component to
horizontally align your content while fixing all the nasty quirks related to horizontal control
(nav/scroll/touch).
It also contains a few methods and event emitter that are optimized to make your life easier.
It doesn't dictate how you structure your HTML or style your CSS.
This responsive design logic is merely a skeleton of logic that is merely useful in that context.
And every recipe may requires a different set of logic.

## Recipes List

<recipes-list></recipes-list>
