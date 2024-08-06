<script setup>
import useBaz from '~/composables/nested/use-baz'

definePageMeta({
layout: 'light',
middleware: 'foo'
})

const a = useA()
const b = useB()
const c = useC()
const d = useD()

console.log(useBaz())

const title = ref(null)
const contents = ref(null)

const runtimeConfig = useRuntimeConfig()
const { data, error } = await useFetch('/posts/99', {
baseURL: runtimeConfig.public['apiBaseUrl']
})
const post = unref(data)
title.value = post.title
contents.value = post.body


const { $hello, $greet } = useNuxtApp()
console.log($greet('Matt'))

// Make sure to call the plugin on the server side only.
if (process.server) {
  console.log('server only:', $hello('John'))
}

</script>



<template>
    <div>
        <hr />
        <p>
doSomething: {{ doSomething() }}
</p>
<hr />
<p>
Named export `useA`: {{ a }}
</p>
<p>
Named export `useB`: {{ b }}
</p>
<p>
Named export `useC`: {{ c }}
</p>
<p>
Named export `useD`: {{ d }}
</p>
<p>
Default export `useFoo`: {{ foo }}
</p>
<p>
Nested default export `useBaz`: {{ useBaz() }}
</p>

        <hr>
<p>
Hello About!
</p>
<h2>
    Plugins
  </h2>
  <h3>
    Foo
  </h3>
  <p>
    $greet (client-server): {{ $greet('Marlene') }}
  </p>
  <ClientOnly>
    <p>
      $hi (client-only): {{ $hi('Molly') }}
    </p>
  </ClientOnly>
  <h3>
    Baz
  </h3>
  <p>
    $apiBaseUrl (client-server): {{ $apiBaseUrl }}
  </p>
  <p>
    $foo (client-server, a composable used in the plugin): {{ $foo }}
  </p>

<hr />

<div v-if="!error">
<h1>{{ title }}</h1>
<div v-html="contents"></div>
</div>

</div>
</template>
