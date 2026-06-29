import type { WorkArticleType } from "../types"
import { imgCLOUD, vidCLOUD } from "@/constants/resources"

const slug = "to-cusco"
const imgPath = `${imgCLOUD}/work/articles/${slug}`
const videoPath = `${vidCLOUD}/work/articles/${slug}`

export const toCuscoArticle: WorkArticleType = {
    slug: slug,
    title: "To Cusco",
    industry: "Turismo",
    category: ['comercial', 'ui-ux', 'comunidad-y-proposito'],
    link: "https://pointandina.pe/",
    intro: "To Cusco es una empresa cusqueña con más de 20 años de experiencia en el sector turismo, especializada en mostrar la riqueza cultural y natural de los destinos más emblemáticos del territorio. Como orgullosos embajadores locales, ofrecen experiencias únicas, optimizando el tiempo y la inversión de cada viajero para garantizar una aventura auténtica y bien planificada.",
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
        "Una empresa que busca diferenciarse de su competencia debe contar una imagen original, auténtica, pero que a la vez sea amigable y si hablamos de turismo, el Perú es uno de los mejores países para visitor, así debíamos demostrarlo en el Diseño que nos encargaron para promocionar el turismo en la Cusco.",
        "Una página web que principalmente iba dirigida a turistas extranjeros.",
    ],
    features: [
        { icon: "", label: "E-Commerce" },
        { icon: "", label: "Diseño Web" },
        { icon: "", label: "UI/UX" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4` },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
    ],
}