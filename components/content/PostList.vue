<script setup lang="ts">
const catsQuery = {
  where: [
    { _path: /^\/blog\/[a-z0-9-]*$/ },
  ],
}
</script>

<template>
  <ContentNavigation :query="catsQuery" v-slot="{navigation}">
    <ul>
      <li v-for="link of navigation" :key="link._path">
        <h2>{{ link.title }}</h2>
        <p>{{ link.description }}</p>
        <p>
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </p>
      </li>
    </ul>
  </ContentNavigation>
</template>

<style scoped>

</style>