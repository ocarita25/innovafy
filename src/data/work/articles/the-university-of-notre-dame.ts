import type { WorkArticleType } from "../types"

const slug = "the-university-of-notre-dame"
const imgPath = `/images/work/articles/${slug}`


export const theUniversityOfNotreDameArticle: WorkArticleType = {
    slug: slug,
    title: "Universidad de Notre Dame",
    category: ['educacion', 'ui-ux'],
    link: "/",
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
        "Con un sitio web anticuado y una serie de experiencias de usuario poco intuitivas, la Universidad solicitó la ayuda de Humaan para redefinir su interfaz de usuario (IU) y experiencia de usuario (UX) en la navegación y las páginas clave del sitio web. Trabajando en estrecha colaboración con el equipo, ayudamos a liderar un proyecto de rediseño para transformar la presencia digital en una que satisficiera las necesidades del público clave en todo el sitio web, ofreciendo a la vez una interfaz más moderna.",
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