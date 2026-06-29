import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "scitech"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const scitechArticle: WorkArticleType = {
    slug: slug,
    title: "Scitech",
    industry: "Educacion",
    category: ['educacion', "comunidad-y-proposito"],
    link: "https://www.scitech.org.au/",
    intro: "Un centro educativo STEM buscaba crear una presencia en línea duradera que respaldara sus objetivos estratégicos y facilitara la participación y el aprendizaje desde el primer día.",
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
        }
    },
    paragraphs: [
        "Las plataformas digitales en educación STEM pueden maximizar la participación mediante un diseño adaptable, navegación intuitiva y estándares de accesibilidad web, garantizando una experiencia óptima en todos los dispositivos.",
        "La inclusión de campañas interactivas y páginas de destino personalizadas permite dirigirse a diversos segmentos de audiencia, mientras que micrositios conmemorativos o temáticos pueden inspirar la exploración y el aprendizaje creativo.",
        "Cuando la experiencia digital integra diseño, funcionalidad y narrativa estratégica, la plataforma respalda la misión educativa de la organización y consolida su posicionamiento como referente en el sector de la educación y la divulgación científica."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Sistema de diseño" },
        { icon: "", label: "Campañas interactivas a medida" },
        { icon: "", label: "Gestión intuitiva de contenido" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8`, style: "min-[992px]:col-span-2" },
    ],
}