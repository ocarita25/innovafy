import type { WorkArticleType } from "../types";
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "surveillance-watch"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

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
        "En proyectos basados en grandes volúmenes de datos, transformar información compleja en una narrativa clara y atractiva es clave. Las plataformas de visualización interactiva permiten explorar relaciones y conocimientos de manera personalizada, facilitando la comprensión profunda del contenido.",
        "Diseñar una arquitectura lógica y fácil de navegar garantiza que los usuarios puedan explorar los datos de forma intuitiva. Experiencias interactivas y atractivas mantienen la motivación del usuario, mientras que una gestión de contenido eficiente asegura que la información sea clara, accesible y memorable, incluso en arquitecturas headless modernas.",
        "Cuando la visualización de datos combina claridad, interacción y accesibilidad multiplataforma, la plataforma se convierte en una herramienta eficaz para generar conciencia, comunicar información compleja y maximizar el impacto del contenido a nivel global."
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