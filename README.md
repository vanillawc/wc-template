[![GitHub Releases](https://img.shields.io/github/v/release/vanillawc/wc-template.svg)](https://github.com/vanillawc/wc-template/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-template)](https://www.npmjs.com/package/@vanillawc/wc-template)
[![Downloads](https://badgen.net/npm/dt/@vanillawc/wc-template)](https://www.npmjs.com/package/@vanillawc/wc-template)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-template/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-template)
[![Latest Status](https://github.com/vanillawc/wc-template/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-template/actions)
[![Release Status](https://github.com/vanillawc/wc-template/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-template/actions)

Template HTML with tagged template literals

-----

## Installation

```sh
npm i @vanillawc/wc-template
```

Then import the `index.js` file at the root of the package.

-----

## Usage

**Attributes**

- `src` - load an external source file
- `context` - load the tags from an external endpoint

### Basic Usage

```html
<wc-template src="sample.html"></wc-template>
```

***Demo: [Basic Usage - Demo][]***

## Context

If the template is a tagged template literal, context can be provided via an external endpoint.

```html
<wc-template src="sample2.html" theme="assets/context.json"></wc-template>
```

***Demo: [Basic Usage - 'context' Attribute][]***

[Basic Usage - Demo]: https://vanillawc.github.io/wc-template/demo/basic-usage.html
[Basic Usage - 'context' Attribute]: https://vanillawc.github.io/wc-template/demo/context-attribute.html
