export default defineNuxtPlugin(nuxtApp => {
return {
provide: {
    hello: () => "fooz-1, registered via nuxt.config.ts!"
}
}
})
