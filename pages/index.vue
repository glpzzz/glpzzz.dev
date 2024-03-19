<script setup lang="ts">

import ProjectCard from "~/components/ProjectCard.vue";

const cv = ref(null)

const {data, error} = await useFetch('/api/all')
cv.value = data.value

</script>

<template>

  <article>

    <header class="d-flex flex-column align-items-center justify-content-center">
      <div class="container-fluid">
        <h1 class="display-1">Hello! I'm Gabriel López</h1>
        <p class="lead">
          I’m a software engineer living in Cienfuegos, Cuba. I am a fan of programming, web development, and
          entrepreneurship. I’m also interested in technology and music. <br/>
          Contact me if you think I can help you with something. <br/>
        </p>
        <p>
          <NuxtLink to="/cv" class="btn btn-lg btn-success me-2">Resume</NuxtLink>
          <button class="btn btn-lg btn-primary">Contact Me!</button>
        </p>
      </div>
    </header>

    <section id="about">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-5">
            <img src="/glpzzz.jpg"
                 alt="Photo of Gabriel Alejandro López López"
                 class="w-100 object-fit-cover"
                 style="aspect-ratio: 3/4; filter: grayscale(100%)"/>

          </div>
          <div class="col-lg-7 ps-lg-5">
            <header>
              <h2>About Me</h2>
              <h3>I'm a software engineer</h3>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam at blanditiis ducimus ea, fugit
              in incidunt laudantium maxime mollitia obcaecati pariatur quia rerum sed unde velit vero voluptas
              voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem beatae debitis dolorum fugit in
              inventore ipsa maxime minus modi necessitatibus nemo optio quaerat quia quibusdam reprehenderit sint,
              tenetur unde?</p>

            <h3>Latest Activity</h3>
            <CodersRankActivity class="my-4"/>

          </div>
        </div>
      </div>
    </section>

    <section id="skills">
      <div class="container-fluid">
        <header class="py-4 text-center">
          <h2>Skills</h2>
        </header>
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center">
            <CodersRankSkillsChart/>
          </div>
          <div class="col-lg-6">
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
      <div class="container-fluid">
        <header class="py-4 text-center">
          <h2>Projects</h2>
        </header>
        <ul class="nav nav-tabs nav-justified mb-4" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="projects-client-tab" data-bs-toggle="tab"
                    data-bs-target="#projects-client-tab-pane"
                    type="button" role="tab" aria-controls="projects-client-tab-pane" aria-selected="true">Client
              Projects
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="projetcs-opensource-tab" data-bs-toggle="tab"
                    data-bs-target="#projetcs-opensource-tab-pane"
                    type="button" role="tab" aria-controls="projetcs-opensource-tab-pane" aria-selected="false">Open
              Source
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="projects-client-tab-pane" role="tabpanel"
               aria-labelledby="projects-client-tab"
               tabindex="0">
            <div class="container-fluid">
              <ul class="row row-cols-md-3 g-4">
                <li class="col" v-for="(project, index) in cv.projects" :key="`project-${index}`">
                  <ProjectCard :project="project"/>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-pane fade" id="projetcs-opensource-tab-pane" role="tabpanel"
               aria-labelledby="projetcs-opensource-tab" tabindex="0">
            <div class="container-fluid">
              <ul class="row row-cols-md-3 g-4">
                <li class="col" v-for="volunteer in cv.volunteer" :key="`volunteer-${volunteer.url}`">
                  <VolunteerCard :volunteer="volunteer"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience">
      <div class="container-fluid">
        <header class="py-4 text-center">
          <h2>Latest Experience</h2>
        </header>
        <ul class="row row-cols-md-2 g-4">
          <li v-for="(work,index) in cv.work.slice(0,4)" :key="`work-${index}`" class="col">
            <WorkCard :work="work"/>
          </li>
        </ul>
      </div>
    </section>

  </article>
</template>

<style lang="scss" scoped>

ul.flex-row,
ul.row {
  list-style: none;
  padding: 0;
}

article > header,
article > section {
  min-height: 80vh;
}

article > section {
  display: flex;
  justify-content: center;
  align-items: center;
}

article > header {
  background: var(--bs-body-color);
  color: var(--bs-body-bg);
}

article > section:nth-child(even) {
  background: var(--bs-body-bg);
  color: var(--bs-body-color);
}

article > section:nth-child(odd) {
  background: var(--bs-secondary-bg);
  color: var(--bs-secondary-color);
}

@media (min-width: 1200px) {

  article {
    padding-top: 0;
  }

  article > header {
    height: 100vh;
  }

  article {
    & > header,
    & > section {
      padding: 5rem 10rem;
    }
  }
}

</style>