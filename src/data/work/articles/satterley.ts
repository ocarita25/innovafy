import { imgCLOUD, vidCLOUD } from "@/constants/resources"
import type { WorkArticleType } from "../types"

const slug = "satterley"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const satterleyArticle: WorkArticleType = {
    slug: slug,
    title: "Satterley",
    industry: "Desarrollo inmobiliario",
    category: ['featured', 'comercial'],
    link: "https://satterley.com.au/",
    intro: "Satterley es la empresa de desarrollo de tierras independiente más grande de Australia, con ubicaciones comunitarias en WA, QLD y VIC.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'PIQUE Thumbnail',
        }
    },
    paragraphs: [
        "En organizaciones con múltiples marcas bajo un mismo paraguas corporativo, uno de los retos clave es garantizar que la identidad corporativa y las marcas comunitarias coexistan de manera coherente dentro del ecosistema digital, mientras se optimizan la infraestructura y las estrategias de marketing.",
        "Una solución efectiva integra micrositios segmentados para cada comunidad, combinando identidad visual, mensajería y gestión administrativa segura, todo dentro de una arquitectura de sitio anidada que facilita la navegación, el filtrado de información y la toma de decisiones por parte de los usuarios.",
        "Cuando la experiencia digital se articula estratégicamente, la plataforma puede maximizar la visibilidad de la cartera de productos o servicios y potenciar la eficacia de las campañas de marketing a nivel local y nacional."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UX" },
        { icon: "", label: "Función de mapeo inteligente" },
        { icon: "", label: "Personalización" },
        { icon: "", label: "CMS WordPress de acceso múltiple" },
    ],
    body: [
        { type: "video", src: `${videoPath}/satterley-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/satterley-2.webp`, alt: "satterley-2" },
        { type: "image", src: `${imgPath}/satterley-3.webp`, alt: "satterley-3" },
        { type: "image", src: `${imgPath}/satterley-4.webp`, alt: "satterley-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/satterley-5.webp`, alt: "satterley-5" },
        { type: "image", src: `${imgPath}/satterley-6.webp`, alt: "satterley-6" },
        { type: "video", src: `${videoPath}/satterley-7.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/satterley-8.webp`, alt: "satterley-8" },
        { type: "image", src: `${imgPath}/satterley-9.webp`, alt: "satterley-9" },
        { type: "image", src: `${imgPath}/satterley-10.webp`, alt: "satterley-10", style: "min-[992px]:col-span-2" },
    ],
}