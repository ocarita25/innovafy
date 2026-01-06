import type { WorkArticleType } from "../types"

const slug = "georgiou-group"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const georgiouGroupArticle: WorkArticleType = {
    slug: slug,
    title: "Grupo Georgiou",
    category: ['comercial'],
    link: "/",
    intro: "Georgiou Group es una empresa líder en construcción civil y de edificación que ofrece una amplia gama de servicios de ingeniería y proyectos de infraestructura en toda Australia.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Grupo Georgiou Thumbnail',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Grupo Georgiou Thumbnail Foreground',
        }
    },
    paragraphs: [
        "En estrecha colaboración con el equipo, imaginamos un enfoque moderno para un sitio web corporativo que impulsara su crecimiento continuo y reforzara sus capacidades. Con un enfoque continuo en la contratación, el nuevo sitio web destaca positivamente las carreras y oportunidades en Georgiou, en línea con la visión y los valores de la empresa. El resultado es un sitio web dinámico que refleja la identidad de la marca, fortalece las iniciativas de contratación, demuestra la capacidad y sienta las bases para un crecimiento continuo..",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Gestión intuitiva de contenidos" },
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
    ],
}