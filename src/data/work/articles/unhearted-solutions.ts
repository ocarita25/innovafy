import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "unhearted-solutions"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

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