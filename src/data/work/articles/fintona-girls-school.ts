import type { WorkArticleType } from "../types"

const slug = "fintona-girls-school"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const fintonaGirlsSchoolArticle: WorkArticleType = {
    slug: slug,
    title: "Fintona Girls School",
    industry: "Educación",
    category: ['educacion'],
    link: "https://www.fintona.vic.edu.au/",
    intro: "Fintona es una escuela privada para niñas con sede en Victoria con reputación de excelencia en educación desde 1896.",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`,
        },
    },
    paragraphs: [
        "Un panorama educativo cada vez más competitivo impulsó a la escuela a adoptar un nuevo posicionamiento de marca, fundamentando los requisitos para un nuevo sitio web que estuviera más estrechamente alineado con su oferta integral.",
        "Se tuvo en cuenta a los principales públicos: estudiantes, padres y docentes, con recorridos de usuario personalizados para cada cohorte, lo que les permitió acceder a contenido apropiado y relevante. Esto se complementó con secciones específicas del sitio web que comunicaban claramente la propuesta de valor de la escuela en cuanto a academia, comunidad y actividades extracurriculares.",
        "El lanzamiento del sitio web ha proporcionado a la escuela una base creíble para respaldar su actividad de adquisición de estudiantes y ha contribuido a aumentar el perfil en reconocimiento y matriculación."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Experiencia de usuario" },
        { icon: "", label: "Diseño de interfaz de usuario" },
        { icon: "", label: "Comercio electrónico" },
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