import { backgroundThemes } from "@/constants/pagesThemes";
import type React from "react";

export function setThemeBackground(color: string, ref: React.RefObject<HTMLDivElement | null> | null) {
    ref?.current?.style.setProperty("--theme-background", color)
}

export function getThemeBackground(location: string) {
    const color = backgroundThemes.find(b => b.pages.includes(location))
    return color ? color.color : "var(--default-tertiary)"
}