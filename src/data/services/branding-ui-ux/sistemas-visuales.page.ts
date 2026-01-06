import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/branding-ui-ux/sistemas-visuales"

export const sistemasVisualesPage: ServicePageType =
{
    slug: "sistemas-visuales-digitales-y-corporativos",
    heading: {
        pill: "Sistemas Visuales Corporativos y Digitales",
        title: "Sistemas Visuales Corporativos y Digitales",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Una marca que se ve profesional, se percibe como profesional",
        subtitle: "Desarrollamos los sistemas visuales que representan a la marca en todos sus puntos de contacto.",
        capabilities: [
            {
                icon: World(),
                title: "Piezas gráficas para redes sociales",
                text: "Diseñamos contenidos visuales coherentes y alineados al ADN de la marca, optimizados para comunicar profesionalismo, claridad e impacto digital.",
            },
            {
                icon: People(),
                title: "Presentaciones comerciales",
                text: "Creamos presentaciones corporativas de alto nivel que refuerzan el discurso de venta, proyectan seriedad y elevan la percepción de valor de la empresa.",
            },
            {
                icon: Sparks(),
                title: "Papelería institucional",
                text: "Desarrollamos tarjetas, hojas membretadas, sobres y elementos corporativos que consolidan la identidad visual en entornos profesionales y formales.",
            },
            {
                icon: Rings(),
                title: "Dossiers corporativos",
                text: "Elaboramos documentos estratégicos para presentar servicios, propuestas y capacidades, combinando diseño limpio, narrativa clara y estructura comercial.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Comunicación visual consistente y profesional",
                text: "Establecemos lineamientos claros de diseño que aseguran coherencia visual, fortalecen la presencia de la marca y elevan su nivel profesional.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Sistema visual unificado",
                text: "Desarrollamos un sistema de diseño que ordena estilos, colores y estructuras, reforzando la identidad de marca y su reconocimiento en todos los puntos de contacto.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Identidad visual sólida en canales digitales y corporativos",
                text: "Aplicamos un diseño estandarizado que aporta personalidad, orden y coherencia tanto en redes sociales como en piezas institucionales.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `/images/${path}/value1.webp`,
        //         mediaType: "image",
        //         title: "Comunicación visual improvisada",
        //         text: "Muchas marcas crean piezas sin lineamientos ni consistencia, lo que genera una presencia poco profesional y mensajes visuales desconectados entre sí.",
        //     },
        //     {
        //         media: `/images/${path}/value2.webp`,
        //         mediaType: "image",
        //         title: "Inconsistencias de diseño",
        //         text: "La ausencia de un sistema visual unificado provoca variaciones en estilos, colores y estructuras, debilitando la identidad de marca y su reconocimiento.",
        //     },
        //     {
        //         media: `/images/${path}/value3.webp`,
        //         mediaType: "image",
        //         title: "Falta de identidad en redes y piezas corporativas",
        //         text: "Cuando no existe un diseño estandarizado, las plataformas digitales y materiales institucionales lucen desordenados y sin personalidad propia.",
        //     },
        // ]
    },
    briefSubmit: "Eleva tu imagen corporativa",
    nextService: "material-de-marca-y-diseno-de-merchandising"
}