// src/context/ModalContext.tsx
import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
    modalSlug: string | null;
    modalType: "work" | "awards" | null;
    openModal: (articleType: "work" | "awards", slug: string) => void;
    closeModal: () => void;
};

// Usamos `undefined` como fallback para forzar el chequeo en useModal() y evitar usos fuera del Provider.
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modalSlug, setModalSlug] = useState<string | null>(null);
    const [modalType, setModalType] = useState<"work" | "awards" | null>(null);
    const [scrollY, setScrollY] = useState<number>(0)

    const openModal = (articleType: "work" | "awards", slug: string) => {
        console.log("Article:", articleType)
        console.log("Slug:", slug)
        setModalSlug(slug);
        setModalType(articleType)

        const currentScrollY = window.scrollY;
        document.body.style.position = "fixed"
        document.body.style.top = `-${currentScrollY}px`
        setScrollY(currentScrollY)
    }

    const closeModal = () => {
        setModalSlug(null);
        setModalType(null)
        document.body.style.position = ""
        document.body.style.top = ""
        window.scrollTo(0, scrollY)
    }

    return (
        <ModalContext.Provider value={{ modalSlug, modalType, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// Hook helper que lanza si se usa fuera del provider
export const useModal = (): ModalContextType => {
    const ctx = useContext(ModalContext);
    if (!ctx) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return ctx;
};
