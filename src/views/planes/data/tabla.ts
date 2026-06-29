import type { TableServiciosRow } from "../planes.types"

export const tablaServiciosHeaders = [
    {
        header: 'Servicio',
    },
    {
        header: 'Esencial',
        price: 'S/. 949.90'
    },
    {
        header: 'Avanzado',
        price: 'S/.1,599.90'
    },
    {
        header: 'Premium',
        price: 'S/.1,999.90'
    },
    {
        header: 'Optimize',
        price: 'S/.999'
    },
    {
        header: 'Scale',
        price: 'S/.1,799'
    },
    {
        header: 'Dominate',
        price: 'S/.2,799'
    },
    {
        header: 'Leader',
        price: 'S/.2,499'
    },
    {
        header: 'Authority',
        price: 'S/.3,599'
    },
    {
        header: 'Legacy',
        price: 'S/.4,999'
    },
]

export const tableServiciosRows: TableServiciosRow[] = [
    {
        servicio: 'Community Manager',
        colData: [
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
        ]
    },
    {
        servicio: 'Publicaciones / mes',
        colData: [
            { text: '10' },
            { text: '16' },
            { text: '20', isBgBlack: true, },
            { text: '12' },
            { text: '20' },
            { text: '24' },
            { text: '24' },
            { text: '30' },
            { text: 'Ilimitadas', isBgBlack: true, },
        ]
    },
    {
        servicio: 'Sesión fotográfica pro',
        colData: [
            { isCheck: false },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: false, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
        ]
    },
    {
        servicio: 'Pauta publicitaria',
        colData: [
            { isCheck: false, },
            { text: 'Meta' },
            { text: 'Meta+Google+TK', isBgBlack: true },
            { isCheck: false, },
            { text: 'Meta+Google' },
            { text: 'Todas' },
            { text: 'Meta+Google' },
            { text: 'Todas' },
            { text: 'Todas + Nacional', isBgBlack: true },
        ]
    },
    {
        servicio: 'Web / UI-UX',
        colData: [
            { isCheck: false, },
            { isCheck: false, },
            { text: 'Landing', isBgBlack: true, },
            { text: 'CRO' },
            { text: 'Landings' },
            { text: 'Web Avanzada' },
            { text: 'Rediseño completo' },
            { text: 'Web + App' },
            { text: 'Ecosistema total', isBgBlack: true, },
        ]
    },
    {
        servicio: 'IA & Automatización',
        colData: [
            { isCheck: false, },
            { isCheck: false, },
            { isCheck: false, },
            { isCheck: false, },
            { isCheck: false, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: false, },
            { text: "IA Personalizada", isBgBlack: true },
        ]
    },
    {
        servicio: 'Email marketing',
        colData: [
            { isCheck: false, },
            { isCheck: false, },
            { isCheck: false, },
            { isCheck: false, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: true, },
            { text: 'Masivo A/B' },
            { text: 'Masivo avanzado', isBgBlack: true, },
        ]
    },
    {
        servicio: 'CRM Integrado',
        colData: [
            { isCheck: false, },
            { isCheck: true, },
            { isCheck: true, },
            { isCheck: false, },
            { isCheck: true, },
            { text: 'Avanzado' },
            { isCheck: true, },
            { text: 'Avanzado' },
            { text: 'Enterprise', isBgBlack: true, },
        ]
    },
    {
        servicio: 'Account Manager',
        colData: [
            { text: 'Compartido' },
            { text: 'Compartido' },
            { text: 'Dedicado', isBgBlack: true, },
            { text: 'Compartido' },
            { text: 'Dedicado' },
            { text: 'Exclusivo' },
            { text: 'Dedicado' },
            { text: 'Exclusivo' },
            { text: 'Equipo exclusivo', isBgBlack: true, },
        ]
    },
    {
        servicio: 'Reportes',
        colData: [
            { text: 'Mensual simple' },
            { text: 'Mensula detallado' },
            { text: 'ROI Mensual', isBgBlack: true, },
            { text: 'KPIs mensual' },
            { text: 'Quincenal' },
            { text: 'Semanal + Dashboard' },
            { text: 'Quincenal ROI' },
            { text: 'Semanal ejecutivo' },
            { text: 'Tiempo real 24/7', isBgBlack: true, },
        ]
    },
]