import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "wa-good-food-guide"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const waGoodFoodGuideArticle: WorkArticleType = {
    slug: slug,
    title: "WA Good Food Guide",
    industry: "Hotelería y Turismo",
    category: ['comercial'],
    link: "https://wagoodfoodguide.com/",
    intro: "Una prestigiosa guía gastronómica buscaba transformar su publicación impresa en una experiencia digital atractiva, destacando los mejores restaurantes y permitiendo que la comida y los espacios se conviertan en el centro de la atención a través de un diseño elegante y minimalista.",
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
        "Un diseño estratégico en blanco y negro, inspirado en maquetaciones editoriales, crea un lienzo visual neutro que resalta los elementos clave y permite que el contenido destaque de manera atractiva. Animaciones cuidadas y tipografía legible fomentan la exploración intuitiva e inmersiva del contenido.",
        "Al trasladar experiencias tradicionales del formato impreso al digital, la flexibilidad, la claridad y la usabilidad del sitio aseguran que se mantenga la calidad y el prestigio del contenido, ofreciendo una experiencia coherente y atractiva para los usuarios.",
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