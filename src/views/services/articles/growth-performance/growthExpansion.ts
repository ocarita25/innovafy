import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD } from "@/constants/resources";

const slug = "growth-performance/growth-expansion"

export const crecimientoPage: ServicePageType =
{
    slug: "crecimiento-y-expansion",
    heading: {
        pill: "Estrategias de Crecimiento y Expansión de Negocios",
        title: "Estrategias de Crecimiento y Expansión de Negocios",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Empresas con visión, control y proyección real",
        subtitle: "Diseñamos estrategias de crecimiento digital orientadas a escalar marcas, ventas y operaciones de forma estructurada y sostenible.",
        capabilities: [
            {
                icon: World(),
                title: "Análisis de mercado y competencia",
                text: "Evaluamos el entorno competitivo, tendencias y comportamiento del consumidor para identificar oportunidades reales de crecimiento y diferenciación estratégica.",
            },
            {
                icon: People(),
                title: "Objetivos comerciales definidos",
                text: "Establecemos metas claras, medibles y alineadas al modelo de negocio, creando un marco de acción coherente con los recursos y la visión empresarial.",
            },
            {
                icon: Sparks(),
                title: "Arquitectura de funnel de venta",
                text: "Diseñamos recorridos completos de cliente para maximizar conversión, optimizar puntos de contacto y mejorar experiencia en cada etapa del proceso.",
            },
            {
                icon: Rings(),
                title: "Roadmap de escalamiento digital",
                text: "Creamos una hoja de ruta detallada que define fases, prioridades y recursos necesarios para escalar de manera ordenada, rentable y sostenible.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Direcciona tu crecimiento",
                text: "Muchas empresas operan sin un plan estratégico definido, lo que genera esfuerzos dispersos y limita la capacidad de expansión sostenible en el tiempo.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Impulsa tu comercio",
                text: "Los negocios enfrentan periodos sin crecimiento debido a estrategias desactualizadas o falta de análisis, reduciendo oportunidades y competitividad en su sector.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Estructura el crecimiento",
                text: "Las marcas expanden su presencia digital sin estructura, afectando procesos, inversión y resultados, generando desbalance entre demanda y capacidad operativa.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value4.webp`,
                mediaType: "image",
                title: "Vende más con estrategia",
                text: "Los esfuerzos digitales no se traducen en ventas por falta de optimización en el funnel, lo que reduce rentabilidad y aumenta el costo de adquisición de clientes.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value5.webp`,
                mediaType: "image",
                title: "Expande tu negocio estratégicamente",
                text: "La empresa intenta escalar sin bases, proyecciones o sistemas, provocando ineficiencia operativa y pérdida de oportunidades comerciales clave.",
            }
        ]
        // valuePropositions: [
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value1.webp`,
        //         mediaType: "image",
        //         title: "Direcciona tu crecimiento",
        //         text: "Muchas empresas operan sin un plan estratégico definido, lo que genera esfuerzos dispersos y limita la capacidad de expansión sostenible en el tiempo.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value2.webp`,
        //         mediaType: "image",
        //         title: "Impulsa tu comercio",
        //         text: "Los negocios enfrentan periodos sin crecimiento debido a estrategias desactualizadas o falta de análisis, reduciendo oportunidades y competitividad en su sector.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value3.webp`,
        //         mediaType: "image",
        //         title: "Estructura el crecimiento",
        //         text: "Las marcas expanden su presencia digital sin estructura, afectando procesos, inversión y resultados, generando desbalance entre demanda y capacidad operativa.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value4.webp`,
        //         mediaType: "image",
        //         title: "Vende más con estrategia",
        //         text: "Los esfuerzos digitales no se traducen en ventas por falta de optimización en el funnel, lo que reduce rentabilidad y aumenta el costo de adquisición de clientes.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value5.webp`,
        //         mediaType: "image",
        //         title: "Expande tu negocio estratégicamente",
        //         text: "La empresa intenta escalar sin bases, proyecciones o sistemas, provocando ineficiencia operativa y pérdida de oportunidades comerciales clave.",
        //     },
        // ]
    },
    briefSubmit: "Empieza a transformar tu negocio",
    nextService: "posicionamiento-y-autoridad"
}