import type { WorkArticleType } from "../types"

const slug = "satterley"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

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
        "El grupo tenía un problema empresarial fundamental: era fundamental que la marca corporativa y las marcas comunitarias coexistieran en el mismo ecosistema. Los desafíos en torno a la presencia de marca, la infraestructura digital y las estrategias de SEO contradictorias exigían una nueva solución.",
        "Humaan creó una experiencia integral que satisfizo las necesidades de marketing tanto de las partes interesadas corporativas como de los community managers responsables de las ventas. Cada comunidad contó con un micrositio integrado con imagen de marca, mensajería y acceso administrativo seguro para los community managers. Estos se organizaron en una arquitectura de sitio anidada que permitía a la audiencia filtrar y encontrar información relevante antes de la compra.",
        "El resultado es una experiencia poderosa que muestra toda la cartera de Satterley y maximiza su actividad de marketing local y nacional."
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