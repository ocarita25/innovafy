import type { WorkArticleType } from "../types"

const slug = "curtin-open-day"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const curtinOpenDayArticle: WorkArticleType = {
    slug: slug,
    title: "Curtin Open Day",
    category: ['educacion'],
    link: "/",
    intro: "La Universidad Curtin es una de las instituciones de investigación públicas más grandes de Australia y ofrece educación líder en la industria para más de 55.000 estudiantes.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "Al igual que en muchas instituciones de educación superior, la activación de las Jornadas de Puertas Abiertas sigue siendo un método esencial para promover la vida en el campus, siendo las plataformas digitales el primer punto de contacto para los futuros estudiantes. Curtin buscaba ofrecer una experiencia en línea atractiva con un diseño innovador que tuviera en cuenta las dificultades geográficas de su campus.",
        "El resultado fue una experiencia repleta de funciones con una interfaz de usuario intuitiva que comunicaba la gran cantidad de actividades que se desarrollaban a lo largo del día. Los estudiantes pudieron priorizar, seleccionar y programar sus preferencias, lo que se complementó con una potente superposición de MazeMap para facilitar la orientación en el campus.",
        "La respuesta al sitio web del Día de Puertas Abiertas fue universalmente positiva por parte de las partes interesadas de la facultad y los futuros estudiantes, y el sitio web contribuyó a una asistencia significativa y a las inscripciones posteriores de estudiantes después del evento."
    ],
    features: [
        { icon: "", label: 'Estrategia digital' },
        { icon: "", label: 'Diseño de interacción' },
        { icon: "", label: 'Funciones de mapeo y ubicación' },
        { icon: "", label: 'Búsqueda y selección de eventos' },
        { icon: "", label: 'Funcionalidad "Crea mi plan"' },
    ],
    body: [
        { type: "video", src: `${imgPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-9` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-10`, style: "min-[992px]:col-span-2" },
    ],
}