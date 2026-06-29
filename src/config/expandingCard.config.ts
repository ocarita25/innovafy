import type { ExpandingCardProps } from "@/types/ExpandingCardProps.types";

//Layout Wrapper Card
export const MAIN_CARD_CONFIG: ExpandingCardProps = {
    original: {
        scaleX: 1,
        scaleY: 1,
        borderRadius: "0 0 2rem 2rem",
        ease: "power1.inOut"
    },

    target: {
        scaleX: 0.95,
        scaleY: 0.95,
        borderRadius: "4rem",
        ease: "power1.inOut"
    },

    sTrigger: {
        start: "bottom bottom",
        end: "+=500",
    },
}