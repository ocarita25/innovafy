import { imgCLOUD, vidCLOUD } from "@/constants/resources"
import type { WorkArticleType } from "../types"

const slug = "ar-asociados"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const arAsociadosArticle: WorkArticleType = {
    slug: slug,
    title: "AR Asociados",
    industry: "Arquitectura y Construcción",
    category: ['comercial', 'comunidad-y-proposito'],
    link: "https://ar-asociados.pe/",
    intro: "",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`,
        }
    },
    paragraphs: [
        "En el año 2016 nos encargaron el rebranding de su empresa. Deseaban transmitir una imagen más fresca y moderna pero sin perder la seriedad que amerita todo trabajo de arquitecto.",
        "Fue así, que trabajamos en el rediseño de su logotipo, imagen corporativa, paneles publicitarios y el desarrollo de su página web, obteniendo grandes resultados de identificación con sus colaboradores y clientes.",
    ],
    features: [
        { icon: "", label: "Branding" },
        { icon: "", label: "Desarrollo Web" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
    ],
}