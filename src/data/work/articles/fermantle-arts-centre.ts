import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "fermantle-arts-centre"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const fermantleArtsCentreArticle: WorkArticleType = {
    slug: slug,
    title: "Fremantle Arts Centre",
    industry: "Artes",
    category: ['comunidad-y-proposito'],
    link: "https://wfac.org.au/",
    intro: "El Fremantle Arts Centre (FAC) es una importante institución artística de Australia Occidental que ofrece un rico programa de exposiciones, residencias, cursos de arte, música y eventos.",
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
        "En organizaciones culturales con una programación diversa, la experiencia digital debe reflejar la riqueza artística de la institución y aprovechar el contenido visual como elemento central para construir una interacción memorable con los visitantes.",
        "En este tipo de proyectos, la definición de requerimientos funcionales resulta clave para integrar todas las áreas operativas en un mismo ecosistema digital. La comunicación del programa artístico puede complementarse con secciones dedicadas a formación educativa, convocatorias para artistas y comercio electrónico, asegurando coherencia y eficiencia en la gestión.",
        "El resultado es una plataforma que fortalece la visibilidad tanto de artistas emergentes como consolidados y que actúa como catalizador para incrementar la participación cultural y las visitas al entorno creativo en el que se inserta la institución."
    ],
    features: [
        { icon: "", label: "Diseño de experiencia de usuario" },
        { icon: "", label: "Diseño responsivo" },
        { icon: "", label: "Sistema de contenido modular" },
        { icon: "", label: "comercio electrónico" },
        { icon: "", label: "Gestión de miembros" },
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