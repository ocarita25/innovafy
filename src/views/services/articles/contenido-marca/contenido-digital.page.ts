import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD } from "@/constants/resources";

const slug = "contenido-marca/contenido-digital"

export const contenidoDigitalPage: ServicePageType =
{
    slug: "digital-asset-y-biblioteca-de-medios",
    heading: {
        pill: "Digital Asset & Media Library",
        title: "Digital Asset & Media Library",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "El orden acelera la producción de contenido",
        subtitle: "Organización profesional del contenido digital de la marca.",
        capabilities: [
            {
                icon: World(),
                title: "Banco de fotos",
                text: "Creamos una biblioteca visual profesional con imágenes clasificadas por categorías, facilitando su uso para publicidad, redes sociales y piezas institucionales.",
            },
            {
                icon: People(),
                title: "Banco de videos",
                text: "Organizamos material audiovisual en formatos editables y finales, permitiendo acceso rápido para campañas, anuncios, presentaciones o contenido orgánico.",
            },
            {
                icon: Sparks(),
                title: "Recursos gráficos",
                text: "Compilamos íconos, plantillas, piezas visuales y elementos de identidad que permiten mantener consistencia estética en todos los puntos de comunicación.",
            },
            {
                icon: Rings(),
                title: "Material institucional",
                text: "Centralizamos documentos, presentaciones, manuales y recursos corporativos para mantener orden, facilitar colaboraciones y asegurar coherencia de marca.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Organización y gestión eficiente de archivos",
                text: "Implementamos una estructura clara y centralizada para organizar el contenido, facilitando su acceso, uso eficiente y agilizando los procesos de producción.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Resguardo y disponibilidad del material",
                text: "Creamos sistemas que aseguran la conservación y localización de piezas audiovisuales y gráficas, garantizando continuidad visual y soporte para campañas y publicaciones.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Planificación y ejecución de contenido estratégica",
                text: "Ordenamos los recursos creativos para permitir una producción planificada, coherente y de alta calidad, evitando la improvisación y fortaleciendo la estrategia de contenido.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value1.webp`,
        //         mediaType: "image",
        //         title: "Desorden de archivos",
        //         text: "La falta de una estructura clara provoca que el contenido se disperse entre dispositivos y plataformas, dificultando su uso eficiente y ralentizando los procesos de producción.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value2.webp`,
        //         mediaType: "image",
        //         title: "Pérdida de material",
        //         text: "Cuando no existe un sistema centralizado, las piezas audiovisuales y gráficas se extravían, afectando campañas, publicaciones y la continuidad visual de la marca.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value3.webp`,
        //         mediaType: "image",
        //         title: "Improvisación de contenido",
        //         text: "La ausencia de recursos organizados obliga a crear piezas de último momento, reduciendo calidad, coherencia y la capacidad de ejecutar estrategias sólidas.",
        //     },
        // ]
    },
    briefSubmit: "Ordena y escala tu contenido digital",
    nextService: "multi-formato-y-produccion-de-contenido-global"
}