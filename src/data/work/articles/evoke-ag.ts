import type { WorkArticleType } from "../types"

const slug = "evoke-ag"
const imgPath = `/images/work/articles/${slug}`


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
        "evokeAg es la plataforma de comunicación principal de AgriFutures, que conecta a la comunidad agrícola y de innovación australiana con la región APAC y más allá.",
        "El sitio web cumple una función principal: apoyar el evento evokeAg, ofreciendo una experiencia editorial durante todo el año. Esto se traduce en una experiencia de usuario intuitiva con una navegación clara que comunica el programa de eventos, destacando noticias y startups.",
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