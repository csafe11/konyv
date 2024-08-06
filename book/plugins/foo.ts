export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      greet: (name: string) => `Greeting, ${name}! I’m a
“foo”, client-server, auto-registered!`,
    },
  };
});
