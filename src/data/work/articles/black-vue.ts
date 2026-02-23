import type { WorkArticleType } from "../types"

const slug = "blackvue"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const blackvueArticle: WorkArticleType = {
    slug: slug,
    title: "BlackVue",
    industry: "Consumidor",
    category: ['comercial'],
    link: "#",
    intro: "Una de las cámaras para salpicadero más vendidas en Australia buscaba modernizar su sitio web para el mercado local, con el objetivo de ofrecer una experiencia digital más atractiva y alineada con las necesidades de sus clientes.",
    // intro: "Como la cámara para salpicadero más vendida en Australia, BlackVue buscó la ayuda de Humaan para reimaginar el sitio web de BlackVue específicamente para el mercado australiano",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "A partir de una fase de descubrimiento y diseño en profundidad, este tipo de proyectos plantea un enfoque orientado a reflejar la calidad del producto en el entorno digital, elevando la presencia online a estándares globales de tecnología de consumo y construyendo una experiencia inmersiva capaz de impulsar la participación y las ventas.",
        "El resultado es una plataforma altamente atractiva que sitúa los productos como eje central de la propuesta, respaldada por una experiencia de usuario intuitiva que responde a las expectativas de una base de clientes exigente y orientada al rendimiento."
    ],
    // paragraphs: [
    //     "A través de una fase de descubrimiento y diseño en profundidad, propusimos un enfoque que garantizaría que el nuevo sitio web reflejara la calidad del producto, elevando la presencia digital en línea con los estándares globales de tecnología de consumo y ofreciendo una experiencia de usuario inmersiva que impulsaría la participación y las ventas de productos.",
    //     "El resultado es un nuevo sitio web muy atractivo para BlackVue que coloca sus productos al frente y en el centro, respaldado por una experiencia de usuario intuitiva que cumple con las expectativas de una base de clientes muy exigente.",
    // ],
    features: [
        { icon: "", label: "Estrategia digital y experiencia de usuario" },
        { icon: "", label: "Diseño de interacción" },
        { icon: "", label: "Animación e interacción" },
        { icon: "", label: "Mapa localizador de tiendas a medida" },
        { icon: "", label: "Integraciones técnicas" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "video", src: `${videoPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-9` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-10`, style: "min-[992px]:col-span-2" },
    ],
}