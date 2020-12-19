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

## Responsive

It comes with default set of responsive breakpoints that is **disabled by default**.
We believe that CSS should be written by the users and not controlled by a library.
However, for the sake of convenience, you can use enable it with the `responsive` prop.
Check out [responsive 101](/recipes-design/responsive) for a detailed write-up about responsive horizontal design.

### Breakpoints

> They are created in CSS with media queries, the viewport of the screen (your browser actual width).

* `< 640px` 1 item in container
* `< 768px` 2 item in container
* `< 1024px` 3 item in container
* `< 1280px` 4 item in container
* `> 1280px` 5 item in container

```vue[snippets/features/features-responsive.vue]
```

## Scroll snapping

`<vue-horizontal snap="start|center|end">`

- start (default)
- center
- end

### `<vue-horizontal snap="start">`
```vue[snippets/features/features-scroll-snapping-start.vue]
```

### `<vue-horizontal snap="center">`
```vue[snippets/features/features-scroll-snapping-center.vue]
```

### `<vue-horizontal snap="end">`
```vue[snippets/features/features-scroll-snapping-end.vue]
```

## Scroll bar

The Scroll bar is disabled by default, you can enable it the `scroll` prop.

### `<vue-horizontal scroll>`
```vue[snippets/features/features-scroll-bar.vue]
```

## Navigation button

### `<vue-horizontal :button="false">`
```vue[snippets/features/features-nav-button-disable.vue]
```

### Override with slots

```vue[snippets/features/features-nav-button-slot.vue]
```

## Events

### @prev @next

Emitted when prev or next are clicked. The width travelled will be emitted as well. 

```vue[snippets/features/features-event-prev-next.vue]
```

### @scroll

> @scroll-debounce is called when mounted.

```vue[snippets/features/features-event-scroll.vue]
```

## Methods

### `prev()` `next()`

```vue[snippets/features/features-method-prev-next.vue]
```

### `scrollToIndex()`

```vue[snippets/features/features-method-scroll-index.vue]
```

### `scrollToLeft()`

Snap settings `snap="start|end|center"` will prevent the scrolling if it snaps backwards. 

```vue[snippets/features/features-method-scroll-left.vue]
```

## CSS
 
Overriding internal CCS with deep selector.

### `.v-hl-btn`

* `.v-hl-btn`
* `.v-hl-btn-prev`
* `.v-hl-btn-next`

```vue[snippets/features/features-css-btn.vue]
```

### `.v-hl-container`

```vue[snippets/features/features-css-container.vue]
```

### `.vue-horizontal`

The root div, has `.vue-horizontal` as the only class with 2 CSS attributes.
Ensure you don't override them as they are used for nav button positioning.

* position: relative;
* display: flex;
