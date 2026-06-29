import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "wesley-college"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const wesleyCollegeArticle: WorkArticleType = {
    slug: slug,
    title: "Wesley College",
    industry: "Educación",
    category: ['educacion'],
    link: "https://www.wesley.wa.edu.au/",
    intro: "Atreviéndonos y haciendo",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`,
        }
    },
    paragraphs: [
        "Cuando una institución educativa busca modernizar su presencia digital, es fundamental que la plataforma refleje la calidad, la comunidad y la excelencia de la escuela, al tiempo que ofrece una experiencia atractiva para todos los usuarios.",
        "Un diseño de interfaz contemporáneo y una experiencia de usuario intuitiva fomentan la exploración, mejoran la interacción y respaldan objetivos clave como la captación de nuevos estudiantes.",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Mejores prácticas educativas" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Gestión intuitiva de contenido" },
        { icon: "", label: "Campañas digitales" },
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