import type { WorkArticleType } from "../types"

const slug = "unios-lx-configurator"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const uniosLxConfiguratorArticle: WorkArticleType = {
    slug: slug,
    title: "Unios LX Configurator",
    industry: "Iluminación",
    category: ['innovacion'],
    link: "https://lxconfigurator.unios.com/",
    intro: "Unios fabrica soluciones de diseño de iluminación de alta gama para clientes de todo el mundo. ",
    thumbnail: {
        background: {
            type: 'video',
            src: `${videoPath}/background.mp4`,
        },
    },
    paragraphs: [
        "El Configurador Unios LX Infinity es una aplicación web ligera y de alto rendimiento que permite a los clientes crear su propio producto a partir de miles de configuraciones posibles, sin problemas y en cuestión de segundos. Diseñada como una aplicación web personalizada, esta intuitiva herramienta sustituye un tedioso proceso manual y permite a los clientes de Unios diseñar y pedir fácilmente sus productos según especificaciones detalladas. Tras su intuitiva interfaz de usuario se encuentra una amplia biblioteca de componentes y un motor de código complejo para manipularlos sobre la marcha.",
        "El resultado es una aplicación web ágil y altamente optimizada que ofrece una experiencia de usuario intuitiva y atractiva. Este innovador producto es solo el último desarrollo que otorga a nuestro cliente con visión de futuro una ventaja competitiva en su mercado.",
    ],
    features: [
        { icon: "", label: "Especificación de producto compleja" },
        { icon: "", label: "Aplicación JavaScript a medida" },
        { icon: "", label: "Componentes interactivos" },
        { icon: "", label: "Generación de PDF de productos" },
    ],
    body: [
        { type: "video", src: `${videoPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
    ],
}