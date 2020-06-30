<h1 align="center">&lt;wc-template&gt; Tagged Template Literals in HTML</h1>

<div align="center">
  <a href="https://github.com/vanillawc/wc-template/releases"><img src="https://badgen.net/github/tag/vanillawc/wc-template" alt="GitHub Releases"></a>
  <a href="https://www.npmjs.com/package/@vanillawc/wc-template"><img src="https://badgen.net/npm/v/@vanillawc/wc-template" alt="NPM Releases"></a>
  <a href="https://bundlephobia.com/result?p=@vanillawc/wc-template"><img src="https://badgen.net/bundlephobia/minzip/@vanillawc/wc-template" alt="Bundlephobia"></a>
  <a href="https://github.com/vanillawc/wc-template/actions"><img src="https://github.com/vanillawc/wc-template/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillawc/wc-template/actions"><img src="https://github.com/vanillawc/wc-template/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/8ur9M5"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>z
  <a href="https://www.webcomponents.org/element/vanillawc/wc-template"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on WebComponents.org"></a>
</div>

## Installation

*Installation*
```sh
npm i @vanillawc/wc-template
```

*Import from NPM*
```html
<script type="module" src="node_modules/@vanillawc/wc-template/index.js"></script>
```

*Import from CDN*
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/vanillawc/wc-template@1/index.js"></script>
```

## Demo

Try it on [WebComponents.dev](https://webcomponents.dev/edit/BggRSZ5D4tmsyce94mpB?sv=1&pm=1)

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
<wc-template src="sample2.html" theme="context.json"></wc-template>
```

## Contributing

See [CONTRIBUTING.md](https://github.com/vanillawc/vanillawc/blob/main/CONTRIBUTING.md)
