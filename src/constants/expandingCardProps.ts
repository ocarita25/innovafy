import type { ExpandingCardProps } from "@/types/ExpandingCardProps.types";

//Layout Wrapper Card
export const MainCardWrapper: ExpandingCardProps = {
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
        // markers: true
    },
    // className: "relative z-0 col-1 row-1",
}

export const HomeVideoWrapper: ExpandingCardProps = {
    original: {
        scaleX: 0.95,
        scaleY: 0.95,
        borderRadius: "2rem",
        ease: "power1.inOut"
    },

    target: {
        scaleX: 1,
        scaleY: 1,
        borderRadius: "0rem",
        ease: "power1.inOut"
    },
    sTrigger: {
        start: "top 10%",
        end: "bottom 80%",
        markers: true
    },
    cardClass: "sticky top-0 min-[992px]:h-dvh bg-red-100 grid z-1 overflow-hidden"
    // className="relative aspect-square md:aspect-auto h-[200dvh] w-full !overflow-visible"
}

export const ContactWrapper: ExpandingCardProps = {
    original: {
        scaleX: 1,
        scaleY: 1,
        borderRadius: "0rem",
        ease: "none"
    },

    target: {
        scaleX: 1,
        scaleY: 1,
        borderRadius: "0rem",
        ease: "none"
    },
    sTrigger: {
        start: "top 10%",
        end: "bottom 80%",
        markers: true
    },
    // className="relative aspect-square md:aspect-auto h-[200dvh] w-full !overflow-visible"
}

