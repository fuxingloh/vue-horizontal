---
title: Limitations
description: 'Vue Horizontal implementation has over 99% cross browser compatibility with 3 known non-breaking limitations.'
position: 6
category: Getting Started
---

Vue Horizontal implementation has over 99% cross-browser compatibility with 3 known non-breaking limitations.
To help you make informed decision and understand the library limitations, here is a list of up-to-date browser support
tables.

## CSS Scroll Behavior: Smooth

In Vue Horizontal, smooth scrolling is enabled by default. With `scroll-behavior: smooth`, it enables smooth scrolling
experience when scroll event is triggered by programmatic calls. Although this is not a breaking functional feature, it
provides a **"smooth"** scrolling user experience.

As of December 2023, there is a 96% cross-browser compatibility.

<caniuse feature="css-scroll-behavior"></caniuse>

## CSS Scroll Snap

Scroll snap align or scroll-snapping, is a CSS technique that allows customizable scrolling experiences like pagination
of carousels by setting defined snap positions. Vue Horizontal has it enabled by default to disable you can
set `<vue-horizontal snap="none">`.

As of December 2023, there is a 98% cross-browser compatibility.

<caniuse feature="css-snappoints"></caniuse>

## Hiding scrollbar

In Vue Horizontal, the x-axis scrollbar is hidden by default.
Although there isn't a shared specification, most browsers have it implemented one way or another.
All available methods to hide the scrollbar are implemented in this library.
You can expect 99%+ cross browser compatibility.

<caniuse feature="css-scrollbar"></caniuse>
