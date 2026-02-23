import type { WorkArticleType } from "../types"

const slug = "smartfix"
const imgPath = `/images/work/articles/${slug}`


export const smartfixArticle: WorkArticleType = {
    slug: slug,
    title: "SmartFix",
    industry: "Servicios Comerciales",
    category: ['comercial'],
    link: "https://teamsmartfix.com.au/",
    intro: "Smartfix, un proveedor líder de servicios de electricidad, aire acondicionado y plomería en Perth, necesitaba un sitio web que satisficiera las necesidades de su negocio en rápido crecimiento",
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
        "Cuando un sitio web existente limita la interacción con los clientes y la escalabilidad a largo plazo, un redesarrollo estratégico puede ser clave para ofrecer una presencia digital de alto rendimiento que respalde el profesionalismo, la atención al cliente y la conversión.",
        "Un enfoque centrado en la experiencia de usuario, el posicionamiento de marca y la excelencia técnica permite crear una experiencia digital fluida que facilita la conversión de visitantes en clientes potenciales. Integrar buenas prácticas de SEO y marketing digital refuerza la propuesta de valor, optimiza la interacción del usuario y establece una base escalable para el crecimiento futuro.",
        "Cuando la estrategia digital combina claridad, usabilidad y posicionamiento estratégico, la plataforma se convierte en un referente dentro de su sector, elevando los estándares de experiencia digital y eficiencia comercial."
    ],
    // paragraphs: [
    //     "Con un sitio web existente que limitaba tanto la interacción inmediata con el cliente como la escalabilidad a largo plazo, el redesarrollo estratégico era esencial y trabajamos con el equipo para imaginar una nueva presencia de alto rendimiento que estuviera a la altura de su reputación de profesionalismo y servicio al cliente, y que estuviera adaptada para la conversión.",
    //     "Nuestro enfoque personalizado se centró en la experiencia del usuario, el posicionamiento de marca y la excelencia técnica, creando una experiencia digital fluida que convierte a los visitantes en clientes potenciales. Diseñado para respaldar la estrategia de SEO y marketing de Smartfix, el nuevo sitio web fortalece el valor de la marca, optimiza la experiencia del usuario y establece una base escalable para el crecimiento futuro. El resultado es un sitio web moderno y líder en su categoría, que se alinea con las ambiciones de Smartfix y establece un nuevo estándar de excelencia digital en el sector de los servicios comerciales.",
    // ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Mapeo del recorrido del usuario" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Optimización de la conversión" },
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
        { type: "image", src: `${imgPath}/${slug}-8.webp`, alt: `${slug}-8` },
        { type: "image", src: `${imgPath}/${slug}-9.webp`, alt: `${slug}-9` },
        { type: "image", src: `${imgPath}/${slug}-10.webp`, alt: `${slug}-10`, style: "min-[992px]:col-span-2" },
    ],
}