<template>
    <ContentDoc v-slot="{ doc }">
      <article>
        <header>
          <h1>{{ doc.title }}</h1>
          <p v-if="doc._dir=='blog'" class="description">
            <time>{{doc.date}}</time> - {{ doc.description }}
          </p>
        </header>
        <ContentRenderer :tag="false" :value="doc" />
      </article>
    </ContentDoc>
</template>