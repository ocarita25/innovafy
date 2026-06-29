import type { WorkArticleType } from "../types";
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "pique"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const piqueArticle: WorkArticleType = {
    slug: slug,
    title: "PIQUE",
    industry: "Construcción y Edificación",
    isFeatured: true,
    category: ["featured", 'comercial'],
    link: "https://piquemod.com.au/",
    intro: "PIQUE es un fabricante líder de casas modulares prefabricadas de alta gama, diseñadas para personas que viven en zonas remotas y difíciles.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'PIQUE Thumbnail',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "En lanzamientos de productos premium, la plataforma digital debe reflejar la calidad de la marca, al tiempo que asegura que la información esencial sobre especificaciones y procesos sea fácilmente accesible para los usuarios.",
        "Una experiencia rica en contenido, que equilibre diseño y funcionalidad, facilita la comprensión de la propuesta de valor. Navegación sofisticada, interfaces elegantes y presentación clara de información técnica, junto con llamadas a la acción estratégicas, potencian la consideración del consumidor y fomentan la interacción efectiva.",
        "Cuando la experiencia digital integra claridad, estética y funcionalidad, la plataforma puede superar objetivos comerciales y consolidar el posicionamiento de la marca dentro de su sector."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UX y UI" },
        { icon: "", label: "Aplicación multimedia visual enriquecida" },
        { icon: "", label: "Animación y creación de prototipos" },
    ],
    body: [
        { type: "image", src: `${imgPath}/pique-1.webp`, alt: "pique-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pique-2.webp`, alt: "pique-2" },
        { type: "image", src: `${imgPath}/pique-3.webp`, alt: "pique-3" },
        { type: "image", src: `${imgPath}/pique-4.webp`, alt: "pique-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pique-5.webp`, alt: "pique-5" },
        { type: "image", src: `${imgPath}/pique-6.webp`, alt: "pique-6" },
        { type: "image", src: `${imgPath}/pique-7.webp`, alt: "pique-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pique-8.webp`, alt: "pique-8" },
        { type: "image", src: `${imgPath}/pique-9.webp`, alt: "pique-9" },
        { type: "image", src: `${imgPath}/pique-10.webp`, alt: "pique-10", style: "min-[992px]:col-span-2" },
    ],
}