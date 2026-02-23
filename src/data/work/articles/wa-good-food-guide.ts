import type { WorkArticleType } from "../types"

const slug = "wa-good-food-guide"
const imgPath = `/images/work/articles/${slug}`


export const waGoodFoodGuideArticle: WorkArticleType = {
    slug: slug,
    title: "WA Good Food Guide",
    industry: "Hotelería y Turismo",
    category: ['comercial'],
    link: "https://wagoodfoodguide.com/",
    intro: "Humaan se asoció con la Guía de Buena Comida de Australia Occidental para transformar su prestigiosa publicación impresa en una experiencia digital gourmet, celebrando los 50 mejores restaurantes de Australia Occidental. El nuevo sitio web fue diseñado para atraer a los usuarios con una estética elegante y minimalista, permitiendo que la vibrante comida y las imágenes del lugar sean el centro de atención.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Thumbnail foreground',
        }
    },
    paragraphs: [
        "El estratégico diseño en blanco y negro, inspirado en maquetaciones editoriales, garantiza un lienzo visualmente neutro que resalta el atractivo único de cada restaurante. Con atractivas animaciones y una legibilidad cuidada, el sitio anima a los usuarios a explorar el panorama culinario de Australia Occidental de forma intuitiva e inmersiva.",
        "Tuvimos en cuenta el alto estándar establecido por los orígenes de la publicación en papel. Gracias a su flexibilidad, conocimiento del contexto y facilidad de uso, el nuevo sitio web de la Guía de Buena Alimentación de Australia Occidental ofrece calidad y prestigio, perfectamente adaptado del formato impreso al digital.",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Diseño de cuadrícula flexible" },
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