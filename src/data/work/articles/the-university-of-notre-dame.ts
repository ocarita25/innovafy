import type { WorkArticleType } from "../types"
import { imgCLOUD } from "@/constants/resources"

const slug = "the-university-of-notre-dame"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const theUniversityOfNotreDameArticle: WorkArticleType = {
    slug: slug,
    title: "Universidad de Notre Dame",
    industry: "Educación",
    category: ['educacion', 'ui-ux'],
    link: "https://www.notredame.edu.au/",
    intro: "La Universidad de Notre Dame Australia es una universidad católica nacional con campus en Australia Occidental y Nueva Gales del Sur.",
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
        "Cuando un sitio web presenta una interfaz anticuada y experiencias de usuario poco intuitivas, un rediseño estratégico puede transformar la presencia digital. El enfoque se centra en mejorar la navegación, las páginas clave y la coherencia general de la experiencia, alineando la plataforma con las necesidades del público objetivo.",
        "La modernización de la interfaz y la optimización de la experiencia de usuario permiten a los visitantes interactuar de manera más efectiva con el contenido, facilitando el acceso a información relevante y reforzando la percepción de la institución o marca.",
    ],
    features: [
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Arquitectura de la información" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
        { icon: "", label: "Soporte de desarrollo" },
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