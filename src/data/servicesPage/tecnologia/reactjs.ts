import type { ServicePageType } from "@/types/ServicePage.types";

const path = "/images/services/react-js"

export const reactPage: ServicePageType =
{
    slug: "react-js",
    heading: {
        pill: "React.js",
        title: "Especialistas en desarrollo de React",
        heroImage: `${path}/heroVideo.mp4`,
        mediaType: "video"
    },
    description: {
        title: "Aplicaciones y sitios web de alto rendimiento",
        subtitle: "Colabora con nuestro equipo experto de desarrolladores React para hacer realidad tu proyecto. Hemos creado sitios web, aplicaciones y mucho más para clientes de diversos sectores.",
        capabilities: [
            {
                icon: "",
                title: "Aplicaciones Single Page",
                text: "Reúna todo lo que sus visitantes necesitan en una única interfaz de alta interacción, reduciendo los tiempos de carga de recursos hasta en un 50%.",
            },
            {
                icon: "",
                title: "Flexibildad Headless",
                text: "La arquitectura sin interfaz gráfica promueve la flexibilidad, la seguridad y la escalabilidad, ofreciendo un rendimiento excepcional con aplicaciones ilimitadas.",
            },
            {
                icon: "",
                title: "Interfaces fluidas",
                text: "Carga rápida e interactividad fluida, ya sea un sitio web (React.js) o una aplicación móvil nativa para iOS/Android (React Native).",
            },
            {
                icon: "",
                title: "Experiencia Full-Stack",
                text: "Nuestros desarrolladores especializados en React cuentan con el apoyo de un equipo integral en UX, Diseño y Desarrollo.",
            },
        ],
        valuePropositions: [
            {
                media: `${path}/value1.webp`,
                mediaType: "image",
                title: "Construido según las especificaciones. Adecuado para su propósito.",
                text: "Combinando conocimientos, datos y un enfoque de diseño probado que se alinee con su visión, podemos crear una aplicación React totalmente personalizada para afrontar su desafío empresarial único.",
            },
            {
                media: `${path}/value2.webp`,
                mediaType: "image",
                title: "Experiencias interactivas convincentes",
                text: "Combina la potente y eficiente arquitectura de React con un diseño centrado en el usuario para crear herramientas y visualizaciones interactivas y atractivas. Ofrece herramientas digitales potentes, diseñadas para tu público, con flexibilidad y adaptabilidad integradas.",
            },
            {
                media: `${path}/value3.webp`,
                mediaType: "image",
                title: "Plataformas digitales a medida",
                text: "Ofrezca experiencias digitales inmersivas y potencie su marca con herramientas personalizadas y recorridos a medida, adaptados a las necesidades y el uso de su público. Combinando diseño innovador, amplia experiencia tecnológica y una estrecha colaboración con nuestros clientes, nos esforzamos al máximo para garantizar un producto de primera categoría.",
            },
            {
                media: `${path}/value4.webp`,
                mediaType: "image",
                title: "Next.js + Headless",
                text: "El referente actual en desarrollo web sofisticado y de alto rendimiento. Aproveche todo el potencial de los sitios web React con una arquitectura headless flexible y escalable, y las funciones integradas del lado del servidor, las mejoras de middleware y las optimizaciones SEO de Next.js.",
            },
        ]
    },
    briefSubmit: "Listo para construir con React?",
    nextService: "headless"
}