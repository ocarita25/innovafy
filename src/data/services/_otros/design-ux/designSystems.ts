import { Badges, People, Shield, Sparks } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/design-systems"

export const designSystemPage: ServicePageType =
{
    slug: "sistemas-diseño",
    heading: {
        pill: "Sistemas de diseño",
        title: "Diseño escalable",
        heroImage: `/videos/${path}/heroVideo.mp4`,
        mediaType: "video"
    },
    description: {
        title: "Acelerar el desarrollo de productos",
        subtitle: "Creamos sistemas de diseño integrales que ayudan a los equipos de producto a trabajar más rápido. Crea tu propia biblioteca de componentes y patrones reutilizables para mantener una imagen coherente en toda tu presencia digital.",
        capabilities: [
            {
                icon: People(),
                title: "Bases cubiertas",
                text: "Nuestras bibliotecas de componentes a medida combinan estética, usabilidad, accesibilidad y el estilo único de tu marca en todos tus sitios web y dispositivos.",
            },
            {
                icon: Sparks(),
                title: "Un enfoque personalizado",
                text: "Reconocemos que cada producto y proyecto es diferente. Trabajaremos con usted para determinar el mejor enfoque que se ajuste a su hoja de ruta de producto.",
            },
            {
                icon: Badges(),
                title: "Integral y consistente",
                text: "Nuestro equipo le proporcionará documentación detallada y comentada, que abarca el uso adecuado de sus tokens y patrones de diseño según las mejores prácticas actuales.",
            },
            {
                icon: Shield(),
                title: "Diseño galardonado",
                text: "Aproveche nuestro enfoque de diseño galardonado para ofrecer una imagen y una experiencia de usuario de primera clase en toda la presencia en línea o el producto digital de su organización.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Un lenguaje de diseño acorde con la marca",
                text: "Desarrolla tu propio lenguaje de diseño, basado en tu marca. Con una biblioteca de componentes a medida, que incluye elementos de interfaz de usuario modulares y patrones de diseño, podrás ofrecer a tu público una experiencia visual e interactiva coherente, independientemente de dónde se encuentren en tu ecosistema digital. Fomenta la confianza en la marca y facilita la navegación eliminando las barreras innecesarias que impiden a los visitantes llegar a donde necesitan ir.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Simplifica tus esfuerzos de diseño y desarrollo.",
                text: "Libera a tus equipos para que se centren en resolver problemas más complejos. Con una gran cantidad de recursos de diseño a tu disposición, tus equipos de diseño, desarrollo y contenido pueden crear y replicar componentes y patrones rápidamente y a gran escala, ahorrando horas en replantear ideas, rehacer trabajo y corregir inconsistencias accidentales.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Un estilo que perdura",
                text: "Como parte de su sistema de diseño, podemos ofrecerle una guía de estilo completa que abarca las mejores prácticas para el uso de los recursos de su biblioteca de componentes y de patrones, incluyendo la justificación de las decisiones de diseño específicas de su marca. El objetivo es crear un estilo perdurable, independientemente de quién utilice las herramientas o en qué parte del mundo se encuentre.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Hecho para humanos, con Humaan",
                text: "Detrás de cada producto de excelencia hay una colaboración estrecha entre agencia y cliente. Todo lo que creamos es totalmente personalizado, tan único como la historia que usted cuenta. Con un equipo interno de estrategas, diseñadores, desarrolladores y gestores de proyectos, podemos ofrecer diversas perspectivas, resultados impecables y un proceso de diseño y entrega verdaderamente colaborativo.",
            }
        ]
    },
    briefSubmit: "Sistemas de Diseño que escalan",
    nextService: "diseño-interfaz-usuario"
}