<script setup>
const { $hello, $greet } = useNuxtApp()
console.log($greet('Matt'))
if (process.server) {
console.log('server only:', $hello('John'))
}
</script>


<template>
    <div>
<p>
$greet (client-server): {{ $greet('Marlene') }}
</p>
<ClientOnly>
<p>
$hi (client only): {{ $hi('Molly') }}
</p>
</ClientOnly>
</div>
</template>
