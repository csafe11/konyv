export default defineNuxtRouteMiddleware((to, from) => {
console.log('named middleware from `/middleware/` that runs only when it has been manually applied')
})
