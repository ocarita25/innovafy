import type { WorkArticleType } from "../types"

const slug = "unhearted-solutions"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const unheartedSolutionsArticle: WorkArticleType = {
    slug: slug,
    title: "Unearthed Solutions",
    industry: "Innovación",
    category: ['comercial', 'innovacion'],
    link: "https://unearthed.solutions/",
    intro: "Unearthed Solutions es líder en la creación de ecosistemas y el fomento de la innovación para resolver problemas en la industria de los recursos.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'PIQUE Thumbnail',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "Cuando una organización celebra hitos importantes y evoluciona significativamente, es clave que su presencia digital comunique claramente su oferta y refleje sus capacidades en innovación y experiencia sectorial.",
        "Un enfoque estratégico identifica la necesidad de modernizar la plataforma, simplificando la estructura y destacando los servicios clave, al tiempo que se orienta la comunicación hacia los públicos relevantes, equilibrando la innovación con la experiencia del cliente.",
        "Integrar una experiencia inmersiva y llamadas a la acción relevantes permite que la audiencia interactúe de manera efectiva, resaltando las capacidades de la organización y reforzando la conexión con los usuarios según sus necesidades individuales.",
    ],
    // paragraphs: [
    //     "Para celebrar su décimo aniversario y marcar una evolución significativa de su negocio, recurrieron a la ayuda de Humaan para reimaginar una presencia digital que articulara su oferta y reflejara sus capacidades en innovación y experiencia en la industria minera.",
    //     "Como colaboradores a largo plazo, nos dimos cuenta de que Unearthed había superado su sitio web anterior y necesitaba una presencia moderna que reflejara con mayor precisión su liderazgo en el sector, junto con una visión y misión renovadas. Trabajando en estrecha colaboración con todos los equipos, visualizamos una estructura más sencilla que respaldara sus servicios clave, a la vez que reorientaba su público objetivo de la innovación al cliente..",
    //     "El sitio web está respaldado por una experiencia inmersiva que habla directamente a la audiencia principal, resaltando la capacidad e impulsando a los visitantes a interactuar a través de CTA relevantes según las necesidades individuales."
    // ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "IA y mapeo de contenido" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Animación e interacción" },
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