---
title: Autoplay
description: 'Vue Horizontal autoplay, programmatically control the scroll position/index of content. '
position: 902
category: Recipes
---

In Vue Horizontal, you can programmatically navigate horizontal content with the exposed methods. 
Although there isn't a built-in capability for autoplay, Vue Horizontal is created to support autoplay by 
exposing useful methods, events and props to accomplish that.

### Vue Horizontal methods

* `$refs.horizontal.next()`
* `$refs.horizontal.prev()`
* `$refs.horizontal.scrollToIndex(1)`
* `$refs.horizontal.scrollToLeft(1000)`

### Vue Horizontal events

* `<vue-horizontal @scroll="({...}) => ">`
* `<vue-horizontal @scroll-debounce="({...}) => ">`

### Vue Horizontal props

* `:button="false"` to hide nav button. 
* `:displacement="0.5"` to control displacement of prev/next clicks relative to the width of the content.
* `snap="start|center|end|none"` to change the snapping settings

## Autoplay

## Initial

A simple move to position at mounted.

## Peeking

Move the content slightly to the right for a few seconds to indicate there are more content on the right.

## Progress

You can also use internal emitted data to track position/progress of content. 

<alert type="warning">

Recipes are work in progress!

</alert>
