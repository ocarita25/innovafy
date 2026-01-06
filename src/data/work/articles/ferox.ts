import type { WorkArticleType } from "../types"

const slug = "ferox"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const feroxArticle: WorkArticleType = {
    slug: slug,
    title: "Ferox",
    category: ['featured', 'innovacion'],
    link: "/",
    intro: "Ferox ofrece una visión del futuro de la tecnología automotriz. Nos propusimos crear una presencia digital convincente para hacer realidad esta visión y abrir las mentes a las increíbles posibilidades.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`,
        },
    },
    paragraphs: [
        "El sofisticado frontend, con una integración de video fluida, da vida al contenido de forma vibrante y dinámica. Estas características visualmente cautivadoras fomentan una mayor interacción y una comprensión tecnológica más profunda para generar un verdadero entusiasmo en el público objetiv.",
    ],
    features: [
        { icon: "", label: "Diseño de experiencia de usuario" },
        { icon: "", label: "Diseño responsivo" },
        { icon: "", label: "Funciones multimedia enriquecidas" },
        { icon: "", label: "Desarrollo personalizado" },
    ],
    body: [
        { type: "image", src: `${imgPath}/ferox-1.webp`, alt: "ferox-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/ferox-2.webp`, alt: "ferox-2", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/ferox-3.webp`, alt: "ferox-3" },
        { type: "image", src: `${imgPath}/ferox-4.webp`, alt: "ferox-4" },
        { type: "video", src: `${imgPath}/ferox-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/ferox-5.webp`, alt: "ferox-6", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/ferox-6.webp`, alt: "ferox-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/ferox-7.webp`, alt: "ferox-8", style: "min-[992px]:col-span-2" },
    ],
}