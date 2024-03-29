---
templateKey: TemplateBasic
title: Gaetanobarreca.dev
tools: GatsbyJs, React, GraphQL, Netlify
date: 2019-08
intro: 'My personal portfolio. Exploring Gatsby.JS, an open source framework based on React.'
featuredImage: ./portfolio.png
backTo: /projects
backLabel: projects
sortingOrder: 1
---

My personal portfolio, created with <a href="https://www.gatsbyjs.org/" target="_blank"><strong>Gatsby.JS</strong></a>, an open source framework based on React.

##Technical Stack

The website's React code is rendered to static HTML at build time. Once a user visits the page, the JavaScript bundle is loaded asynchronously, ensuring superfast page load.

Content is stored in markdown files and queried using [**GraphQL**](https://graphql.org/).

Styling is done using [**Styled Components**](https://www.styled-components.com).

The codebase is type-checked using [**TypeScript**](https://www.typescriptlang.org/), formatted using [**Prettier**](https://github.com/prettier/prettier) and linted using [**TSLint**](https://palantir.github.io/tslint/). Enforced using commit hooks.

The website automatically rebuilds when changes are merged to the `master` branch. Everything is then deployed live as a static site by [**Netlify**](https://www.netlify.com).

Source code on <a href="https://github.com/gaebar/gaetanobarreca.dev" target="_blank"><strong>GitHub</strong></a>.
