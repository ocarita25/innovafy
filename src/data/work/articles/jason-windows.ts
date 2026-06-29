import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "jason-windows"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const jasonWindowsArticle: WorkArticleType = {
    slug: slug,
    title: "Jason Windows",
    industry: "Comercial",
    category: ['comercial'],
    link: "https://jasonwindows.com.au/",
    intro: "Jason Windows es el proveedor elegido por la industria de la construcción y la edificación para ventanas, puertas y mallas de seguridad de alta calidad.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Thumbnail foreground',
        }
    },
    paragraphs: [
        "Cuando una alta demanda de productos se combina con una presencia digital desactualizada, surge la necesidad de una plataforma que respalde el negocio mediante herramientas de autoservicio y una mayor interacción con perfiles profesionales como arquitectos y constructores.",
        "En este tipo de transformaciones, la visibilidad integral del portafolio de productos, complementada con casos prácticos e inspiración aplicada, facilita la toma de decisiones informada. La incorporación de funcionalidades como listas detalladas de requerimientos y portales dedicados para socios estratégicos permite optimizar la interacción con cuentas clave y reducir la carga administrativa del proceso comercial.",
        "El relanzamiento de una plataforma con estas características puede redefinir las capacidades digitales de la marca, fortalecer su posicionamiento competitivo y consolidar su reputación como proveedor confiable dentro de su mercado."
    ],
    features: [
        { icon: "", label: "Estrategia y experiencia de usuario" },
        { icon: "", label: "Especificaciones técnicas y detalles del producto" },
        { icon: "", label: "Visualización del producto" },
        { icon: "", label: "Animación e interacción" },
        { icon: "", label: "Portal seguro para constructores" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7` },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8`, style: "min-[992px]:col-span-2" },
    ],
}