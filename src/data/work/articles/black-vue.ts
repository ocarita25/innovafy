import { imgCLOUD, vidCLOUD } from "@/constants/resources"
import type { WorkArticleType } from "../types"

const slug = "blackvue"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const blackvueArticle: WorkArticleType = {
    slug: slug,
    title: "BlackVue",
    industry: "Consumidor",
    category: ['comercial'],
    link: "#",
    intro: "Una de las cámaras para salpicadero más vendidas en Australia buscaba modernizar su sitio web para el mercado local, con el objetivo de ofrecer una experiencia digital más atractiva y alineada con las necesidades de sus clientes.",
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