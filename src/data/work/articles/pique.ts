import type { WorkArticleType } from "../types";

const slug = "pique"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const piqueArticle: WorkArticleType = {
    slug: slug,
    title: "PIQUE",
    isFeatured: true,
    category: ["featured", 'comercial'],
    link: "/",
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
        "El sitio web debía desempeñar un papel fundamental en la campaña de lanzamiento de PIQUE, ya que debía evocar las características premium de la marca y, al mismo tiempo, garantizar que la información esencial del producto, sobre las especificaciones y el proceso de construcción, fuera fácilmente accesible.",
        "La respuesta residía en una experiencia rica en contenido que equilibraba forma y función a partes iguales. Una sofisticada experiencia de navegación con elegantes técnicas de producción de interfaz de usuario reflejaba la calidad y la artesanía de la gama de productos, respaldada por información técnica clara y llamadas a la acción para impulsar la consideración del consumidor y la consulta entrante.",
        "El resultado fue un sitio web galardonado que superó sus objetivos comerciales y posicionó a la marca como líder en el sector de las casas modulares."
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