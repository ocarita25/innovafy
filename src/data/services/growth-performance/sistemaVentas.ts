import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/growth-performance/sistemas-ventas"

export const sistemasVentasPage: ServicePageType =
{
    slug: "sistemas-de-ventas-digitales",
    heading: {
        pill: "Sistemas de ventas digitales",
        title: "Sistemas de Ventas Digitales (B2B & B2C)",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "",
        subtitle: "Creamos sistemas completos de ventas digitales automatizados para negocios B2B y B2C.",
        capabilities: [
            {
                icon: World(),
                title: "Embudos de ventas",
                text: "Diseñamos recorridos completos desde captación hasta cierre, optimizados para aumentar conversión, reducir fricción y mejorar la experiencia del cliente.",
            },
            {
                icon: People(),
                title: "Automatización de leads",
                text: "Creamos flujos inteligentes que nutren y califican prospectos automáticamente, manteniendo el pipeline activo y mejorando la calidad de las oportunidades.",
            },
            {
                icon: Sparks(),
                title: "CRM",
                text: "Implementamos sistemas de gestión comercial que organizan contactos, procesos y etapas de venta, permitiendo un seguimiento eficiente y decisiones basadas en datos reales.",
            },
            {
                icon: Rings(),
                title: "Integraciones de pago",
                text: "Conectamos pasarelas y sistemas de cobro para permitir ventas fluidas, rápidas y seguras, reduciendo fricción y facilitando procesos de compra automatizados.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Ventas desordenadas",
                text: "Muchas empresas gestionan sus ventas sin estructura ni procesos definidos, lo que genera pérdida de oportunidades y dificulta medir la efectividad comercial real.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Leads sin seguimiento",
                text: "Los prospectos se pierden por falta de control y trazabilidad, afectando la conversión y generando un pipeline inconsistente y poco rentable para el negocio.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Procesos manuales",
                text: "Las tareas repetitivas reducen eficiencia y saturan al equipo, provocando cuellos de botella, errores operativos y tiempos de respuesta demasiado lentos.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Bajo cierre comercial",
                text: "La falta de embudos bien diseñados y de automatizaciones estratégicas debilita la capacidad de convertir prospectos en clientes, afectando ingresos y crecimiento.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Ventas desordenadas",
        //         text: "Muchas empresas gestionan sus ventas sin estructura ni procesos definidos, lo que genera pérdida de oportunidades y dificulta medir la efectividad comercial real.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Leads sin seguimiento",
        //         text: "Los prospectos se pierden por falta de control y trazabilidad, afectando la conversión y generando un pipeline inconsistente y poco rentable para el negocio.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Procesos manuales",
        //         text: "Las tareas repetitivas reducen eficiencia y saturan al equipo, provocando cuellos de botella, errores operativos y tiempos de respuesta demasiado lentos.",
        //     },
        //     {
        //         media: `/images/${path}/value4.webp`,
        //         mediaType: "image",
        //         title: "Bajo cierre comercial",
        //         text: "La falta de embudos bien diseñados y de automatizaciones estratégicas debilita la capacidad de convertir prospectos en clientes, afectando ingresos y crecimiento.",
        //     },
        // ]
    },
    briefSubmit: "",
    nextService: "paid-media-y-performance-advertising"
}