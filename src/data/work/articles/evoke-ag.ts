import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "evoke-ag"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const evokeAgArticle: WorkArticleType = {
    slug: slug,
    title: "evokeAg",
    industry: "Innovación agrícola",
    category: ['comunidad-y-proposito'],
    link: "https://www.evokeag.com/",
    intro: "Conéctese con el mundo de la innovación agroalimentaria.",
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
        "Plataformas como evokeAg funcionan como ejes de comunicación estratégica dentro del ecosistema agrícola y de innovación, conectando comunidades locales con audiencias de la región APAC y mercados internacionales.",
        "En este tipo de iniciativas, el sitio web cumple un rol dual: apoyar la activación del evento principal y sostener una experiencia editorial continua durante todo el año. Esto requiere una experiencia de usuario intuitiva, con una arquitectura de navegación clara que estructure el programa del evento y otorgue visibilidad a noticias, startups y actores clave del sector."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de interacción" },
        { icon: "", label: "Integración de eventos" },
        { icon: "", label: "Gestión de contenido editorial" },
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