import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD } from "@/constants/resources";

const slug = "growth-performance/sistemas-ventas"

export const sistemasVentasPage: ServicePageType =
{
    slug: "sistemas-de-ventas-digitales",
    heading: {
        pill: "Sistemas de ventas digitales",
        title: "Sistemas de Ventas Digitales (B2B & B2C)",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
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
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Ventas estructuradas y medibles",
                text: "Implementamos procesos comerciales claros y optimizados que te permiten gestionar oportunidades con orden, medir resultados con precisión y escalar tu rendimiento de ventas.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Seguimiento inteligente de leads",
                text: "Creamos sistemas de trazabilidad y control que aseguran un seguimiento constante de cada prospecto, fortaleciendo la conversión y construyendo un pipeline rentable y sostenible.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Automatización eficiente",
                text: "Optimizamos tus procesos mediante automatizaciones estratégicas que reducen tareas repetitivas, eliminan cuellos de botella y mejoran los tiempos de respuesta del equipo.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value4.webp`,
                mediaType: "image",
                title: "Mayor tasa de cierre",
                text: "Diseñamos embudos comerciales efectivos que potencian la conversión de prospectos en clientes, impulsando ingresos sostenibles y crecimiento constante para tu negocio.",
            },
        ]

        // valuePropositions: [
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value1.webp`,
        //         mediaType: "image",
        //         title: "Ventas desordenadas",
        //         text: "Muchas empresas gestionan sus ventas sin estructura ni procesos definidos, lo que genera pérdida de oportunidades y dificulta medir la efectividad comercial real.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value2.webp`,
        //         mediaType: "image",
        //         title: "Leads sin seguimiento",
        //         text: "Los prospectos se pierden por falta de control y trazabilidad, afectando la conversión y generando un pipeline inconsistente y poco rentable para el negocio.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value3.webp`,
        //         mediaType: "image",
        //         title: "Procesos manuales",
        //         text: "Las tareas repetitivas reducen eficiencia y saturan al equipo, provocando cuellos de botella, errores operativos y tiempos de respuesta demasiado lentos.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value4.webp`,
        //         mediaType: "image",
        //         title: "Bajo cierre comercial",
        //         text: "La falta de embudos bien diseñados y de automatizaciones estratégicas debilita la capacidad de convertir prospectos en clientes, afectando ingresos y crecimiento.",
        //     },
        // ]
    },
    briefSubmit: "",
    nextService: "paid-media-y-performance-advertising"
}