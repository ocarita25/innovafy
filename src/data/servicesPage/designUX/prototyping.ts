import { Aim, FingerPrint, Hand, Target } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/prototyping"

export const prototypingPage: ServicePageType =
{
    slug: "prototipado",
    heading: {
        pill: "Prototipado",
        title: "Prototipos digitales para dar vida a tus ideas",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Diseñar, prototipar, validar",
        subtitle: "Valida tus ideas antes de crear tu MVP. Nuestro equipo cuenta con más de 15 años de experiencia en prototipado digital como parte de un proceso integral de desarrollo y diseño de productos.",
        capabilities: [
            {
                icon: Aim(),
                title: "Alta fidelidad",
                text: "Convertiremos tus bocetos en servilletas en wireframes complejos y de alta fidelidad, tanto si buscas conceptos detallados como un prototipo interactivo funcional.",
            },
            {
                icon: FingerPrint(),
                title: "Validación de la audiencia",
                text: "Crea rápidamente un producto de prueba con lo mínimo indispensable. Obtén respuestas directamente de tu público objetivo para poder desarrollar un MVP mejorado.",
            },
            {
                icon: Target(),
                title: "Confidencialidad garantizada",
                text: "Nuestros procesos respetuosos con la privacidad y nuestros sistemas seguros ayudan a proteger su propiedad intelectual, junto con cualquier información confidencial que comparta con nosotros sobre su proyecto.",
            },
            {
                icon: Hand(),
                title: "Tu socio de diseño",
                text: "Colaboraremos contigo para ofrecerte prototipos digitales de alta calidad que te servirán de base para el desarrollo de tu producto. Nuestro equipo de expertos te acompañará en todo el proceso.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Mockups, wireframes & prototipos interactivos",
                text: "Sin importar el tamaño de su empresa, podemos ayudarle a preparar conceptos de alta fidelidad y prototipos digitales para respaldar el desarrollo de su producto. Potencie sus presentaciones ante inversores y otras partes interesadas con prototipos interactivos que demuestren los conceptos clave que definen su iniciativa.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Unir equipos de producto multidisciplinarios",
                text: "La creación de prototipos digitales canaliza tus conceptos de alto nivel en puntos de referencia únicos y de gran impacto, reuniendo a equipos de producto multidisciplinarios y a las partes interesadas, lo que reduce la ambigüedad y la falta de comunicación. Proporciona documentación definitiva a la que tu equipo pueda recurrir durante todo el ciclo de vida del proyecto.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Obtén comentarios reales de la audiencia",
                text: "Utiliza prototipos digitales para realizar pruebas con usuarios reales, ya sea con una audiencia existente o invitando a nuevos usuarios de un segmento demográfico objetivo. Valida las hipótesis clave del producto y observa cómo tus usuarios comprenden la plataforma para encontrar la solución adecuada antes de comprometerte con el lanzamiento completo del proyecto.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Tu socio de diseño de productos",
                text: "Detrás de cada producto de primera categoría hay una colaboración estrecha entre agencia y cliente. Colaboraremos contigo para entregar los prototipos esenciales para tu proyecto inicial, o te acompañaremos durante todo el proceso de desarrollo del producto. Con un equipo interno de estrategas, diseñadores, desarrolladores y gestores de proyectos, podemos ofrecerte diversas perspectivas, un prototipado y desarrollo de producto impecables, y un proceso de diseño y entrega verdaderamente colaborativo.",
            },
        ]
    },
    briefSubmit: "Listo para Prototipar?",
    nextService: "sistemas-diseño"
}