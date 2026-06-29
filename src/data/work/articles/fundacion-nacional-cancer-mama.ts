import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "fundacion-nacional-cancer-mama"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const fundacionNacionalCancerMamaArticle: WorkArticleType = {
    slug: slug,
    title: "Fundación Nacional del Cáncer de Mama",
    industry: "Sin fines de lucro",
    category: ['featured', "sin-fines-de-lucro"],
    link: "https://nbcf.org.au/",
    intro: "La Fundación Nacional del Cáncer de Mama (NBCF) es la organización sin fines de lucro líder de Australia que financia investigaciones de primer nivel sobre el cáncer de mama.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'PIQUE Thumbnail',
        }
    },
    paragraphs: [
        "A pesar del sólido reconocimiento de marca y su credibilidad en la industria, el análisis del sitio web evidenciaba métricas de bajo rendimiento, junto con una disminución en el volumen y el valor de las donaciones en línea.",
        "En contextos donde este objetivo organizativo es crítico, la experiencia digital debe construirse sobre historias humanas auténticas, una comunicación clara y una arquitectura de experiencia de usuario optimizada. Recorridos definidos y señales de comportamiento sutiles permiten guiar eficazmente a los distintos segmentos de audiencia y potenciar la conversión en plataformas de donación.",
        "Cuando la estrategia, el diseño y la optimización trabajan de forma integrada, el impacto digital puede traducirse en mayor financiación para la investigación y en un avance tangible hacia la visión institucional de la organización."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Contenido modular" },
        { icon: "", label: "Gestión intuitiva de contenidos" },
        { icon: "", label: "Optimización de la conversión" },
    ],
    body: [
        { type: "image", src: `${imgPath}/fundacion-nacional-1.webp`, alt: "fundacion-nacional-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-2.webp`, alt: "fundacion-nacional-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-3.webp`, alt: "fundacion-nacional-3" },
        { type: "image", src: `${imgPath}/fundacion-nacional-1.webp`, alt: "fundacion-nacional-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-2.webp`, alt: "fundacion-nacional-5", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-3.webp`, alt: "fundacion-nacional-6", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-1.webp`, alt: "fundacion-nacional-7" },
        { type: "image", src: `${imgPath}/fundacion-nacional-2.webp`, alt: "fundacion-nacional-8" },
        { type: "image", src: `${imgPath}/fundacion-nacional-3.webp`, alt: "fundacion-nacional-9", style: "min-[992px]:col-span-2" },
    ],
}