import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(Draggable, InertiaPlugin)

type AutoSliderProps = {
    children: React.ReactNode
}

const AutoSlider = ({ children }: AutoSliderProps) => {

    const wrapperRef = useRef<HTMLDivElement>(null)
    const draggableRef = useRef<Draggable | null>(null)

    const slides = React.Children.toArray(children)
    const repeatedSlides = [...slides, ...slides];

    useEffect(() => {
        if (!wrapperRef.current) return;

        const container = wrapperRef.current;

        const totalWidth = container.scrollWidth / 2;
        const wrapX = gsap.utils.wrap(-totalWidth, 0)

        draggableRef.current?.kill()

        draggableRef.current = Draggable.create(container, {
            type: "x",
            inertia: true,
            allowContextMenu: false,
            edgeResistance: 0.8,
            dragResistance: -0.15,
            onDrag: function () {
                gsap.set(container, { x: wrapX(this.x) });
            },
            onThrowUpdate: function () {
                gsap.set(container, { x: wrapX(this.x) });
            },
        })[0];

        return () => { draggableRef.current?.kill() };
    }, [children]);

    return (
        <div className='overflow-hidden w-fit'>
            <div ref={wrapperRef} className='w-fit flex flex-row gap-10 touch-pan-y items-center'>
                {repeatedSlides.map((child, i) => (
                    <picture key={i} className='shrink-0 rounded-3xl overflow-hidden w-fit max-w-[30dvw]'>
                        {child}
                    </picture>
                ))}
            </div>
        </div>
    )
}

export default AutoSlider