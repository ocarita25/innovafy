import type { WorkArticleType } from "../types"

const slug = "hablar-caminar"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const hablarCaminarArticle: WorkArticleType = {
    slug: slug,
    title: "Hablar y Caminar",
    industry: "Educación",
    category: ['featured', "comunidad-y-proposito"],
    link: "https://apps.apple.com/au/app/talk-n-walk/id1615889482",
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
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "video", src: `${videoPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-3`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-6`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-8`, style: "min-[992px]:col-span-2" },
    ],
}