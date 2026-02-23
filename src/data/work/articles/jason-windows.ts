import type { WorkArticleType } from "../types"

const slug = "jason-windows"
const imgPath = `/images/work/articles/${slug}`


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
        "Una combinación de alta demanda de productos y una presencia digital descuidada dieron lugar a la idea de un nuevo sitio web que respaldaría el negocio a través de la selección de productos de autoservicio y un mayor compromiso con los arquitectos y constructores de viviendas.",
        "El público ahora podía evaluar toda la cartera de productos de Jason Windows, inspirándose en los casos prácticos antes de enviar una lista detallada de los requisitos de los productos para su entrega e instalación. Un portal dedicado para constructores facilitó una interacción más estrecha con las cuentas clave y los clientes, y redujo la carga administrativa del proceso de ventas.",
        "El relanzamiento del sitio web de Jason Windows ha transformado las capacidades digitales de la marca y fortalecido su posición como el proveedor más confiable de ventanas, puertas y mallas de seguridad de WA."
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