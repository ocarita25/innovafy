import type { WorkArticleType } from "../types"

const slug = "hablar-caminar"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const hablarCaminarArticle: WorkArticleType = {
    slug: slug,
    title: "Hablar y Caminar",
    category: ['featured', "comunidad-y-proposito"],
    link: "/",
    intro: "Talk N Walk es una aplicación móvil única que apoya y fomenta la actividad física en niñas en edad escolar.",
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
        "Con el objetivo de alentar a las niñas preadolescentes y adolescentes a intercambiar las sesiones de entrenamiento en el sofá con actividades en su área local, trabajamos en estrecha colaboración con el equipo de Nature Play para comprender y diseñar estrategias sobre el potencial de la tecnología para ayudar a cerrar la brecha y facilitar un enfoque positivo hacia un estilo de vida activo.",
        "Talk N Walk incorpora funciones de gamificación y personalización para crear una rica experiencia móvil que permite la conversación y fomenta la actividad al aire libre, rastreando el progreso y brindando ciclos de retroalimentación positivos para demostrar el impacto de la actividad física en la salud mental.",
        "Desde su lanzamiento, la aplicación móvil Talk N Walk ha seguido recibiendo comentarios positivos y reconocimiento de la industria por su solución innovadora y su enfoque definitorio de categoría en diseño y accesibilidad."
    ],
    features: [
        { icon: "", label: "Investigación de UX" },
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Aplicación para iOS y Android" },
    ],
    body: [
        { type: "image", src: `${imgPath}/pique-1.webp`, alt: "pique-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pique-2.webp`, alt: "pique-2" },
        { type: "image", src: `${imgPath}/pique-3.webp`, alt: "pique-3" },
        { type: "image", src: `${imgPath}/pique-1.webp`, alt: "pique-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pique-2.webp`, alt: "pique-5" },
        { type: "image", src: `${imgPath}/pique-3.webp`, alt: "pique-6" },
        { type: "image", src: `${imgPath}/pique-1.webp`, alt: "pique-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/pique-2.webp`, alt: "pique-8" },
        { type: "image", src: `${imgPath}/pique-3.webp`, alt: "pique-9" },
        { type: "image", src: `${imgPath}/pique-1.webp`, alt: "pique-10", style: "min-[992px]:col-span-2" },
    ],
}