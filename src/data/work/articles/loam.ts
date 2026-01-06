import type { WorkArticleType } from "../types"

const slug = "loam"
const imgPath = `/images/work/articles/${slug}`


export const loamArticle: WorkArticleType = {
    slug: slug,
    title: "Loam",
    category: ['featured', 'innovacion'],
    link: "/",
    intro: "Loam es pionero en la tecnología de semillas microbianas que reduce los niveles de CO2 atmosférico y mejora el enriquecimiento del suelo para promover la productividad agrícola.",
    thumbnail: {
        background: {
            type: 'image',
            src: `${imgPath}/background.webp`,
            alt: 'Loam Thumbnail',
        },
        foreground: {
            type: 'image',
            src: `${imgPath}/foreground.webp`,
            alt: 'Loam Thumbnail foreground',
        }
    },
    paragraphs: [
        "El principal desafío de Loam fue comunicar su compleja tecnología a una amplia gama de partes interesadas, todas ellas con distintos grados de experiencia y que buscaban diferentes características y beneficios al interactuar con la tecnología.",
        "Humaan adoptó un enfoque centrado en la audiencia para la experiencia de usuario del sitio, dedicando secciones de la navegación global a grupos específicos para que pudieran acceder por sí mismos a la información relevante. A continuación, se aplicó una combinación de diseño de página intuitivo y composición de contenido, aprovechando el contenido visual y desmitificando los mensajes clave para garantizar que la comunicación adecuada llegara al público objetivo.",
        "Desde su exitoso lanzamiento en Australia, Loam ha visto crecer su presencia en el escenario internacional mientras busca apoyar cuestiones ambientales y de productos alimenticios a nivel mundial."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño de UI y UX" },
        { icon: "", label: "Experiencia visual inmersiva" },
        { icon: "", label: "Desarrollo personalizado" },
    ],
    body: [
        { type: "image", src: `${imgPath}/loam-1.webp`, alt: "loam-1", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/loam-2.webp`, alt: "loam-2" },
        { type: "image", src: `${imgPath}/loam-3.webp`, alt: "loam-3" },
        { type: "image", src: `${imgPath}/loam-4.webp`, alt: "loam-4", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/loam-5.webp`, alt: "loam-5" },
        { type: "image", src: `${imgPath}/loam-6.webp`, alt: "loam-6" },
        { type: "image", src: `${imgPath}/loam-7.webp`, alt: "loam-7", style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/loam-8.webp`, alt: "loam-8" },
        { type: "image", src: `${imgPath}/loam-9.webp`, alt: "loam-9" },
        { type: "image", src: `${imgPath}/loam-10.webp`, alt: "loam-10", style: "min-[992px]:col-span-2" },
    ],
}