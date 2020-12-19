---
title: Features
description: "Minimal setup with just HTML tags, v-for and with default responsive."
position: 5
category: Getting Started
---

## Using Vue Horizontal 

You can display horizontal content like you would do with just any other HTML content vertically.
Naturally, that would allow you to use `v-for` for a consistent design template.

* Any HTML structure works, you can mix and match them up.
* Use `v-for` and/or `v-if` with any `div` or `component`
* Navigation left, right button will automatically appear if there are any items overflowing
* Trackpad and touch scrolling will work as expected. 

```vue[snippets/features/features-using.vue]
```

## Options

### Responsive

It comes with default set of responsive breakpoints that is **disabled by default**.
We believe that CSS should be written by the users and not controlled by a library.
However, for the sake of convenience, you can use enable it with the `responsive` prop.
Check out [responsive 101](/recipes-design/responsive) for a detailed write-up about responsive horizontal design.

#### Breakpoints

> They are created in CSS with media queries, the viewport of the screen (your browser actual width).

* `< 640px` 1 item in container
* `< 768px` 2 item in container
* `< 1024px` 3 item in container
* `< 1280px` 4 item in container
* `> 1280px` 5 item in container

```vue[snippets/features/features-responsive.vue]
```

### Scroll snapping
### Scroll bar

## Navigation button
### Disable button
### Override with slots

## Events

### @prev
### @next
### @scroll
### @scroll-debounce

* Called Once

## Methods

### prev()
### next()
### scrollToIndex()
### scrollToLeft()

## CSS
 
Overriding internal CCS.

### v-hl-btn, v-hl-btn-prev, v-hl-btn-next
### v-hl-container
### vue-horizontal
