import type { WorkArticleType } from "../types"

const slug = "locimo"
const imgPath = `/images/work/articles/${slug}`


export const locimoArticle: WorkArticleType = {
    slug: slug,
    title: "Locimo",
    category: ['innovacion'],
    link: "/",
    intro: "Locimo es una startup que conecta a los mejores trabajadores del sector minorista y hotelero con empleadores locales.",
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
        "Desde sus inicios, hemos colaborado estrechamente con el equipo de Locimo para hacer realidad su visión. Desde la marca y la identidad hasta el diseño y la construcción de la compleja plataforma, hemos ayudado a la empresa desde la idea inicial hasta su lanzamiento, y seguimos apoyando su evolución y crecimiento.",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UX" },
        { icon: "", label: "Aplicación web a medida" },
        { icon: "", label: "Desarrollo de Laravel" },
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