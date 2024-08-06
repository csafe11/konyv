export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      hi: (name: string) => `Hi, ${name}! I’m a “foo”,
client-only, auto-registered!`,
    },
  };
});
