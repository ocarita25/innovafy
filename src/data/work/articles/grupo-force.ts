import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "grupo-force"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const grupoForceArticle: WorkArticleType = {
    slug: slug,
    title: "Grupo Force",
    industry: "Reclutamiento",
    category: ['comercial'],
    link: "",
    intro: "Grupo FORCE es un conjunto de empresas de Gestión y Desarrollo del Talento Humano como son: Reclutamiento y Selección, Gestión de Nomina, Intermediación Laboral, Tercerización de Procesos y Servicios de Limpieza, Mantenimiento y Sanidad, avalados con una experiencia de 20 años en el Rubro",
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
        "Una empresa de gestión y desarrollo de talento humano nos solicitó el rediseño de toda su imagen corporativa.",
        "Al momento de la inmersión identificamos una falta de unidad gráfica entre las marcas del grupo. No existía una identidad que los represente y el diseño era muy poco atractivo.",
        "Así que dejamos que la creatividad y coherencia fluyeran para lograr un diseño atractivo pero que sobre todo, que los haga sentir identificados."
    ],
    features: [
        { icon: "", label: "Branding" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
    ],
}