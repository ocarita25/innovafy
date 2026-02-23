import type { TierPlanType } from "../plans";

export const professionalPlan: TierPlanType = {
    type: "plan",
    slug: "avanzado",
    tier: "professional",
    title: "Avanzado",
    tagline: "Estrategia y conversión para escalar",
    summary:
        "Ideal para marcas que necesitan un equipo creativo y estratégico dedicado, con foco en performance, lanzamientos y retorno de inversión.",

    outcome:
        "Un sistema de crecimiento activo que convierte tráfico en oportunidades reales.",

    sections: [
        {
            id: "social-management",
            title: "Gestión Integral de Redes Sociales",
            description:
                "Administramos de forma integral tus canales digitales, asegurando coherencia, presencia constante y atención profesional.",
            items: [
                "Community Manager y gestión de Facebook, Instagram, TikTok y Google My Business",
                "Monitoreo y respuesta a mensajes y comentarios",
                "Reuniones mensuales de planificación estratégica"
            ],
            media: "/images/plans/avanzado/gestion-integral-redes-sociales.webp",
            mediaType: 'image'
        },
        {
            id: "content-creation",
            title: "Producción de Contenido Estratégico",
            description:
                "Creamos contenido visual y audiovisual alineado a la identidad de tu marca y a los objetivos de crecimiento.",
            items: [
                "16 publicaciones mensuales (10 gráficas + 6-8 reels solo guion creativo)",
                "20 stories estratégicas mensuales",
                "Contenido visual y audiovisual con fotos profesionales",
                "Calendario de contenido mensual"
            ],
            media: "/images/plans/avanzado/produccion-contenido-estrategico.webp",
            mediaType: 'image'
        },
        {
            id: "visual-identity",
            title: "Identidad Visual y Producción Fotográfica",
            description:
                "Elevamos la percepción de tu marca mediante una identidad visual sólida y material profesional.",
            items: [
                "Mejora de estructura de diseño y sobreexplotación de la línea gráfica",
                "Sesión fotográfica profesional mensual (hasta 10 productos o ambientes)",
                "Banco de fotos y contenido audiovisual ampliado para redes",
                "Diseño gráfico acorde a la línea visual de la marca"
            ],
            media: "/images/plans/avanzado/identidad-visual-produccion-fotografica.webp",
            mediaType: 'image'
        },
        {
            id: "seo-positioning",
            title: "SEO y Posicionamiento Local",
            description:
                "Optimizamos tu presencia digital para mejorar visibilidad y alcance en búsquedas locales.",
            items: [
                "SEO optimizado aplicado a redes sociales",
                "Estrategias de posicionamiento local",
                "Optimización de perfiles y fichas locales"
            ],
            media: "/images/plans/avanzado/seo-posicionamiento-local.webp",
            mediaType: 'image'
        },
        {
            id: "ads-funnels",
            title: "Publicidad Digital y Embudos",
            description:
                "Activamos campañas publicitarias y estructuramos embudos para atraer y segmentar audiencias.",
            items: [
                "Publicidad Meta Ads (campañas mínimas de tráfico, engagement o captación local)",
                "Estrategia de embudo",
                "Segmentación por públicos"
            ],
            media: "/images/plans/avanzado/publicidad-digital-embudos.webp",
            mediaType: 'image'
        },
        {
            id: "analytics-reporting",
            title: "Métricas, Análisis y Optimización",
            description:
                "Analizamos datos y métricas clave para optimizar decisiones y resultados.",
            items: [
                "Uso de herramientas profesionales y CRM internos",
                "Reporte mensual detallado",
                "Análisis de performance y recomendaciones"
            ],
            media: "/images/plans/avanzado/metricas-analisis-optimizacion.webp",
            mediaType: 'image'
        }
    ],

    deliverables: [
        "Flujo constante de oportunidades",
        "Sistema de ventas optimizado",
        "Mayor conversión y eficiencia",
        "Crecimiento medible con KPIs claros"
    ],

    exclusions: [
        "IA Business avanzada",
        "ABM Intelligence avanzada",
        "Data Intelligence en tiempo real",
        "Aplicaciones móviles"
    ],

    cta: {
        label: "Solicitar cotización",
        action: "contact"
    }
};
