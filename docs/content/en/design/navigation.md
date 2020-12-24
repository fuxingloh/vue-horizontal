---
title: Navigation
description: "
Customizing Vue Horizontal navigation button to control pagination of content.
"
position: 103
category: Design
---

<snippet-mock-browser>
<design-navigation></design-navigation>
</snippet-mock-browser>

## Opinions

* Alternative to scrollbar to seek content.
* Should only appear if there are content to be scrolled.
* Should snap to item after scrolling.
* Should scroll smoothly to indicate to touch screen and trackpad users they can touch scroll.
* Should not block content.
  * Should be relative to the content height, smaller content height equals to smaller button.
  * Thus, for the benefit of mobile users, it should be hidden if view port width is low.
  * For mobile users [peeking](/design/taxonomy#peeking) should be used to indicate that users can touch scroll to next.

## Customizing

In this example, the next/right button is replaced with slots. 
The prev/left button style is overridden with CSS.

```vue[Navigation.vue] import=design/design-navigation-customize.vue
```

## Adaptive to content height

### Tiny content height

```vue[TinyNavigation.vue] import=design/design-navigation-tiny.vue
```

### Small content height

```vue[SmallNavigation.vue] import=design/design-navigation-small.vue
```

### Above content

```vue[AboveNavigation.vue] import=design/design-navigation-above.vue
```
