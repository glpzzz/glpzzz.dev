<script setup lang="ts">

useHead({
  title: "Blog"
})

const query = {
  sort: {
    date: -1
  }
}

</script>

<template>

  <h1>Blog</h1>

  <ContentList
      path="/blog"
      :query="query"
      v-slot="{ list }">
    <ul>
      <li v-for="article in list" :key="article._path">
        <article>
          <h2>
            <NuxtLink :to="article._path">
              {{ article.title }}
            </NuxtLink>
          </h2>
          <p>{{ article.description }}</p>
        </article>
      </li>
    </ul>
  </ContentList>
</template>

<style scoped>

</style>