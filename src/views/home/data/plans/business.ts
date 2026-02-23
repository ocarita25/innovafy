import type { TierPlanType } from "../plans";

export const businessPlan: TierPlanType = {
    type: "plan",
    slug: "premium",
    tier: "business",
    title: "Premium",
    tagline: "Performance, datos e inteligencia",
    summary:
        "Ideal para empresas consolidadas que buscan liderazgo, eficiencia operativa y decisiones basadas en datos.",

    outcome:
        "Un ecosistema inteligente que optimiza decisiones, automatiza procesos y sostiene el crecimiento.",

    sections: [
        {
            id: "dedicated-team",
            title: "Equipo Dedicado Multidisciplinario",
            description:
                "Asignamos un equipo especializado que trabaja de forma coordinada para tu marca.",
            items: [
                "Área dedicada de Community Management",
                "Diseño gráfico y producción audiovisual",
                "Soporte web y landing pages",
                "Coordinación estratégica avanzada"
            ],
            media: "/images/plans/premium/equipo-dedicado-multidisciplinario.webp",
            mediaType: 'image'
        },
        {
            id: "social-management",
            title: "Gestión Integral de Canales",
            description:
                "Administramos todos los canales clave para asegurar presencia, coherencia y crecimiento.",
            items: [
                "Gestión completa de redes sociales",
                "Optimización y gestión de Google My Business",
                "Monitoreo, respuestas y gestión de comunidad"
            ],
            media: "/images/plans/premium/gestion-integral-canales.webp",
            mediaType: 'image'
        },
        {
            id: "content-production",
            title: "Producción de Contenido Profesional",
            description:
                "Creamos contenido visual y audiovisual de alto nivel enfocado en storytelling y marca.",
            items: [
                "20 publicaciones mensuales (gráficas + reels o videos profesionales)",
                "30 stories estratégicas",
                "Contenido alineado a la identidad de marca",
                "Uso de equipo profesional (cámaras, luces, micrófonos)"
            ],
            media: "/images/plans/premium/produccion-contenido-profesional.webp",
            mediaType: "image",
        },
        {
            id: "visual-identity",
            title: "Identidad Visual y Branding",
            description:
                "Fortalecemos la identidad de marca con piezas visuales consistentes y memorables.",
            items: [
                "Optimización y explotación avanzada de la línea gráfica",
                "Branding y diseño de piezas para merchandising o promociones",
                "Soporte continuo de diseño"
            ],
            media: "/images/plans/premium/identidad-visual-branding.webp",
            mediaType: 'image'
        },
        {
            id: "photo-video",
            title: "Producción Fotográfica y Audiovisual",
            description:
                "Generamos material profesional reutilizable para campañas, lanzamientos y redes.",
            items: [
                "Sesión fotográfica profesional",
                "Clips de video extendidos",
                "Banco completo de fotos y contenido audiovisual reutilizable"
            ],
            media: "/images/plans/premium/produccion-fotografica-audiovisual.webp",
            mediaType: 'image'
        },
        {
            id: "ads-funnels",
            title: "Publicidad Digital y Embudos de Venta",
            description:
                "Diseñamos y gestionamos campañas orientadas a resultados y conversión.",
            items: [
                "Campañas en Meta Ads, Google Ads y TikTok Ads",
                "Estrategias de embudos de venta",
                "Campañas por temporada o lanzamientos"
            ],
            media: "/images/plans/premium/publicidad-digital-embudos-venta.webp",
            mediaType: 'image'
        },
        {
            id: "seo-optimization",
            title: "SEO Avanzado y Optimización",
            description:
                "Optimizamos la visibilidad y el rendimiento digital de forma continua.",
            items: [
                "SEO avanzado",
                "Optimización de activos digitales",
                "Soporte web continuo"
            ],
            media: "/images/plans/premium/seo-avanzado-optimizacion.webp",
            mediaType: 'image'
        },
        {
            id: "analytics-reporting",
            title: "Análisis, Métricas y ROI",
            description:
                "Medimos, analizamos y optimizamos cada acción para maximizar retorno.",
            items: [
                "Reporte mensual detallado de resultados",
                "Métricas de performance y ROI",
                "Insights estratégicos para toma de decisiones"
            ],
            media: "/images/plans/premium/analisis-metricas-roi.webp",
            mediaType: 'image'
        }
    ],

    deliverables: [
        "Decisiones basadas en datos reales",
        "Procesos automatizados y eficientes",
        "Ventaja competitiva sostenible",
        "Plataforma lista para expansión"
    ],

    exclusions: [
        "Implementaciones tácticas de corto plazo",
        "Servicios aislados sin estrategia",
        "Planes de bajo alcance"
    ],

    cta: {
        label: "Solicitar cotización",
        action: "contact"
    }
};
