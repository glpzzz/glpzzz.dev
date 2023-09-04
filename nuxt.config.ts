// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    'rel': 'stylesheet',
                    'href': 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css'
                },
                {
                    'rel': 'stylesheet',
                    'href': 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Fira+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
                }
            ],
            script: [
                {'src': 'https://unpkg.com/@codersrank/activity@0.9.14/codersrank-activity.min.js'},
                {'src': 'https://unpkg.com/@codersrank/skills-chart@0.9.21/codersrank-skills-chart.min.js'},
                {'src': 'https://unpkg.com/@codersrank/summary@0.9.13/codersrank-summary.js'},
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
       '@/assets/main.css',
    ]
})
