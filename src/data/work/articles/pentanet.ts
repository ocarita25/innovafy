import type { WorkArticleType } from "../types"

const slug = "pentanet"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const pentanetArticle: WorkArticleType = {
    slug: slug,
    title: "Pentanet",
    category: ['featured', 'comercial', 'ui-ux'],
    link: "/",
    intro: "Pentanet es un proveedor líder de soluciones de Internet inalámbrica fija, NBN y de fibra óptica para clientes residenciales y comerciales en toda Australia Occidental.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Pentanet Thumbnail background',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Pentanet Thumbnail foreground',
        }
    },
    paragraphs: [
        "Para una marca que se enorgullece de su innovación, tecnología y experiencia, su sitio web debía reflejar este posicionamiento. Pentanet buscaba una experiencia cautivadora que invitara al público a conectar profundamente con ellos, tanto a nivel de marca como de producto. Pentanet contrató a Humaan para diseñar la estrategia y la nueva presencia online de la empresa, mientras que el desarrollo se realizaría internamente.",
        "Entendiendo las necesidades comerciales de Pentanet, la estructura del sitio se diseñó pensando tanto en los clientes potenciales como en los existentes. La información del producto, como precios, velocidad y capacidad, ocupó un lugar central en el sitio, y se complementó con un diseño de interfaz de usuario sofisticado que evocaba las credenciales tecnológicas de la marca.",
        "Pentanet continúa ampliando los límites de lo posible con sus capacidades y enfoque, siendo el sitio web la base de su estrategia de CX."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UX" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
    ],
    body: [
        { type: "video", src: `${videoPath}/pentanet-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pentanet-1.webp`, alt: "pentanet-2" },
        { type: "image", src: `${imgPath}/pentanet-2.webp`, alt: "pentanet-3" },
        { type: "image", src: `${imgPath}/pentanet-3.webp`, alt: "pentanet-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pentanet-4.webp`, alt: "pentanet-5" },
        { type: "image", src: `${imgPath}/pentanet-5.webp`, alt: "pentanet-6" },
        { type: "image", src: `${imgPath}/pentanet-6.webp`, alt: "pentanet-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pentanet-7.webp`, alt: "pentanet-8" },
        { type: "image", src: `${imgPath}/pentanet-8.webp`, alt: "pentanet-9" },
        { type: "image", src: `${imgPath}/pentanet-9.webp`, alt: "pentanet-10", style: "min-[992px]:col-span-2" },
    ],
}