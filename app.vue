<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" aria-label="Offcanvas navbar large">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">glpzzz.dev</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
           aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                  aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li v-for="link of mainNav" :key="link._path" class="nav-item">
                <NuxtLink :to="link.href" class="nav-link">
                  {{ link.navTitle || link.title }}
                </NuxtLink>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </nav>
  <main class="bg-light">
    <NuxtPage/>
  </main>
  <footer class="border-top py-2">
    <nav>
      <ul class="nav">
        <li v-for="link of links" :key="link.url" class="nav-item">
          <a :href="link.url" target="_blank" class="nav-link">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    const fixed = 'Gabriel A. López López, Software Engineer'
    return titleChunk ? `${titleChunk} - ${fixed}` : fixed
  }
})

const mainNav = [
  {title: 'About', href: '/about'},
  {title: 'Work', href: '/work'},
  {title: 'CV', href: '/cv'},
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

</script>