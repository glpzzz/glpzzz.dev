<script setup lang="ts">

const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <article class="container-fluid">
      <header class="mb-4">
        <h1>{{ doc.title }}</h1>
        <p v-if="doc._dir=='blog'" class="description">
          <time datetime="{{ doc.date }} 00:00:00 +0000">{{ formatDate(doc.date) }}</time>
          - {{ doc.description }}
        </p>
      </header>
      <ContentRenderer :tag="false" :value="doc"/>
    </article>
  </ContentDoc>
</template>

<style lang="scss" scoped>

article > header > p > time {
  font-style: italic;
}


</style>