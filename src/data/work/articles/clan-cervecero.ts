import { imgCLOUD } from "@/constants/resources"
import type { WorkArticleType } from "../types"

const slug = "clan-cervecero"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const clanCerveceroArticle: WorkArticleType = {
    slug: slug,
    title: "Clan Cervecero",
    industry: "Bar",
    category: ['comercial', 'ui-ux'],
    link: "",
    intro: "Clan Cervecero es un bar en Miraflores cuya identidad fue desarrollada estratégicamente desde sus inicios, abarcando naming, branding, diseño del local, fotografía, campaña de lanzamiento, estrategia digital y desarrollo web. Incluso en un contexto desafiante como el 2020, supo reinventarse y fortalecer su presencia de marca",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Thumbnail foreground',
        },
    },
    paragraphs: [
        "Un bar miraflorino con el que temenos el enorme gusto de trabajar desde sus inicios. En todo momento nos permitieron asesorarlos, desde el naming, branding, la decoración del local, fotografías profesionales, la campaña intriga de lanzamiento, la estrategia comunicacional para redes sociales, el desarrollo de su página web, entre otros.",
        "Y en un año tan complicando como el 2020, es un placer continuar con el reto de reinventarse y seguir apoyándolos con nuestro trabajo.",
    ],
    features: [
        { icon: "", label: "Naming" },
        { icon: "", label: "Branding" },
        { icon: "", label: "Desarrollo Web" },
        { icon: "", label: "Social Media" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8` },
    ],
}