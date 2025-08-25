import { cn } from "@/lib/utils";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

type PannedTextProps = {
    title: string
} & React.HtmlHTMLAttributes<HTMLHeadingElement>;

const PannedText = ({ title, ...props }: PannedTextProps) => {

    if (!title) return;

    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!titleRef.current) return;

        // Crear SplitText usando solo el ref local
        const split = new SplitText(titleRef.current, {
            type: "chars,words",
            charsClass: "char",
            // linesClass: "line",
            // wordsClass: "word",
            // mask: "lines",
        });

        // Animar cada línea
        gsap.from(split.chars, {
            y: 40, // sube desde fuera del contenedor
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
            <span ref={titleRef} className={"word leading-none tracking-tight will-change-transform mr-3"}>
                {title}
            </span>
        </h1>
    )
}

export default PannedText