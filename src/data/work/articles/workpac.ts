import type { WorkArticleType } from "../types"

const slug = "workpac"
const imgPath = `/images/work/articles/${slug}`


export const workpacArticle: WorkArticleType = {
    slug: slug,
    title: "WorkPac",
    industry: "Reclutamiento",
    category: ['comercial'],
    link: "https://www.workpac.com/",
    intro: "WorkPac es una empresa líder en selección de personal, especializada en gestión de personal, gestión de proyectos, capacitación y soluciones tecnológicas para los sectores de recursos, construcción, industria, salud y asistencia social.",
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
        "A partir de una marca organizacional exitosa, el equipo quería consolidar un conjunto fragmentado de sitios web de clientes existentes en una experiencia única y cohesiva, para impulsar el crecimiento del cliente y reducir los gastos administrativos..",
        "Después de un extenso período de investigación y planificación, nos propusimos diseñar y construir una experiencia en línea integral y extensible que pudiera albergar de manera capaz las diversas áreas operativas del negocio, sin comprometer la continuidad de la experiencia del usuario en general.",
        "El resultado es una plataforma en línea atractiva que refleja mejor las ambiciones progresistas de la nueva marca de WorkPac y cumple con los altos estándares de rendimiento y facilidad de uso que nosotros y ellos nos propusimos alcanzar."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Planificación de la arquitectura de la información" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Creación, visualización y búsqueda de ofertas de empleo" },
        { icon: "", label: "Integraciones de servicios de terceros" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
    ],
}