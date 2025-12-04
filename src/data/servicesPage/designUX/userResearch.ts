import { Bubbles, DotDiagram, Sparks, Wand } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/user-research"

export const userReasearchPage: ServicePageType =
{
    slug: "investigacion-validacion-usuarios",
    heading: {
        pill: "Investigación y validación de usuarios",
        title: "Los fundamentos estratégicos conducen a mejores resultados.",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Investigación y validación de usuarios",
        subtitle: "Parte fundamental de nuestro enfoque es una fase exhaustiva de investigación de usuarios, que consiste en descubrir las necesidades de la audiencia, tanto generales como específicas, a través de investigación cuantitativa y cualitativa.",
        capabilities: [
            {
                icon: DotDiagram(),
                title: "Qué, por qué y cómo",
                text: "Obtenga información clara sobre los objetivos y puntos débiles de la audiencia objetivo, determinando los desafíos y necesidades clave para desarrollar un mejor producto.",
            },
            {
                icon: Bubbles(),
                title: "Pruebas A/B",
                text: "Basándonos en años de experiencia en la creación de productos para personas, podemos diseñar pruebas que exploren específicamente qué es lo que más atrae a sus clientes.",
            },
            {
                icon: Wand(),
                title: "Entrevistas con usuarios",
                text: "Nuestro enfoque incluye entrevistas con usuarios más personalizadas y grupos de discusión para profundizar en los patrones generales descubiertos en las etapas iniciales de las pruebas de usuario.",
            },
            {
                icon: Sparks(),
                title: "Informe completo",
                text: "Cada actividad de investigación proporciona información para un conjunto completo de recomendaciones y especificaciones, adecuadas para las partes interesadas del proyecto en todos los niveles organizativos.",
            },
        ],
        valuePropositions: [
            {
                media: `/videos/${path}/value1.mp4`,
                mediaType: "video",
                title: "Diversas investigaciones y pruebas con usuarios",
                text: "Nuestro equipo emplea una selección diversa y personalizada de métodos de investigación cuantitativos y cualitativos, adaptados a las necesidades de su proyecto. Esto puede incluir entrevistas con usuarios, encuestas, talleres con las partes interesadas, grupos focales y análisis de datos en las primeras etapas de descubrimiento, seguidos de pruebas de usabilidad, pruebas de concepto, clasificación de tarjetas y más en los hitos clave de la implementación.",
            },
            {
                media: `/videos/${path}/value2.mp4`,
                mediaType: "video",
                title: "Diseña una experiencia de producto intuitiva",
                text: "Los datos fundamentan cada decisión de diseño que tomamos, una estrategia vital para crear sitios web de comercio electrónico, aplicaciones web funcionales y procesos de conversión como registros, inscripciones y pagos. Mediante métodos de validación como pruebas de árbol, pruebas A/B dirigidas y pruebas de usabilidad, podemos determinar los flujos de trabajo más claros e intuitivos para su público.",
            },
            {
                media: `/videos/${path}/value3.mp4`,
                mediaType: "video",
                title: "Análisis e informes de datos significativos",
                text: "Podemos elaborar un informe con los resultados de nuestra investigación, adaptado a las necesidades de su proyecto, sus partes interesadas y su organización. La mayoría de nuestros clientes solicitan conceptos de diseño, complementados con análisis e información estadística, pero nuestro equipo también puede ofrecer una revisión y un análisis exhaustivos, con una lista completa de recomendaciones sobre las mejores prácticas.",
            },
            {
                media: `/videos/${path}/value4.mp4`,
                mediaType: "video",
                title: "Asociaciones gratificantes",
                text: "Detrás de cada producto de primera categoría hay una colaboración estrecha entre la agencia y el cliente. Con un equipo interno de estrategas, diseñadores, desarrolladores y gestores de proyectos, podemos ofrecer diversas perspectivas, resultados impecables y un proceso verdaderamente colaborativo, independientemente del sector en el que opere.",
            }
        ]
    },
    briefSubmit: "Comprende a tu público",
    nextService: "diseño-experiencia-usuario"

}