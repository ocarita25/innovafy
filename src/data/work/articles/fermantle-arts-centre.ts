import type { WorkArticleType } from "../types"

const slug = "fermantle-arts-centre"
const imgPath = `/images/work/articles/${slug}`


export const fermantleArtsCentreArticle: WorkArticleType = {
    slug: slug,
    title: "Fremantle Arts Centre",
    industry: "Artes",
    category: ['comunidad-y-proposito'],
    link: "https://wfac.org.au/",
    intro: "El Fremantle Arts Centre (FAC) es una importante institución artística de Australia Occidental que ofrece un rico programa de exposiciones, residencias, cursos de arte, música y eventos.",
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
        "FAC buscaba una experiencia de sitio web que complementara la naturaleza artística y la diversidad de su programa y que le permitiera aprovechar el impactante contenido visual para crear una experiencia trascendente para los visitantes.",
        "Tras una consulta exhaustiva con el equipo de FAC, quedó claro que todas las funciones empresariales debían estar presentes en el sitio web. La comunicación sobre el programa artístico se complementó con espacios dedicados a cursos educativos, expresiones de interés para artistas y una tienda en línea.",
        "El sitio web de FAC continúa apoyando una mezcla de artistas emergentes y establecidos, al tiempo que impulsa las visitas a uno de los distritos más vibrantes de la agitada escena artística de Fremantle."
    ],
    features: [
        { icon: "", label: "Diseño de experiencia de usuario" },
        { icon: "", label: "Diseño responsivo" },
        { icon: "", label: "Sistema de contenido modular" },
        { icon: "", label: "comercio electrónico" },
        { icon: "", label: "Gestión de miembros" },
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