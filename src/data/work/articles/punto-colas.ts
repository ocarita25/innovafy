import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "punto-colas"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const puntoColasArticle: WorkArticleType = {
    slug: slug,
    title: "Punto y Colas",
    industry: "Cuidado de Mascotas",
    category: ['innovacion'],
    link: "https://www.puntoycolas.com/",
    intro: "Punto y Colas es una marca peruana fundada en 2016, especializada en productos premium para mascotas. Nació con la creación de La Hamacama, una cama hipoalergénica, cómoda y duradera que marcó tendencia en el mercado peruano.",
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
        "Un Proyecto muy colorido, nos encomendaron la misión de realizar una e-commerce muy amigable donde destacará el lado jovial y entretenido de tener una mascota, fue así que nos encargamos de estructurar y diseñar la página web pensando en darle al usuario todas las facilidades para mejorar su experiencia de compra online.",
    ],
    features: [
        { icon: "", label: "Diseño Web" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3`, style: "min-[992px]:col-span-2" },
    ],
}