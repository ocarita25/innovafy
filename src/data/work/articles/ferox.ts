import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "ferox"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const feroxArticle: WorkArticleType = {
    slug: slug,
    title: "Ferox",
    industry: "Start-up",
    category: ['featured', 'innovacion'],
    link: "#",
    intro: "Una empresa de tecnología automotriz buscaba comunicar su visión del futuro del sector. El objetivo era crear una presencia digital convincente que reflejara esta visión y mostrara las oportunidades e innovaciones que ofrece la marca.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`,
        },
    },
    paragraphs: [
        "Un frontend sofisticado, acompañado de una integración de video fluida, permite activar el contenido de manera dinámica y envolvente. Este tipo de recursos visuales estratégicamente implementados potencian la interacción del usuario y favorecen una comprensión más profunda de la propuesta tecnológica, generando mayor interés y conexión con el público objetivo."
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
        { type: "video", src: `${videoPath}/ferox-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/ferox-5.webp`, alt: "ferox-6", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/ferox-6.webp`, alt: "ferox-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/ferox-7.webp`, alt: "ferox-8", style: "min-[992px]:col-span-2" },
    ],
}