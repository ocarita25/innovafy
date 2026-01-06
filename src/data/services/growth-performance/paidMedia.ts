import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/growth-performance/paid-media"

export const paidMediaPage: ServicePageType =
{
    slug: "paid-media-y-performance-advertising",
    heading: {
        pill: "Paid Media & Performance Advertising",
        title: "Paid Media & Performance Advertising",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Cada dólar invertido regresa multiplicado",
        subtitle: "Gestionamos campañas publicitarias enfocadas en retorno de inversión y escalamiento.",
        capabilities: [
            {
                icon: World(),
                title: "Estrategias de anuncios",
                text: "Diseñamos estructuras publicitarias centradas en objetivos de venta y reconocimiento, maximizando el rendimiento a través de una planificación precisa y escalable.",
            },
            {
                icon: People(),
                title: "Segmentación avanzada",
                text: "Construimos audiencias basadas en datos, comportamientos, intereses y patrones de compra, asegurando que los anuncios lleguen a las personas correctas.",
            },
            {
                icon: Sparks(),
                title: "Retargeting",
                text: "Implementamos campañas orientadas a usuarios que interactuaron previamente, aumentando la probabilidad de conversión mediante impactos estratégicos y oportunos.",
            },
            {
                icon: Rings(),
                title: "Optimización continua",
                text: "Analizamos métricas en tiempo real y ajustamos presupuesto, segmentación y creatividades para mejorar ROAS y mantener un rendimiento publicitario constante.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Publicidad orientada a resultados",
                text: "Diseñamos campañas con estructura clara, objetivos medibles y optimización continua basada en métricas reales, enfocadas en generar ventas e interacción de calidad.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Optimización del costo por lead",
                text: "Mejoramos la rentabilidad de tus campañas mediante segmentación precisa y anuncios relevantes, reduciendo el costo de adquisición y maximizando el retorno de cada inversión.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Segmentación estratégica de audiencias",
                text: "Definimos audiencias correctamente alineadas a tu negocio para aumentar la conversión, alcanzar clientes con alto potencial y generar tráfico con valor comercial real.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Control y eficiencia de la inversión publicitaria",
                text: "Monitoreamos y ajustamos constantemente el presupuesto para asegurar una distribución eficiente de la inversión y un mayor retorno sobre la inversión (ROI).",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Publicidad sin resultados",
        //         text: "Muchas campañas no generan ventas ni interacción debido a una mala estructura, falta de objetivos claros o ausencia de optimización basada en métricas reales.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Alto costo por lead",
        //         text: "Una segmentación deficiente y anuncios poco relevantes elevan el costo de adquisición, reduciendo la rentabilidad y afectando el rendimiento de las campañas.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Segmentación incorrecta",
        //         text: "Apuntar a audiencias mal definidas limita el alcance efectivo, disminuye la conversión y genera tráfico sin valor que no aporta resultados comerciales.",
        //     },
        //     {
        //         media: `/images/${path}/value4.webp`,
        //         mediaType: "image",
        //         title: "Falta de control de inversión",
        //         text: "Sin seguimiento constante, el presupuesto se distribuye de manera ineficiente, provocando desperdicio de recursos y bajo retorno sobre la inversión.",
        //     },
        // ]
    },
    briefSubmit: "Mutliplica tus ingresos",
    nextService: "crecimiento-avanzado-y-abm-intelligence"
}