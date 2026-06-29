import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "kitchen-center"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const kitchenCenterArticle: WorkArticleType = {
    slug: slug,
    title: "Kitchen Center",
    industry: "Equipamiento de Cocina",
    category: ['comercial', 'innovacion'],
    link: "https://kitchencenter.pe/",
    intro: "Kitchen Center es una empresa especializada en equipamiento de cocina",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
    },
    paragraphs: [
        "Durante el 2020 hemos tenido el agrado de trabajar con Kitchen Center, una marca que buscaba conectar nuevamente con su público objetivo, por ello volvió a contactarnos para retomar su estrategia en redes sociales y juntos logramos hacer crecer la comunidad y sobretodo generar un conexión mucho más participativa y sólida con su público objetivo.",
    ],
    features: [
        { icon: "", label: "Social Media" },
        { icon: "", label: "Branding" },
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