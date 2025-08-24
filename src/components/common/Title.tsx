import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

type HeroProps = {
    title: string
};

const Hero = ({ title }: HeroProps) => {

    if (!title) return;

    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!titleRef.current) return;

        // Crear SplitText usando solo el ref local
        const split = new SplitText(titleRef.current, {
            type: "lines,words",
            linesClass: "line",
            wordsClass: "word",
            mask: "lines",
        });

        // Animar cada línea
        gsap.from(split.lines, {
            yPercent: 100, // sube desde fuera del contenedor
            opacity: 0,
            duration: 0.6,
            ease: "expo.out",
            stagger: 1,
        });

        // Limpiar al desmontar
        return () => split.revert();
    }, [])

    return (
        <div ref={titleRef} className='flex items-center h-fit py-20 lg:min-h-[80dvh] px-5 lg:px-15'>
            <h1 className='flex flex-wrap text-[3.25rem] lg:text-[clamp(5rem,7rem,7.5rem)] w-full lg:max-w-[80dvw]'>
                <span className="word leading-none tracking-[0.05rem] will-change-transform mr-2">
                    {title}
                </span>
            </h1>
        </div>
    )
}

export default Hero