import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "pay-to"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const payToArticle: WorkArticleType = {
    slug: slug,
    title: "PayTo",
    industry: "Finanzas",
    category: ['comercial'],
    link: "https://www.auspayplus.com.au/solutions/payto",
    intro: "PayTo es un servicio de pago digital con preautorización que admite transacciones bancarias tanto para comerciantes como para consumidores.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`
        }
    },
    paragraphs: [
        "En contextos de servicios financieros, las plataformas digitales orientadas a pagos y transacciones deben combinar contenido informativo con comunicación educativa, ofreciendo experiencias intuitivas que generen confianza y faciliten la interacción de consumidores y pequeñas empresas.",
        "Diseños minimalistas con iconografía clara permiten comunicar procesos complejos de forma comprensible, mientras que la inclusión de recursos complementarios —como casos de uso, materiales de referencia y preguntas frecuentes— fortalece la comprensión y profundiza la interacción según las necesidades del usuario.",
        "Cuando la estrategia digital integra claridad, accesibilidad y contenidos estructurados, la plataforma puede convertirse en un referente dentro del sector, estableciendo estándares en la comunicación efectiva de productos y servicios financieros."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño responsivo" },
        { icon: "", label: "Diseño de experiencia de usuario" },
        { icon: "", label: "Casos de uso infográficos" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6`, style: "min-[992px]:col-span-2" },
    ],
}