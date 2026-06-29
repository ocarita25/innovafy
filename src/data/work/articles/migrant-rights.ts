import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "migrant-rights"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const migrantRightsArticle: WorkArticleType = {
    slug: slug,
    title: "Derechos de los migrantes",
    industry: "Sin fines de lucro",
    category: ['sin-fines-de-lucro'],
    link: "https://www.mrrors.org/",
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
        "Iniciativas orientadas a la defensa de los derechos laborales buscan generar conciencia sobre la situación de los trabajadores migrantes en contextos complejos, utilizando plataformas digitales como canal principal de información y movilización.",
        "En este tipo de organizaciones, una estrategia web sostenida en el tiempo permite alinear el desarrollo tecnológico y el diseño digital con los objetivos institucionales, asegurando adaptabilidad, personalización y una comunicación efectiva hacia públicos diversos.",
        "La incorporación de campañas interactivas y funcionalidades multilingües transforma el sitio en una herramienta estratégica para amplificar el alcance, fortalecer la incidencia y contribuir de manera significativa a la promoción del cambio social a través de experiencias digitales accesibles y atractivas."
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