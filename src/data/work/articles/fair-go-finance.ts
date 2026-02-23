import type { WorkArticleType } from "../types"

const slug = "fair-go-finance"
const imgPath = `/images/work/articles/${slug}`


export const fairGoFinanceArticle: WorkArticleType = {
    slug: slug,
    title: "Fair Go Finance",
    industry: "Finanzas",
    category: ['featured', 'comercial'],
    link: "https://www.fairgofinance.com.au/",
    intro: "Fair Go Finance es un proveedor líder de préstamos al consumidor en el mercado de crédito cercano a la primera categoría, comprometido a mejorar la salud financiera de sus clientes.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'FairGoFinance Thumbnail',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'FairGoFinance Thumbnail Foreground',
        }
    },
    paragraphs: [
        "Como parte de una importante evolución del posicionamiento y crecimiento de su marca, Fair Go Finance contrató a Humaan para reimaginar su sitio web orientado al consumidor con el fin de atraer y convertir mejor a las audiencias en solicitudes de préstamos y, en consecuencia, en clientes.",
        "Al trabajar en estrecha colaboración con el equipo interno después de un profundo proceso de descubrimiento, imaginamos una experiencia atractiva e informada para los usuarios, que elevaría la marca, mejoraría las conversiones y establecería una base sólida para el crecimiento futuro de la plataforma.",
        "El resultado es un sitio web líder en la industria que impulsa la participación y convierte a los visitantes en nuevos clientes."
    ],
    features: [
        { icon: "", label: "Investigación de UX" },
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "CMS sin cabeza" },
        { icon: "", label: "Desarrollo personalizado" },
    ],
    body: [
        { type: "image", src: `${imgPath}/fair-go-finance-1.webp`, alt: "fair-go-finance-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fair-go-finance-2.webp`, alt: "fair-go-finance-2" },
        { type: "image", src: `${imgPath}/fair-go-finance-3.webp`, alt: "fair-go-finance-3" },
        { type: "image", src: `${imgPath}/fair-go-finance-4.webp`, alt: "fair-go-finance-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fair-go-finance-5.webp`, alt: "fair-go-finance-5" },
        { type: "image", src: `${imgPath}/fair-go-finance-6.webp`, alt: "fair-go-finance-6" },
        { type: "image", src: `${imgPath}/fair-go-finance-7.webp`, alt: "fair-go-finance-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/fair-go-finance-8.webp`, alt: "fair-go-finance-8" },
        { type: "image", src: `${imgPath}/fair-go-finance-9.webp`, alt: "fair-go-finance-9" },
        { type: "image", src: `${imgPath}/fair-go-finance-10.webp`, alt: "fair-go-finance-10", style: "min-[992px]:col-span-2" },
    ],
}