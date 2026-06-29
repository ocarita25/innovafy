import type { TierPlanType } from "../plans";

export const starterPlan: TierPlanType = {
    type: "plan",
    slug: "esencial",
    tier: "starter",
    title: "Esencial",
    tagline: "Presencia sólida para empezar a crecer",
    summary:
        "Ideal para emprendedores y negocios que necesitan verse profesionales y comenzar a generar tracción.",

    outcome: "Tu marca lista para salir al mercado con una base sólida.",

    sections: [
        {
            id: "social-management",
            title: "Gestión de redes sociales",
            description:
                "Administramos tus redes sociales de forma profesional, asegurando atención oportuna y comunicación constante con tu audiencia.",
            items: [
                "Community Manager para gestión de redes (Facebook e Instagram)",
                "Monitoreo y respuesta a mensajes",
                "Reunión mensual de seguimiento"
            ],
            media: "/images/plans/esencial/gestion-redes-sociales.webp",
            mediaType: 'image'
        },
        {
            id: "content-creation",
            title: "Creación de Contenido",
            description:
                "Planificamos y producimos contenido alineado a tu marca para mantener una presencia activa y coherente.",
            items: [
                "10 publicaciones mensuales (8 gráficas + 5 reels básicos)",
                "14 stories estratégicas mensuales",
                "Creación de contenido alineado a la identidad de marca",
                "Calendario de contenido mensual"
            ],
            media: "/images/plans/esencial/creacion-contenido.webp",
            mediaType: 'image'
        },
        {
            id: "visual-identity",
            title: "Identidad y Diseño",
            description:
                "Optimizamos la línea gráfica de tu marca para lograr una comunicación visual consistente y reconocible.",
            items: [
                "Mejora de estructura de diseño",
                "Optimización y explotación de la línea gráfica",
                "Banco de fotos y contenido audiovisual de apoyo"
            ],
            media: "/images/plans/esencial/identidad-diseno.webp",
            mediaType: 'image'
        },
        {
            id: "copy-seo",
            title: "Copywriting y Optimización",
            description:
                "Redactamos mensajes claros y atractivos que conectan con tu audiencia y mejoran el alcance orgánico.",
            items: [
                "Copywriting básico enfocado en atracción",
                "SEO básico aplicado a redes sociales"
            ],
            media: "/images/plans/esencial/copywriting-optimizacion.webp",
            mediaType: 'image'
        },
        {
            id: "reporting",
            title: "Seguimiento y Reportes",
            description:
                "Medimos resultados clave para evaluar el desempeño y orientar mejoras continuas.",
            items: [
                "Reporte mensual simple de resultados"
            ],
            media: "/images/plans/esencial/seguimiento-reportes.webp",
            mediaType: 'image'
        }
    ],

    deliverables: [
        "Marca con identidad clara",
        "Sitio web funcional y optimizado",
        "Mensaje coherente en todos los canales",
        "Base preparada para escalar"
    ],

    exclusions: [
        "Paid Media",
        "Automatización avanzada",
        "IA conversacional",
        "Data Intelligence avanzada"
    ],

    cta: {
        label: "Solicitar cotización",
        action: "contact"
    }
};
