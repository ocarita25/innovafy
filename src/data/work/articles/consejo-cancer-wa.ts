import { imgCLOUD, vidCLOUD } from "@/constants/resources"
import type { WorkArticleType } from "../types"

const slug = "consejo-cancer-wa"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const consejoCancerWAArticle: WorkArticleType = {
    slug: slug,
    title: "Consejo del Cáncer de WA",
    industry: "Sin fines de lucro",
    category: ['featured', 'sin-fines-de-lucro'],
    link: "https://cancerwa.asn.au/",
    intro: "Cancer Council WA trabaja con la comunidad para reducir la incidencia y el impacto del cáncer y tiene como objetivo lograr un futuro libre de cáncer en todo el estado.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`
        }
    },
    paragraphs: [
        "En el sector sin fines de lucro, la presencia digital de una organización de defensa de derechos debe responder a múltiples públicos con necesidades diversas e incluso contrapuestas. En este contexto, una plataforma orientada al ámbito oncológico debe equilibrar la provisión de información de apoyo para quienes atraviesan situaciones complejas, con la promoción activa de la investigación, las donaciones y la recaudación de fondos.",
        "Una identidad visual sólida puede aprovecharse estratégicamente para construir una experiencia digital sensible al contexto, facilitando la participación en los momentos adecuados. Paralelamente, la revisión integral de la arquitectura de contenidos permite definir recorridos de usuario claros e intuitivos para los principales segmentos de audiencia.",
        "El resultado es un ecosistema online que se convierte en eje central de la estrategia de marketing institucional y cumple una función esencial de acompañamiento y apoyo para quienes más lo necesitan."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de experiencia de usuario" },
        { icon: "", label: "Mapeo de contenido" },
        { icon: "", label: "Gestión intuitiva de contenidos" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8`, style: "min-[992px]:col-span-2" },
    ],
}