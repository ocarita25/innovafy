import { DotDiagram, Rings, Shield, World } from "@/assets/icons/services";
import type { ServicePageType } from "@/types/ServicePage.types";

const path = "services/experiencia/sin-fines-de-lucro"

export const sinFineLucroPage: ServicePageType =
{
    slug: "sin-fines-de-lucro",
    heading: {
        pill: "Sin fines de lucro",
        title: "Potenciar la participación, el impacto y las donaciones",
        heroImage: `/images/${path}/heroImage.webp`,
        mediaType: "image"
    },
    description: {
        title: "Alto impacto para ONG y ASFL",
        subtitle: "Nuestra amplia experiencia con organizaciones sin fines de lucro en los ámbitos de la salud, la beneficencia y el gobierno garantiza que nuestros productos digitales satisfagan las necesidades de nuestros clientes y ayuden a quienes más lo necesitan.",
        capabilities: [
            {
                icon: Rings(),
                title: "Apoyo a la recaudación de fondos",
                text: "Acelere la recaudación de fondos con experiencias de donación intuitivas que se integran perfectamente con su CRM, impulsando las conversiones y simplificando la administración.",
            },
            {
                icon: World(),
                title: "Amplificar el impacto",
                text: "Crea impacto y genera confianza a través de un diseño y una narrativa bien pensados, animando a un público comprometido a apoyar la misión de tu organización.",
            },
            {
                icon: DotDiagram(),
                title: "Actuación",
                text: "Centraliza todos los requisitos e integraciones en una plataforma fácil de usar que te permita operar de manera eficiente, escalar con la demanda e impulsar el retorno de la inversión en marketing.",
            },
            {
                icon: Shield(),
                title: "Privado y seguro",
                text: "Le brindamos tranquilidad. La privacidad y la seguridad son nuestra máxima prioridad, manteniendo a salvo los datos de su organización y de sus clientes.",
            },
        ],
        valuePropositions: [
            {
                media: `/images/${path}/value1.webp`,
                mediaType: "image",
                title: "Aumentar las donaciones y la fidelidad de los simpatizantes",
                text: "Las experiencias memorables son fundamentales para generar confianza entre una organización y su público. Fomenta la conexión emocional con tus seguidores mediante un diseño cuidado y de gran impacto. Impulsa las donaciones con una experiencia de usuario excepcionalmente sencilla.",
            },
            {
                media: `/images/${path}/value2.webp`,
                mediaType: "image",
                title: "Resultados tangibles con menos esfuerzo",
                text: "Nos apasiona ofrecer productos digitales intuitivos, sencillos y prácticos. Nuestras soluciones, diseñadas específicamente para este fin, se integran fácilmente en el flujo de trabajo de nuestros clientes, facilitando la transición a una plataforma más eficiente y la obtención de resultados tangibles.",
            },
            {
                media: `/images/${path}/value3.webp`,
                mediaType: "image",
                title: "Una plataforma para el crecimiento",
                text: "Con años de experiencia en el sector sin fines de lucro, sabemos qué funciona: crear plataformas digitales que conecten con los usuarios y, al mismo tiempo, impulsen el crecimiento y los objetivos de la organización. Implementamos estrategias digitales efectivas que superan las expectativas del negocio y ofrecemos soluciones que fomentan el crecimiento continuo, reduciendo la carga administrativa. ¿Necesita integración personalizada de CRM, SSO, seguimiento de donaciones o búsquedas complejas? No hay problema.",
            },
            {
                media: `/images/${path}/value4.webp`,
                mediaType: "image",
                title: "Generar claridad, impulsar el impacto",
                text: "Una narrativa clara y bien definida impulsa su misión, inspira acciones y genera impacto. Desde plataformas de donación hasta portales de investigación, nuestros diseños son intuitivos, accesibles y se alinean con los objetivos de su organización, garantizando que cada interacción digital contribuya significativamente a su causa y potencie su capacidad para marcar la diferencia.",
            }
        ]
    },
    briefSubmit: "Reimagina la experiencia digital de tu organización sin fines de lucro",
    nextService: "comunidad"
}