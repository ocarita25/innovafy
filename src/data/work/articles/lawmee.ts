import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "lawmee"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const lawmeeArticle: WorkArticleType = {
    slug: slug,
    title: "Lawmee",
    industry: "Reclutamiento Legal",
    category: ['innovacion', 'ui-ux'],
    link: "https://lawmee.com/",
    intro: "Una nueva plataforma de mercado para conectar equipos legales con abogados y asistentes legales, desde la idea hasta el lanzamiento.",
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
        "En sectores altamente regulados como el empleo legal, adoptar un enfoque innovador requiere una plataforma sofisticada y profundamente personalizada que responda tanto a las demandas del negocio como a las expectativas de sus usuarios. La gestión de procesos sensibles y escenarios complejos exige automatización estratégica y una experiencia clara e intuitiva que reduzca fricciones.",
        "En este tipo de desarrollos, la definición de una estrategia integral —que incluya arquitectura de información, diseño de interfaz y flujos de usuario optimizados— resulta clave para equilibrar requisitos operativos con una experiencia consistente para múltiples perfiles de audiencia.",
        "Las aplicaciones web de una sola página, apoyadas en stacks modernos como React y Laravel, permiten construir experiencias dinámicas sobre arquitecturas seguras y estables. Un enfoque iterativo y ágil facilita la validación continua con usuarios, asegurando que las necesidades reales se integren de manera estructural en la solución.",
        "Cuando la estrategia tecnológica y la experiencia de usuario se alinean correctamente, la plataforma puede generar un impacto tangible en el sector, optimizando la conexión entre organizaciones y profesionales, y estableciendo una base escalable para su crecimiento sostenido."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UX" },
        { icon: "", label: "Sistema de diseño de interfaz de usuario" },
        { icon: "", label: "Plataforma de mercado personalizada" },
        { icon: "", label: "Aplicación web React.js y Laravel" },
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