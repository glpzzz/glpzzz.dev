<template>
  <div class="markdown-body">
    <ContentNavigation v-slot="{navigation}">
      <ul class="nav-horizontal">
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">
            {{ link.navTitle || link.title }}
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
    <NuxtPage/>
    <footer>
      <ul class="nav nav-horizontal">
        <li v-for="link of links" :key="link.url">
          <a :href="link.url" target="_blank">{{ link.name }}</a>
        </li>
      </ul>
      <p>
        &copy; https://glpzzz.dev - {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    const fixed = 'Gabriel A. López López, Software Engineer'
    return titleChunk ? `${titleChunk} - ${fixed}` : fixed
  }
})

const links = [
  {name: 'CodersRank', url: 'https://profile.codersrank.io/user/glpzzz'},
  {name: 'DEV', url: 'https://dev.to/glpzzz'},
  {name: 'Github', url: 'https://github.com/glpzzz'},
  {name: 'LinkedIn', url: 'https://www.linkedin.com/in/glpzzz'},
  {name: 'Skype', url: 'https://join.skype.com/invite/swrMO6a3xWXv'},
  {name: 'StackOverflow', url: 'https://stackoverflow.com/users/12115958/gabriel-a-lopez-lopez'},
  {name: 'Telegram', url: 'https://t.me/glpzzz'},
  {name: 'Twitter', url: 'https://twitter.com/glpzzz'},
]

</script>