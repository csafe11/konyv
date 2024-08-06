export default defineNuxtRouteMiddleware((to, from) => {
console.log('global middleware from `/middleware/` that runs on every route change')
})