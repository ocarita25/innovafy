import type { WorkArticleType } from "../types"

const slug = "fundacion-nacional-cancer-mama"
const imgPath = `/images/work/articles/${slug}`

export const fundacionNacionalCancerMamaArticle: WorkArticleType = {
    slug: slug,
    title: "Fundación Nacional del Cáncer de Mama",
    category: ['featured', "sin-fines-de-lucro"],
    link: "/",
    intro: "La Fundación Nacional del Cáncer de Mama (NBCF) es la organización sin fines de lucro líder de Australia que financia investigaciones de primer nivel sobre el cáncer de mama.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'PIQUE Thumbnail',
        }
    },
    paragraphs: [
        "A pesar del fuerte conocimiento de la marca y la credibilidad en la industria, los datos en torno a su sitio web existente apuntaban a métricas de bajo rendimiento y una disminución en el volumen y el valor de las donaciones en línea.",
        "Este objetivo organizativo vital fue fundamental para el nuevo sitio web. La nueva experiencia se basó en historias humanas emotivas, una comunicación enfocada y una experiencia de usuario eficaz en todo momento. Se diseñaron recorridos claros y señales de comportamiento sutiles para guiar a los grupos de audiencia y fomentar las donaciones en la plataforma dedicada.",
        "El impacto del nuevo sitio web ha ayudado a financiar más investigaciones y ha acercado a NBCF a su visión de cero muertes por cáncer de mama."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Contenido modular" },
        { icon: "", label: "Gestión intuitiva de contenidos" },
        { icon: "", label: "Optimización de la conversión" },
    ],
    body: [
        { type: "image", src: `${imgPath}/fundacion-nacional-1.webp`, alt: "fundacion-nacional-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-2.webp`, alt: "fundacion-nacional-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-3.webp`, alt: "fundacion-nacional-3" },
        { type: "image", src: `${imgPath}/fundacion-nacional-1.webp`, alt: "fundacion-nacional-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-2.webp`, alt: "fundacion-nacional-5", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-3.webp`, alt: "fundacion-nacional-6", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fundacion-nacional-1.webp`, alt: "fundacion-nacional-7" },
        { type: "image", src: `${imgPath}/fundacion-nacional-2.webp`, alt: "fundacion-nacional-8" },
        { type: "image", src: `${imgPath}/fundacion-nacional-3.webp`, alt: "fundacion-nacional-9", style: "min-[992px]:col-span-2" },
    ],
}