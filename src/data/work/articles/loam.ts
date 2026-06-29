import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "loam"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const loamArticle: WorkArticleType = {
    slug: slug,
    title: "Loam",
    industry: "Innovación agrícola",
    category: ['featured', 'innovacion'],
    link: "https://www.loambio.com/",
    intro: "Loam es pionero en la tecnología de semillas microbianas que reduce los niveles de CO2 atmosférico y mejora el enriquecimiento del suelo para promover la productividad agrícola.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Loam Thumbnail',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Loam Thumbnail foreground',
        }
    },
    paragraphs: [
        "Uno de los principales retos al comunicar tecnologías complejas consiste en traducir su propuesta de valor para audiencias diversas, con distintos niveles de conocimiento técnico y expectativas específicas en cuanto a funcionalidades y beneficios.",
        "En este tipo de contextos, un enfoque centrado en la audiencia dentro de la experiencia de usuario permite estructurar la navegación en torno a segmentos claramente definidos, facilitando el acceso autónomo a información relevante. La combinación de diseño intuitivo, jerarquía de contenido clara y recursos visuales estratégicamente integrados contribuye a simplificar mensajes técnicos y garantizar que cada grupo reciba la comunicación adecuada.",
        "Cuando la estrategia digital logra articular claridad, segmentación y narrativa visual, la plataforma puede respaldar la expansión internacional de la organización y fortalecer su posicionamiento en torno a desafíos ambientales y alimentarios de alcance global."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Experiencia visual inmersiva" },
        { icon: "", label: "Desarrollo personalizado" },
    ],
    body: [
        { type: "image", src: `${imgPath}/loam-1.webp`, alt: "loam-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/loam-2.webp`, alt: "loam-2" },
        { type: "image", src: `${imgPath}/loam-3.webp`, alt: "loam-3" },
        { type: "image", src: `${imgPath}/loam-4.webp`, alt: "loam-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/loam-5.webp`, alt: "loam-5" },
        { type: "image", src: `${imgPath}/loam-6.webp`, alt: "loam-6" },
        { type: "image", src: `${imgPath}/loam-7.webp`, alt: "loam-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/loam-8.webp`, alt: "loam-8" },
        { type: "image", src: `${imgPath}/loam-9.webp`, alt: "loam-9" },
        { type: "image", src: `${imgPath}/loam-10.webp`, alt: "loam-10", style: "min-[992px]:col-span-2" },
    ],
}