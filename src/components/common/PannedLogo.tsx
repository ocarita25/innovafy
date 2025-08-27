import React, { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'

// Función para dividir en grupos de n
const chunkArray = (arr: string[], size: number) => {
    if (size <= 0) return [arr];
    const out: string[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out.length ? out : [arr];
};

type PannedLogoProps = {
    logos: string[];
    holdMs?: number;
};

const PannedLogo = ({ logos, holdMs = 2000 }: PannedLogoProps) => {

    const containerRef = useRef<HTMLDivElement>(null);

    const [cols, setCols] = useState(5);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const apply = () => setCols(mq.matches ? 5 : 3);
        apply();
        mq.addEventListener("change", apply);
        return () => { mq.removeEventListener("change", apply); };
    }, []);

    const chunks = useMemo(() => chunkArray(logos, cols), [logos, cols]);
    const [index, setIndex] = useState(0);

    // Si cambia cantidad de columnas o la lista, volvemos al inicio para no desbordar índices
    useEffect(() => { setIndex(0); }, [cols, logos]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".logo-item");

            const tl = gsap.timeline();
            tl.from(items, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "bounce.out",
            }).to(items, {
                delay: holdMs / 1000,
                y: -40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "expo.in",
                onComplete: () => {
                    // siguiente tanda
                    setIndex((prev) => (prev + 1) % chunks.length);
                },
            });
        }, containerRef);

        return () => { ctx.revert(); };
    }, [index, chunks.length, holdMs]);

    // Usa clases Tailwind estáticas para evitar purga (nada de `grid-cols-${cols}`)
    const gridColsClass = cols === 5 ? "grid-cols-5" : "grid-cols-3";

    return (
        <div
            ref={containerRef}
            className={`grid ${gridColsClass} gap-[clamp(1dvw,1.5dvw,4dvw)] px-5 lg:px-35`}
        >
            {chunks[index]?.map((logo, i) => (
                <div key={`${index}-${i}`} className="logo-item flex items-center justify-center will-change-transform">
                    <img src={logo} alt={`logo-${i}`} className="w-[20dvw] lg:w-[clamp(350px,11dvw,13dvw)] object-contain" />
                </div>
            ))}
        </div>
    );
}

export default PannedLogo