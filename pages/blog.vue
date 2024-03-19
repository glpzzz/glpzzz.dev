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
  <div class="container-fluid">
    <header>
      <h1>Blog</h1>
      <p>Here, I blog mostly about tech…</p>
    </header>

    <ContentList
        path="/blog"
        :query="query"
        v-slot="{ list }">
      <ul>
        <li v-for="post in list" :key="post._path">
          <PostCard :post="post"/>
        </li>
      </ul>
    </ContentList>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

@media (min-width: 1200px) {
}
</style>