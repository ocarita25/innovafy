import type { WorkArticleType } from "../types"

const slug = "trails-wa"
const imgPath = `/images/work/articles/${slug}`


export const trailsWaArticle: WorkArticleType = {
    slug: slug,
    title: "Trails WA",
    industry: "Turismo",
    category: ['featured', "comunidad-y-proposito"],
    link: "https://trailswa.com.au/",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'TrailsWa Thumbnail Background',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'TrailsWa Thumbnail Foreground'
        }
    },
    intro: "Trails WA es el organismo máximo en materia de turismo y defensa de la diversa red de senderos de Australia Occidental.",
    paragraphs: [
        "Cuando un proyecto web involucra una gran cantidad de rutas o contenidos geoespaciales, la facilidad de descubrimiento y la escalabilidad son fundamentales. Un diseño y desarrollo integrados permiten crear una experiencia que facilite la exploración y proporcione navegación rápida en distintos dispositivos.",
        "Una plataforma bien diseñada prioriza la experiencia del usuario y la accesibilidad al contenido, permitiendo una gestión intuitiva de rutas, información y perfiles en el backend. La arquitectura del sitio y los nodos de navegación deben optimizar la búsqueda, el filtrado y la presentación de opciones precisas, complementados con funciones geoespaciales interactivas.",
        "Cuando la experiencia digital combina usabilidad, exploración eficiente y arquitectura escalable, la plataforma contribuye significativamente a la promoción de actividades, fomenta la participación de los usuarios y facilita el descubrimiento de contenidos en todo el territorio o sector correspondiente.",
    ],
    // paragraphs: [
    //     "Con más de 800 senderos en todo el estado, la facilidad de descubrimiento y la escalabilidad fueron pilares fundamentales del proyecto web asignado a Humaan. Era fundamental que el diseño y el desarrollo trabajaran en conjunto para crear una experiencia que facilitara la exploración y permitiera una navegación rápida en dispositivos de escritorio y portátiles.",
    //     "Humaan diseñó y desarrolló una plataforma completamente nueva que priorizara la experiencia del usuario y el descubrimiento de senderos, a la vez que permitiera una gestión intuitiva de senderos, contenido y perfiles de usuario en el backend. La escala del sitio y el volumen de contenido se optimizaron en unos pocos nodos de navegación que permitieron una búsqueda y un filtrado lógicos entre tipos de senderos y disciplinas. Esto se complementó con una potente función de búsqueda en todo el sitio y superposiciones geoespaciales precisas para garantizar que se presentaran opciones de senderos precisas para el intrépido explorador.",
    //     "El sitio web Trails WA, destinatario de múltiples premios de la industria por diseño y UX, ha contribuido de manera importante a la promoción de senderos y turismo de senderos en todo WA y ha permitido que miles de personas se encuentren en lugares increíbles mientras exploran senderos en todo el estado."
    // ],
    features: [
        { icon: "", label: "Estrategia digital y experiencia de usuario" },
        { icon: "", label: "Diseño de interacción" },
        { icon: "", label: "Desarrollo de plataforma personalizada" },
        { icon: "", label: "Servicios de localización y mapeo" },
        { icon: "", label: "Gestión de senderos" },
        { icon: "", label: "Cuentas de usuario y gamificación" },
    ],
    body: [
        { type: "image", src: `${imgPath}/trails-wa-1.webp`, alt: "trails-wa-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/trails-wa-2.webp`, alt: "trails-wa-2", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/trails-wa-3.webp`, alt: "trails-wa-3", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/trails-wa-4.webp`, alt: "trails-wa-4" },
        { type: "image", src: `${imgPath}/trails-wa-5.webp`, alt: "trails-wa-5" },
        { type: "image", src: `${imgPath}/trails-wa-6.webp`, alt: "trails-wa-6", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/trails-wa-7.webp`, alt: "trails-wa-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/trails-wa-8.webp`, alt: "trails-wa-8" },
        { type: "image", src: `${imgPath}/trails-wa-9.webp`, alt: "trails-wa-9" },
    ],
}