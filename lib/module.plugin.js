import { log, addToCart, addToFavorite, startedCheckout, viewProduct } from './ralph-module-tiktok.utils'
const moduleOptions = `<%= JSON.stringify(options) %>`

export default function(app, inject) {
  const options = JSON.parse(moduleOptions)

  inject(options.name, options)

  app.store.registerModule(options.name, {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
  })

  // Listen to events in ralph and take action
  if (options.trackEvents) {
    app.store.subscribe((mutation, state) => {
      if (mutation.type === 'events/push') {
        const eventType = mutation.payload.type
        const eventData = mutation.payload.data

        switch (eventType) {
          case 'cart:add':
            log('Cart add event received', eventData);
            log(options.trackEvents)
            addToCart(eventData)
            break;

          case 'favorite:add':
            log('Favorite added', eventData);
            addToFavorite(eventData)
            break;

          case 'checkout:impression':
            log('Checkout initiated', eventData);
            startedCheckout(eventData)
            break;

          case 'product-detail:impression':
            log('Product viewed', eventData);
            viewProduct(eventData)
            break;

          case 'checkout:purchase':
            log('Checkout purchase', eventData);
            ttq.track('PlaceAnOrder')
            break;

          case 'newsletter:subscribe':
            log('Newsletter subscribe', eventData);
            ttq.track('Subscribe')
            break;

          case 'user:register':
            log('User register', eventData);
            ttq.track('CompleteRegistration')
            break;
        }

        // Example of how to listen to ralph event
        // if (eventType === 'cart:add') {
        //   ttq.track('AddToCart', {
        //     content_id: eventData.item.skuId,
        //     quantity: eventData.item.quantity,
        //     content_name:  eventData.product.name,
        //     content_type: eventData.product.primaryCategory.name,
        //   })
        //   log('Cart add event received', eventData)
        //   log('Current state', state)
        // }

        // All events sent by ralph since version 19.1.0
        // ------------------------------------------------
        // `widget:click` - data payload: `{ href }`
        // `menu:click` - data payload: `{ item }`
        // `search:click` - data payload: `{ type, data }`

        // All events sent by ralph since version 19.0.0
        // ------------------------------------------------
        // `cart:add` - data payload: `{ item, product }`
        // `cart:remove` - data payload: `{ item, product }`
        // `page:impression` - data payload: `{ route }`
        // `product:click` - data payload: `{ product, page, index, pageSize }`
        // `product:impression` - data payload: `{ product, page }`
        // `product-detail:impression` - data payload: `{ product }`
        // `favorite:add` - data payload: `{ productId, product }`
        // `favorite:remove` - data payload: `{ productId, product }`
        // `checkout:impression` - data payload: `{}`
        // `checkout:update` - data payload: `{ checkout }`
        // `checkout:purchase` - data payload: `{ order }`
        // `user:login` - data payload: `{}`
        // `user:logout` - data payload: `{}`
        // `user:register` - data payload: `{}`
        // `user:password-reset` - data payload: `{ email, resetKey }`
        // `user:delete` - data payload: `{}`
        // `newsletter:subscribe` - data payload: `{ email }`
      }
    })
  }
}
