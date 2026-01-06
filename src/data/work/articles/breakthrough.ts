import type { WorkArticleType } from "../types"

const slug = "breakthrough-t1d"
const imgPath = `/images/work/articles/${slug}`

export const breakthroughArticle: WorkArticleType = {
    slug: slug,
    title: "Breakthrough T1D",
    category: ['sin-fines-de-lucro'],
    link: "/",
    intro: "Breakthrough T1D Australia es una organización líder dedicada a apoyar a las personas que viven con diabetes tipo 1 (DT1), junto con sus familias, cuidadores, investigadores y profesionales de la salud",
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
        "Luego de un cambio de marca global, el desafío fue diseñar una experiencia digital que pudiera representar la complejidad y amplitud de la diabetes tipo 1 y al mismo tiempo brindar claridad y relevancia para una amplia gama de necesidades de la audiencia.",
        "Trabajamos estrechamente con Breakthrough T1D y representantes de cada grupo de audiencia para comprender sus desafíos, comportamientos y objetivos únicos. Este conocimiento dio forma a una estructura de contenido intuitiva y una experiencia de descubrimiento que ayuda a los usuarios a encontrar rápidamente la información que más les interesa.",
        "El resultado es un sitio web que no solo refleja la nueva marca, sino que también ofrece a los usuarios acceso personalizado a información, apoyo e investigación. Proporciona a la organización una plataforma potente y escalable para interactuar significativamente con la comunidad de diabetes tipo 1."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Investigación de usuarios" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Gestión intuitiva de contenido" },
        { icon: "", label: "Flujo de donaciones personalizado" },
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