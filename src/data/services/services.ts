import { dataVissPage } from "./plataformas-web/visualizacion-datos.page";
import { mobileAppsPage } from "./plataformas-web/aplicaciones-moviles.page";
import { webAppsPage } from "./plataformas-web/aplicaciones-web.page";
import { headlessPage } from "./plataformas-web/headless.page";
import { reactPage } from "./plataformas-web/react-js.page";
import { payloadPage } from "./plataformas-web/payload-cms.page";
import { comercialPage } from "./experiencia/comercial.page";
import { sinFineLucroPage } from "./experiencia/sin-fines-de-lucro.page";
import { innovacionStartupsPage } from "./experiencia/innovacion-startups.page";
import { educacionPage } from "./experiencia/educacion.page";
import { comunidadPage } from "./experiencia/comunidad.page";
import { crecimientoPage } from "./growth-performance/growthExpansion";
import { posicionamientoPage } from "./growth-performance/posicionamiento";
import { sistemasVentasPage } from "./growth-performance/sistemaVentas";
import { paidMediaPage } from "./growth-performance/paidMedia";
import { abmIntelligencePage } from "./growth-performance/abmIntelligence";
import { fidelidadPage } from "./growth-performance/fidelidadRetencion";
import { dataIntelligencePage } from "./growth-performance/dataIntelligence";
import { storytellingPage } from "./contenido-marca/storytelling.page";
import { contenidoProfesionalPage } from "./contenido-marca/contenido-profesional.page";
import { copyPersuasivoPage } from "./contenido-marca/copy-persuasivo.page";
import { contenidoDigitalPage } from "./contenido-marca/contenido-digital.page";
import { formatoAdaptablePage } from "./contenido-marca/formato-adaptable.page";
import { websitesPage } from "./plataformas-web/sitios-web.page";
import { identidadMarcaPage } from "./branding-ui-ux/identidad-marca.page";
import { sistemasVisualesPage } from "./branding-ui-ux/sistemas-visuales.page";
import { merchandisingPage } from "./branding-ui-ux/merchandising.page";
import { uxUiPage } from "./branding-ui-ux/ux-ui.page";
import { highEndPage } from "./produccion-audiovisual/high-end.page";
import { postMotionPage } from "./produccion-audiovisual/post-motion.page";
import { creativosPage } from "./produccion-audiovisual/creativos.page";
import { arquitecturaAutomatizacionPage } from "./automatizacion-operaciones/arquitectura-automatizacion.page";
import { ingenieriaVentasEmbudoPage } from "./automatizacion-operaciones/ingenieria-embudos-ventas.page";
import { sistemasConversacionalesPage } from "./automatizacion-operaciones/sistemas-conversacionales.page";
import { iaAplicadaNegociosPage } from "./automatizacion-operaciones/ia-aplicada-negocios.page";
import { crecimientoOrganicoPage } from "./contenido-marca/crecimiento-organico.page";

const servicesPages = [
    // #region Growth & Performance
    {
        slug: "crecimiento-y-expansion",
        page: crecimientoPage
    },
    {
        slug: "posicionamiento-y-autoridad",
        page: posicionamientoPage
    },
    {
        slug: "sistemas-de-ventas-digitales",
        page: sistemasVentasPage
    },
    {
        slug: "paid-media-y-performance-advertising",
        page: paidMediaPage
    },
    {
        slug: "crecimiento-avanzado-y-abm-intelligence",
        page: abmIntelligencePage
    },
    {
        slug: "fidelidad-cliente-y-programas-retencion",
        page: fidelidadPage
    },
    {
        slug: "data-intelligence",
        page: dataIntelligencePage
    },
    // #endregion

    // #region Contenido y Marca
    {
        slug: "estrategia-narrativa-y-brand-storytelling",
        page: storytellingPage
    },
    {
        slug: "produccion-contenido-profesional",
        page: contenidoProfesionalPage
    },
    {
        slug: "estrategia-de-crecimiento-organico-de-contenido",
        page: crecimientoOrganicoPage
    },
    {
        slug: "conversion-copy-y-persuasive-writing",
        page: copyPersuasivoPage
    },
    {
        slug: "digital-asset-y-biblioteca-de-medios",
        page: contenidoDigitalPage
    },
    {
        slug: "multi-formato-y-produccion-de-contenido-global",
        page: formatoAdaptablePage
    },
    // #endregion

    // #region Plataformas Web
    {
        slug: "sitios-web",
        page: websitesPage
    },
    {
        slug: "aplicaciones-web",
        page: webAppsPage
    },
    {
        slug: "aplicaciones-moviles",
        page: mobileAppsPage
    },
    {
        slug: "visualizacion-datos",
        page: dataVissPage
    },
    {
        slug: "headless",
        page: headlessPage
    },
    {
        slug: "react-js",
        page: reactPage
    },
    {
        slug: "payload-cms",
        page: payloadPage
    },
    // #endregion

    // #region Branding UI & UX
    {
        slug: "arquitectura-de-identidad-de-marca",
        page: identidadMarcaPage
    },
    {
        slug: "sistemas-visuales-digitales-y-corporativos",
        page: sistemasVisualesPage
    },
    {
        slug: "material-de-marca-y-diseno-de-merchandising",
        page: merchandisingPage
    },
    {
        slug: "ingenieria-de-interfaz-y-experiencia-de-usuario",
        page: uxUiPage
    },
    // #endregion

    // #region Audiovisual
    {
        slug: "produccion-audiovisual-de-alta-calidad",
        page: highEndPage
    },
    {
        slug: "post-produccion-y-motion-design",
        page: postMotionPage
    },
    {
        slug: "advertising-creative-y-campaing-assets",
        page: creativosPage
    },
    // #endregion

    // #region Automatizacion, IA & operaciones digitales
    {
        slug: "arquitectura-de-automatizacion-de-marketing",
        page: arquitecturaAutomatizacionPage
    },
    {
        slug: "ingenieria-de-embudos-de-ventas-automatizados",
        page: ingenieriaVentasEmbudoPage
    },
    {
        slug: "sistemas-conversacionales-con-ia",
        page: sistemasConversacionalesPage
    },
    {
        slug: "inteligencia-artificial-aplicada-negocios",
        page: iaAplicadaNegociosPage
    },
    // #endregion

    // #region Experiencia
    {
        slug: "comercial",
        page: comercialPage
    },
    {
        slug: "sin-fines-de-lucro",
        page: sinFineLucroPage
    },
    {
        slug: "innovacion-startups",
        page: innovacionStartupsPage
    },
    {
        slug: "educacion",
        page: educacionPage
    },
    {
        slug: "comunidad",
        page: comunidadPage
    },
    // #endregion
]

export const servicePageContent = (slug: string) => {
    const content = servicesPages.find(d => d.slug === slug)
    if (!content) return null
    return content.page
}