import { Crossrows, DotDiagram, Loop, Sparks } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD, servicesVidCLOUD } from "@/constants/resources";

const slug = "ai-automation"

export const aiAtuomationPage: ServicePageType = {
    slug: "ia-automatizacion",
    heading: {
        pill: "IA & Automatización",
        title: "Posiciona tu negocio en la vanguardia tecnológica.",
        heroImage: `${servicesVidCLOUD}/${slug}/heroVideo.mp4`,
        mediaType: "video"
    },
    description: {
        title: "Experiencias digitales de próxima generación",
        subtitle: "Desde flujos de trabajo de contenido inteligentes hasta análisis predictivos e integraciones personalizadas, ayudamos a las organizaciones a aprovechar la IA de forma responsable para mejorar el rendimiento, reducir el esfuerzo manual y crear experiencias digitales más inteligentes.",
        capabilities: [
            {
                icon: Crossrows(),
                title: "Flujos de trabajo inteligentes",
                text: "Automatice tareas repetitivas como el etiquetado de contenido, la entrada de datos, el procesamiento de medios y los flujos de trabajo manuales para optimizar las operaciones y ahorrar tiempo.",
            },
            {
                icon: Sparks(),
                title: "Experiencias mejoradas",
                text: "Utilice la IA para ofrecer recomendaciones personalizadas, búsquedas más inteligentes e interfaces conversacionales que involucren a los usuarios de manera significativa.",
            },
            {
                icon: DotDiagram(),
                title: "Perspectivas basadas en datos",
                text: "Aproveche el aprendizaje automático para visualizar datos, descubrir tendencias, tomar mejores decisiones y predecir las necesidades de los clientes antes de que surjan.",
            },
            {
                icon: Loop(),
                title: "Prototipado rápido",
                text: "Utiliza herramientas de IA para probar hipótesis, validar nuevas ideas y explorar nuevos horizontes con tu audiencia. De cero a MVP en tan solo 4 semanas.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Automatizar operaciones",
                text: "Libera a tu equipo de procesos manuales repetitivos e impulsa tu negocio con automatización basada en IA, diseñada para optimizar las operaciones y mejorar la precisión. Desde la entrada de datos y el etiquetado de contenido hasta la calificación de clientes potenciales y las comunicaciones internas, la automatización reduce el error humano y agiliza la entrega. Creamos flujos de trabajo inteligentes e integrados que conectan tus sistemas, simplifican la toma de decisiones y permiten que tu personal se concentre en lo que realmente importa.",
            },
            {
                media: `${servicesVidCLOUD}/${slug}/value2.mp4`,
                mediaType: "video",
                title: "Innovación a la carta",
                text: "Al combinar el pensamiento creativo con la experiencia técnica, ayudamos a las organizaciones a explorar las posibilidades: descubriendo nuevas ideas de productos, servicios más inteligentes y modelos de negocio innovadores. Nuestro enfoque colaborativo ayuda a los equipos a experimentar, crear prototipos y escalar ideas con la seguridad de que están respaldadas por datos reales y tecnología de vanguardia.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Plataformas y herramientas",
                text: "Colaboramos con plataformas líderes de IA como Google, OpenAI y Anthropic para impulsar soluciones inteligentes, seguras y escalables. Al mismo tiempo, exploramos tecnologías emergentes y herramientas innovadoras que desafían los límites de lo posible. Nuestro enfoque combina una fiabilidad probada con la innovación en sus primeras etapas, aunando una infraestructura de confianza con la agilidad necesaria para experimentar, prototipar y adaptarnos.",
            },
            {
                media: `${servicesVidCLOUD}/${slug}/value4.mp4`,
                mediaType: "video",
                title: "Preparado para el futuro",
                text: "El panorama digital evoluciona rápidamente. Nuestras soluciones están diseñadas para crecer con su organización, con especial atención a las arquitecturas flexibles, la gobernanza transparente y el uso ético de la IA. Creamos sistemas que se adaptan a nuevos modelos, integran herramientas emergentes y escalan al ritmo de sus ambiciones. El resultado es una infraestructura digital eficiente hoy y preparada para el futuro.",
            }
        ]
    },
    briefSubmit: "Impúlsate con la IA",
    nextService: "investigacion-validacion-usuarios"
}