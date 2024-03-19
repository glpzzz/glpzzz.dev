<script setup lang="ts">

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="card h-100 border-0 shadow-sm">
    <img :src="project.poster ? `/images/${project.poster}.png` : '/images/noimage.webp'"
         :alt="`Image on ${project.name}`"
         class="card-img-top object-fit-cover"
         style="aspect-ratio: 4/3" />
    <div class="card-body">
      <h4 class="card-title h5">
        {{ project.name }}
        <small v-if="project.url">| <a :href="project.url" target="_blank"
                                       class="text-muted">Demo</a></small>
      </h4>
      <p class="card-text">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>