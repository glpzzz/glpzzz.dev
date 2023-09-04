<script setup lang="ts">

const contentQuery = await queryContent('blog')
    .sort({ date: -1 })
    .find()

</script>

<template>
  <h1>My posts</h1>
  <p></p>

  <ul>
    <li v-for="post in contentQuery" :key="post._path">
      <h2><NuxtLink :to="`${post._path}`">{{ post.title }}</NuxtLink></h2>
      <p>{{ post.date }} - {{ post.description }}</p>
    </li>
  </ul>
</template>
