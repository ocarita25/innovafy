import { CommercialIcon, CommunityIcon, DataVisIcon, EducationIcon, HeadlessIcon, InnovationIcon, MobileAppsIcon, NotForProfitIcon, PayloadIcon, ReactJSIcon, WebAppsIcon, WebsitesIcon } from "@/assets/icons/navmenu"

import { VARIANT_ACCEST_CLASS } from "./variants"

import GrowthIcon from '@/assets/icons/navmenu/growth-performance/growth.svg?react'
import PosicionamientoIcon from '@/assets/icons/navmenu/growth-performance/posicionamiento.svg?react'
import SistemaVentasIcon from '@/assets/icons/navmenu/growth-performance/sistema-ventas.svg?react'
import PaidMediaIcon from '@/assets/icons/navmenu/growth-performance/paid-media.svg?react'
import ABMIntelligenceIcon from '@/assets/icons/navmenu/growth-performance/abm-intelligence.svg?react'
import FidelidadRetencionIcon from '@/assets/icons/navmenu/growth-performance/fidelidad-retencion.svg?react'
import DataIntelligenceIcon from '@/assets/icons/navmenu/growth-performance/data-intelligence.svg?react'

import StorytellingIcon from '@/assets/icons/navmenu/contenido-marca/storytelling.svg?react'
import ContenidoProfesionalIcon from '@/assets/icons/navmenu/contenido-marca/contenido-profesional.svg?react'
import CrecimientoOrganicoIcon from '@/assets/icons/navmenu/contenido-marca/crecimiento-organico.svg?react'
import CopyPersuasivoIcon from '@/assets/icons/navmenu/contenido-marca/copy-persuasivo.svg?react'
import ContenidoDigitalIcon from '@/assets/icons/navmenu/contenido-marca/contenido-digital.svg?react'
import FormatoAdaptableIcon from '@/assets/icons/navmenu/contenido-marca/formato-adaptable.svg?react'

import IdentidadMarcaIcon from '@/assets/icons/navmenu/branding-ui-ux/identidad-marca.svg?react'
import SistemasVisualesIcon from '@/assets/icons/navmenu/branding-ui-ux/sistemas-visuales.svg?react'
import MerchandisingIcon from '@/assets/icons/navmenu/branding-ui-ux/merchandising.svg?react'
import UxUiIcon from '@/assets/icons/navmenu/branding-ui-ux/ux-ui.svg?react'

import HighEndIcon from '@/assets/icons/navmenu/audiovisual/high-end.svg?react'
import PostMotionIcon from '@/assets/icons/navmenu/audiovisual/post-motion.svg?react'
import CreativosIcon from '@/assets/icons/navmenu/audiovisual/creativos.svg?react'

