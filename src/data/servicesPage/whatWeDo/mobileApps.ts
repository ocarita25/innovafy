import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/mobile-apps"

export const mobileAppsPage: ServicePageType =
{
    slug: "aplicaciones-moviles",
    heading: {
        pill: "Aplicaciones Móviles",
        title: "Diseñamos, desarrollamos y lanzamos aplicaciones móviles increíbles",
        heroImage: `/videos/${path}/heroVideo.mp4`,
        mediaType: "video"
    },
    description: {
        title: "Diseñado para tocar",
        subtitle: "Desarrollo de aplicaciones a medida para iOS y Android - realizado íntegramente internamente.",
        capabilities: [
            {
                icon: "",
                title: "La tecnología adecuada",
                text: "Promovemos un conjunto de tecnologías robustas, seleccionadas por su máxima flexibilidad y utilidad en cualquier situación. Nuestro stack preferido incluye Swift, Java y React Native.",
            },
            {
                icon: "",
                title: "Experiencias prácticas",
                text: "Diseñamos experiencias móviles atractivas e inmersivas que deleitan a los usuarios a la vez que resuelven problemas empresariales y mantienen su marca en primera línea.",
            },
            {
                icon: "",
                title: "No solo una cara bonita",
                text: "Como en cualquier producto digital, el rendimiento, la accesibilidad y la usabilidad son fundamentales. Nos esforzamos al máximo para garantizar que todas las aplicaciones tengan un aspecto y un funcionamiento óptimos para todos.",
            },
            {
                icon: "",
                title: "Integrado",
                text: "Una aplicación móvil es solo una parte de su ecosistema digital. Incorporamos integraciones de API seguras para garantizar un funcionamiento impecable en toda su empresa.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Desde MVP hasta la versión completa",
                text: "Tanto si eres una startup que busca revolucionar el mercado como si eres una empresa consolidada que desea expandir su presencia digital, podemos crear una aplicación móvil escalable, robusta y segura que satisfaga y deleite a tus usuarios.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Experiencias de cliente personalizadas",
                text: "Nuestras aplicaciones se adaptan a las necesidades del público, ofreciendo experiencias atractivas que se ajustan a su comportamiento y uso. Centrados en experiencias de usuario excepcionales, transformamos ideas en herramientas poderosas para la interacción con el cliente y la fidelización a la marca.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "iOS and Android",
                text: "Combinando un diseño innovador, una funcionalidad robusta y una impecable experiencia de usuario, creamos aplicaciones iOS y Android de primera clase, utilizando tanto tecnologías nativas como marcos de trabajo móviles para adaptarnos a los requisitos únicos de cada producto.",
            }
        ]
    },
    briefSubmit: "Hablemos de Aplicaciones Móviles",
    nextService: "aplicaciones-web"
}