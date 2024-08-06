<template>
  <h2>
    Bolg
  </h2>
  <ul>
    <li v-for="(item, index) in menu">
      <NuxtLink :to="item.path">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
  <NuxtPage :key="route.path" />
</template>

<script setup>
const route = useRoute()
const menu = [
  {
    title: 'Post 1',
    path: '/bolg/1'
  },
  {
    title: 'Post 2',
    path: '/bolg/2'
  },
  {
    title: 'Post 3 (Error Demo)',
    path: '/bolg/200'
  },
]
</script>