import type { WorkCategory } from "@/data/work/types"

type WorkCategories = {
    label: string,
    link: string,
    category: WorkCategory
}

export const workCategories: WorkCategories[] = [
    {
        label: "Featured",
        link: '/trabajo',
        category: "featured"
    },
    {
        label: "Comercial",
        link: '/trabajo/comercial',
        category: "comercial"
    },
    {
        label: "Sin Fines de Lucro",
        link: '/trabajo/sin-fines-de-lucro',
        category: "sin-fines-de-lucro"
    },
    {
        label: "Educación",
        link: '/trabajo/educacion',
        category: "educacion"
    },
    {
        label: "Comunidad y Propósito",
        link: '/trabajo/comunidad-y-proposito',
        category: "comunidad-y-proposito"
    },
    {
        label: "Innovacion",
        link: '/trabajo/innovacion',
        category: "innovacion"
    },
    {
        label: "UI & UX",
        link: '/trabajo/ui-ux',
        category: "ui-ux"
    },
]