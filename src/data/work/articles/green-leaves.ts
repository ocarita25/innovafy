import type { WorkArticleType } from "../types"

const slug = "green-leaves"
const imgPath = `/images/work/articles/${slug}`


export const greenLeavesArticle: WorkArticleType = {
    slug: slug,
    title: "Green Leaves",
    category: ['educacion'],
    link: "/",
    intro: "Green Leaves Early Learning se acercó a Humaan para crear una plataforma digital unificada que consolidaría sus centros bajo una marca maestra.",
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
        "En estrecha colaboración con el cliente, propusimos una estrategia que reflejara el cuidado, la profesionalidad y la innovación que Green Leaves ofrece en educación temprana, con un diseño fresco y contemporáneo que transmite alegría y diversión a través de colores vibrantes y animaciones. La interfaz intuitiva garantiza un acceso a la información sencillo e intuitivo, facilitando el proceso tanto para padres como para niños.",
        "Esta nueva presencia digital permite a Green Leaves impulsar su marca, ofreciendo una plataforma en línea clara, atractiva y eficaz que refleja su compromiso con la excelencia en la educación temprana. Con un diseño cuidado y un desarrollo sólido, el sitio web de Green Leaves establece un nuevo estándar en experiencias digitales para el aprendizaje temprano.",
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Buscador de ubicaciones interactivo" },
        { icon: "", label: "Gestión intuitiva de contenido" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7`, style: "min-[992px]:col-span-2" },
    ],
}