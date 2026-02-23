import type { WorkArticleType } from "../types";

const slug = "surveillance-watch"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const surveillanceWatchArticle: WorkArticleType = {
    slug: slug,
    title: "Surveillance Watch",
    industry: "Visualización de Datos",
    isFeatured: true,
    category: ["featured", "comunidad-y-proposito", 'innovacion'],
    link: "https://www.surveillancewatch.io/",
    intro: "Surveillance Watch es un mapa interactivo que revela las intrincadas conexiones entre las empresas de vigilancia, sus fuentes de financiación y afiliaciones.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`,
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Surveillance Watch Thumbnail Foreground',
        }
    },
    paragraphs: [
        "Partiendo de un conjunto sustancial de datos de investigación sin procesar y con la ambición de presentar una narrativa clara y atractiva, trabajamos estrechamente con nuestro cliente para hacer realidad su visión: una experiencia de visualización de datos interactiva y personalizada que comunica la profundidad de las relaciones y los conocimientos que contiene.",
        "La plataforma se diseñó para ser lógica y fácil de navegar, garantizando que los usuarios pudieran explorar el contenido sin esfuerzo. Nos centramos en crear una experiencia atractiva que invitara a la exploración y mantuviera a los usuarios motivados, a la vez que garantizamos que la información presentada fuera clara y memorable. Desde el punto de vista de la gestión de contenido, PayloadCMS facilita la gestión de datos y funciona a la perfección con la arquitectura headless del sitio.",
        "El resultado es una exploración inmersiva de la vigilancia mundial, a través de una experiencia web interactiva para ordenadores y dispositivos móviles. En tan solo unas semanas desde su lanzamiento, el proyecto ha contribuido a generar conciencia a nivel mundial y está teniendo un impacto directo en la exposición de la actividad de vigilancia en muchos países."
    ],
    features: [
        { icon: "", label: "Visualización de datos" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Diseño de interacción" },
        { icon: "", label: "CMS Headless" },
    ],
    body: [
        { type: "video", src: `${videoPath}/surveillance-1.mp4`, style: 'min-[992px]:col-span-2' },
        { type: 'image', src: `${imgPath}/surveillance-1.webp`, alt: "surveillance2" },
        { type: 'image', src: `${imgPath}/surveillance-2.webp`, alt: "surveillance3" },
        { type: 'image', src: `${imgPath}/surveillance-3.webp`, alt: "surveillance4", style: 'min-[992px]:col-span-2' },
        { type: 'image', src: `${imgPath}/surveillance-4.webp`, alt: "surveillance5" },
        { type: 'image', src: `${imgPath}/surveillance-5.webp`, alt: "surveillance6" },
        { type: 'image', src: `${imgPath}/surveillance-6.webp`, alt: "surveillance7", style: 'min-[992px]:col-span-2' },
        { type: 'image', src: `${imgPath}/surveillance-7.webp`, alt: "surveillance8", style: 'min-[992px]:col-span-2' },
    ]
}