import type { WorkArticleType } from "../types"

const slug = "scitech"
const imgPath = `/images/work/articles/${slug}`


export const scitechArticle: WorkArticleType = {
    slug: slug,
    title: "Scitech",
    industry: "Educacion",
    category: ['educacion', "comunidad-y-proposito"],
    link: "https://www.scitech.org.au/",
    intro: "Scitech es un centro educativo STEM sin fines de lucro con sede en Perth, Australia Occidental. Contactaron con Humaan para crear una presencia en línea duradera que respaldara sus objetivos estratégicos desde el primer día.",
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
        'La plataforma maximiza la participación mediante un diseño adaptable, navegación intuitiva y accesibilidad web, garantizando una experiencia óptima en todos los dispositivos. Campañas interactivas y páginas de destino personalizadas se dirigen a diversos segmentos de audiencia, incluyendo el micrositio "30 años de Scitech", que celebra la trayectoria del centro inspirando el aprendizaje imaginativo. Esta plataforma digital premium respalda la misión de Scitech de promover la exploración y la participación, posicionando a la marca como líder en la educación STEM.',
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Sistema de diseño" },
        { icon: "", label: "Campañas interactivas a medida" },
        { icon: "", label: "Gestión intuitiva de contenido" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8`, style: "min-[992px]:col-span-2" },
    ],
}