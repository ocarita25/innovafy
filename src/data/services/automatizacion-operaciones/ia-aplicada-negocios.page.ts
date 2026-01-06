import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/commercial"

export const iaAplicadaNegociosPage: ServicePageType =
{
    slug: "inteligencia-artificial-aplicada-negocios",
    heading: {
        pill: "Inteligencia Artificial Aplicada a los Negocios",
        title: "Inteligencia Artificial Aplicada a los Negocios",
        heroImage: `/images/${path}/heroImage.webp`,
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
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Procesos lentos",
                text: "Tareas operativas consumen tiempo y recursos, generando cuellos de botella que frenan el crecimiento del negocio.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Decisiones sin datos",
                text: "La intuición reemplaza el análisis, aumentando el riesgo y limitando la escalabilidad; la IA convierte datos en insights accionables.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Producción de contenido manual",
                text: "La creación de contenido consume horas del equipo, reduciendo velocidad y eficiencia operativa.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Baja eficiencia operativa",
                text: "La falta de automatización genera errores, sobrecarga y procesos costosos que afectan el rendimiento global.",
            },
        ]
    },
    briefSubmit: "Implementa IA en tu negocio",
    nextService: "crecimiento-y-expansion"
}