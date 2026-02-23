import type { WorkArticleType } from "../types"

const slug = "golden-pipeline"
const imgPath = `/images/work/articles/${slug}`

export const goldenPipelineArticle: WorkArticleType = {
    slug: slug,
    title: "Golden Pipeline",
    industry: "Comercio",
    category: ['comunidad-y-proposito'],
    link: "https://www.goldenpipeline.com.au/",
    intro: "Viaje a través de la historia de Australia Occidental.",
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
        "La Ruta Patrimonial del Oleoducto Dorado constituye un recorrido histórico por el corazón de Australia Occidental, donde una plataforma digital puede funcionar como guía interactiva para conectar a los visitantes con las historias del Plan de Abastecimiento de Agua de Goldfields.",
        "En iniciativas de esta naturaleza, la incorporación de mapas interactivos personalizados permite estructurar la navegación sobre un amplio contenido histórico, mientras que herramientas como planificadores de viaje ofrecen a los usuarios la posibilidad de diseñar su propio recorrido a lo largo del trayecto.",
        "El resultado es una experiencia digital cuidadosamente diseñada que pone en valor el patrimonio cultural, fomenta la exploración y utiliza funcionalidades interactivas para inspirar y orientar a los viajeros desde el primer contacto."
    ],
    // paragraphs: [
    //     "La Ruta Patrimonial del Oleoducto Dorado es un recorrido histórico por el corazón de Australia Occidental. El sitio web es una guía interactiva detallada que invita a los visitantes a conectar directamente con las historias del Plan de Abastecimiento de Agua de Goldfields.",
    //     "Creamos un mapa interactivo personalizado que funciona como un dispositivo de navegación altamente personalizado con un amplio contenido histórico. Además, creamos un planificador de viajes personalizado que permite a los visitantes elegir su propia aventura a lo largo del sendero.",
    //     "El sitio web Golden Pipeline es una experiencia digital cuidada de una historia fascinante. Su objetivo es conectar con el usuario desde el principio para inspirar a los viajeros con funciones interactivas y contenido fascinante."
    // ],
    features: [
        { icon: "", label: "Estrategia digital" },
        { icon: "", label: "Diseño UX y UI" },
        { icon: "", label: "Interfaz basada en mapas" },
        { icon: "", label: "Planificador de viajes integrado" },
        { icon: "", label: "Infografías animadas" },
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