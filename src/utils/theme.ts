import { backgroundThemes } from "@/constants/pagesThemes";
import type { ThemeColorsType } from "@/types/ThemeColors.types";

export function setThemeBackground(color: string) {
    const root = document.documentElement
    root.style.setProperty("--theme-background", color)
    // ref?.current?.style.setProperty("--theme-background", color)
}

export function setThemeColors(theme: ThemeColorsType) {

    const root = document.documentElement

    root.style.setProperty("--theme-accent", theme.accent)
    root.style.setProperty("--theme-background", theme.bgColor)
    root.style.setProperty("--text-color-primary", theme.textPrimary)
    root.style.setProperty("--text-color-secondary", theme.textSecondary ?? "")
}

export function getThemeColors(location: string) {
    const defaultTheme = {
        id: 1,
        pages: [""],
        bgColor: "#eff9fb",
        accent: "#000",
        textPrimary: "#000",
    }
    const theme = backgroundThemes.find(theme => theme.pages.some(page => matchesPage(page, location)))
    // const theme = backgroundThemes.find(b => b.pages.includes(location))
    return theme ? theme : defaultTheme
}

function matchesPage(pattern: string, location: string) {
    if (pattern.endsWith("/*")) {
        const base = pattern.slice(0, -2);
        return location === base || location.startsWith(`${base}/`)
    }
    return location === pattern;
}