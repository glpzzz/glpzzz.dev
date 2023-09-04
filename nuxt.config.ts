// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    'rel': 'stylesheet',
                    'href': 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css'
                },
            ],
            script: [
                {'src': 'https://unpkg.com/@codersrank/activity@0.9.14/codersrank-activity.min.js'},
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
