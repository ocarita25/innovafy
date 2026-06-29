import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "rychiger"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const rychigerArticle: WorkArticleType = {
    slug: slug,
    title: "Rychiger",
    industry: "Fabricación",
    category: ['comercial', 'ui-ux'],
    link: "https://www.rychiger.com/",
    intro: "Rychiger AG es un fabricante global de maquinaria de envasado de primera calidad con especialidades en los sectores de alimentos y bebidas, atención médica y venta minorista de alimentos.",
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
        "En sectores industriales tradicionales, la redefinición de la presencia digital puede servir como catalizador para mostrar innovación y liderazgo, transformando la percepción de la marca frente a audiencias B2B y profesionales del sector.",
        "La estrategia digital se centra en combinar la excelencia técnica y las capacidades avanzadas de los productos con una arquitectura de navegación clara y lógica, facilitando la comprensión de especificaciones complejas y promoviendo una interacción efectiva con la gama de soluciones disponibles.",
        "Cuando la experiencia digital integra claridad, funcionalidad y posicionamiento estratégico, la plataforma contribuye a fortalecer la ventaja competitiva de la empresa y consolidar su liderazgo tanto ante clientes como ante potenciales empleados."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Diseño basado en la información" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7` },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-9`, style: "min-[992px]:col-span-2" },
    ],
}