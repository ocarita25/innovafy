import type { WorkArticleType } from "../types";

const slug = "sussex-taps"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const sussexTapsArticle: WorkArticleType = {
    slug: slug,
    title: "Sussex Taps",
    isFeatured: true,
    category: ["featured", 'comercial'],
    link: "/",
    intro: "Sussex Taps es un fabricante de grifería de alta gama con una profunda tradición en la manufactura australiana.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`,
        },
    },
    paragraphs: [
        "Tras un reposicionamiento de marca, Sussex Taps encargó a Inovafy el diseño de una experiencia digital inmersiva que comunicara la propuesta principal de la marca: calidad, tradición y artesanía.",
        "El contenido visual y la gama de productos desempeñaron un papel fundamental en el sitio web, que se complementó con interactividad y animación de vanguardia para ofrecer al público una experiencia digital tangible y táctil.",
        "El resultado es una experiencia sensorialmente enriquecedora que trasciende los límites del diseño de interfaz de usuario y el desarrollo interactivo, y que ha consolidado la posición de liderazgo de la marca en el mercado."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de interacción" },
        { icon: "", label: "Visualización de producto en 3D" },
        { icon: "", label: "Animación e interacción" },
        { icon: "", label: "Comercio electrónico a medida" },
    ],
    body: [
        { type: "video", src: `${videoPath}/sussex-1.mp4`, style: 'min-[992px]:col-span-2' },
        { type: 'image', src: `${imgPath}/sussex-1.webp`, alt: "sussex2" },
        { type: 'image', src: `${imgPath}/sussex-2.webp`, alt: "sussex3" },
        { type: "video", src: `${videoPath}/sussex-2.mp4`, style: 'min-[992px]:col-span-2' },
        { type: 'image', src: `${imgPath}/sussex-3.webp`, alt: "sussex5" },
        { type: 'image', src: `${imgPath}/sussex-4.webp`, alt: "sussex6" },
        { type: 'image', src: `${imgPath}/sussex-5.webp`, alt: "sussex7", style: 'min-[992px]:col-span-2' },
        { type: 'image', src: `${imgPath}/sussex-6.webp`, alt: "sussex8" },
        { type: 'image', src: `${imgPath}/sussex-7.webp`, alt: "sussex9" },
        { type: 'image', src: `${imgPath}/sussex-8.webp`, alt: "sussex10", style: 'min-[992px]:col-span-2' },
    ],
}