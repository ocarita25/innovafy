import type { ServicePageType } from "@/types/ServicePage.types";

const path = "/images/services/headless"

export const headlessPage: ServicePageType =
{
    slug: "headless",
    heading: {
        pill: "Headless",
        title: "Más rápido, mejor, más potente: Desarrollo web sin interfaz gráfica",
        heroImage: `${path}/heroVideo.mp4`,
        mediaType: "video"
    },
    description: {
        title: "Escalabilidad, seguridad y rendimiento, integrados",
        subtitle: "Aprovecha la arquitectura headless para optimizar tu sitio web y ofrecer a los visitantes una experiencia inigualable.",
        capabilities: [
            {
                icon: "",
                title: "Priorizar el rendimiento",
                text: "Ofrecer interfaces de usuario dinámicas y enriquecidas que prioricen la velocidad sin estar limitadas por la arquitectura del backend.",
            },
            {
                icon: "",
                title: "Gestión moderna de contenidos",
                text: "Utilice sistemas de gestión de contenido modernos y vanguardistas como Payload CMS, Storyblok y Sanity.",
            },
            {
                icon: "",
                title: "Preparado para el futuro",
                text: "La arquitectura headless facilita la mejora continua del sitio web independientemente del backend, garantizando su longevidad y adaptabilidad.",
            },
            {
                icon: "",
                title: "Fuente única de la verdad",
                text: "Mantén tu contenido en un solo lugar y reutilízalo en una variedad de proyectos y plataformas diferentes.",
            },
        ],
        valuePropositions: [
            {
                media: `${path}/value1.webp`,
                mediaType: "image",
                title: "Experiencias atractivas que escalan",
                text: "Una arquitectura headless ofrece una flexibilidad y escalabilidad sin precedentes, permitiendo interfaces y experiencias enriquecidas que no están limitadas por las restricciones de la plataforma. Esto significa que no es necesario reinventar la rueda para realizar una actualización. Al separar el front-end del back-end, podemos ofrecer cualquier tipo de experiencia digital que se adapta perfectamente a las necesidades de los usuarios y del negocio a lo largo del tiempo.",
            },
            {
                media: `${path}/value2.webp`,
                mediaType: "image",
                title: "Diseñado y optimizado para la web moderna",
                text: "La arquitectura headless está diseñada para la web actual, ofreciendo una versatilidad completa para impulsar desde sitios web hasta plataformas a gran escala. Este enfoque admite cualquier flujo de trabajo personalizado y cuenta con el respaldo de sistemas de gestión de contenido líderes en su clase que van más allá de las ofertas tradicionales, sin sobrecargar el sistema con funcionalidades innecesarias.",
            },
            {
                media: `${path}/value3.mp4`,
                mediaType: "video",
                title: "Cualquier tipo de interfaz, cualquier tipo de datos",
                text: "Tanto si buscas crear paneles dinámicos, visualizaciones de datos atractivas o sitios web robustos basados ​​en contenido, nuestro enfoque permite la integración perfecta de diversos conjuntos de datos en cualquier tipo de interfaz. También puedes usar tu CMS Headless como fuente única de información y distribuir datos simultáneamente entre todas tus aplicaciones y sitios web.",
            },
            {
                media: `${path}/value4.webp`,
                mediaType: "image",
                title: "En colaboración con los líderes en tecnología Headless",
                text: "Tenemos amplia experiencia con numerosos sistemas y tecnologías líderes de gestión de contenido headless. Somos desarrolladores de Sanity CMS, desarrolladores de Payload CMS (socio oficial) y desarrolladores de Storyblok (socio oficial), con experiencia en diversas plataformas headless.",
            }
        ]
    },
    briefSubmit: "Sube tu nivel con Headless",
    nextService: "aplicaciones-web"
}