import type { WorkArticleType } from "../types"

const slug = "curtin-study-planner"
const imgPath = `/images/work/articles/${slug}`


export const curtinStudyPlannerArticle: WorkArticleType = {
    slug: slug,
    title: "Curtin Study Planner",
    category: ['educacion', 'ui-ux'],
    link: "/",
    intro: "Como socio de la universidad desde hace mucho tiempo, la Facultad de Negocios y Derecho nos contactó para que repensamos el planificador de estudios de los estudiantes con un enfoque digital y centrado en la experiencia del usuario.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Thumbnail foreground',
        }
    },
    paragraphs: [
        "Con un proceso manual que se gestionaba mediante complejas hojas de cálculo de Excel y PDF de varias páginas, el método existente para que los estudiantes crearan su plan de estudios era abrumador y laborioso. Tras profundizar en las fases de descubrimiento y experiencia de usuario, propusimos una solución que guiaría a los estudiantes durante el proceso, automatizando al mismo tiempo el proceso de selección. El resultado es una aplicación web ligera y de alto rendimiento que ofrece una solución de autoservicio para que los estudiantes exploren y descarguen fácilmente sus planes de estudio.",
        "Desde su lanzamiento, miles de estudiantes se han beneficiado de la herramienta, mejorando la planificación del curso y ayudándolos a sentirse seguros en su trayectoria académica, al tiempo que reduce significativamente la carga de trabajo del personal..",
    ],
    features: [
        { icon: "", label: "Estrategia digital " },
        { icon: "", label: "Investigación de experiencia de usuario " },
        { icon: "", label: "Diseño de interfaz de usuario " },
        { icon: "", label: "Desarrollo de aplicaciones Vue.js " },
        { icon: "", label: "Integración de API " },
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