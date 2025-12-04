import { Aim, Digital, Shield, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/web-applications"

export const webAppsPage: ServicePageType =
{
    slug: "aplicaciones-web",
    heading: {
        pill: "Aplicaciones Web",
        title: "Plataformas digitales personalizadas, desde la idea hasta la ejecución",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Construido según especificaciones",
        subtitle: "Diseñamos y desarrollamos aplicaciones web a medida para satisfacer las necesidades de las operaciones comerciales.",
        capabilities: [
            {
                icon: Aim(),
                title: "Hecho a medida",
                text: "Combinamos conocimientos, datos y nuestra profunda experiencia para alinearnos con su visión, creando una plataforma totalmente personalizada que se adapte a las necesidades de su negocio y su público.",
            },
            {
                icon: World(),
                title: "Diseño y experiencia de usuario de primera clase",
                text: "Nuestro enfoque de diseño y UX, galardonado con múltiples premios, guía cada concepto, solución creativa, decisión clave y prototipo para impulsar su marca.",
            },
            {
                icon: Shield(),
                title: "Robusto, Seguro, Flexible",
                text: "Nuestro conjunto principal de tecnologías preferidas busca la máxima flexibilidad, seguridad y rendimiento, garantizando que los resultados finales sigan satisfaciendo sus necesidades a largo plazo.",
            },
            {
                icon: Digital(),
                title: "Socios Digitales",
                text: "Creemos en relaciones, servicio y soporte excepcionales para nuestros clientes. Nuestro compromiso es a largo plazo para mantener su ventaja competitiva y garantizar su éxito continuo.",
            },
        ],
        valuePropositions: [
            {
                media: `/videos/${path}/value1.mp4`,
                mediaType: "video",
                title: "Ready for scale",
                text: "A medida que su negocio evoluciona, también lo harán sus necesidades tecnológicas. Implementamos una combinación práctica de soluciones probadas y tecnologías de vanguardia para crear aplicaciones que se adaptan y expanden sin esfuerzo. Sea relevante hoy y manténgase relevante en el futuro.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "From startups to enterprise",
                text: "Trabajamos con clientes de todos los tamaños, desde startups con gran potencial de crecimiento hasta empresas consolidadas que buscan optimizar su infraestructura digital. Nuestras aplicaciones web, diseñadas a medida y desarrolladas específicamente para cada necesidad, impulsan el éxito empresarial en todas sus etapas.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Entirely bespoke",
                text: "Las empresas únicas requieren soluciones únicas. Desde plataformas de comercio electrónico hasta automatización, trabajamos con cada socio para diseñar, implementar y desarrollar aplicaciones web a medida que se integran con sus sistemas empresariales existentes.",
            }
        ]
    },
    briefSubmit: "Experiencias Digitales Extraordinarias",
    nextService: "laravel"
}