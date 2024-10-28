# HTTP Client HintsX

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Access and use HTTP Client Hints in your application. Detect the client browser and the operating system on your server.

## Features

- 🚀 Browser and Operating System detection: check [detect-browser-es](https://www.npmjs.com/package/detect-browser-es) for more information.
- 💥 [Device Hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#client_hints) detection
- ⚡ [Network Hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#client_hints) detection
- ✨ [Critical Hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Client_hints#critical_client_hints) detection

## HTTP Client hints

> [!WARNING]
> The [HTTP Client hints headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Client_hints) listed below are still in draft and only Chromium based browsers support them: Chrome, Edge, Chromium and Opera.

The module includes support for the following HTTP Client hints:
- [Device Hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#client_hints)
  - [Device-Memory](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Device-Memory)
- [Network Hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#client_hints)
  - [Save-Data](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data)
  - [Downlink](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Downlink)
  - [ECT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ECT)
  - [RTT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/RTT)
- [User Agent Hints](https://github.com/WICG/ua-client-hints)
  - [Sec-CH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH)
  - [Sec-CH-UA](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA)
  - [Sec-CH-UA-Mobile](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile)
  - [Sec-CH-UA-Platform](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform)
  - [Sec-CH-UA-Arch](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Arch)
  - [Sec-CH-UA-Model](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Model)
  - [Sec-CH-UA-Platform-Version](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version)
  - [Sec-CH-UA-Bitness](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness)
- [Critical Client Hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Client_hints#critical_client_hints)
  - [Sec-CH-Width](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Width)
  - [Sec-CH-DPR](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-DPR)
  - [Sec-CH-Viewport-Width](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Viewport-Width)
  - [Sec-CH-Viewport-Height](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Viewport-Height)
  - [Sec-CH-Prefers-Color-Scheme](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme)
  - [Sec-CH-Prefers-Reduced-Motion](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion)
  - [Sec-CH-Prefers-Reduced-Transparency](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency)

## Quick Setup

Install the package you want to use in your application, this package exports each client hint separately, or you can use the default to use all the hints.

```js
import {
  extractBrowserHints,
  extractCriticalHints,
  extractDeviceHints,
  extractNetworkHints,
} from 'http-client-hints'
```

or

```js
import { extractBrowserHints } from 'http-client-hints/browser'
import { extractCriticalHints } from 'http-client-hints/critical'
import { extractDeviceHints } from 'http-client-hints/device'
import { extractNetworkHints } from 'http-client-hints/network'
```

You can also use require (CommonJS: CJS), the package has been built with dual ESM and CJS support.

```js
const {
  extractBrowserHints,
  extractCriticalHints,
  extractDeviceHints,
  extractNetworkHints,
} = require('http-client-hints')
```

or

```js
const { extractBrowserHints } = require('http-client-hints/browser')
const { extractCriticalHints } = require('http-client-hints/critical')
const { extractDeviceHints } = require('http-client-hints/device')
const { extractNetworkHints } = require('http-client-hints/network')
```

You can also use this package when using [H3](https://github.com/unjs/h3/tree/main):

```js
import { extractImageClientHints } from 'http-client-hints/h3'
```

If you want to use this package in your [Nuxt](https://nuxtjs.org) application, check [Nuxt HTTP Client Hints Module](https://github.com/userquin/nuxt-http-client-hints).

That's it! You can now use HTTP Client Hints in your server application ✨

You can check the source code or the [JSDocs](https://www.jsdocs.io/package/http-client-hints) for more information.

## License

[MIT](./LICENSE) License © 2024-PRESENT [Joaquín Sánchez](https://github.com/userquin)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/http-client-hints?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/http-client-hints
[npm-downloads-src]: https://img.shields.io/npm/dm/http-client-hints?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/http-client-hints
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/http-client-hints
[license-src]: https://img.shields.io/github/license/userquin/http-client-hints.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/userquin/http-client-hints/blob/main/LICENSE
