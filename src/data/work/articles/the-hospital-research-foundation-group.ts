import type { WorkArticleType } from "../types"

const slug = "the-hospital-research-foundation-group"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const theHospitalResearchFoundationGroupArticle: WorkArticleType = {
    slug: slug,
    title: "The Hospital Research Foundation Group",
    category: ['sin-fines-de-lucro'],
    link: "/",
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
        "El rápido crecimiento de las marcas benéficas de la fundación y su cartera de servicios de apoyo requirió una estrategia de sitio web que le diera a cada marca su propia identidad y capacidades de marketing, combinadas con la capacidad de aprovechar el alcance y la relevancia de la marca maestra de la Fundación.",
        "Esta infraestructura de arquitectura de marca se fortaleció mediante un proceso de desarrollo técnico que agilizó la administración del sitio web, la gestión de contenido y la actividad de ingresos por donaciones, permitiendo que todas las marcas recibieran servicio de forma centralizada.",
        "Esta adaptación escalable a futuro de la infraestructura técnica y de UX ha permitido a la Fundación mantener su estrategia de adquisiciones y lograr un mayor crecimiento sin perder fidelidad a su misión y valores fundamentales."
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