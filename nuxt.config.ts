// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    'rel': 'stylesheet',
                    'href': 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Fira+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
                }
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
                    integrity: 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz',
                    crossorigin: 'anonymous',
                },
                {src: 'https://unpkg.com/@codersrank/activity@0.9.14/codersrank-activity.min.js'},
                {src: 'https://unpkg.com/@codersrank/skills-chart@0.9.21/codersrank-skills-chart.min.js'},
                {src: 'https://unpkg.com/@codersrank/summary@0.9.13/codersrank-summary.js'},
            ]
        },
    },
    modules: ['@nuxt/content'],
    content: {
        documentDriven: true,
        highlight: {
            theme: 'dracula'
        }
    },
    css: [
        '~/assets/scss/main.scss',
        '~/node_modules/bootstrap-icons/font/bootstrap-icons.css',
    ],
})