export const navItems = [
    {
        group: "Growth & Performance",
        links: [
            {
                icon: GrowthIcon,
                text: "Growth & Expansion",
                url: "/servicios/crecimiento-y-expansion",
                class: "variant-green",
                variant: VARIANT_ACCEST_CLASS["variant-green"]
            },
            {
                icon: PosicionamientoIcon,
                text: "Posicionamiento",
                url: "/servicios/posicionamiento-y-autoridad",
                class: "variant-purple",
                variant: VARIANT_ACCEST_CLASS["variant-purple"]
            },
            {
                icon: SistemaVentasIcon,
                text: "Sistema de Ventas",
                url: "/servicios/sistemas-de-ventas-digitales",
                class: "variant-blue",
                variant: VARIANT_ACCEST_CLASS["variant-blue"]
            },
            {
                icon: PaidMediaIcon,
                text: "Paid Media",
                url: "/servicios/paid-media-y-performance-advertising",
                class: "variant-purple",
                variant: VARIANT_ACCEST_CLASS["variant-purple"]
            },
            {
                icon: ABMIntelligenceIcon,
                text: "ABM Intelligence",
                url: "/servicios/crecimiento-avanzado-y-abm-intelligence",
                class: "variant-yellow",
                variant: VARIANT_ACCEST_CLASS["variant-yellow"]
            },
            {
                icon: FidelidadRetencionIcon,
                text: "Fidelidad y Retención",
                url: "/servicios/fidelidad-cliente-y-programas-retencion",
                class: "variant-pink",
                variant: VARIANT_ACCEST_CLASS["variant-pink"]
            },
            {
                icon: DataIntelligenceIcon,
                text: "Data Intelligence",
                url: "/servicios/data-intelligence",
                class: "variant-blue",
                variant: VARIANT_ACCEST_CLASS["variant-blue"]
            },
        ]
    },
    {
        group: "Contenido y Marca",
        links: [
            {
                icon: StorytellingIcon,
                text: "Storytelling",
                url: "/servicios/estrategia-narrativa-y-brand-storytelling",
                class: "variant-pink",
                variant: VARIANT_ACCEST_CLASS["variant-pink"]
            },
            {
                icon: ContenidoProfesionalIcon,
                text: "Contenido profesional",
                url: "/servicios/produccion-contenido-profesional",
                class: "variant-cyan",
                variant: VARIANT_ACCEST_CLASS["variant-cyan"]
            },
            {
                icon: CrecimientoOrganicoIcon,
                text: "Crecimiento orgánico",
                url: "/servicios/estrategia-de-crecimiento-organico-de-contenido",
                class: "variant-green",
                variant: VARIANT_ACCEST_CLASS["variant-green"]
            },
            {
                icon: CopyPersuasivoIcon,
                text: "Copy Persuasivo",
                url: "/servicios/conversion-copy-y-persuasive-writing",
                class: "variant-purple",
                variant: VARIANT_ACCEST_CLASS["variant-purple"]
            },
            {
                icon: ContenidoDigitalIcon,
                text: "Contenido Digital",
                url: "/servicios/digital-asset-y-biblioteca-de-medios",
                class: "variant-blue",
                variant: VARIANT_ACCEST_CLASS["variant-blue"]
            },
            {
                icon: FormatoAdaptableIcon,
                text: "Formato adaptable",
                url: "/servicios/multi-formato-y-produccion-de-contenido-global",
                class: "variant-cyan",
                variant: VARIANT_ACCEST_CLASS["variant-cyan"]
            },
        ]
    },
    {
        group: "Plataformas y Web",
        links: [
            {
                icon: WebsitesIcon,
                text: "Sitios Web",
                url: "/servicios/sitios-web",
                class: "variant-cyan",
                variant: VARIANT_ACCEST_CLASS["variant-cyan"]
            },
            {
                icon: WebAppsIcon,
                text: "Aplicaciones Web",
                url: "/servicios/aplicaciones-web",
                class: "variant-pink",
                variant: VARIANT_ACCEST_CLASS["variant-pink"]
            },
            {
                icon: MobileAppsIcon,
                text: "Aplicaciones Móviles",
                url: "/servicios/aplicaciones-moviles",
                class: "variant-blue",
                variant: VARIANT_ACCEST_CLASS["variant-blue"]
            },
            {
                icon: DataVisIcon,
                text: "Visualización de Datos",
                url: "/servicios/visualizacion-datos",
                class: "variant-purple",
                variant: VARIANT_ACCEST_CLASS["variant-purple"]
            },
            {
                icon: HeadlessIcon,
                text: "Headless",
                url: "/servicios/headless",
                class: "variant-purple",
                variant: VARIANT_ACCEST_CLASS["variant-purple"]
            },
            {
                icon: ReactJSIcon,
                text: "React JS",
                url: "/servicios/react-js",
                class: "variant-cyan",
                variant: VARIANT_ACCEST_CLASS["variant-cyan"]
            },
            {
                icon: PayloadIcon,
                text: "Payload CMS",
                url: "/servicios/payload-cms",
                class: "variant-purple",
                variant: VARIANT_ACCEST_CLASS["variant-purple"]
            },
        ]
    },
    {
        group: "Branding, UI y UX",
        links: [
            {
                icon: IdentidadMarcaIcon,
                text: "Identidad de Marca",
                url: "/servicios/arquitectura-de-identidad-de-marca",
                class: "variant-purple",
                variant: VARIANT_ACCEST_CLASS["variant-purple"]
            },
            {
                icon: SistemasVisualesIcon,
                text: "Sistemas Visuales",
                url: "/servicios/sistemas-visuales-digitales-y-corporativos",
                class: "variant-blue",
                variant: VARIANT_ACCEST_CLASS["variant-blue"]
            },
            {
                icon: MerchandisingIcon,
                text: "Merchandising",
                url: "/servicios/material-de-marca-y-diseno-de-merchandising",
                class: "variant-pink",
                variant: VARIANT_ACCEST_CLASS["variant-pink"]
            },
            {
                icon: UxUiIcon,
                text: "UX & UI",
                url: "/servicios/ingenieria-de-interfaz-y-experiencia-de-usuario",
                class: "variant-cyan",
                variant: VARIANT_ACCEST_CLASS["variant-cyan"]
            },
        ]
    },
    {
        group: "Audiovisual",
        links: [
            {
                icon: HighEndIcon,
                text: "High-End",
                url: "/servicios/produccion-audiovisual-de-alta-calidad",
                class: "variant-cyan",
                variant: VARIANT_ACCEST_CLASS["variant-cyan"]
            },
            {
                icon: PostMotionIcon,
                text: "Post & Motion",
                url: "/servicios/post-produccion-y-motion-design",
                class: "variant-purple",
                variant: VARIANT_ACCEST_CLASS["variant-purple"]
            },
            {
                icon: CreativosIcon,
                text: "Creativos",
                url: "/servicios/advertising-creative-y-campaing-assets",
                class: "variant-pink",
                variant: VARIANT_ACCEST_CLASS["variant-pink"]
            },
        ]
    },
    {
        group: "Experiencia",
        links: [
            {
                icon: CommercialIcon,
                text: "Comercial",
                url: "/servicios/comercial",
                class: "variant-blue",
                variant: VARIANT_ACCEST_CLASS["variant-blue"]
            },
            {
                icon: NotForProfitIcon,
                text: "Sin fines de lucro",
                url: "/servicios/sin-fines-de-lucro",
                class: "variant-pink",
                variant: VARIANT_ACCEST_CLASS["variant-pink"]
            },
            {
                icon: InnovationIcon,
                text: "Innovación",
                url: "/servicios/innovacion-startups",
                class: "variant-purple",
                variant: VARIANT_ACCEST_CLASS["variant-purple"]
            },
            {
                icon: EducationIcon,
                text: "Educación",
                url: "/servicios/educacion",
                class: "variant-yellow",
                variant: VARIANT_ACCEST_CLASS["variant-yellow"]
            },
            {
                icon: CommunityIcon,
                text: "Comunidad",
                url: "/servicios/comunidad",
                class: "variant-cyan",
                variant: VARIANT_ACCEST_CLASS["variant-cyan"]
            },
        ]
    },
]