// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    'rel': 'stylesheet',
                    'href': 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css'
                },
            ]
        },
    },
    modules: ['@nuxt/content'],
    content: {
        documentDriven: true,
        highlight: {
            theme: 'github-light'
        }
    },
    css: [
       '@/assets/main.css',
    ]
})
