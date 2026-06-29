import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "pentanet"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const pentanetArticle: WorkArticleType = {
    slug: slug,
    title: "Pentanet",
    industry: "Tecnología",
    category: ['featured', 'comercial', 'ui-ux'],
    link: "https://pentanet.com.au/",
    intro: "Pentanet es un proveedor líder de soluciones de Internet inalámbrica fija, NBN y de fibra óptica para clientes residenciales y comerciales en toda Australia Occidental.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Pentanet Thumbnail background',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Pentanet Thumbnail foreground',
        }
    },
    paragraphs: [
        "Para marcas centradas en innovación, tecnología y experiencia, la presencia digital debe reflejar y reforzar este posicionamiento, ofreciendo experiencias atractivas que conecten con el público a nivel de marca y producto.",
        "La arquitectura del sitio y la presentación de información clave —como características de producto, capacidades y diferenciadores— se diseñan para satisfacer tanto a clientes potenciales como existentes, complementadas con interfaces sofisticadas que transmiten credenciales tecnológicas de manera clara y accesible.",
        "Cuando la estrategia digital y la experiencia de usuario se alinean correctamente, la plataforma se convierte en un pilar central de la estrategia de experiencia del cliente (CX), respaldando la expansión de capacidades y la consolidación de la marca."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UX" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
    ],
    body: [
        { type: "video", src: `${videoPath}/pentanet-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pentanet-1.webp`, alt: "pentanet-2" },
        { type: "image", src: `${imgPath}/pentanet-2.webp`, alt: "pentanet-3" },
        { type: "image", src: `${imgPath}/pentanet-3.webp`, alt: "pentanet-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pentanet-4.webp`, alt: "pentanet-5" },
        { type: "image", src: `${imgPath}/pentanet-5.webp`, alt: "pentanet-6" },
        { type: "image", src: `${imgPath}/pentanet-6.webp`, alt: "pentanet-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pentanet-7.webp`, alt: "pentanet-8" },
        { type: "image", src: `${imgPath}/pentanet-8.webp`, alt: "pentanet-9" },
        { type: "image", src: `${imgPath}/pentanet-9.webp`, alt: "pentanet-10", style: "min-[992px]:col-span-2" },
    ],
}