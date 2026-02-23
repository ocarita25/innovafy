import type { WorkArticleType } from "../types"

const slug = "childrens-hospital-foundation"
const imgPath = `/images/work/articles/${slug}`


export const childrensHospitalFoundationArticle: WorkArticleType = {
    slug: slug,
    title: "Fundación del Hospital Infantil",
    industry: "Sin fines de lucro",
    category: ['sin-fines-de-lucro'],
    link: "https://childrens.org.au/",
    intro: "La Fundación del Hospital Infantil (CHF) trabaja en conjunto con el Hospital Infantil de Queensland y el Departamento de Salud Infantil de Queensland para recaudar fondos en beneficio de los niños enfermos",
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
        "Con un sitio web de bajo rendimiento, CHF se asoció con Humaan para crear una experiencia digital que comunicara de manera efectiva el impacto de la fundación, involucrara mejor a su audiencia e inspirara mayores donaciones.",
        "El enfoque de Humaan implicó una renovación completa de la arquitectura del sitio web para alinearla con los objetivos de CHF y las necesidades de su público diverso. Al priorizar una comunicación clara y un diseño intuitivo, el nuevo sitio web no solo resalta el alcance completo del trabajo de CHF, sino que también mejora la interacción del usuario. El diseño se concibió para realzar la presencia de la marca, dar a conocer el impacto positivo de la fundación y facilitar la contribución de los simpatizantes.",
        "El resultado es un sitio web líder sin fines de lucro que ha sentado una base sólida para el crecimiento futuro de CHF, proporcionando una forma más impactante de conectarse con los donantes e impulsar el apoyo a largo plazo para su misión."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Gestión intuitiva de contenido" },
        { icon: "", label: "Mejores prácticas de la PFN" },
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