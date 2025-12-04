import { HandShake, Loop, Thunder, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/payload-cms"

export const payloadPage: ServicePageType =
{
    slug: "payload-cms",
    heading: {
        pill: "Payload CMS",
        title: "El CMS sin interfaz gráfica de próxima generación",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Un CMS construido para el futuro.",
        subtitle: "Optimizado para la web moderna, Payload es el CMS headless de código abierto de más rápido crecimiento y proporciona un enfoque avanzado y escalable para la gestión de contenidos.",
        capabilities: [
            {
                icon: Thunder(),
                title: "Gestión de contenido de próxima generación",
                text: "Garantice el máximo rendimiento sin sobrecargar el sistema. Altamente flexible, escalable e intuitivo, ofrece una experiencia de gestión de contenido excepcional, inigualable por los sistemas tradicionales.",
            },
            {
                icon: World(),
                title: "100% Open source",
                text: "Payload, un software totalmente de código abierto, ofrece la plena propiedad de su código fuente, lo que permite la personalización y evita la dependencia de un proveedor. Una comunidad de desarrolladores activa garantiza el soporte y el crecimiento continuos.",
            },
            {
                icon: Loop(),
                title: "Extensibilidad sin precedentes",
                text: "Gracias a su arquitectura modular, Payload permite una profunda personalización, lo que permite a los desarrolladores ampliar la funcionalidad, crear flujos de trabajo personalizados y adaptar la plataforma a las necesidades específicas de cada proyecto.",
            },
            {
                icon: HandShake(),
                title: "Socios oficiales",
                text: "Somos socios y especialistas en el desarrollo de Payload CMS, y estamos orgullosos de ello. Trabajamos en estrecha colaboración con el equipo de Payload para potenciar los productos digitales de nuestros clientes con un alto nivel de experiencia compartida.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Potencia tu sitio web de próxima generación",
                text: "La arquitectura headless está diseñada para la web actual, con la versatilidad suficiente para impulsar desde micrositios interactivos hasta plataformas a gran escala. Headless with Payload se integra con cualquier flujo de trabajo personalizado para ofrecer una gestión de contenido sencilla, acceso granular en tiempo real y control de versiones, todo ello con tiempos de carga ultrarrápidos para una experiencia digital fluida.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "El CMS que siempre quisiste",
                text: "Utiliza Payload para todo, en serio. Payload está diseñado para ofrecer la máxima flexibilidad, tanto para crear aplicaciones y sitios web como otros productos digitales. Úsalo como un CMS centralizado y comparte contenido en toda tu infraestructura digital, garantizando una experiencia de edición excepcional para que los gestores de contenido estén siempre satisfechos.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Gestión intuitiva de contenido",
                text: "Las herramientas de Payload, líderes en su categoría, se adaptan a tus necesidades gracias a funciones como la intuitiva interfaz de usuario para la gestión de contenido, las herramientas integradas de SEO y pruebas A/B, la gestión de flujos de trabajo, la creación de formularios, el control de acceso basado en roles, la vista previa en vivo y mucho más.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Socios oficiales de carga útil",
                text: "La versatilidad y la arquitectura moderna de Payload la convierten en la opción ideal para empresas que buscan crear experiencias digitales flexibles, de alto rendimiento y preparadas para el futuro. Nos enorgullece ser socios oficiales de Payload, con la experiencia y los conocimientos necesarios para alcanzar los objetivos estratégicos y técnicos de cualquier proyecto digital.",
            }
        ]
    },
    briefSubmit: "Sube de nivel en tu Sistema de Gestión de Contenido",
    nextService: "headless"
}