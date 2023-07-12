const moduleOptions = `<%= JSON.stringify(options) %>`
const logStyle = 'background-color: #00f2ea; padding: 2px 5px; border-radius: 5px; font-weight: bold; border: 2px solid #ff0050; color: #000;'

export function log(...args) {
  const options = JSON.parse(moduleOptions)
  // eslint-disable-next-line no-console
  console.log('%c' + options.nameShort, logStyle, ...args)
}

function cookieConsent() {
  const cookies = document.cookie.split(';')
  const consentCookie = cookies.find(cookie => cookie.includes('ralph-cookie-consent'))
  if (consentCookie) {
    return consentCookie.split('=')[1] === 'true'
  } else {
    return false
  }
}

export const addToCart = (eventData) => {
  if (cookieConsent()){
    ttq.track('AddToCart', {
      content_id: eventData.item.skuId,
      quantity: eventData.item.quantity,
      content_name: eventData.product.name,
    })
  }
}  

export const addToFavorite = (eventData) => {
  if (cookieConsent()){
    ttq.track('AddToWishlist', {
      content_id: eventData.productId
    })
  }
}

export const startedCheckout = (data) => {
  if (cookieConsent()) {
    const itemsInCart = data.__ob__.dep.subs[0].value.cart.data.items
    log('itemsInCart', itemsInCart)
    const mapped = itemsInCart.map(item => { 
      let obj = {
        content_id: item.skuId,
        quantity: item.quantity,
        content_name: item.product.name,
      }
      return obj
    })
    ttq.track('InitiateCheckout', {
      contents: mapped
    })
  }
}

export const viewProduct = (eventData) => {
  if (cookieConsent()) {
    ttq.track('ViewContent', {
      content_id: eventData.product.productId,
      content_name: eventData.product.name,
    })
  }
}
