import type { WorkArticleType } from "../types"

const slug = "schrole"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const schroleArticle: WorkArticleType = {
    slug: slug,
    title: "Schrole",
    category: ['educacion'],
    link: "/",
    intro: "Schrole es el proveedor líder del mercado de soluciones de software de RRHH diseñadas para la comunidad educativa internacional.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`,
        },
    },
    paragraphs: [
        "La claridad en la comunicación era el requisito principal para una marca con una gama envidiable de productos y soluciones. Equilibrar las características y los beneficios de los productos SaaS sería fundamental en la arquitectura del sitio web, con una bolsa de trabajo adjunta diseñada para fomentar la interacción entre los futuros profesores y las escuelas que los reclutan.",
        "Una fase de descubrimiento exhaustiva allanó el camino para una arquitectura de sitio web atractiva para todos los públicos y que se adaptaba a las variaciones geográficas de la comunidad. La comunicación centrada en los beneficios permitió a las escuelas adaptar sus necesidades de RR. HH. a las soluciones integrales de Schrole, impulsando la consideración y fomentando la conversión a su equipo interno de experiencia del cliente.",
        "El resultado es una poderosa experiencia global que actúa como ventanilla única para todas las partes interesadas y audiencias dentro de la comunidad escolar internacional."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Captación de clientes potenciales B2B y B2C" },
        { icon: "", label: "Visualización de mapas 3D" },
        { icon: "", label: "Desarrollo personalizado" },
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