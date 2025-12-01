import { media } from "./images"

export const workFilters = [
    { id: 1, label: "Featured", category: "" },
    { id: 2, label: "Comercial", category: "comercial" },
    { id: 3, label: "Not for profit", category: "noprofit" },
    { id: 4, label: "Education", category: "educacion" },
    { id: 5, label: "Community & Purpose", category: "comunidad" },
    { id: 6, label: "Innovation", category: "digital" },
    { id: 7, label: "UI & UX", category: "ux" },
]

export const workImages = () => {
    const workMedia = media.filter(m => m.pages?.includes("trabajo"))
    return workMedia
}