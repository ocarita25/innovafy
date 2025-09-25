import { cn } from "@/lib/utils";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

type PannedTextProps = {
    children: React.ReactNode
    spanClass?: string
} & React.HtmlHTMLAttributes<HTMLHeadingElement>;

const PannedText = ({ children, spanClass, ...props }: PannedTextProps) => {

    if (!children) return;

    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!titleRef.current) return;

        // Crear SplitText usando solo el ref local
        const split = new SplitText(titleRef.current, {
            type: "words,chars",
            charsClass: "char",
        });


        // Animar cada línea
        gsap.from(split.chars, {
            yPercent: 100, // sube desde fuera del contenedor
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.015,
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
            },
        });

        // Limpiar al desmontar
        return () => split.revert();
    }, [])

    return (
        <h1 className={cn('flex flex-wrap', props.className)}>
            <span ref={titleRef} className={cn("char leading-none will-change-transform mr-3", spanClass)}>
                {children}
            </span>
        </h1>
    )
}

export default PannedText