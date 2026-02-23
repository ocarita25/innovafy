import type { WorkArticleType } from "../types"

const slug = "mlg"
const imgPath = `/images/work/articles/${slug}`


export const mlgArticle: WorkArticleType = {
    slug: slug,
    title: "MLG",
    industry: "Minería y Recursos",
    category: ['comercial'],
    link: "https://www.mlgoz.com.au/",
    intro: "MLG es un proveedor líder de servicios de minería en Australia Occidental y el Territorio del Norte, y presta servicios con orgullo a las empresas de recursos más grandes de Australia.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Thumbnail foreground',
        }
    },
    paragraphs: [
        "Al trabajar en estrecha colaboración con su equipo de marketing, pudimos ofrecer un nuevo sitio web contemporáneo que consolida aún más su posición como líderes de la industria y comunica sus amplias capacidades en proyectos activos y pasados, al mismo tiempo que fomenta el crecimiento de la organización a través de un enfoque en valores, cultura y reclutamiento."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Mapa interactivo de proyectos a medida" },
        { icon: "", label: "Gestión intuitiva de contenidos" },
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