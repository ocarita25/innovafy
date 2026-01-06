import { Eye, Group, Target, Thunder } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/experiencia/comunidad"

export const comunidadPage: ServicePageType =
{
    slug: "comunidad",
    heading: {
        pill: "Comunidad",
        title: "Experiencias interactivas y con propósito",
        heroImage: `/videos/${path}/heroVideo.mp4`,
        mediaType: "video"
    },
    description: {
        title: "Una fuerza para el bien",
        subtitle: "Combinando una experiencia de usuario galardonada, un diseño atractivo y mensajes significativos, nuestros productos digitales de primera clase siguen sirviendo a la comunidad.",
        capabilities: [
            {
                icon: Target(),
                title: "Alto impacto",
                text: "Crea impacto y genera confianza a través de un diseño y una narrativa bien pensados, alentando a la comunidad en general a apoyar la misión de tu organización.",
            },
            {
                icon: Group(),
                title: "Conciencia del conductor",
                text: "Difundir conocimientos vitales y mensajes que cambien el mundo a través de interacciones digitales innovadoras e inmersivas, diseñadas para educar e inspirar a la acción.",
            },
            {
                icon: Eye(),
                title: "Experiencias reales",
                text: "Desde senderos naturales hasta galerías de arte, podemos transformar fascinantes aventuras del mundo real en atractivas experiencias digitales que conecten con tu público.",
            },
            {
                icon: Thunder(),
                title: "Flexible y confiable",
                text: "Cada sitio web y aplicación que desarrollamos busca la máxima flexibilidad, seguridad y rendimiento, asegurando que pueda escalar con la demanda y satisfacer sus necesidades a medida que evolucionan.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Aprovechar lo digital para un cambio positivo",
                text: "Crea una conexión emocional con tu público mediante un diseño reflexivo y de gran impacto. Transforma investigaciones complejas e historias fascinantes en experiencias digitales intuitivas y atractivas, con el objetivo de concienciar e impulsar la acción.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Productos personalizados para experiencias únicas",
                text: "Cada producto que creamos es totalmente personalizado, tan único como la historia que quieres contar. Combinamos diseño y experiencia de usuario galardonados, tecnología de vanguardia y contenido estratégico para ofrecer a tu público un producto digital excepcional, visualmente atractivo y con gran capacidad de conexión.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Una verdadera colaboración, de principio a fin",
                text: "Con un equipo interno de estrategas, diseñadores, desarrolladores y gestores de proyectos, podemos ofrecer resultados finales impecables y una colaboración genuina con nuestros clientes, independientemente de la comunidad a la que presten sus servicios.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Innovar más allá del folleto",
                text: "Ya sea que busques generar visitas o compartir mensajes impactantes basados ​​en datos, podemos crear experiencias interactivas integrales que incorporen narración de datos, experiencias móviles, funcionalidades de comercio electrónico, integraciones de back-office y más, todo ello diseñado específicamente para tu proyecto único.",
            }
        ]
    },
    briefSubmit: "Productos digitales con propósito",
    nextService: "sin-fines-de-lucro"
}