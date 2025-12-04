// src/context/ModalContext.tsx
import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
    modalSlug: string | null;
    modalType: "work" | "awards" | "ideas" | "brief" | null;
    isModalOpen: boolean;
    openModal: (articleType: "work" | "awards" | "ideas" | "brief", slug: string) => void;
    closeModal: () => void;
};

// Usamos `undefined` como fallback para forzar el chequeo en useModal() y evitar usos fuera del Provider.
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalSlug, setModalSlug] = useState<string | null>(null);
    const [modalType, setModalType] = useState<"work" | "awards" | "ideas" | "brief" | null>(null);
    const [scrollY, setScrollY] = useState<number>(0)

    const openModal = (articleType: "work" | "awards" | "ideas" | "brief", slug: string) => {
        const container = document.getElementById("app-scroll-container");
        if (!container) return;
        setIsModalOpen(true)
        setModalSlug(slug);
        setModalType(articleType);
        const currentScrollY = window.scrollY;
        container.style.position = "fixed"
        container.style.top = `-${currentScrollY}px`

        setScrollY(currentScrollY)
    }

    const closeModal = () => {
        const container = document.getElementById("app-scroll-container");
        if (!container) return;

        setIsModalOpen(false)
        setModalSlug(null);
        setModalType(null)
        container.style.position = ""
        container.style.top = ""
        window.scrollTo(0, scrollY)
    }

    return (
        <ModalContext.Provider value={{ modalSlug, modalType, isModalOpen, openModal, closeModal }}>
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
