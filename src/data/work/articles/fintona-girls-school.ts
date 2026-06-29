import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "fintona-girls-school"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

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
        "En un entorno educativo cada vez más competitivo, la evolución del posicionamiento de marca suele exigir una redefinición integral de la presencia digital, asegurando una alineación coherente con la propuesta académica y formativa de la institución.",
        "En este tipo de transformaciones, resulta fundamental segmentar a los públicos clave —estudiantes, padres y docentes— mediante recorridos de usuario diferenciados que faciliten el acceso a contenido pertinente. Esto puede complementarse con secciones específicas que articulen con claridad la propuesta de valor en términos de excelencia académica, comunidad y actividades extracurriculares.",
        "Cuando la estrategia digital respalda de manera efectiva el posicionamiento institucional, el lanzamiento de la nueva plataforma contribuye a fortalecer la credibilidad de la marca y a potenciar los indicadores de reconocimiento y matriculación."
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