import { imgCLOUD } from "@/constants/resources"
import type { WorkArticleType } from "../types"

const slug = "arteco"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const artecoArticle: WorkArticleType = {
    slug: slug,
    title: "Arteco",
    industry: "Inmobiliaria",
    category: ['comercial', 'ui-ux'],
    link: "https://lucid.arteco.pe/",
    intro: "Arteco es una empresa dedicada al desarrollo de proyectos inmobiliarios que contribuyen a crear ciudades más seguras, con mejor infraestructura y equipamiento urbano. Sus propuestas integran diseño arquitectónico de calidad, respeto por el medio ambiente y espacios que fomentan la convivencia vecinal.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Thumbnail background',
        },
    },
    paragraphs: [
        "Desde el año 2020 empezamos a trabajar con Arteco, elaborando 5 landing page con el objetivo de captación de leads. Al día de hoy vienen generando resultados muy positivos en su estrategia de marketing digital.",
        "Además, venimos trabajando el servicio de naming y branding para uno de sus nuevos proyectos inmobiliarios.",
        "A su vez, nos encargamos de la gestión de redes sociales, donde hemos elaborado una estrategia que viene obteniendo resultados muy favorables en el awareness y engagement de la marca."
    ],
    features: [
        { icon: "", label: "Desarrollo web" },
        { icon: "", label: "Social Media" },
        { icon: "", label: "Branding" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" }
    ],
}