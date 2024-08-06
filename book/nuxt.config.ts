// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-windicss"],
  plugins: ["~/plugins/fooz/fooz-1.ts"],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
  css: ["bootstrap/dist/css/bootstrap.min.css"], // add
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
