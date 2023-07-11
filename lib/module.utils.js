const moduleOptions = `<%= JSON.stringify(options) %>`
const logStyle =
  'background-color: #00f2ea; padding: 2px 5px; border-radius: 5px; font-weight: bold; border: 2px solid #ff0050; color: #000;'
export function log(...args) {
  const options = JSON.parse(moduleOptions)
  // eslint-disable-next-line no-console
  console.log('%c' + options.name, logStyle, ...args)
}
