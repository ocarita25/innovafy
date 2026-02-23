import type { WorkArticleType } from "../types"

const slug = "fluidity"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const fluidityArticle: WorkArticleType = {
    slug: "fluidity",
    title: "Fluidity",
    industry: "Tecnología",
    category: ['featured', 'ui-ux'],
    link: "https://www.fluidity.money/",
    intro: "Fluidity Money está elevando el nivel al desarrollar tecnología de última generación en la cadena de bloques.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Fluidity Thumbnail foreground',
        }
    },
    paragraphs: [
        "Con una nueva marca y una visión innovadora, el equipo contrató a Humaan para ofrecer una UI y UX de alto impacto para el lanzamiento del sitio web Fluidity Money y la aplicación para su base de usuarios.",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Interfaz de usuario y experiencia de usuario" },
        { icon: "", label: "Consulta de diseño" },
    ],
    body: [
        { type: "image", src: `${imgPath}/fluidity-1.webp`, alt: "fluidity-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fluidity-2.webp`, alt: "fluidity-2" },
        { type: "image", src: `${imgPath}/fluidity-3.webp`, alt: "fluidity-3" },
        { type: "video", src: `${videoPath}/fluidity-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fluidity-4.webp`, alt: "fluidity-5", style: "min-[992px]:col-span-2" },
        { type: "video", src: `${videoPath}/fluidity-2.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fluidity-5.webp`, alt: "fluidity-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fluidity-6.webp`, alt: "fluidity-8", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fluidity-7.webp`, alt: "fluidity-9" },
        { type: "image", src: `${imgPath}/fluidity-8.webp`, alt: "fluidity-10" },
        { type: "image", src: `${imgPath}/fluidity-9.webp`, alt: "fluidity-11", style: "min-[992px]:col-span-2" },
        { type: "video", src: `${videoPath}/fluidity-3.mp4`, style: "min-[992px]:col-span-2" },
    ],
}