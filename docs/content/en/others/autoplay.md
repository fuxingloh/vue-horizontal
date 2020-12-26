---
title: Autoplay
description: 'Vue Horizontal autoplay, programmatically control the scroll position/index of content. '
position: 901
category: Others
---

In Vue Horizontal, you can programmatically navigate horizontal content with the exposed methods. 
Although there isn't a built-in capability for autoplay, Vue Horizontal is created to support autoplay by 
exposing useful methods, events and props to accomplish that. 
You could use mounted to trigger the autoplay, but a more reliable method would be to trigger them
as it enter into the viewport. This can be achieved with IntersectionObserver but for
simplicity, you can use [vue-observe-visibility](https://www.npmjs.com/package/vue-observe-visibility) as well.

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

### Mounted

You can programmatically move to any position of the horizontal content in Vue Horizontal.
This allows you to easily move to preset initial position at mounted.

```vue[Mounted.vue] import=others/autoplay/recipes-autoplay-initial.vue
```

### Peeking

When Vue Horizontal is visible, move the content slightly to the right for a few seconds to indicate there are more 
content on the right.
For simplicity, you can use [vue-observe-visibility](https://www.npmjs.com/package/vue-observe-visibility).

```vue[Peeking.vue] import=others/autoplay/recipes-autoplay-peeking.vue
```

## Sequences

### Forward and reverse

```vue[FrowardReverse.vue] import=others/autoplay/recipes-autoplay-forward-reverse.vue
```

### Forward and reset

```vue[ForwardReset.vue] import=others/autoplay/recipes-autoplay-forward-reset.vue
```

## Programmatically

### Tracking

Track another scrollbar or vue horizontal and move it to the same position.
In this example, B tracking the position of A.

```vue[Tracking.vue] import=others/autoplay/recipes-autoplay-tracking.vue
```

### Mirror

Mirror another vue horizontal and move it to the same index.
A and B mirroring each other position, updated after scroll debounce.

```vue[Mirror.vue] import=others/autoplay/recipes-autoplay-mirror.vue
```
