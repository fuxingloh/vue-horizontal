---
title: Scrollbar
description: "
Customizing Vue Horizontal scrollbar.
"
position: 104
category: Design
---

<snippet-mock-browser>
<design-scrollbar></design-scrollbar>
</snippet-mock-browser>


## Opinions

* Scrollbar indicate to the users that the items can be horizontally scrolled.
  * By default, [navigation button](/design/navigation) is used in Vue Horizontal to indicate just that.
* The opinionated view is to have **scrollbar disabled by default**, due to the poor user experience of dragging the bar.
  * For mouse users, scrolling should be done with [navigation button](/design/navigation).
  * For trackpad users, they can use touch scrolling.
  * For mobile touch screen user, they can use touch scrolling.

## Customizing

Nevertheless, if you insist on using it, here is how you can customise it with webkit.


```vue[ScrollBar.vue] import=design/design-scrollbar-customize.vue
```


## Limitations

The selector: `webkit` only works on 90%+ of the browser. 

<caniuse feature="mdn-css__selectors__-webkit-scrollbar"></caniuse>
