---
title: Basic usage
description: "Minimal setup with just HTML tags, v-for and with default responsive."
position: 5
category: Getting Started
---

## Minimal setup

You can display horizontal content like you would do with just any other html content vertically.

* Any HTML structure works, you can mix and match them up.
* Navigation left, right button will automatically appear if there are any items overflowing
* Trackpad and touch scrolling will work as expected. 

```vue[snippets/basic-minimal-setup.vue]
```

## Using v-for

Naturally, that would allow you to use `v-for` for a consistent design template.

* `v-for` a div
* `v-for` your single file component
* `v-for` with `v-if` for dynamic content
* You get the idea

```vue[snippets/basic-using-v-for.vue]
```

## Responsive

It comes with default set of responsive breakpoints that is **disabled by default**.
We believe that CSS should be written by the users and not controlled by a library.
However, for the sake of convenience, you can use enable it as such `<vue-horizontal responsive>`.
Check out [responsive 101](/recipes-design/responsive) for a detailed write-up about responsive horizontal design.

### Breakpoints

> They are created in CSS with media queries, the viewport of the screen (your browser actual width).

* `< 640px` 1 item in container
* `< 768px` 2 item in container
* `< 1024px` 3 item in container
* `< 1280px` 4 item in container
* `> 1280px` 5 item in container


```vue[snippets/basic-responsive.vue]
```


