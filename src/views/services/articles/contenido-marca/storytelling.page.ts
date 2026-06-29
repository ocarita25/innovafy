import { People, Rings, Sparks, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";
import { servicesImgCLOUD } from "@/constants/resources";

const slug = "contenido-marca/brand-storytelling"

export const storytellingPage: ServicePageType =
{
    slug: "estrategia-narrativa-y-brand-storytelling",
    heading: {
        pill: "Narrative Strategy & Brand Storytelling",
        title: "Narrative Strategy & Brand Storytelling",
        heroImage: `${servicesImgCLOUD}/${slug}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Las marcas que conectan emocionalmente construyen comunidad",
        subtitle: "Construimos la narrativa estratégica de la marca para conectar emocionalmente con el público, generar recordación y diferenciación.",
        capabilities: [
            {
                icon: World(),
                title: "Storytelling de marca",
                text: "Creamos relatos estratégicos que transmiten propósito, personalidad y esencia, fortaleciendo la conexión emocional y la identidad de la marca.",
            },
            {
                icon: People(),
                title: "Guiones estratégicos",
                text: "Desarrollamos guiones creativos y estructurados para videos, anuncios y contenido, asegurando mensajes claros, persuasivos y alineados a la marca.",
            },
            {
                icon: Sparks(),
                title: "Tono de comunicación",
                text: "Definimos la voz y estilo comunicacional para garantizar coherencia en todos los puntos de contacto, desde redes sociales hasta piezas corporativas.",
            },
            {
                icon: Rings(),
                title: "Arquitectura de mensajes",
                text: "Organizamos los mensajes clave en niveles estratégicos, permitiendo comunicar con claridad valores, beneficios, promesas y diferenciadores.",
            },
        ],
        valuePropositions: [
            {
                media: `${servicesImgCLOUD}/${slug}/value1.webp`,
                mediaType: "image",
                title: "Identidad discursiva clara y coherente",
                text: "Construimos un relato de marca sólido que define quién eres, qué representas y por qué tu marca importa, fortaleciendo tu posicionamiento en el mercado.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value2.webp`,
                mediaType: "image",
                title: "Mensajes con impacto y propósito",
                text: "Desarrollamos una narrativa estructurada que potencia la comunicación, transmite valor de forma clara y capta la atención de tu audiencia.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value3.webp`,
                mediaType: "image",
                title: "Comunicación ordenada y consistente",
                text: "Establecemos una guía narrativa central que asegura coherencia en todos los puntos de contacto, reforzando la profesionalización y credibilidad de la marca.",
            },
            {
                media: `${servicesImgCLOUD}/${slug}/value4.webp`,
                mediaType: "image",
                title: "Conexión auténtica con tu audiencia",
                text: "Aplicamos storytelling estratégico para generar vínculos emocionales, aumentar la afinidad, la confianza y la recordación de tu marca.",
            },
        ]
        // valuePropositions: [
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value1.webp`,
        //         mediaType: "image",
        //         title: "Marcas sin identidad discursiva",
        //         text: "Muchas marcas no cuentan con un relato coherente que defina quiénes son, qué representan y por qué importan, dificultando su posicionamiento.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value2.webp`,
        //         mediaType: "image",
        //         title: "Mensajes sin impacto",
        //         text: "La comunicación pierde fuerza cuando no existe una narrativa estructurada, afectando la capacidad de transmitir valor y captar la atención del público.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value3.webp`,
        //         mediaType: "image",
        //         title: "Comunicación desordenada",
        //         text: "Sin una guía narrativa central, los mensajes se vuelven inconsistentes, generando confusión y debilitando la percepción de profesionalismo de la marca.",
        //     },
        //     {
        //         media: `${servicesImgCLOUD}/${slug}/value4.webp`,
        //         mediaType: "image",
        //         title: "Falta de conexión con la audiencia",
        //         text: "La ausencia de storytelling limita la capacidad de generar vínculos emocionales, reduciendo la afinidad, confianza y recordación del usuario.",
        //     },
        // ]
    },
    briefSubmit: "Construye una marca con voz propia",
    nextService: "produccion-contenido-profesional"
}