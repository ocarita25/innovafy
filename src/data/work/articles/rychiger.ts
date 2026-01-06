import type { WorkArticleType } from "../types"

const slug = "rychiger"
const imgPath = `/images/work/articles/${slug}`


export const rychigerArticle: WorkArticleType = {
    slug: slug,
    title: "Rychiger",
    category: ['comercial', 'ui-ux'],
    link: "/",
    intro: "Rychiger AG es un fabricante global de maquinaria de envasado de primera calidad con especialidades en los sectores de alimentos y bebidas, atención médica y venta minorista de alimentos.",
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
        "Tras una búsqueda global, la empresa suiza seleccionó a Humaan para transformar su presencia digital y redefinir las posibilidades dentro de un sector tradicionalmente convencional. Humaan se encargaría de la Estrategia, el Diseño y la Dirección Creativa, mientras que un socio local se encargaría del desarrollo.",
        "La innovación fue fundamental en la estrategia del sitio web, donde el equipo de UX y diseño de Humaan aprovechó tanto la excelencia técnica del equipo de ingeniería de Rychiger como las avanzadas capacidades de los productos de maquinaria. Esto se basó en una estructura de navegación clara y lógica que permitió al público B2B interactuar con la gama de productos y comprender en profundidad las especificaciones de la maquinaria.",
        "El lanzamiento del nuevo sitio web ha permitido a Rychiger mantenerse por delante de la competencia y forjar su posición como líder en ingeniería mecánica tanto para los clientes como para los posibles empleados."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Diseño basado en la información" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-7` },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-9`, style: "min-[992px]:col-span-2" },
    ],
}