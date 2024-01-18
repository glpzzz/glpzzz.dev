<script setup lang="ts">

const props = defineProps(['title', 'description'])

</script>

<template>
  <header class="bg-white shadow-sm mb-4">
    <div class="container py-4">
      <h1 class="display-1">{{ title }}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid fugit iste neque? Accusamus aspernatur
        doloribus facere illum possimus. Assumenda culpa delectus dolores eum inventore laboriosam maxime minus officiis,
        omnis similique!</p>
    </div>
  </header>
</template>

<style scoped>

header > .container.py-4 {
  padding-top: 3.5rem !important;
  padding-bottom: 3.5rem !important;
}

</style>