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

```vue[Component.vue] import=features/features-using.vue
```

## Responsive

It comes with default set of responsive breakpoints that is **disabled by default**.
We believe that CSS should be written by the users and not controlled by a library.
However, for the sake of convenience, you can use enable it with the `responsive` prop.
Check out [responsive 101](/design/responsive) for a detailed write-up about responsive horizontal design.

### Breakpoints

> They are created in CSS with media queries, the viewport of the screen (your browser actual width).

* `< 640px` 1 item in container
* `< 768px` 2 item in container
* `< 1024px` 3 item in container
* `< 1280px` 4 item in container
* `> 1280px` 5 item in container

```vue[Responsive.vue] import=features/features-responsive.vue
```

## Scroll snapping

`<vue-horizontal snap="start|center|end">`

- start (default)
- center
- end
- none to turn it off

### `<vue-horizontal snap="start">`
```vue[ScrollSnappingStart.vue] import=features/features-scroll-snapping-start.vue
```

### `<vue-horizontal snap="center">`
```vue[ScrollSnappingCenter.vue] import=features/features-scroll-snapping-center.vue
```

### `<vue-horizontal snap="end">`
```vue[ScrollSnappingEnd.vue] import=features/features-scroll-snapping-end.vue
```

### `<vue-horizontal snap="none">`
```vue[ScrollSnappingNone.vue] import=features/features-scroll-snapping-none.vue
```

## Scroll bar

The Scroll bar is disabled by default, you can enable it the `scroll` prop.

### `<vue-horizontal scroll>`
```vue[Scrollbar.vue] import=features/features-scroll-bar.vue
```

## Navigation button

* Due to the varying nature of margins, padding, box-sizing and content-sizing, next/prev are done on best effort basis.
  * Default implementation should work for 95% of the use cases.
  * Alternatively you can use `scrollToIndex` of `scrollToLeft`.
* Snapping might not work as expected if smoothscroll is polyfill-ed.

### `<vue-horizontal :button="false">`
```vue[NavButtonDisable.vue] import=features/features-nav-button-disable.vue
```

### Override with slots

```vue[NavButtonSlot.vue] import=features/features-nav-button-slot.vue
```

## Events

### @prev @next

Emitted when prev or next are clicked. 

```vue[EventNavigation.vue] import=features/features-event-prev-next.vue
```

### @scroll

> @scroll-debounce is called when mounted.

```vue[EventScroll.vue] import=features/features-event-scroll.vue
```

## Methods

### `prev()` `next()`

* Scroll to the next/prev set of elements.
* Elements that are half visible, will not be scrolled past.
* Due to the varying nature of margins, padding, box-sizing and content-sizing, next/prev are done on best effort basis.
  * Default implementation should work for 95% of the use cases.
  * Alternatively you can use `scrollToIndex` of `scrollToLeft`.
* Snapping might not work as expected if smoothscroll is polyfill-ed.

```vue[MethodNavigation.vue] import=features/features-method-prev-next.vue
```

### `scrollToIndex()`

* Scroll to the index of the elements in `vue-horizontal`.

```vue[MethodScrollIndex.vue] import=features/features-method-scroll-index.vue
```

### `scrollToLeft()`

* The amount of pixel to the left you want to scroll by.
* Snap settings `snap="start|end|center"` will prevent the scrolling if it snaps backwards.
* Scroll behavior options
  * `scrollToLeft(100)` default to 'smooth' 
  * `scrollToLeft(100, 'smooth')` smooth scroll
  * `scrollToLeft(100, 'auto')` without smooth scroll

```vue[MethodScrollLeft.vue] import=features/features-method-scroll-left.vue
```

## Displacement

Displacement is a positive float number that you can override for a custom scroll displacement. Defaults to `1.0`.
Changing the value affects next/prev button and `.next()` `.prev()` function call as well.

```vue[ScrollDisplacement.vue] import=features/features-scroll-displacement.vue
```

## CSS
 
Overriding internal CCS with Vue deep selector (`>>>`).

### `.v-hl-btn`

* `.v-hl-btn` for both left and right button.
* `.v-hl-btn-prev`
* `.v-hl-btn-next`

```vue[CSSBtn.vue] import=features/features-css-btn.vue
```

### `.v-hl-container`

```vue[CSSContainer.vue] import=features/features-css-container.vue
```

### `.vue-horizontal`

The root div, has `.vue-horizontal` as the only class with 2 CSS attributes.
Ensure you don't override them as they are used for nav button positioning.

* `position: relative;`
* `display: flex;`
