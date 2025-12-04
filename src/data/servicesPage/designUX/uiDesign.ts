import { Badges, Hand, Monitor, Wand } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/ui-design"

export const uiDesignPage: ServicePageType =
{
    slug: "diseño-interfaz-usuario",
    heading: {
        pill: "Diseño de interfaz de usuario",
        title: "Interfaz de usuario de vanguardia diseñada para tu aplicación.",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Interfaces de usuario personalizadas",
        subtitle: "Combinando la estética humana con el diseño funcional, adoptamos un enfoque sistematizado para diseñar interfaces de usuario prácticas e intuitivas.",
        capabilities: [
            {
                icon: Badges(),
                title: "Diseño de interfaz de usuario probado",
                text: "Nuestro enfoque de diseño de interfaz de usuario, galardonado con múltiples premios, guía cada concepto, solución de interfaz, decisión clave y prototipo para ayudarle a lograr lo que necesita.",
            },
            {
                icon: Monitor(),
                title: "Digital Dashboards",
                text: "Aproveche las mejores prácticas de diseño de interfaces y el pensamiento de diseño centrado en el usuario para crear experiencias sencillas e intuitivas para datos y escenarios complejos.",
            },
            {
                icon: Wand(),
                title: "Sistema de diseño",
                text: "Nuestro equipo puede proporcionar un sistema de diseño integral y una guía de estilo, capacitando a sus equipos internos para ofrecer una coherencia de interfaz de usuario a largo plazo y a gran escala.",
            },
            {
                icon: Hand(),
                title: "Tu socio de diseño",
                text: "Creemos en relaciones, servicio y soporte excepcionales para nuestros clientes. Colaboraremos con usted para garantizar resultados de primer nivel y un éxito continuo.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Informes y paneles de control atractivos",
                text: "Obtenga información valiosa a partir de datos sin procesar con experiencias interactivas visualmente atractivas y puntos de contacto consolidados. Diseñamos y creamos interfaces de usuario basadas en datos para cualquier objetivo, desde informes inmersivos para el público general hasta herramientas y paneles internos personalizados que apoyan e informan a sus grupos de interés.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Una experiencia de producto intuitiva",
                text: "Los datos fundamentan cada decisión de diseño de interfaz que tomamos, una estrategia vital al crear herramientas digitales para flujos de trabajo de información complejos. Mediante métodos de investigación cuantitativos y cualitativos, podemos determinar los diseños de interfaz de usuario más claros e intuitivos para su propósito y encontrar la ruta óptima para lograr los objetivos del usuario.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Interfaces humanas",
                text: "Comprendemos cómo trabajan las personas. Desde procesos de pago en comercio electrónico hasta herramientas de personalización detalladas, nuestro enfoque sistemático de diseño de interfaz de usuario ha generado resultados dinámicos y preparados para el futuro en industrias tradicionales y emergentes. Con más de 15 años de experiencia creando productos digitales para personas, conocemos los detalles que marcan la diferencia.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Tu socio de diseño de interfaz de usuario",
                text: "Detrás de cada producto de primera categoría hay una colaboración estrecha entre la agencia y el cliente. Todo lo que creamos es totalmente personalizado, tan único como la historia que usted cuenta. Con un equipo interno de estrategas, diseñadores, desarrolladores y gestores de proyectos, podemos ofrecer diversas perspectivas, experiencias de usuario fluidas y un proceso de diseño y entrega verdaderamente colaborativo.",
            }
        ]
    },
    briefSubmit: "Listo para subir de nivel tu IU?",
    nextService: "sistemas-diseño"
}