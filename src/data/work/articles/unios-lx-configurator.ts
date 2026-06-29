import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "unios-lx-configurator"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const uniosLxConfiguratorArticle: WorkArticleType = {
    slug: slug,
    title: "Unios LX Configurator",
    industry: "Iluminación",
    category: ['innovacion'],
    link: "https://lxconfigurator.unios.com/",
    intro: "Unios fabrica soluciones de diseño de iluminación de alta gama para clientes de todo el mundo. ",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`,
        },
    },
    paragraphs: [
        "Los configuradores web permiten a los clientes crear productos personalizados a partir de múltiples opciones de manera rápida e intuitiva, reemplazando procesos manuales complejos y optimizando la experiencia de compra.",
        "Diseñadas con interfaces de usuario claras y bibliotecas de componentes robustas, estas aplicaciones ofrecen experiencias fluidas y atractivas, mejorando la interacción, reduciendo fricciones y otorgando ventajas competitivas a las organizaciones que las implementan.",
    ],
    features: [
        { icon: "", label: "Especificación de producto compleja" },
        { icon: "", label: "Aplicación JavaScript a medida" },
        { icon: "", label: "Componentes interactivos" },
        { icon: "", label: "Generación de PDF de productos" },
    ],
    body: [
        { type: "video", src: `${videoPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
    ],
}