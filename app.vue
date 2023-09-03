<template>
  <div class="markdown-body">
    <ContentNavigation v-slot="{navigation}">
      <ul id="main-navigation">
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">
            {{ link.navTitle || link.title }}
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
    <NuxtPage/>
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    const fixed = 'Gabriel A. López López, Software Engineer'
    return titleChunk ? `${titleChunk} - ${fixed}` : fixed
  }
})
</script>