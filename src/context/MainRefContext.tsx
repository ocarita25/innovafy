import type { ThemeColorsType } from "@/types/ThemeColors.types";
import { setThemeColors, setThemeBackground } from "@/utils/theme";
import React, { createContext, useContext, useRef } from "react";

type MainRefContextType = {
    mainRef: React.RefObject<HTMLDivElement | null>
    changeBackground: (color: string) => void
    changeThemeColors: (theme: ThemeColorsType) => void
}

const MainRefContext = createContext<MainRefContextType | undefined>(undefined)

export const MainRefProvider = ({ children }: { children: React.ReactNode }) => {

    const mainRef = useRef<HTMLDivElement>(null)

    const changeBackground = (color: string) => setThemeBackground(color)
    const changeThemeColors = (theme: ThemeColorsType) => setThemeColors(theme)

    return (
        <MainRefContext.Provider value={{ mainRef, changeBackground, changeThemeColors }}>
            {children}
        </MainRefContext.Provider>
    )
}

export const useMainRef = () => {
    const context = useContext(MainRefContext);
    if (!context) {
        throw new Error("useMainRef must be used within a MainRefProvider");
    }
    return context;
};