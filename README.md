
# Tiktok module for Geins PWA Storefront

A module for Geins PWA Storefront Ralph that adds Tiktok event tracking as well as possibilities to display videos on your storefront.

## Pre-requisites

- Geins Account and PWA Storefront Ralph. [Get a free trial here](https://www.geins.io)
- TikTok Ads Manager Account. [Get account here](https://ads.tiktok.com/i18n/home)

## Description

## Installation

### 1. Install the module

```bash
npm i @geins/ralph-module-tiktok
```

### 2. Add the module to your Geins PWA Storefront Ralph

Add the module to your Geins PWA Storefront Ralph by adding the following line to your `nuxt.config.js` file:

```js
...
  modules: [
    [
      '@geins/ralph-module-tiktok',
      {
          enabled: true,
          debug: true,
          pixelId: 'your tiktok pixel ID',
          trackEvents: true
      }
    ]
  ]
```
## Event tracking with TikTok Pixel

If `pixelId` is added as a module option, then tracking via TikTok will be enabled. Set up events to track and get your Pixel Id from the TikTok Ads Manager page. If no pixelId is added, live tracking will not be enabled.

## To use with Geins CMS (no-code)

#### 1. Add the module to your Geins PWA Storefront Ralph

Use the [@geins/ralph-module-cms-json-container](https://www.npmjs.com/package/@geins/ralph-module-cms-json-container)

```bash
npm i @geins/ralph-module-cms-json-container
```

#### 2. Add the module to your Geins PWA Storefront Ralph

Add module to your `nuxt.config.js` file:

```js
// nuxt.config.js

...
    modules: [
      '@geins/ralph-module-cms-json-container'
    ]
..
```

Set the `widgetRenderTypesComponents` in your `nuxt.config.json` file to use the `GeinsWidgetJsonContainer` component for the `JSON` widget type.

```js
// nuxt.config.js

...
  publicRuntimeConfig: {
      widgetRenderTypesComponents: {
        JSON: 'GeinsWidgetJsonContainer'
      },
  }
...
```

## Module Options

Add extra options to module configuration in `nuxt.config.js` file.
| Parameter | Default | Required | Example |
|-|-|-|-|
| enabled | `true` | No | Enables the module|
| debug | `true` | No | Enables debug info to console |
| pixelId | none | Yes | Your company's Tiktok Pixel ID [TikTok Ads Manager](https://ads.tiktok.com) |

## Usage

## Components

#### Use with Geins CMS
