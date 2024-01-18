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

    <section id="projects" class="py-4">
      <header class="py-4 text-center">
        <h2>projects</h2>
      </header>
      <div class="container-fluid">
        <ul class="nav nav-tabs nav-justified mb-4" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Client Projects</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Open Source</button>
          </li>
        </ul>
        <div class="tab-content bg-white" id="myTabContent">
          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <div class="container-fluid">
              <ul class="row row-cols-md-3 g-4">
                <li class="col" v-for="(project, index) in cv.projects" :key="`project-${index}`">
                  <div class="card h-100 border-0 shadow-sm">
                    <img :src="project.poster ? `/images/${project.poster}.png` : '/images/noimage.webp'" :alt="`Image on ${project.name}`" class="card-img-top" />
                    <div class="card-body">
                      <h4 class="card-title">
                        {{ project.name}}
                        <small v-if="project.url">| <a :href="project.url" target="_blank" class="text-muted">Demo</a></small>
                      </h4>
                      <p class="card-text">
                        {{project.description}}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div class="container-fluid">
              <ul class="row row-cols-md-3 g-4">
                <li class="col" v-for="(volunteer, index) in cv.volunteer" :key="`volunteer-${index}`">
                  <div class="card h-100">
                    <div class="card-body">
                      <h4 class="card-title">{{ volunteer.summary}}</h4>
                      <pre>{{volunteer}}</pre>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-dark text-white text-center p-4">
      <header class="d-none">
        <h2>Latest Activity</h2>
      </header>
      <CodersRankActivity class="my-4"/>
    </section>

    <section id="experience">
      <header class="py-4 text-center">
        <h2>Latest Experience</h2>
      </header>
      <div class="container">
        <ul class="row row-cols-md-2 g-4">
          <li v-for="(work,index) in cv.work.slice(0,4)" :key="`work-${index}`" class="col">
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
          </li>
        </ul>
      </div>
    </section>

    <section id="blog">
      <header>
        <h2>blog</h2>
      </header>
    </section>

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