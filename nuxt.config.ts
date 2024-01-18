// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    'rel': 'stylesheet',
                    'href': 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Fira+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
                    integrity: 'sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN',
                    crossorigin:'anonymous',
                },
                {
                    rel:'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
                },
            ],
            script: [
                {
                    src:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
                    integrity:'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL',
                    crossorigin:'anonymous'
                },
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
