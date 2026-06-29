import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "vital-voices"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

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