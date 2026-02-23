import type { WorkArticleType } from "../types"

const slug = "space-draft"
const imgPath = `/images/work/articles/${slug}`


export const spaceDraftArticle: WorkArticleType = {
    slug: slug,
    title: "SpaceDraft",
    industry: "Start-up",
    category: ['innovacion'],
    link: "https://spacedraft.com/",
    intro: "Planifica cualquier cosa y compártela en todas partes.",
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
        "Las plataformas digitales para creadores buscan simplificar la comunicación de procesos complejos, ofreciendo herramientas intuitivas que permiten gestionar desde producciones experienciales y videojuegos hasta planificación de eventos o locaciones, facilitando la claridad y eficiencia en la transmisión de ideas.",
        "Un enfoque centrado en la experiencia de usuario y en la narrativa visual puede desafiar los estándares tradicionales de los productos SaaS, combinando iconografía intuitiva, interacciones atractivas y diseño brillante para reforzar los mensajes clave y mejorar la comprensión de los proyectos por parte de la audiencia.",
    ],
    // paragraphs: [
    //     "SpaceDraft es una emocionante startup con sede en Australia Occidental que ofrece herramientas sencillas que ayudan a los creadores a comunicar lo complejo. Desde producciones experienciales y videojuegos hasta la planificación de bodas y la planificación de locaciones, SpaceDraft proporciona instrucciones sencillas e intuitivas que permiten a los creadores comunicar lo complejo con claridad.",
    //     "Desafiamos la ortodoxia de los productos SaaS en la categoría de logística creando un estilo visual atractivo y brillante con una iconografía intuitiva que respaldaba los mensajes y las afirmaciones clave. La vitalidad de la marca se vio respaldada por una experiencia de usuario inteligente e interacciones atractivas que reforzaron la experiencia que el público puede ofrecer para explicar su proyecto.",
    // ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de experiencia de usuario" },
        { icon: "", label: "Diseño responsivo" },
        { icon: "", label: "Gestión de contenidos" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-9` },
    ],
}