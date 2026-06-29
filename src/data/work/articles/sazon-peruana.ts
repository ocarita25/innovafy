import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "sazon-peruana"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const sazonPeruanaArticle: WorkArticleType = {
    slug: slug,
    title: "Sazón Peruana",
    industry: "Gastronomía",
    category: ['innovacion'],
    link: "",
    intro: "Una marca que nace en Colombia, lejos de su tierra oriunda pero con orgullo de sus raíces peruanas",
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
        "En el diseño se busca representar el mayor valor de la marca. Llevar con orgullo la gastronomía peruana a otra parte del mundo, asegurando su calidad a través del uso de insumos orgánicos y una exquisita sazón, 100% peruana.",
    ],
    features: [
        { icon: "", label: "Branding" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
    ],
}