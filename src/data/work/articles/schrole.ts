import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "schrole"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const schroleArticle: WorkArticleType = {
    slug: slug,
    title: "Schrole",
    industry: "Educación",
    category: ['educacion'],
    link: "https://www.schrole.com/",
    intro: "Schrole es el proveedor líder del mercado de soluciones de software de RRHH diseñadas para la comunidad educativa internacional.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`,
        },
    },
    paragraphs: [
        "En marcas con amplias gamas de productos y soluciones, la claridad en la comunicación digital es fundamental. La arquitectura del sitio debe equilibrar la presentación de características y beneficios de manera comprensible, integrando herramientas que fomenten la interacción entre los usuarios y los servicios ofrecidos.",
        "Una fase de descubrimiento exhaustiva permite diseñar una estructura web atractiva y adaptable a la diversidad geográfica y de perfiles de la audiencia. La comunicación centrada en beneficios facilita que los usuarios alineen sus necesidades con las soluciones disponibles, mejorando la consideración y promoviendo la conversión efectiva.",
        "Cuando la experiencia digital articula claridad, accesibilidad y personalización, la plataforma se convierte en un punto de referencia integral para todas las partes interesadas dentro de la comunidad educativa global."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Captación de clientes potenciales B2B y B2C" },
        { icon: "", label: "Visualización de mapas 3D" },
        { icon: "", label: "Desarrollo personalizado" },
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
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-9` },
        { type: "image", src: `${imgPath}/${slug}-10.webp`, alt: `${slug}-10`, style: "min-[992px]:col-span-2" },
    ],
}