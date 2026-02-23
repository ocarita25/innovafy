import type { WorkArticleType } from "../types"

const slug = "my-mind-check"
const imgPath = `/images/work/articles/${slug}`
const videoPath = `/videos/work/articles/${slug}`

export const myMindCheckArticle: WorkArticleType = {
    slug: slug,
    title: "My Mind Check",
    industry: "Educación",
    category: ['educacion', "comunidad-y-proposito"],
    link: "https://mymindcheck.org.au/",
    intro: "Con el apoyo del Departamento Federal de Educación y en colaboración con escuelas australianas, la Universidad Macquarie ha desarrollado My Mind Check, una herramienta digital gratuita, voluntaria y basada en evidencia para el control de la salud mental y el bienestar de las escuelas australianas",
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
        "Herramientas digitales orientadas al bienestar estudiantil pueden facilitar la autorreflexión sobre salud mental, al tiempo que proporcionan a las instituciones educativas datos e insights accionables para respaldar decisiones informadas en materia de bienestar.",
        "El lanzamiento de iniciativas de esta naturaleza requiere una plataforma digital clara y estratégica que comunique con precisión el propósito de la herramienta, explique su funcionamiento y oriente tanto a escuelas como a estudiantes sobre las vías de participación.",
        "Una arquitectura de contenidos lógica y una navegación estructurada permiten potenciar una identidad de marca expresiva y cercana, dando coherencia al programa y facilitando su adopción dentro del ecosistema educativo."
    ],
    // paragraphs: [
    //     "Esta herramienta no solo permite a los estudiantes reflexionar sobre su propia salud mental y bienestar, sino que también proporciona a las escuelas información proactiva para tomar decisiones de bienestar.",
    //     "Para lanzar My Mind Check, la Universidad Macquarie contrató a Humaan para diseñar, desarrollar y planificar una estrategia de un sitio web que promocionara la herramienta, comunicara información esencial y asesorara tanto a las escuelas como a los estudiantes sobre cómo pueden participar.",
    //     "Un contenido y una navegación claros y lógicos respaldan una marca llena de expresión y carácter (cortesía de nuestros amigos de SomeOne™), dando vida al programa en el nuevo sitio web My Mind Check."
    // ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Gestión intuitiva de contenido" },
    ],
    body: [
        { type: "image", src: `${imgPath}/${slug}-1.webp`, alt: `${slug}-1`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-2.webp`, alt: `${slug}-2` },
        { type: "image", src: `${imgPath}/${slug}-3.webp`, alt: `${slug}-3` },
        { type: "image", src: `${imgPath}/${slug}-4.webp`, alt: `${slug}-4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-5.webp`, alt: `${slug}-5` },
        { type: "image", src: `${imgPath}/${slug}-6.webp`, alt: `${slug}-6` },
        { type: "video", src: `${videoPath}/${slug}-1.mp4`, style: "min-[992px]:col-span-2" },
        { type: "image", src: `${imgPath}/${slug}-7.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-9` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-10`, style: "min-[992px]:col-span-2" },
    ],
}