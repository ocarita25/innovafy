import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD } from "@/constants/resources";

const slug = "produccion-audiovisual/high-end"

export const highEndPage: ServicePageType =
{
    slug: "produccion-audiovisual-de-alta-calidad",
    heading: {
        pill: "Producción Audiovisual de Alta Calidad",
        title: "Producción Audiovisual de Alta Calidad",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "El video como herramienta de impacto, posicionamiento y ventas",
        subtitle: "Producción audiovisual profesional de nivel comercial para marcas que buscan destacar, conectar y convertir a través del video.",
        capabilities: [
            {
                icon: People(),
                title: "Videos institucionales",
                text: "Creamos piezas audiovisuales que comunican la esencia, historia, valores y propuesta de valor de la marca, reforzando confianza y reputación corporativa.",
            },
            {
                icon: Rings(),
                title: "Comerciales publicitarios",
                text: "Producimos anuncios orientados a performance y posicionamiento, integrando creatividad, storytelling y estrategia para maximizar conversión e impacto.",
            },
            {
                icon: Sparks(),
                title: "Videos para campañas digitales",
                text: "Diseñamos contenido a medida para campañas en Meta Ads, TikTok Ads, YouTube y otras plataformas, optimizado para captar atención y generar resultados.",
            },
            {
                icon: World(),
                title: "Contenido para redes sociales",
                text: "Generamos videos dinámicos, estéticos y adaptados a cada plataforma, potenciando visibilidad orgánica y conexión con la audiencia.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Producción audiovisual profesional y estratégica",
                text: "Creamos videos con alta calidad técnica y narrativa clara que elevan el impacto, la credibilidad y la competitividad de la marca en entornos digitales.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Fortalecimiento de la percepción de marca",
                text: "Desarrollamos piezas audiovisuales alineadas a la identidad de la marca que transmiten profesionalismo, refuerzan la confianza y consolidan la autoridad de marca.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Videos que conectan, emocionan y convierten",
                text: "Diseñamos estructuras audiovisuales estratégicas que generan conexión emocional, recordación y acción, potenciando el valor comercial del contenido.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value4.webp`,
                mediaType: "image",
                title: "Publicidad audiovisual de alto rendimiento",
                text: "Producimos anuncios bien ejecutados que comunican orden, calidad y mensaje claro, mejorando el rendimiento de campañas y el retorno de inversión (ROI).",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value1.webp`,
        //         mediaType: "image",
        //         title: "Contenido visual amateur",
        //         text: "Videos sin calidad técnica ni narrativa reducen impacto, credibilidad y capacidad de competir en un entorno digital saturado.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value2.webp`,
        //         mediaType: "image",
        //         title: "Baja percepción de marca",
        //         text: "Piezas audiovisuales improvisadas afectan la imagen profesional, debilitando la confianza del público y la autoridad de la marca.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value3.webp`,
        //         mediaType: "image",
        //         title: "Videos que no conectan ni convierten",
        //         text: "Sin una estructura estratégica, los videos no generan emoción, recordación ni acción, perdiendo potencial comercial.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value4.webp`,
        //         mediaType: "image",
        //         title: "Imagen poco profesional en publicidad",
        //         text: "Anuncios mal ejecutados transmiten desorden y baja calidad, afectando el rendimiento de campañas y el retorno de inversión.",
        //     },
        // ]
    },
    briefSubmit: "Produzcamos videos que impacten y conviertan",
    nextService: "post-produccion-y-motion-design"
}
