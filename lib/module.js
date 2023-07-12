const path = require('path')

const moduleName = 'ralph-module-tiktok'
const nameShort = 'tiktok'

const defaults = {
  name: moduleName,
  enabled: true,
  nameShort: nameShort,
  debug: true,
  pixelId: ''
}

module.exports = async function(moduleOptions) {
  const options = {
    ...defaults,
    ...this.options[moduleName],
    ...moduleOptions
  }

  if (!options.enabled) {
    return false
  }

  // add pixel tracking script
  if (options.pixelId !== '') {
    this.options.head.script.push({
      innerHTML: `
      !function (w, d, t) {
        w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
  
        ttq.load('${options.pixelId}');
        ttq.page();
      }(window, document, 'ttq');
      `
    });
  }

  this.addTemplate({
    src: path.resolve(__dirname, 'module.utils.js'),
    fileName: `${moduleName}.utils.js`,
    options
  })

  this.addPlugin({
    src: path.resolve(__dirname, 'module.plugin.js'),
    fileName: `${moduleName}.plugin.js`,
    options
  })

  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: path.resolve(__dirname, 'components'),      
      prefix: 'Geins',
      extensions: ['vue']
    });
  });

  return true
}
module.exports.meta = require('../package.json')
