<script setup lang="ts">

const props = defineProps({
  volunteer: {
    type: Object,
    required: true
  }
})

const title = props.volunteer.url.split('/').pop()

</script>

<template>
  <div class="card h-100 border-0 shadow-sm">
    <div class="card-body">
      <h3 class="card-title">
        <a :href="volunteer.url" target="_blank">{{ title }}</a>
      </h3>
      <p class="card-text">
        <strong>{{ volunteer.position }}@{{ volunteer.organization }}</strong>: {{ volunteer.summary }}
      </p>

      <details>
        <summary>Read More</summary>
        <ul>
          <li v-for="highlight in volunteer.highlights">{{ highlight }}</li>
        </ul>
      </details>

      <dl>
        <div>
          <dt>Start Date</dt>
          <dd>{{ volunteer.startDate }}</dd>
        </div>
        <div>
          <dt>End Date</dt>
          <dd>{{ volunteer.endDate }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped>

</style>