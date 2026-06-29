import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "workpac"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const workpacArticle: WorkArticleType = {
    slug: slug,
    title: "WorkPac",
    industry: "Reclutamiento",
    category: ['comercial'],
    link: "https://www.workpac.com/",
    intro: "WorkPac es una empresa líder en selección de personal, especializada en gestión de personal, gestión de proyectos, capacitación y soluciones tecnológicas para los sectores de recursos, construcción, industria, salud y asistencia social.",
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
        "Cuando una organización busca consolidar múltiples sitios web fragmentados en una experiencia unificada, el objetivo es mejorar la eficiencia, reducir la complejidad administrativa y ofrecer una experiencia de usuario consistente.",
        "Un enfoque estratégico de diseño y desarrollo permite crear una plataforma en línea integral y escalable que soporte diversas áreas operativas sin comprometer la coherencia y la usabilidad para los usuarios.",
        "Plataformas bien concebidas reflejan las ambiciones de la marca, combinando alto rendimiento, facilidad de uso y una experiencia atractiva que respalda el crecimiento y la percepción positiva de la organización.",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Planificación de la arquitectura de la información" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Creación, visualización y búsqueda de ofertas de empleo" },
        { icon: "", label: "Integraciones de servicios de terceros" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
    ],
}