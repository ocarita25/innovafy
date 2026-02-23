import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/growth-performance/data-intelligence"

export const dataIntelligencePage: ServicePageType =
{
    slug: "data-intelligence-performance-analytics",
    heading: {
        pill: "Data Intelligence & Performance Analytics",
        title: "Data Intelligence & Performance Analytics",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Sin datos no existe crecimiento real",
        subtitle: "Medición estratégica del rendimiento digital para toma de decisiones.",
        capabilities: [
            {
                icon: World(),
                title: "KPIs",
                text: "Definimos indicadores clave alineados a objetivos comerciales, permitiendo monitorear desempeño y evaluar la efectividad de las iniciativas digitales.",
            },
            {
                icon: People(),
                title: "Dashboards",
                text: "Construimos paneles visuales que centralizan datos en tiempo real, ofreciendo análisis claros para entender comportamiento, tendencias y rendimiento global.",
            },
            {
                icon: Sparks(),
                title: "Reportes ejecutivos",
                text: "Creamos informes estratégicos que resumen los resultados más relevantes, facilitando decisiones basadas en información precisa y orientada a negocio.",
            },
            {
                icon: Rings(),
                title: "Métricas de conversión",
                text: "Implementamos sistemas que permiten medir cada etapa del funnel, optimizando la captación, el rendimiento y el incremento de ventas digitales.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Decisiones basadas en datos",
                text: "Implementamos sistemas de análisis que brindan información clara y estructurada para tomar decisiones estratégicas con mayor certeza y mejores resultados comerciales.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Métricas claras y accionables",
                text: "Definimos indicadores clave que permiten evaluar el desempeño, identificar oportunidades de mejora y comprender el impacto real de cada acción digital.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Resultados medibles y controlados",
                text: "Integramos procesos y herramientas que aseguran la correcta recopilación de datos, facilitando la medición de conversiones, rendimiento y retorno de inversión (ROI).",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Decisiones a ciegas",
        //         text: "Sin datos claros y estructurados, las empresas toman decisiones basadas en suposiciones, lo que afecta estrategias, inversiones y resultados comerciales.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Falta de métricas",
        //         text: "La ausencia de indicadores definidos impide evaluar desempeño, detectar oportunidades de mejora y comprender el verdadero impacto de las acciones digitales.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Resultados no medibles",
        //         text: "Cuando los procesos no están integrados y no se recopilan datos correctamente, se vuelve imposible medir conversiones, rendimiento o retorno de inversión.",
        //     },
        // ]
    },
    briefSubmit: "Construye crecimiento basado en datos",
    nextService: "estrategia-narrativa-y-brand-storytelling"
}
