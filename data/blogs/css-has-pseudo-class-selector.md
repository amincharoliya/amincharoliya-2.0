---
title: CSS :has() pseudo-class selector
description: The :has() selector is a CSS pseudo-class that allows a developer to apply styles to an element based on whether it contains another element or not
date: Nov 26, 2022
author: 'Amin Charoliya'
authorImage: 'amin-thumb.jpg'
category: 'css'
bannerImage: 'css-has.png'
tags:
    - css
    - pseudo-class
---

The `:has()` selector is a CSS pseudo-class that allows a developer to apply styles to an element based on whether it contains another element or not. This can be useful for creating more complex, dynamic styles based on the structure of the HTML.

First, Let's see one simple code example that shows how the `:has()` selector can be used:

```html[class="line-numbers"]
<style>
  /* This rule will apply to any element that has a child element with the class "alert" */
  :has(.alert) {
    border: 1px solid red;
  }
</style>

<!-- This element will have a red border because it has a child element with the class "alert" -->
<div>
  <p class="alert">This is an alert</p>
</div>

<!-- This element will not have a red border because it does not have a child element with the class "alert" -->
<div>
  <p>This is not an alert</p>
</div>
```

In this example, the `:has(.alert)` selector is used to apply a red border to any element that has a child element with the class alert.

The first div element in the HTML will have a red border because it contains a p element with the alert class. The second div element will not have a red border because it does not contain a child element with the alert class.

## Logical Operations with :has()

The `:has()` selector can be used to apply styles to an element based on the presence of certain elements or conditions.

When using multiple values inside the `:has()` selector, separated by commas, the selector will match if any of the values are true. For example, `a:has(b, c)` will apply the styles to `a` if either `b` or `c` exists as a descendant of `a`.

By chaining together multiple `:has()` selectors, the selector will match only if all of the values are true. For example, `a:has(b):has(c)` will apply the styles to `a` if both `b` and `c` exist as descendants of `a`.

This allows for complex, dynamic styles that can adapt to the structure of the HTML. It can be a powerful tool for creating flexible, maintainable styles in your web applications.

```css[class="line-numbers"]
article:has(video, audio) {
  /* if the article contains audio or video */
}
article:has(video):has(audio) {
  /* if the article contains both audio and video */
}
```

## Creating a Theme switch without javaScript

```html[class="line-numbers"]
<style>
  /* This rule will apply to the body element if it has a child element with the id "dark-theme-checkbox" checked */
  /* All the dark theme related CSS can go here */
  body:has(#dark-theme-checkbox:checked) {
    background-color: black;
    color: white;
  }
</style>

<!-- This div will be used to toggle the dark theme -->
<div id="dark-theme">
  <!-- The checkbox will be used to toggle the dark theme -->
  <input type="checkbox" id="dark-theme-checkbox" />

  <!-- The label will be used to style the checkbox and show the theme name -->
  <label for="dark-theme-checkbox">Dark theme</label>
</div>
```

In this example, the `:has()` selector is used to apply the dark theme styles to the body element if it has a child element with the id of "dark-theme-checkbox" checked.

The div element with the id of dark-theme is used to toggle the dark theme. When the dark-theme-checkbox checkbox is checked, which will cause the dark theme styles to be applied to the body element. When the checkbox is not checked the default light theme styles will be applied.

The user can toggle the theme by clicking the Dark theme label, which will toggle the dark-theme-checkbox checkbox and update the styles applied to the body element.

## Browser Compability

CSS `:has()` selector is relatively new and we should know it's compability before using in real-world projects. To do so you can check here: <a href="https://caniuse.com/css-has" target="_blank" rel="noopener noreferrer">https://caniuse.com/css-has</a>
