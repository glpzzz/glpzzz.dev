<script setup lang="ts">

const props = defineProps({
  work: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="card h-100 border-0 shadow-sm">
    <div class="card-body py-4 text-center d-flex flex-column justify-content-center">
      <h3 class="card-title">{{ work.position }} <br>
        @ <a :href="work.url" target="_blank">{{ work.name }}</a></h3>
      <p class="card-subtitle">
        {{ work.location }} <br>
        ({{ work.startDate }} - {{ work.endDate }})
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>