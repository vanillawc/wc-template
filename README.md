[![GitHub Releases](https://badgen.net/github/tag/vanillawc/wc-template)](https://github.com/vanillawc/wc-template/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-template)](https://www.npmjs.com/package/@vanillawc/wc-template)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillawc/wc-template)](https://bundlephobia.com/result?p=@vanillawc/wc-template)
[![MIT License](https://badgen.net/github/license/vanillawc/wc-template)](https://raw.githubusercontent.com/vanillawc/wc-template/master/LICENSE)
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

## Context

If the template is a tagged template literal, context can be provided via an external endpoint.

```html
<wc-template src="sample2.html" theme="assets/context.json"></wc-template>
```

## Demo

### [WC-Template-Demo - WebComponents.dev](https://webcomponents.dev/edit/BggRSZ5D4tmsyce94mpB?sv=1&pm=1)
