import { imgCLOUD } from "@/constants/resources";
import type { WorkArticleType } from "../types";

const slug = "chaleit"
const imgPath = `${imgCLOUD}/work/articles/${slug}`

export const chaleitArticle: WorkArticleType = {
    slug: slug,
    title: "Chaleit",
    industry: "Cyberseguridad",
    isFeatured: true,
    category: ['featured', 'comercial'],
    link: "https://chaleit.com/",
    intro: "Una empresa líder en ciberseguridad buscaba renovar integralmente su marca y transformar su sitio web para alinear su presencia online con sus capacidades y experiencia en constante evolución, fortaleciendo la conexión con clientes y socios.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Chaleit Thumbnail Background',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Chaleit Thumbnail Foreground',
        }
    },
    paragraphs: [
        "El reto consistía en transformar una marca relativamente joven en una presencia sofisticada y referente en su sector, capaz de atraer a los usuarios, fortalecer su posicionamiento y diferenciarse dentro de un entorno altamente competitivo.",
        "En procesos de esta naturaleza, una identidad visual renovada y un lenguaje de diseño coherente —flexible y dinámico— resultan fundamentales, integrándose de manera orgánica en la estructura del sitio. La adopción de una arquitectura headless, apoyada en soluciones como Payload CMS, permite una gestión de contenido personalizada y una experiencia digital rica e intuitiva en torno a los servicios y el liderazgo intelectual de la marca.",
        "El resultado es una presencia digital contemporánea y de alto impacto que eleva la percepción de marca y potencia la interacción con su audiencia."
    ],
    features: [
        { icon: "", label: "Rebranding y reposicionamiento" },
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UI y UX" },
        { icon: "", label: "Framework Headless con React.js y Next.js" },
        { icon: "", label: "CMS Payload" },
    ],
    body: [
        { type: 'image', src: `${imgPath}/chaleit-1.webp`, alt: "chaleit-1", style: 'min-[992px]:col-span-2' },
        { type: 'image', src: `${imgPath}/chaleit-2.webp`, alt: "chaleit-2" },
        { type: 'image', src: `${imgPath}/chaleit-3.webp`, alt: "chaleit-3" },
        { type: 'image', src: `${imgPath}/chaleit-4.webp`, alt: "chaleit-4", style: 'min-[992px]:col-span-2' },
        { type: 'image', src: `${imgPath}/chaleit-5.webp`, alt: "chaleit-5" },
        { type: 'image', src: `${imgPath}/chaleit-6.webp`, alt: "chaleit-6" },
        { type: 'image', src: `${imgPath}/chaleit-7.webp`, alt: "chaleit-7", style: 'min-[992px]:col-span-2' },
        { type: 'image', src: `${imgPath}/chaleit-8.webp`, alt: "chaleit-8" },
        { type: 'image', src: `${imgPath}/chaleit-9.webp`, alt: "chaleit-9" },
        { type: 'image', src: `${imgPath}/chaleit-10.webp`, alt: "chaleit-10", style: 'min-[992px]:col-span-2' },
    ]
}