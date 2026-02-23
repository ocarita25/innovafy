import type { WorkArticleType } from "../types"

const slug = "telethon"
const imgPath = `/images/work/articles/${slug}`


export const telethonArticle: WorkArticleType = {
    slug: slug,
    title: "Telethon",
    industry: "Caridad",
    category: ['sin-fines-de-lucro'],
    link: "https://www.telethon7.com/",
    intro: "Una de las organizaciones benéficas más emblemáticas de Australia Occidental, nos enorgulleció asociarnos con Teletón para crear un nuevo sitio web que mejore sus esfuerzos de recaudación de fondos para los niños necesitados. Con un enfoque en la participación de la audiencia durante el fin de semana de alto tráfico del Teletón, el sitio fue diseñado para ser intuitivo, receptivo y accesible desde cualquier dispositivo",
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
        "Plataformas digitales con creadores de páginas modulares permiten a los equipos gestionar contenido de manera flexible y mantener coherencia en el diseño, adaptándose a diversas necesidades de marketing a lo largo del año.",
        "Un diseño atractivo y accesible fomenta la exploración, mejora la interacción y potencia la conversión, respaldando la misión de la organización y ofreciendo una experiencia de usuario de alta calidad.",
    ],
    // paragraphs: [
    //     "El sitio web cuenta con un creador de páginas modular, lo que permite al equipo de Teletón gestionar el contenido fácilmente y mantener un diseño uniforme. Su infraestructura flexible se adapta a diversas necesidades de marketing durante todo el año. Un diseño atractivo y amigable fomenta la exploración y aumenta las conversiones, ayudando a Teletón a conectar con su audiencia durante todo el año.",
    //     "Esta plataforma renovada fortalece la presencia digital de Teletón, garantizando una experiencia de usuario premium que respalda su misión de mejorar la vida de los niños en el futuro.",
    // ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Sistema de contenido modular" },
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
    ],
}