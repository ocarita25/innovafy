import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "georgiou-group"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const georgiouGroupArticle: WorkArticleType = {
    slug: slug,
    title: "Grupo Georgiou",
    industry: "Construcción",
    category: ['comercial'],
    link: "https://www.georgiou.com.au/",
    intro: "Georgiou Group es una empresa líder en construcción civil y de edificación que ofrece una amplia gama de servicios de ingeniería y proyectos de infraestructura en toda Australia.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Grupo Georgiou Thumbnail',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Grupo Georgiou Thumbnail Foreground',
        }
    },
    paragraphs: [
        "En procesos de evolución corporativa, la redefinición del sitio web institucional puede convertirse en un habilitador clave del crecimiento sostenido y del fortalecimiento de capacidades organizacionales. Cuando la estrategia de talento ocupa un lugar central, la plataforma digital debe visibilizar de forma clara las oportunidades profesionales, alineadas con la visión y los valores de la empresa.",
        "El resultado es un ecosistema digital dinámico que proyecta coherentemente la identidad de marca, respalda las iniciativas de atracción de talento y consolida una base sólida para el crecimiento continuo."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Gestión intuitiva de contenidos" },
    ],
    body: [
        { type: "video", src: `${videoPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-9` },
    ],
}