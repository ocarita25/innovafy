import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD } from "@/constants/resources";

const slug = "automatizacion-ia/ia-aplicada-negocios"

export const iaAplicadaNegociosPage: ServicePageType =
{
    slug: "inteligencia-artificial-aplicada-negocios",
    heading: {
        pill: "Inteligencia Artificial Aplicada a los Negocios",
        title: "Inteligencia Artificial Aplicada a los Negocios",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Inteligencia artificial aplicada directamente al negocio",
        subtitle: "Aplicamos IA en los procesos internos para optimizar tiempo, recursos y resultados, transformando la operación en un sistema más eficiente y escalable.",
        capabilities: [
            {
                icon: World(),
                title: "IA para análisis y decisiones",
                text: "Sistemas que interpretan grandes volúmenes de datos, detectan patrones, generan reportes y convierten información en decisiones accionables.",
            },
            {
                icon: People(),
                title: "IA para generación de contenido",
                text: "Herramientas que producen textos, ideas, guiones y recursos creativos de forma rápida y coherente con la identidad de la marca.",
            },
            {
                icon: Sparks(),
                title: "IA para automatización de procesos",
                text: "Flujos inteligentes que sustituyen tareas repetitivas, gestionan información y ejecutan acciones sin intervención humana.",
            },
            {
                icon: Rings(),
                title: "IA para optimización y predicción",
                text: "Modelos que anticipan comportamientos, optimizan campañas y mejoran la eficiencia operativa a partir de datos reales.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Procesos ágiles y escalables",
                text: "Optimizamos tus operaciones mediante automatización inteligente que elimina cuellos de botella y acelera el crecimiento del negocio.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Decisiones basadas en datos",
                text: "Integramos IA que transforma datos en insights accionables, permitiéndote tomar decisiones estratégicas con mayor precisión y menor riesgo.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Contenido generado con IA",
                text: "Automatizamos la creación de contenido para aumentar velocidad, consistencia y eficiencia, liberando al equipo para tareas de mayor impacto.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value4.webp`,
                mediaType: "image",
                title: "Eficiencia operativa optimizada",
                text: "Implementamos automatizaciones estratégicas que reducen errores, disminuyen costos y mejoran el rendimiento global de la operación.",
            },
        ]

    },
    briefSubmit: "Implementa IA en tu negocio",
    nextService: "crecimiento-y-expansion"
}