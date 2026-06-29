import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "grupo-genera"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const grupoGeneraArticle: WorkArticleType = {
    slug: slug,
    title: "Grupo Genera",
    industry: "Finanzas",
    category: ['comercial'],
    link: "https://generafactoring.pe/",
    intro: "El Grupo Genera es una empresa creada para conectar oportunidades y necesidades entre inversionistas y empresarios. A través de su Fondo de Factoring, canaliza capital hacia micro, pequeñas y medianas empresas mediante el adelanto de pago de facturas, facilitando liquidez y dinamizando el crecimiento empresarial.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Thumbnail background',
        },
        foreground: {
            type: 'video',
            src: `${videoPath}/foreground.mp4`,
        }
    },
    paragraphs: [
        "Llevamos 5 años trabajando con ellos, desde sus inicios confiaron en nosotros para llevar a cabo el branding de su empresa, el diseño de sus brochure, así como el desarrollo de su página web.",
        "Año tras año reconfirman su confianza solicitando nuestra asesoría en marketing digital.",
    ],
    features: [
        { icon: "", label: "Diseño gráfico" },
        { icon: "", label: "Desarrollo Web" },
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