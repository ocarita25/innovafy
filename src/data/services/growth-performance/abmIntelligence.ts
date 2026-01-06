import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/growth-performance/abm-intelligence"

export const abmIntelligencePage: ServicePageType =
{
    slug: "crecimiento-avanzado-y-abm-intelligence",
    heading: {
        pill: "Advanced Growth & ABM Intelligence",
        title: "Advanced Growth & ABM Intelligence",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Escala negocios de alto valor con precisión estratégica",
        subtitle: "Estrategias avanzadas de adquisición para negocios B2B y alto ticket.",
        capabilities: [
            {
                icon: World(),
                title: "Estrategias ABM",
                text: "Diseñamos enfoques de Account Based Marketing centrados en cuentas clave, alineando marketing y ventas para llegar a decisores y maximizar oportunidades corporativas.",
            },
            {
                icon: People(),
                title: "Públicos de alto valor",
                text: "Construimos audiencias específicas basadas en criterios profesionales, comportamientos y perfiles empresariales, optimizando la captación de prospectos con potencial real.",
            },
            {
                icon: Sparks(),
                title: "Retargeting avanzado",
                text: "Implementamos flujos de impacto hipersegmentados que reenganchan a usuarios clave, reforzando la exposición de marca y aumentando la intención de compra.",
            },
            {
                icon: Rings(),
                title: "Automatización de audiencias",
                text: "Configuramos sistemas inteligentes que actualizan, clasifican y enriquecen audiencias automáticamente, permitiendo campañas más precisas y escalables.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Tráfico de alta calidad",
                text: "Atraemos visitantes con interés real en tus productos o servicios, optimizando el rendimiento de las campañas y generando oportunidades con mayor potencial de conversión.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Leads calificados y listos para vender",
                text: "Implementamos filtros estratégicos que permiten captar clientes con alta probabilidad de compra, optimizando los ciclos comerciales y mejorando la eficiencia del equipo de ventas.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Ventas corporativas estratégicas",
                text: "Desarrollamos un enfoque dirigido a cuentas clave para concentrar los esfuerzos comerciales, facilitar el cierre de contratos de alto valor y construir relaciones comerciales a largo plazo.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Tráfico sin valor",
        //         text: "Muchas marcas atraen visitantes que no tienen intención real de compra, lo que reduce el rendimiento de las campañas y limita la generación de oportunidades efectivas.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Clientes poco calificados",
        //         text: "La falta de un filtro estratégico genera leads con baja probabilidad de compra, afectando los ciclos comerciales y disminuyendo la eficiencia del equipo de ventas.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Ventas corporativas ineficientes",
        //         text: "Sin un enfoque dirigido a cuentas clave, los esfuerzos comerciales se dispersan, reduciendo la capacidad de cerrar contratos de alto valor y largo plazo.",
        //     },
        // ]
    },
    briefSubmit: "Atrae y cierra clientes premium",
    nextService: "fidelidad-cliente-y-programas-retencion"
}
