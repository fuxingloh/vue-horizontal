---
title: Responsive
description: "
In Vue Horizontal the default responsive classes are turned off by default.
We believe that you should be in control and implement the CSS specified to your design standards.
"
position: 102
category: Design
---

In Vue Horizontal the default responsive classes are turned off by default. 
We believe that you should be in control and implement the CSS specified to your design standards to allow for greater 
control.

## Built-in responsive

Built-in responsive are created in CSS with media queries, the viewport of the screen (your browser actual width).

* `< 640px` 1 item in container
* `< 768px` 2 item in container
* `< 1024px` 3 item in container
* `< 1280px` 4 item in container
* `> 1280px` 5 item in container

```vue[Responsive.vue] import=design/design-responsive-built-in.vue
```

## DIY with Media Query

You should always do it yourself using CSS media query with different breakpoints.

### Formula
```txt
[] Margin [] Margin [] = 100%
[] [] []               = 100% - (Margin * 2) = 
[] * 3                 = 100% - (Margin * 2)
[]                     = (100% - (Margin * 2))/3 
```

### Example

```vue[Responsive.vue] import=design/design-responsive-diy.vue
```

## Best practices

* Responsive item width 
* Responsive margin, smaller on small screen
* Responsive navigation, hide on smaller screen
* Responsive peeking, show prev/next on small screen

```vue[Responsive.vue] import=design/design-responsive-all.vue padding=0
```

> Due to the nature of varying web design, there is no one size fit all. 
> This is just an example with the given condition.
