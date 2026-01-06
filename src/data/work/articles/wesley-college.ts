import type { WorkArticleType } from "../types"

const slug = "wesley-college"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const wesleyCollegeArticle: WorkArticleType = {
    slug: slug,
    title: "Wesley College",
    category: ['educacion'],
    link: "/",
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
        "Wesley, una escuela privada líder con más de 1400 estudiantes, se acercó a nosotros para modernizar su presencia digital para representar la calidad, la comunidad y la excelencia de la escuela.",
        "Con el objetivo de aumentar las inscripciones de estudiantes, imaginamos una interfaz de usuario contemporánea que ofrece una experiencia de usuario muy atractiva y fomenta la exploración.",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Mejores prácticas educativas" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Gestión intuitiva de contenido" },
        { icon: "", label: "Campañas digitales" },
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