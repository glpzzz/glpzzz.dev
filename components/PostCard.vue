<script setup lang="ts">

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const dateString = new Date(props.post.date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

</script>

<template>
  <article class="card border-0 shadow-sm mb-4">
    <div class="card-body">
      <time datetime="{{ post.date }} 00:00:00 +0000">{{ dateString }}</time>
      <h2>
        <NuxtLink :to="post._path">
          {{ post.title }}
        </NuxtLink>
      </h2>
      <p class="description-post">
        {{ post.description }}
      </p>
    </div>
  </article>
</template>

<style scoped>

time {
  display: block;
  font-style: italic;
  margin-bottom: 0.25rem;
  font-size: .85em;
}

h2 {
  display: inline;
  font-size: 1em;
  margin: 0 .25em 0 0;

  > a {
    color: var(--bs-primary);
  }

  > a::after{
    content: ": ";
  }
}

p {
  display: inline;
}

</style>