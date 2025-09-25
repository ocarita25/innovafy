import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useMemo, useRef, useState } from 'react'

//Funcion para dividir el contenido en grupos de columnas
const chunkArray = (arr: string[], size: number) => {
    if (size <= 0) return [arr];
    const out: string[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out.length ? out : [arr];
}

type PannedProps = {
    content: string[];
    holdMs?: number;
    columns?: number;
    minColumns?: number;
    minSize?: string;
    from: gsap.TweenVars;
    to: gsap.TweenVars;
    loop?: boolean;
    type?: 'text' | 'image';
    contentClass?: string;
    imgClass?: string;
}

const VerticalRoulette = ({
    content,
    holdMs = 2000,
    columns = 1,
    minColumns = columns,
    minSize = "0px",
    from,
    to,
    loop = true,
    type = "text",
    contentClass,
    imgClass }: PannedProps) => {

    const [cols, setCols] = useState<number>(columns);
    const containerRef = useRef<HTMLDivElement>(null);
    gsap.registerPlugin(ScrollTrigger)

    //Hook para actualizar el numero de columnas segun el tamaño de la ventana
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add(`(min-width: ${minSize})`, () => setCols(columns))
        mm.add(`(max-width: ${minSize})`, () => setCols(minColumns))
    }, [])

    const chunks = useMemo(() => chunkArray(content, cols), [content, cols])
    const [index, setIndex] = useState<number>(0);

    //Reiniciamos el index en caso de actualizar el contenido o las columnas
    useEffect(() => { setIndex(0); }, [cols, content])

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
                ...from,
            }).to(items, {
                ...to
            });

        }, containerRef)
        return () => { ctx.revert(); }
    }, [index, chunks.length, holdMs])

    //Verificamos cols para generar la clase en tailwind
    const gridColsClass = `grid-cols-${cols}`

    return (
        <div ref={containerRef} className={cn(`grid ${gridColsClass} gap-[clamp(1dvw,1.5dvw,4dvw)] w-full max-w-[80dvw]`)}>
            {chunks[index]?.map((content, i) => (
                <div key={i} className={cn('item will-change-transform', contentClass)}>
                    <span>
                        {type === "text" ?
                            content
                            :
                            <img src={content} alt={`logo-${i}`} className={imgClass} />
                        }
                    </span>
                </div>
            ))}
        </div>
    )
}

export default VerticalRoulette