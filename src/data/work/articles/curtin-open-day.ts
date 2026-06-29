import { imgCLOUD, vidCLOUD } from "@/constants/resources"
import type { WorkArticleType } from "../types"

const slug = "curtin-open-day"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const curtinOpenDayArticle: WorkArticleType = {
    slug: slug,
    title: "Curtin Open Day",
    industry: "Educación",
    category: ['educacion'],
    link: "https://www.curtin.edu.au/open-day/",
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
        "En el ámbito de la educación superior, las Jornadas de Puertas Abiertas continúan siendo un mecanismo clave para promover la vida en el campus, con las plataformas digitales como primer punto de contacto para futuros estudiantes. En este contexto, diseñar una experiencia en línea atractiva e innovadora resulta fundamental, especialmente cuando existen desafíos geográficos asociados al entorno físico del campus.",
        "Experiencias de esta naturaleza suelen integrar interfaces intuitivas capaces de comunicar de manera clara la programación completa del evento, permitiendo a los estudiantes priorizar, seleccionar y organizar sus actividades. La incorporación de herramientas de mapeo interactivo facilita además la orientación dentro del campus y optimiza la experiencia presencial.",
        "Cuando la estrategia digital se alinea con la logística del evento, el resultado puede traducirse en una respuesta altamente positiva por parte de los grupos de interés, contribuyendo a una mayor asistencia y a un incremento en las inscripciones posteriores."
    ],
    features: [
        { icon: "", label: 'Estrategia digital' },
        { icon: "", label: 'Diseño de interacción' },
        { icon: "", label: 'Funciones de mapeo y ubicación' },
        { icon: "", label: 'Búsqueda y selección de eventos' },
        { icon: "", label: 'Funcionalidad "Crea mi plan"' },
    ],
    body: [
        { type: "video", src: `${videoPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
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