import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "the-hospital-research-foundation-group"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const theHospitalResearchFoundationGroupArticle: WorkArticleType = {
    slug: slug,
    title: "The Hospital Research Foundation Group",
    industry: "Sin fines de lucro",
    category: ['sin-fines-de-lucro'],
    link: "https://hospitalresearch.org.au/",
    intro: "El Hospital Research Foundation Group es la principal organización benéfica y de defensa de derechos del sur de Australia, con la simple misión de mejorar la salud y el bienestar de toda su comunidad.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "Cuando una organización gestiona múltiples marcas y servicios, una estrategia digital efectiva permite que cada marca tenga identidad propia y capacidades de marketing, mientras aprovecha el alcance y la relevancia de la marca corporativa principal.",
        "La infraestructura digital puede optimizarse mediante un desarrollo técnico que facilite la gestión centralizada de contenidos, la administración del sitio y las iniciativas de recaudación, asegurando eficiencia operativa y consistencia en la comunicación.",
        "Una arquitectura escalable y centrada en UX permite que la organización mantenga su estrategia de crecimiento y expansión sin comprometer la coherencia de su misión y sus valores fundamentales.",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Integración de API" },
        { icon: "", label: "Plataforma de donaciones" },
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