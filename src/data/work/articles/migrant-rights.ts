import type { WorkArticleType } from "../types"

const slug = "migrant-rights"
const imgPath = `/images/work/articles/${slug}`


export const migrantRightsArticle: WorkArticleType = {
    slug: slug,
    title: "Derechos de los migrantes",
    category: ['sin-fines-de-lucro'],
    link: "/",
    intro: "Promover los derechos de los trabajadores migrantes.",
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
        "Migrant Rights tiene como objetivo crear conciencia sobre la difícil situación de los trabajadores migrantes en el Medio Oriente.",
        "Desde el lanzamiento del sitio en 2013, hemos estado profundamente involucrados en la estrategia web de toda la organización, apoyando sus objetivos a través de un desarrollo altamente personalizado y un diseño digital atractivo.",
        "Completo con campañas interactivas y funciones multilingües, este sitio web es una herramienta única para llegar eficazmente a una amplia audiencia cautiva. Contribuye brillantemente al objetivo de impulsar el cambio social mediante una experiencia digital atractiva."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño editorial" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Ilustración y animación" },
        { icon: "", label: "Infografías interactivas" },
        { icon: "", label: "Multilingüe (árabe e inglés)" },
        { icon: "", label: "Visualizaciones de mapas" },
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