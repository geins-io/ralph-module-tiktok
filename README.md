[![NPM Package][npm]][npm-url]
[![NPM Downloads][npm-downloads-per-month]][npm-trends]
![Geins][mit-shield]

[![Start Geins Free Trial][geins-tiral-img]][geins-tiral-url] [![Geins Docs][geins-docs-img]][geins-docs-url]

[![geins-tiktok](https://raw.githubusercontent.com/geins-io/resources/master/images/banners/repos/geins-tiktok.jpg)](https://www.geins.io)


# Tiktok module for Geins PWA Storefront

The Tiktok module is an extension for Geins PWA Storefront Ralph that integrates TikTok Pixel event tracking into your storefront. By leveraging the power of TikTok's advertising platform, you can track and optimize user interactions on your online store.

## Pre-requisites

Before using the Tiktok module, make sure you have the following:

- Geins Account and PWA Storefront Ralph. [Get a free trial here](https://www.geins.io)
- TikTok Ads Manager Account. [Get account here](https://ads.tiktok.com/i18n/home)


## Description

The Tiktok module allows you to easily integrate TikTok Pixel event tracking into your Geins PWA Storefront Ralph. It provides a seamless integration that enables you to track various user actions on your online store and optimize your advertising campaigns on TikTok.

## Installation

To install the Tiktok module, follow these steps:

### 1. Install the module

Open your terminal and run the following command:

```bash
npm i @geins/ralph-module-tiktok
```

### 2. Add the module to your Geins PWA Storefront Ralph

To add the module to your Geins PWA Storefront Ralph, open your `nuxt.config.js` file and add the following code snippet:

```js
...
  modules: [
    [
      '@geins/ralph-module-tiktok',
      {
          enabled: true,
          debug: true,
          pixelId: 'your tiktok pixel ID',
          trackEvents: false
      }
    ]
  ]
```
## Event tracking with TikTok Pixel

To track various user events on your online store, such as add to cart, favorited product, checkout started, viewed product, purchase completed, newsletter subscribed, and user registration, you need to set up event tracking with TikTok Pixel. Here's how you can do it:

1. If you don't already have a TikTok Pixel ID, you need to obtain one through your TikTok Ads Manager account. You can find detailed instructions on how to get started with the TikTok Pixel [here](https://ads.tiktok.com/help/article/get-started-pixel?lang=en)
2. Once you have your TikTok Pixel ID, add it to the `pixelId` option in the module configuration
3. If you want to track ralph-events, set the `trackEvents` option to `true` in the module configuration.

The Tiktok module will then track the following ralph events:


| Type of activity  | Event tracked                                   | Information sent |
| ----------------- | ------------------------------------------------| ------------------- |
| Add to cart       | User adds a product to the cart                 | Sku ID, quantity, product name |
| Favorited product | User adds a product to their Favorites          | Product ID  |
| Checkout started  | User clicks on "go to checkout" | Sku ID, quantity, product name for all items in the cart  |
| Viewed product  | User navigates to a product page                         | Product ID, product name    |
| Purchase completed | User checks out their cart and pays | -- |
| Newsletter subscribed | User subscribes to newsletter | -- |
| User registers | User registers new account | -- |

## Module Options

Add extra options to module configuration in `nuxt.config.js` file.
| Parameter | Default | Required | Example |
|-|-|-|-|
| enabled | `true` | No | Enables the module |
| debug | `true` | No | Enables debug info to console |
| pixelId | none | No | Your company's Tiktok Pixel ID [TikTok Ads Manager](https://ads.tiktok.com) |
| trackEvents | `false` | No | If set to `true`, ralph events will be tracked |

## Usage

The Tiktok module seamlessly integrates with your Geins CMS. You can use it to track various user events and optimize your TikTok advertising campaigns based on the collected data.

## Components

The Tiktok module does not introduce any new components. It enhances the functionality of your Geins PWA Storefront Ralph by adding TikTok Pixel event tracking capabilities.

[npm]: https://img.shields.io/npm/v/@geins/ralph-module-tiktok
[npm-url]: https://www.npmjs.com/package/@geins/ralph-module-tiktok
[npm-downloads-per-month]: https://img.shields.io/npm/dm/@geins/ralph-module-tiktok.svg
[npm-trends]: https://npmtrends.com/@geins/ralph-module-tiktok
[geins-docs-url]: https://docs.geins.io
[geins-docs-img]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/geins-io/resources/master/sheilds/geins-docs-read-v3.json
[geins-tiral-url]: https://www.geins.io
[geins-tiral-img]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/geins-io/resources/master/sheilds/geins-fee-tiral.json
[mit-shield]: https://img.shields.io/badge/license-MIT-green
[mit-url]: https://en.wikipedia.org/wiki/MIT_License
