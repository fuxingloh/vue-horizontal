---
title: Dragging
description: 'Vue Horizontal recipes for dragging horizontal content.'
position: 901
category: Recipes
---

## Why you should not implement dragging

For the record, I am **99% against** adding drag functionality for your horizontal content.

1. Touch capable already has the ability to drag (with their finger) without custom implementation.
   * Pick up a touch capable device and try it yourself.
2. Devices that comes with trackpad can scroll (with two finger) horizontally just as you would with touch screen.
3. Manipulation of mouse event unnatural to what the user expect might cause unwarranted side effects.
   * Unable to select content, as they would trigger drag start event.
   * Unable to click on content, as they would trigger drag start event.
4. You could just use a scrollbar.
5. It's very tiring to repeatedly navigate on a website that has to drag their content.
   * Click, hold, scrubbing to content, hand cram, carpal tunnel, release, annoyed, poor ux
   * Compared to click to navigate, much much much simple.
6. Keeping the code simple.

Nevertheless, if you insist, here is how you can do it.
Code is inspired by [Draccano](https://github.com/Draccano) with his
[pr into another repo](https://github.com/fuxingloh/vue-horizontal-list/pull/52).

## Implementation

<alert type="warning">

Recipes are work in progress! 

</alert>

