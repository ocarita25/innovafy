import type { WorkArticleType } from "../types";

const slug = "chaleit"
const imgPath = `/images/work/articles/${slug}`


export const chaleitArticle: WorkArticleType = {
    slug: slug,
    title: "Chaleit",
    industry: "Cyberseguridad",
    isFeatured: true,
    category: ['featured', 'comercial'],
    link: "https://chaleit.com/",
    intro: "Una empresa líder en ciberseguridad buscaba renovar integralmente su marca y transformar su sitio web para alinear su presencia online con sus capacidades y experiencia en constante evolución, fortaleciendo la conexión con clientes y socios.",
    // intro: "Chaleit, empresa líder en ciberseguridad, haciendo una allianza comercial con Inova logro una renovación integral de su marca y la transformación de su sitio web, con el fin de conectar de forma más eficaz su presencia online con su experiencia y capacidades en constante evolución.",
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
    // paragraphs: [
    //     "El proyecto se centró en convertir una marca relativamente joven en una presencia sofisticada y líder en el sector, atrayendo a los usuarios, fortaleciendo su posicionamiento y diferenciando a Chaleit de un panorama competitivo saturado.",
    //     "En el corazón de esta transformación se encuentra una identidad visual renovada y un lenguaje de diseño asociado: flexible, dinámico y perfectamente integrado en la estructura del sitio. El sitio web se basa en una arquitectura headless que utiliza Payload CMS, lo que ofrece una experiencia de contenido totalmente personalizada y una experiencia rica e intuitiva a través de los servicios y el liderazgo intelectual de Chaleit.",
    //     "El resultado es una presencia digital contemporánea y de alto impacto que eleva la marca e interactúa con su público."
    // ],
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