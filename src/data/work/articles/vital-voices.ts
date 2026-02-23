import type { WorkArticleType } from "../types"

const slug = "vital-voices"
const imgPath = `/images/work/articles/${slug}`


export const vitalVoicesArticle: WorkArticleType = {
    slug: slug,
    title: "Vital Voices",
    industry: "Sin fines de lucro",
    category: ['sin-fines-de-lucro'],
    link: "https://www.vitalvoices.org/",
    intro: "Vital Voices Global Partnership invierte en mujeres que están afrontando los mayores desafíos del mundo.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Thumbnail foreground',
        }
    },
    paragraphs: [
        "Cuando una organización busca generar conciencia y destacar su impacto, es clave que la presencia digital comunique claramente la misión, visión y valores, ofreciendo una experiencia de usuario moderna y atractiva que fomente la exploración y apoye la recaudación de fondos.",
        "Un enfoque estratégico integra diseño visual impactante con una arquitectura de contenido sólida y un sistema de gestión intuitivo, garantizando que los visitantes puedan interactuar fácilmente y conectarse con los objetivos de la organización.",
        "Plataformas bien diseñadas reflejan la esencia de la organización y su impacto, respaldando de manera efectiva sus objetivos y fortaleciendo su posición como líder en su sector de acción social.",
    ],
    // paragraphs: [
    //     "La organización contactó con Humaan para reimaginar su presencia digital y así generar conciencia y destacar su impacto, definiendo claramente su misión, visión y valores. Es fundamental que el sitio web ofrezca una experiencia de usuario atractiva y moderna que incentive la exploración e impulse la monetización mediante donaciones y recaudación de fondos.",
    //     "Trabajando en estrecha colaboración con el equipo global, imaginamos una experiencia que conectara inmediatamente con los visitantes, dando vida a la marca a través de una paleta vibrante y una imagen impactante. El sitio web se sustenta en una sólida estructura de contenido y un sistema de gestión de contenido fácil de usar.",
    //     "El resultado es un sitio web de OSFL con mejores prácticas que refleja la verdadera naturaleza de la marca y su impacto, y apoya mejor los objetivos de la organización como líder en el apoyo a las mujeres en todo el mundo."
    // ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Gestión intuitiva de contenido" },
        { icon: "", label: "Mejores prácticas de la PFN" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-9` },
        { type: "image", src: `${imgPath}/${slug}-10.webp`, alt: `${slug}-10`, style: "min-[992px]:col-span-2" },
    ],
}