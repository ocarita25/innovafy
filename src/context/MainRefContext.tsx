import { setThemeBackground } from "@/utils/theme";
import React, { createContext, useContext, useRef } from "react";

type MainRefContextType = {
    mainRef: React.RefObject<HTMLDivElement | null>
    changeTheme: (color: string) => void
}

const MainRefContext = createContext<MainRefContextType | undefined>(undefined)

export const MainRefProvider = ({ children }: { children: React.ReactNode }) => {

    const mainRef = useRef<HTMLDivElement>(null)

    const changeTheme = (color: string) => {
        setThemeBackground(color, mainRef)
    }

    return (
        <MainRefContext.Provider value={{ mainRef, changeTheme }}>
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