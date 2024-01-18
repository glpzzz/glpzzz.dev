<script setup lang="ts">

const cv = ref(null)

const {data, error} = await useFetch('/api/all')
cv.value = data.value

</script>

<template>

  <article>

    <header class="bg-white shadow-sm">
      <div class="container py-4">
        <h1 class="display-1">Hello! I'm Gabriel López</h1>
        <p>
          I’m a software engineer living in Cienfuegos, Cuba. I am a fan of programming, web development, and
          entrepreneurship. I’m also interested in technology and music. <br/>
          Contact me if you think I can help you with something. <br/>
          My full
          <NuxtLink to="/cv">CV</NuxtLink>
          is available here.
        </p>
      </div>
    </header>

    <section id="skills" class="d-flex flex-row justify-content-around">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <CodersRankSkillsChart/>
          </div>
          <div class="col-md-6">
            <header>
              <h2>skills</h2>
            </header>
            <section v-for="skill in cv.skills" :key="skill.name">
              <header>
                <h3>{{ skill.name }}</h3>
              </header>
              <ul class="d-flex flex-row justify-content-start flex-wrap">
                <li v-for="tag in skill.keywords" :key="tag">
                  <span class="badge bg-secondary mx-1">{{ tag }}</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>

    <section id="projects">
      <header>
        <h2>projects</h2>
      </header>
    </section>
    <CodersRankActivity class="bg-dark p-4"/>
    <section id="experience">
      <header class="py-4 text-center">
        <h2>Latest Experience</h2>
      </header>
      <div class="container">
        <ul class="row row-cols-md-2 g-4">
          <li v-for="(work,index) in cv.work.slice(0,4)" :key="`work-${index}`" class="col">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body py-4 text-center d-flex flex-column justify-content-center">
                <h3 class="card-title">{{ work.position }} <br> @ {{ work.name }}</h3>
                <p class="card-subtitle">
                  {{ work.location }} <br>
                  ({{ work.startDate }} - {{ work.endDate }})
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="blog">
      <header>
        <h2>blog</h2>
      </header>
    </section>

    <div class="container">

      <h2>About me</h2>
      <h3 id="im-currently-using"><a href="#im-currently-using">I'm currently using</a></h3>
      <ul>
        <li>
          <a href="https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadp/thinkpad-p50/22tp2wpwp50" rel="nofollow">Lenovo
            Thinkpad P50</a> + SMI 27” monitor
        </li>
        <li>
          <a href="http://www.a-jazz.com/en/h-pd-63.html" rel="nofollow">Ajazz AK33 mechanical keyboard</a>
        </li>
        <li>
          <a href="https://www.logitech.com/en-us/products/mice/m585-wireless-mouse.910-005108.html" rel="nofollow">Logitech
            M585 mouse</a>
        </li>
        <li>
          <a href="https://www.ubuntu.com" rel="nofollow">Ubuntu 23.04</a>
        </li>
        <li>
          <a href="https://dwm.suckless.org" rel="nofollow">dwm</a>, (<a href="https://github.com/glpzzz/dwm"
                                                                         rel="nofollow">my custom build</a>)
        </li>
        <li>
          <a href="https://github.com/glpzzz/dotfiles" rel="nofollow">my dotfiles</a>
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>

ul.flex-row,
ul.row {
  list-style: none;
  padding: 0;
}

article > header {
  background-image: url("https://glpzzz.dev/glpzzz.jpg");
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: -100px;
  background-size: 50%;
  margin-bottom: 3rem;
}

article > header > .container {
  padding-right: 25%;
  padding-top: 10rem !important;
  padding-bottom: 5rem !important;
}

</style>