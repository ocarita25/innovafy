import type { WorkArticleType } from "../types"

const slug = "calix"
const imgPath = `/images/work/articles/${slug}`

export const calixArticle: WorkArticleType = {
    slug: slug,
    title: "Calix",
    industry: "Tecnología ambiental",
    category: ['ui-ux'],
    link: "https://calix.global/",
    intro: "Calix is solving global challenges in industrial decarbonisation and sustainability",
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
        "Como resultado de una actualización de marca y un cambio en las prioridades de la industria, surgió la necesidad de replantear la experiencia digital para posicionar a la organización como líder tecnológico y socio estratégico en descarbonización y sostenibilidad.",
        "En este tipo de transformaciones, la redefinición de la experiencia UI/UX debe alinearse tanto con los objetivos del negocio como con las expectativas de una audiencia diversa, asegurando claridad en la propuesta de valor y coherencia en cada punto de interacción."
    ],
    // paragraphs: [
    //     "As a result of a brand refresh and a change in industry priority, Calix was looking to reimagine their website experience to position itself as a leading technology company and a trusted partner in decarbonisation and sustainability..",
    //     "We worked closely with the Calix team to imagine a new website experience (UI/UX) that would meet the needs of the business and the diverse audience.",
    // ],
    features: [
        { icon: "", label: "Digital Strategy" },
        { icon: "", label: "UI & UX Design" },
        { icon: "", label: "Design Consultation" },
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