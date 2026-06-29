import { cn } from "@/lib/utils";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useLayoutEffect, useRef } from "react";

// gsap.registerPlugin(SplitText);

type PannedTextProps = {
    children: React.ReactNode,
} & React.HTMLAttributes<HTMLSpanElement>;

const PannedText = ({ children, ...props }: PannedTextProps) => {
    const spanRef = useRef<HTMLDivElement>(null);

    // if (!children) return;

    // const splitRef = useRef<any>(null);
    // const ctxRef = useRef<any>(null)

    useLayoutEffect(() => {
        if (!spanRef.current) return;

        let observer: IntersectionObserver | null = null
        let split: SplitText | null = null
        let isMounted = true

        const init = async () => {
            await document.fonts.ready
            if (!isMounted || !spanRef.current) return

            const ctx = gsap.context(() => {
                const el = spanRef.current!;
                split = new SplitText(el, {
                    type: "lines,words",
                    linesClass: "line",
                    wordsClass: "word",
                    // mask: "lines",
                });
                // Estado inicial (oculto)
                gsap.set(split.words, {
                    yPercent: 100,
                    opacity: 0,
                });

                let hasAnimated = false;

                observer = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;

                        gsap.to(split!.words, {
                            yPercent: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease: "power1.inOut",
                            stagger: 0.015,
                        });

                        observer?.disconnect(); // ✅ nunca más vuelve a animar
                    }
                })
                observer.observe(el)
            }, spanRef)

            cleanup = () => {
                observer?.disconnect()
                ctx.revert()
                split?.revert()
            }
        }


        // ctxRef.current = gsap.context(() => {

        //     splitRef.current = split;


        //     const observer = new IntersectionObserver(
        //         ([entry]) => {
        //             if (entry.isIntersecting && !hasAnimated) {
        //                 hasAnimated = true;

        //                 gsap.to(split.words, {
        //                     yPercent: 0,
        //                     opacity: 1,
        //                     duration: 0.5,
        //                     ease: "power1.inOut",
        //                     stagger: 0.015,
        //                 });

        //                 observer.disconnect(); // ✅ nunca más vuelve a animar
        //             }
        //         },
        //         {
        //             threshold: 0, // 🔧 20% visible para disparar
        //         }
        //     );

        //     observer.observe(el);

        // }, titleRef);

        // return () => {
        //     try {
        //         ctxRef.current?.revert();
        //         splitRef.current?.revert();
        //     } catch (e) {
        //         console.log(e);
        //     }
        // };
        let cleanup = () => { }
        init()

        return () => {
            isMounted = false
            cleanup()
        }
    }, []);

    if (!children) return null;

    return (
        <span ref={spanRef} className={cn("leading-[1] inline-flex", props.className)} {...props}>
            {children}
        </span>
    )
}

export default PannedText