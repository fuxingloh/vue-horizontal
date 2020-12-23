---
title: Taxonomy
description: 'Defining the taxonomy of a horizontal layout and what you should be concerned with.'
position: 11
category: Design
---

Defining the taxonomy of a horizontal layout and what you should be concerned with when designing content horizontally.
**Here lies an opinionated design guideline.**

## Vue Horizontal

<snippet-mock-browser>
<design-taxonomy></design-taxonomy>
</snippet-mock-browser>

## Item 

<design-swatch color="black">ITEM</design-swatch>

* Item, card or content; there are many names for it. It's where you display the items horizontally.
* Content should be equally sized, same height, same width.
* Content should be sized responsive to the viewport.
* Content should snap to start, end or center after scrolling.
* Content should have a background different to the container with at least 12px padding.

## Margin

<design-swatch color="orange">GAP</design-swatch>

* The horizontal gap between items, should be at least 16px wide.
  * `margin-right` should be used because content should start from 0. This is also due to firefox compatibility issues, 
    as it does not snap to 0 on screen load. (Instead of `margin: 0 8px` it should be `margin-right: 16px`)
  * `scroll-padding-left: 24px` can be used to change the snap to position area, especially useful add padding to the 
    side of a 100vw `vue-horizontal`.  
* The vertical gap should appear if:
  * Scrollbar is enabled.
  * Shadow are enabled for your content. 
  * Basically anything that can cause clipping. Margin will add space so that the effects is not clipped.

## Scrollbar

<design-swatch color="green">BAR</design-swatch>

* Scrollbar **indicate** to the users that the items can be horizontally scrolled.
  * <span style="color: red;font-weight:700;">Navigation</span> button is used in Vue Horizontal to indicate just that.
* The opinionated view is to have scrollbar disabled by default, due to the poor user experience of dragging the bar.
  * For mouse users, scrolling should be done with <span style="color: red;font-weight:700;">navigation</span> button.
  * For trackpad users, they can use touch scrolling.
  * For mobile touch screen user, they can use touch scrolling.

## Navigation

<design-swatch color="red">NAV</design-swatch>

* Alternative to scrollbar to seek content programmatically.
* Should only appear if there are content to be scrolled.
* Should snap to item after scrolling.
* Should scroll smoothly to indicate to touch screen and trackpad users they can touch scroll.
* Should not block content.
  * Thus, for the benefit of mobile users, it should be hidden if view port width is low.
  * For mobile users <span style="color: purple;font-weight:700;">peeking</span> should be used to indicate that users can touch scroll to next.

## Peeking

<design-swatch color="purple">PEEK</design-swatch>


* Alternative to <span style="color: green;font-weight:700;">scrollbar</span> and 
  <span style="color: red;font-weight:700;">navigation</span> to indicate to the users that the items can be 
  horizontally scrolled.
* Indicate to users you can touch scroll to seek to the next item.
* Should only appear on mobile devices; screen with low view port.
* Peek `8px` of items on the left and right. Peeking should only appear if there are actual items on the left or right.
* Vue Horizontal must be 100vw for a seamless edge to edge experience.
  * `scroll-padding-left: 24px` can be used to snap correctly. 

### Peeking Example

* Accomplished though the use of `first-child` `last-child` to set different padding and scroll padding condition.
* There are also many ways other way to accomplish this.

```vue[Peeking.vue] import=design/design-peeking.vue padding=0
```
