import type { WorkArticleType } from "../types"

const slug = "grow-ag"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const growArticle: WorkArticleType = {
    slug: slug,
    title: "growAg",
    industry: "Innovación Agrícola",
    category: ['featured', 'innovacion'],
    link: "https://www.growag.com/",
    intro: "growAg es un mercado en línea que conecta las capacidades agroalimentarias y de innovación de Australia con el mundo.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'grow Thumbnail',
        }
    },
    paragraphs: [
        "Financiado por la corporación estatutaria AgriFutures, la ambición de GrowAg era crear una plataforma que permitiera a las organizaciones conectarse con las últimas oportunidades de investigación, innovación y tecnología agrícola dentro de las industrias rurales.",
        "Se requería una solución técnica escalable y potente para mostrar y gestionar la creciente base de datos de oportunidades que el público podía explorar. Se desarrolló una plataforma y un CMS personalizados para impulsar el sitio web, garantizando una gestión robusta de datos, funciones intuitivas de búsqueda y filtrado, y una función de administración intuitiva y fácil de usar para el equipo de marketing de growAg.",
        "La plataforma growAg continúa expandiéndose con una hoja de ruta continua de características y mejoras diseñadas para respaldar la posición de liderazgo de Australia en el sector de tecnología agrícola global."
    ],
    features: [
        { icon: "", label: "Estrategia y experiencia de usuario" },
        { icon: "", label: "Diseño de interacción" },
        { icon: "", label: "Creación de plataforma personalizada" },
        { icon: "", label: "Búsqueda y filtrado avanzados" },
        { icon: "", label: "Integraciones de socios" },
    ],
    body: [
        { type: "video", src: `${videoPath}/grow-ag-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/grow-ag-1.webp`, alt: "grow-ag-2" },
        { type: "image", src: `${imgPath}/grow-ag-2.webp`, alt: "grow-ag-3" },
        { type: "image", src: `${imgPath}/grow-ag-3.webp`, alt: "grow-ag-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/grow-ag-4.webp`, alt: "grow-ag-5" },
        { type: "image", src: `${imgPath}/grow-ag-5.webp`, alt: "grow-ag-6" },
        { type: "image", src: `${imgPath}/grow-ag-6.webp`, alt: "grow-ag-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/grow-ag-7.webp`, alt: "grow-ag-8" },
        { type: "image", src: `${imgPath}/grow-ag-8.webp`, alt: "grow-ag-9" },
        { type: "image", src: `${imgPath}/grow-ag-9.webp`, alt: "grow-ag-10", style: "min-[992px]:col-span-2" },
    ]
}