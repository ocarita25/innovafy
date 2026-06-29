import { imgCLOUD } from "@/constants/resources"
import type { WorkArticleType } from "../types"

const slug = "childrens-hospital-foundation"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const childrensHospitalFoundationArticle: WorkArticleType = {
    slug: slug,
    title: "Fundación del Hospital Infantil",
    industry: "Sin fines de lucro",
    category: ['sin-fines-de-lucro'],
    link: "https://childrens.org.au/",
    intro: "La Fundación del Hospital Infantil (CHF) trabaja en conjunto con el Hospital Infantil de Queensland y el Departamento de Salud Infantil de Queensland para recaudar fondos en beneficio de los niños enfermos",
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
        "Ante un sitio web con bajo rendimiento, surgió la necesidad de desarrollar una experiencia digital capaz de comunicar con mayor claridad el impacto de la fundación, fortalecer la relación con su audiencia e incentivar un mayor volumen de donaciones.",
        "En este tipo de transformaciones, la revisión integral de la arquitectura de la información resulta clave para alinearla con los objetivos institucionales y las necesidades de un público diverso. Priorizar una comunicación clara y un diseño intuitivo permite visibilizar el alcance del trabajo de la organización, optimizar la interacción del usuario y facilitar la contribución de los simpatizantes.",
        "El resultado es una plataforma digital sólida para organizaciones sin fines de lucro, que establece bases escalables para el crecimiento futuro y potencia una conexión más significativa con los donantes, impulsando el apoyo sostenido a la misión."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Gestión intuitiva de contenido" },
        { icon: "", label: "Mejores prácticas de la PFN" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-9` },
        { type: "image", src: `${imgPath}/${slug}-10.webp`, alt: `${slug}-10`, style: "min-[992px]:col-span-2" },
    ],
}