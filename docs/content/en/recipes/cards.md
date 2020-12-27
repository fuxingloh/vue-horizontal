---
title: Cards
description: 'Vue Horizontal recipes, over 100 crafted recipes of horizontal layout with various design choices and control mechanisms ready for your needs.'
position: 501
category: Recipes
---

<alert type="info">

Vue Horizontal is not just a library, **it's a place for everything horizontal.**
Crafted recipes of horizontal layout with various design choices and control mechanisms ready for your needs.

</alert>

### Important usage notes

<alert type="warning">

🚧 Recipes are mostly work in progress 🚧

</alert>

* Vue Horizontal is required, and you need to [install](/installation) it.
* Recipes follow the design language defined in the [design principle](/design/principles).
* You should be able to extract the code snippet and use it as a single file component.
* Recipes are designed:
  * For the responsive web, [using default breakpoints](/design/responsive).
  * For mobile first design, [peeking](/design/principles#peeking) navigation will be used on the mobile. 
    Assumption is made that you have a padding of 24px on the left and right on the mobile viewport.
    The 24px is then removed and added into the <vue-horizontal> as scroll padding.
  * For broad usage pattern, you should take it and edit it your needs.
* It might look different on your website due various parent CSS rules. 
  Tailwind is used under the hood with normalizing, that might be different from your default settings.
