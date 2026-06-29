import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useMemo, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

//Funcion para dividir el contenido en grupos de columnas
const chunkArray = (arr: string[], size: number) => {
    if (size <= 0) return [arr];
    const out: string[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out.length ? out : [arr];
}

type PannedProps = {
    elements: string[];
    columns?: number;
    minColumns?: number;
    minSize?: string;
    loop?: boolean;
    type?: 'text' | 'image';
    contentClass?: string;
    imgClass?: string;
} & React.HTMLAttributes<HTMLDivElement>

const VerticalRoulette = ({ elements, columns = 1, minColumns = columns, minSize = "0px", loop = true, type = "text", contentClass, imgClass, ...props }: PannedProps) => {

    const [cols, setCols] = useState<number>(columns);
    const containerRef = useRef<HTMLDivElement>(null);

    //Hook para actualizar el numero de columnas segun el tamaño de la ventana
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add(`(min-width: ${minSize})`, () => setCols(columns))
        mm.add(`(max-width: ${minSize})`, () => setCols(minColumns))
    }, [])

    const chunks = useMemo(() => chunkArray(elements, cols), [elements, cols])
    const [index, setIndex] = useState<number>(0);

    //Reiniciamos el index en caso de actualizar el contenido o las columnas
    useEffect(() => { setIndex(0); }, [cols, elements])

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            //Generamos un array con los elementos HTML que tenga la clase 'item'
            const items = gsap.utils.toArray<HTMLElement>(".item");

            //Definimos el timeLine. Si loop es verdadero la ruleta se volvera a repetir y si solo hay 1 item entonces se repite el mismo item.
            const tl = gsap.timeline({
                repeat: loop && chunks.length === 1 ? -1 : 0,
                onComplete: () => {
                    if (chunks.length > 1) {
                        setIndex((prev) => (prev + 1) % chunks.length);
                    }
                }
            });

            tl.from(items, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "bounce.out",
            }).to(items, {
                delay: 2,
                y: -40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "expo.in",
            });

        }, containerRef)
        return () => { ctx.revert(); }
    }, [index, chunks.length])

    //Verificamos cols para generar la clase en tailwind
    const gridColsClass = `grid-cols-${cols}`

    return (
        <span ref={containerRef} className={cn(`grid ${gridColsClass} gap-[clamp(1dvw,1.5dvw,4dvw)]`, props.className)}>
            {chunks[index]?.map((content, i) => (
                <span key={i} className={cn('item will-change-transform', contentClass)}>
                    <span>
                        {type === "text" ?
                            content
                            :
                            <img src={content} alt={`logo-${i}`} className={`${imgClass} max-h-40 text-red-500`} />
                        }
                    </span>
                </span>
            ))}
        </span>
    )
}

export default VerticalRoulette