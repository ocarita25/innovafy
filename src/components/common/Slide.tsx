"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin)

type SliderProps = {
    children: React.ReactNode;
};

const Slider = ({ children }: SliderProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const draggableRef = useRef<Draggable[] | null>(null);

    const slides = React.Children.toArray(children);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const container = wrapperRef.current;

        const createDrag = () => {
            // elimina instancias anteriores
            draggableRef.current?.forEach(d => d.kill());

            draggableRef.current = Draggable.create(container, {
                type: "x",
                edgeResistance: 0.85,
                inertia: true, // momentum (InertiaPlugin opcional)
                bounds: {
                    minX: -(container.scrollWidth - container.offsetWidth + 40),
                    maxX: 0,
                },
                dragResistance: 0.1,
                allowContextMenu: false,
            });
        };

        createDrag();
        window.addEventListener("resize", createDrag);

        return () => {
            window.removeEventListener("resize", createDrag);
            draggableRef.current?.forEach(d => d.kill());
        };
    }, [children]);

    return (
        <div className="relative w-dvw overflow-hidden">
            {/* Contenedor de slides */}
            <div ref={wrapperRef} className="w-full grid grid-flow-col auto-cols-[380px] gap-5 touch-pan-y">
                {slides.map((child, i) => (
                    <div key={i} className="">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
