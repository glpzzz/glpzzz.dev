<script setup lang="ts">
const cv = ref(null)
const {data, error} = await useFetch('/api/all')
cv.value = data.value

</script>

<template>
  <PageHeader title="Work Experience"></PageHeader>
  <div class="container">
    <ul v-if="cv.work" class="card-list">
      <li v-for="(work,index) in cv.work" :key="`work-${index}`" class="card mb-4 shadow border-0">
        <div class="card-body">
          <h2 class="card-title">{{ work.position }} at <a :href="work.url">{{ work.name }}</a></h2>
          <h3 class="card-subtitle">
            <i class="bi bi-pin-map"></i> {{ work.location }}<br/>
            <i class="bi bi-calendar3"></i> {{ work.startDate }} - {{ work.endDate }}
          </h3>
          <p class="card-text">{{ work.summary }}</p>
          <details v-if="work.highlights" card-text>
            <summary>Read more</summary>
            <ul>
              <li v-for="(highlight,hindex) in work.highlights" :key="`work-${index}-${hindex}`">
                {{ highlight }}
              </li>
            </ul>
          </details>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul.card-list {
  list-style: none;
  padding: 0;
}

h3.card-subtitle{
  font-size: .9em;
  color: var(--bs-secondary-text-emphasis);
  margin: .75rem 0 1rem;
}
</style>