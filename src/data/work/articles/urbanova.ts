import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "urbanova"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const urbanovaArticle: WorkArticleType = {
    slug: slug,
    title: "Urbanova Inmobiliaria",
    industry: "Inmobiliaria",
    category: ['comercial', 'comunidad-y-proposito'],
    link: "https://www.urbanova.com/",
    intro: "",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`,
        }
    },
    paragraphs: [
        "Durante 2 años trabajamos de la mano para desarrollar su página web y mejorar el posicionamiento orgánico de la misma, logrando escalar a la primera página de resultados de Google con los principales términos de búsqueda.",
        "Además, trabajamos diferentes campañas internas para su personal así como la estrategia para su página de fans en Linked In.",
    ],
    features: [
        { icon: "", label: "Desarrollo Web" },
        { icon: "", label: "SEO" },
        { icon: "", label: "Social Media" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
    ],
}