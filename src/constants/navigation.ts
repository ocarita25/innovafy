const variants = (variant: string) => {
    const colors = [
        { id: "cyan", class: "hover:bg-[var(--cyan-tertiary)] hover:border-[var(--cyan-primary)]", },
        { id: "pink", class: "hover:bg-[var(--pink-tertiary)] hover:border-[var(--pink-primary)]", },
        { id: "blue", class: "hover:bg-[var(--blue-tertiary)] hover:border-[var(--blue-primary)]", },
        { id: "green", class: "hover:bg-[var(--green-tertiary)] hover:border-[var(--green-primary)]", },
        { id: "purple", class: "hover:bg-[var(--purple-tertiary)] hover:border-[var(--purple-primary)]", },
        { id: "yellow", class: "hover:bg-[var(--yellow-tertiary)] hover:border-[var(--yellow-primary)]", },
    ]

    const selectedColors = colors.find(c => c.id === variant)

    return selectedColors ? selectedColors.class : ""
}



export const navItems = [
    {
        group: "Lo que hacemos",
        links: [
            {
                text: "Sitios Web",
                url: "/servicios/sitios-web",
                class: "variant-cyan",
            },
            {
                text: "Aplicaciones Web",
                url: "/servicios/aplicaciones-web",
                class: "variant-pink",
            },
            {
                text: "Aplicaciones Móviles",
                url: "/servicios/aplicaciones-moviles",
                class: "variant-blue",
            },
            {
                text: "e-Commerce",
                url: "/servicios/ecommerce",
                class: "variant-green",
            },
            {
                text: "Visualización de Datos",
                url: "/servicios/visualizacion-datos",
                class: "variant-purple",
            },
        ]
    },
    {
        group: "Diseño y UX",
        links: [
            {
                text: "Investigación de Usuarios",
                url: "/servicios/investigacion-validacion-usuarios",
                class: "variant-purple",
            },
            {
                text: "Diseño UX",
                url: "/servicios/diseno-experiencia-usuario",
                class: "variant-cyan",
            },
            {
                text: "Diseño IU",
                url: "/servicios/diseno-interfaz-usuario",
                class: "variant-pink",
            },
            {
                text: "Prototipado",
                url: "/servicios/prototipado",
                class: "variant-blue",
            },
            {
                text: "Sistemas de Diseño",
                url: "/servicios/sistemas-diseno",
                class: "variant-green",
            },
        ]
    },
    {
        group: "Tecnología",
        links: [
            {
                text: "Headless",
                url: "/servicios/headless",
                class: "variant-purple",
            },
            {
                text: "React JS",
                url: "/servicios/react-js",
                class: "variant-purple",
            },
            {
                text: "Payload CMS",
                url: "/servicios/payload-cms",
                class: "variant-purple",
            },
            {
                text: "Laravel",
                url: "/servicios/laravel",
                class: "variant-pink",
            },
            {
                text: "IA & Automatización",
                url: "/servicios/ia-automatizacion",
                class: "variant-purple",
            },
        ]
    },
    {
        group: "Experiencia",
        links: [
            {
                text: "Comercial",
                url: "/servicios/comercial",
                class: "variant-blue",
            },
            {
                text: "Sin fines de lucro",
                url: "/servicios/sin-fines-de-lucro",
                class: "variant-pink",
            },
            {
                text: "Innovación",
                url: "/servicios/innovacion-startups",
                class: "variant-purple",
            },
            {
                text: "Educación",
                url: "/servicios/educacion",
                class: "variant-yellow",
            },
            {
                text: "Comunidad",
                url: "/servicios/comunidad",
                class: "variant-cyan",
            },
        ]
    },
]