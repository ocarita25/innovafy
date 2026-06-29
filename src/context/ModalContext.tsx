// src/context/ModalContext.tsx
import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
    isModalOpen: boolean;
    modalContent: React.ReactNode;
    modalOverlay: React.ReactNode;
    openModal: (content: React.ReactNode) => void;
    showOverlay: (overlay: React.ReactNode) => void;
    hideOverlay: () => void;
    closeModal: () => void;
};

// type ModalContextType = {
//     isModalOpen: boolean;
//     modalContent: React.ReactNode;
//     modalSlug: string | null;
//     modalType: "work" | "awards" | "ideas" | "brief" | "plans" | "alert" | null;
//     openModal: (articleType: "work" | "awards" | "ideas" | "brief" | "plans" | "alert", slug: string) => void;
//     closeModal: () => void;
// };

// Usamos `undefined` como fallback para forzar el chequeo en useModal() y evitar usos fuera del Provider.
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [modalOverlay, setModalOverlay] = useState<React.ReactNode>(null);
    const [scrollY, setScrollY] = useState<number>(0)

    const showOverlay = (overlay: React.ReactNode) => {
        setModalOverlay(overlay)
    }

    const hideOverlay = () => {
        setModalOverlay(null)
    }

    const openModal = (content: React.ReactNode) => {
        const container = document.getElementById("app-scroll-container");
        if (!container) return;

        setModalContent(content);
        setIsModalOpen(true);

        const currentScrollY = window.scrollY;
        container.style.position = "fixed"
        container.style.top = `-${currentScrollY}px`

        setScrollY(currentScrollY);
    }

    const closeModal = () => {
        const container = document.getElementById("app-scroll-container");
        if (!container) return;

        setIsModalOpen(false)
        setModalContent(null);

        container.style.position = ""
        container.style.top = ""
        window.scrollTo(0, scrollY)

    }

    return (
        <ModalContext.Provider value={{
            isModalOpen,
            modalContent,
            modalOverlay,
            openModal,
            showOverlay,
            hideOverlay,
            closeModal
        }}>
            {children}
        </ModalContext.Provider>
    );

    // const openModal = (articleType: "work" | "awards" | "ideas" | "brief" | "plans" | "alert", slug: string) => {
    //     const container = document.getElementById("app-scroll-container");
    //     if (!container) return;
    //     setIsModalOpen(true)
    //     setModalSlug(slug);
    //     setModalType(articleType);
    //     const currentScrollY = window.scrollY;
    //     container.style.position = "fixed"
    //     container.style.top = `-${currentScrollY}px`

    //     setScrollY(currentScrollY)
    // }

    // const closeModal = () => {
    //     const container = document.getElementById("app-scroll-container");
    //     if (!container) return;

    //     setIsModalOpen(false)
    //     setModalSlug(null);
    //     setModalType(null)
    //     container.style.position = ""
    //     container.style.top = ""
    //     window.scrollTo(0, scrollY)
    // }

    // return (
    //     <ModalContext.Provider value={{ modalSlug, modalType, isModalOpen, openModal, closeModal }}>
    //         {children}
    //     </ModalContext.Provider>
    // );
};
// export const ModalProvider = ({ children }: { children: React.ReactNode }) => {

//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
//     const [modalSlug, setModalSlug] = useState<string | null>(null);
//     const [modalType, setModalType] = useState<"work" | "awards" | "ideas" | "brief" | "plans" | "alert" | null>(null);
//     const [scrollY, setScrollY] = useState<number>(0)

//     const openModal = (articleType: "work" | "awards" | "ideas" | "brief" | "plans" | "alert", slug: string) => {
//         const container = document.getElementById("app-scroll-container");
//         if (!container) return;
//         setIsModalOpen(true)
//         setModalSlug(slug);
//         setModalType(articleType);
//         const currentScrollY = window.scrollY;
//         container.style.position = "fixed"
//         container.style.top = `-${currentScrollY}px`

//         setScrollY(currentScrollY)
//     }

//     const closeModal = () => {
//         const container = document.getElementById("app-scroll-container");
//         if (!container) return;

//         setIsModalOpen(false)
//         setModalSlug(null);
//         setModalType(null)
//         container.style.position = ""
//         container.style.top = ""
//         window.scrollTo(0, scrollY)
//     }

//     return (
//         <ModalContext.Provider value={{ modalSlug, modalType, isModalOpen, openModal, closeModal }}>
//             {children}
//         </ModalContext.Provider>
//     );
// };

// Hook helper que lanza si se usa fuera del provider
export const useModal = (): ModalContextType => {
    const ctx = useContext(ModalContext);
    if (!ctx) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return ctx;
};
