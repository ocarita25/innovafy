import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "space-draft"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const spaceDraftArticle: WorkArticleType = {
    slug: slug,
    title: "SpaceDraft",
    industry: "Start-up",
    category: ['innovacion'],
    link: "https://spacedraft.com/",
    intro: "Planifica cualquier cosa y compártela en todas partes.",
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
        "Las plataformas digitales para creadores buscan simplificar la comunicación de procesos complejos, ofreciendo herramientas intuitivas que permiten gestionar desde producciones experienciales y videojuegos hasta planificación de eventos o locaciones, facilitando la claridad y eficiencia en la transmisión de ideas.",
        "Un enfoque centrado en la experiencia de usuario y en la narrativa visual puede desafiar los estándares tradicionales de los productos SaaS, combinando iconografía intuitiva, interacciones atractivas y diseño brillante para reforzar los mensajes clave y mejorar la comprensión de los proyectos por parte de la audiencia.",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de experiencia de usuario" },
        { icon: "", label: "Diseño responsivo" },
        { icon: "", label: "Gestión de contenidos" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-9` },
    ],
}