import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "curtin-study-planner"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`


export const curtinStudyPlannerArticle: WorkArticleType = {
    slug: slug,
    title: "Curtin Study Planner",
    industry: "Educación",
    category: ['educacion', 'ui-ux'],
    link: "https://www.curtin.edu.au/students/essentials/managing-your-course/study-planner/",
    intro: "Una facultad universitaria buscaba modernizar su planificador de estudios, transformándolo en una herramienta digital centrada en la experiencia del usuario para facilitar la planificación académica de los estudiantes.",
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
        "Cuando los procesos académicos se gestionan mediante hojas de cálculo complejas y documentos extensos en PDF, la creación del plan de estudios puede convertirse en una experiencia abrumadora y poco eficiente para los estudiantes. En este contexto, un enfoque basado en investigación y experiencia de usuario permite redefinir el recorrido, simplificando la toma de decisiones y automatizando la selección de asignaturas.",
        "El resultado es una aplicación web ligera y de alto rendimiento que funciona como herramienta de autoservicio, facilitando la exploración y descarga de planes de estudio. Tras su implementación, soluciones de este tipo suelen mejorar significativamente la planificación académica, aumentar la confianza de los estudiantes en su trayectoria y reducir de manera considerable la carga operativa del personal administrativo."
    ],
    features: [
        { icon: "", label: "Estrategia digital " },
        { icon: "", label: "Investigación de experiencia de usuario " },
        { icon: "", label: "Diseño de interfaz de usuario " },
        { icon: "", label: "Desarrollo de aplicaciones Vue.js " },
        { icon: "", label: "Integración de API " },
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