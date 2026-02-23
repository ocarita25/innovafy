import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/contenido-marca/formato-adaptable"

export const formatoAdaptablePage: ServicePageType =
{
    slug: "multi-formato-y-produccion-de-contenido-global",
    heading: {
        pill: "Multi Formato & Producción de Contenido Global",
        title: "Multi Formato & Producción de Contenido Global",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Las marcas deben estar presentes en todos los canales",
        subtitle: "Producción de contenido adaptable a todos los formatos y plataformas.",
        capabilities: [
            {
                icon: World(),
                title: "Formatos verticales",
                text: "Creamos contenido optimizado para plataformas como TikTok, Reels y YouTube Shorts, asegurando visuales fluidos y alto desempeño móvil.",
            },
            {
                icon: People(),
                title: "Formatos cuadrados",
                text: "Diseñamos piezas estéticas y equilibradas ideales para Instagram Feed y plataformas que requieren composiciones estables y centradas.",
            },
            {
                icon: Sparks(),
                title: "Formatos horizontales",
                text: "Producimos contenido en formato widescreen para YouTube, web y presentaciones, priorizando narrativa, claridad y calidad visual.",
            },
            {
                icon: Rings(),
                title: "Adaptaciones multiplataforma",
                text: "Ajustamos el mismo contenido a diversos canales, manteniendo coherencia visual y narrativa mientras maximizamos alcance y rendimiento.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Contenido multiplataforma y reutilizable",
                text: "Desarrollamos piezas versátiles pensadas desde el inicio para adaptarse a distintos canales digitales, ampliando su alcance y maximizando su vida útil.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Adaptación estratégica por canal",
                text: "Optimizamos formatos, estilos y duraciones según cada plataforma para asegurar mayor rendimiento, visibilidad e impacto comercial en todos los puntos de contacto.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Contenido que solo funciona en una red",
        //         text: "Muchas piezas se diseñan sin versatilidad, lo que limita su alcance y reduce la capacidad de reutilización en distintos canales digitales.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Falta de adaptación por canal",
        //         text: "Cada plataforma exige formatos, estilos y duraciones específicas; cuando el contenido no se ajusta, pierde rendimiento, visibilidad e impacto comercial.",
        //     },
        // ]
    },
    briefSubmit: "Expande tu contenido a todos los formatos",
    nextService: "sitios-web"
}