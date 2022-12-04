---
title: Auto-fix and format your JavaScript with ESLint
description: When it comes to analyzing JavaScript program errors, ESLint is one of the best linting tools available.
date: 26-11-2022
author: 'Amin Charoliya'
category: 'javascript'
bannerImage: 'auto-fix-eslint.jpg'
tags:
    - ESLint
    - javascript
---

**When it comes** to analyzing [JavaScript program](https://duckduckgo.com) errors, ESLint is one of the best linting tools available. ESLint provides checks for a large set of potential errors and style violations. Its pluggable architecture also enables anyone to write their own rules and custom configurations.

_One of my favorite_ features is the ability to auto-fix using the --fix flag. Integrating auto-fix provides constant feedback by cleaning up mistakes and keeping code clean before you check it in to a repository. This saves time for you and your team when reviewing code by ensuring that the code contributed doesn't require little clean ups.

---

    const App = () => {
        return (
            <h1>Hello World.</h1>
        )
    }

I like to do this cleanup right away whenever I save a file in my editor `js`. It provides a quick feedback loop and persists the fixed changes to disk. In this article, I am going to show you how to do that as well for some popular editors.

> Note: This is not a tutorial on how to use ESLint, I assume you already are familiar with the tool. If you need help getting started with ESLint, check out the Getting Started guide first before continuing.

![Quiz with react](/images/quiz-with-react.png)

## Installing ESLint

### Installing ESLint

#### Installing ESLint

##### Installing ESLint

###### Installing ESLint

You can install ESLint locally for a given project (inside node_modules) or globally for all projects. We will use a local ESLint install for this tutorial, but most of these will work for a global install as well.

    npm install eslint
    --dev

## VS Code

For VS Code, install the ESLint package. Then, to format on save, go to global settings and search for ESLint and turn on the ESLint: Auto Fix On Save option.
