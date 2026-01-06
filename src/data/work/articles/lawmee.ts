import type { WorkArticleType } from "../types"

const slug = "lawmee"
const imgPath = `/images/work/articles/${slug}`


export const lawmeeArticle: WorkArticleType = {
    slug: slug,
    title: "Lawmee",
    category: ['innovacion', 'ui-ux'],
    link: "/",
    intro: "Una nueva plataforma de mercado para conectar equipos legales con abogados y asistentes legales, desde la idea hasta el lanzamiento.",
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
        "Al adoptar un enfoque innovador en el sector, Lawmee necesitaba una plataforma sofisticada y altamente personalizada que satisficiera las demandas del negocio y las expectativas de sus usuarios. Dada la sensibilidad y las limitaciones de la contratación legal, la plataforma debía gestionar escenarios complejos, promover la automatización siempre que fuera posible y ofrecer una experiencia clara e intuitiva a los usuarios.",
        "Trabajando en estrecha colaboración con el equipo del cliente, Humaan concibió una estrategia, una interfaz y una serie de flujos de usuarios que respaldarían los requisitos del negocio y ofrecerían una experiencia perfecta para todos los tipos de audiencia.",
        "Una aplicación web de una sola página impulsada por React y Laravel, la plataforma ofrece una experiencia de usuario dinámica, respaldada por una arquitectura segura y estable. La plataforma se desarrolló mediante un proceso iterativo y ágil, lo que permitió la exposición y validación del usuario en etapas clave para garantizar que las necesidades de la audiencia fueran parte integral de la solución.",
        "Desde su lanzamiento, Lawmee ha tenido un impacto notable en el sector del empleo legal, conectando organizaciones y profesionales del derecho de forma más eficiente. La plataforma ha recibido una acogida muy positiva y nos enorgullece seguir apoyando su evolución para satisfacer las necesidades de su continuo crecimiento."
    ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UX" },
        { icon: "", label: "Sistema de diseño de interfaz de usuario" },
        { icon: "", label: "Plataforma de mercado personalizada" },
        { icon: "", label: "Aplicación web React.js y Laravel" },
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