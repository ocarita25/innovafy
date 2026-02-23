import type { WorkArticleType } from "../types"

const slug = "colegio-escoces-melbourne"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const colegioEscocesMelbourneArticle: WorkArticleType = {
    slug: slug,
    title: "Colegio Escocés de Melbourne",
    industry: "Educacion",
    category: ['featured', 'educacion'],
    link: "https://www.scotch.vic.edu.au/",
    intro: "Una presencia digital inspirada para una de las escuelas independientes para niños más antiguas y prestigiosas de Australia.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'PIQUE Thumbnail',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "Como parte de un proceso continuo de renovación de marca, surgió la necesidad de replantear la experiencia digital de la institución. Con más de 170 años de historia, resultaba esencial que la nueva plataforma reflejara tanto su legado como su enfoque contemporáneo orientado a una audiencia digital moderna. El sitio existente, operativo desde 2012, ya no respondía a las expectativas y dinámicas cambiantes de la comunidad educativa.",
        "En contextos de transformación institucional, el rediseño estratégico del ecosistema digital debe equilibrar tradición e innovación, apoyándose en una metodología centrada en la experiencia de usuario (UX). Una solución a medida permite optimizar la navegación, reforzar la identidad renovada y construir una plataforma alineada con las ambiciones de crecimiento y proyección futura de la organización."
    ],
    // paragraphs: [
    //     "Como parte de su continua renovación de marca, Scotch College recurrió a Humaan para que le ayudara a reimaginar su sitio web. Con una rica historia de más de 170 años, era crucial que su nueva experiencia en línea reflejara tanto su legado como su enfoque vanguardista para el público digital moderno. El sitio web existente, aunque funcional, llevaba en funcionamiento desde 2012 y ya no satisfacía las necesidades cambiantes de la comunidad escolar. Nuestro equipo diseñó una solución a medida, aprovechando nuestra galardonada metodología de proyecto y experiencia de usuario (UX), para crear un sitio web que mejora la experiencia del usuario, se alinea con la marca renovada y respalda las ambiciones de la universidad de cara al futuro.",
    // ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Gestión intuitiva de contenidos" },
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