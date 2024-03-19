<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    const fixed = 'Gabriel A. López López, Software Engineer'
    return titleChunk ? `${titleChunk} - ${fixed}` : fixed
  }
})

const mainNav = [
  {title: 'Home', href: '/'},
  {title: 'About', href: '#about'},
  {title: 'Skills', href: '#skills'},
  {title: 'Projects', href: '#projects'},
  {title: 'Experience', href: '#experience'},
  {title: 'Blog', href: '/blog'},
  {title: 'CV', href: '/cv'},
  {title: 'Contact', href: '/#contact'},
]

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

const theme = ref("light")

</script>

<template>

  <nav id="main-nav" class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">glpzzz</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link of mainNav" :key="link.href">
            <NuxtLink :to="link.href" class="nav-link">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main :data-bs-theme="theme">
    <NuxtPage/>
  </main>

  <footer class="bg-dark text-light px-2 py-4" :data-bs-theme="theme">
    <nav>
      <ul class="nav flex-column flex-lg-row justify-content-lg-center">
        <li v-for="link of links" :key="link.url" class="nav-item">
          <a :href="link.url" target="_blank" class="nav-link">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
.container-fluid {

}
</style>