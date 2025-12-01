import { cn } from "@/lib/utils";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

type PannedTextProps = {
    children: React.ReactNode,
    paddingBottom?: string,
    translateY?: string,
    spanClass?: string,
} & React.HtmlHTMLAttributes<HTMLHeadingElement>;

const PannedText = ({ children, paddingBottom, translateY, spanClass, ...props }: PannedTextProps) => {

    if (!children) return;

    const titleRef = useRef<HTMLDivElement>(null);
    const splitRef = useRef<any>(null);
    const ctxRef = useRef<any>(null)
    const animRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

    useLayoutEffect(() => {

        if (!titleRef.current) return;

        ctxRef.current = gsap.context(() => {

            // Version 3
            const split = new SplitText(titleRef.current, {
                type: "lines,words",
                linesClass: "line",
                wordsClass: "word",
            });

            splitRef.current = split;

            gsap.from(split.words, {
                yPercent: 100,
                opacity: 0,
                duration: 1,
                ease: "expo.inOut",
                stagger: 0.015,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            })
        }, titleRef)

        // Version 3
        return () => {
            try {
                ctxRef.current?.revert();
                splitRef.current?.revert();
            } catch (e) {
                ScrollTrigger.refresh()
            }
        }
        // //Version #2
        // const split = SplitText.create(titleRef.current, {
        //     type: "lines,words",
        //     linesClass: "line",
        //     wordsClass: "word",
        //     autoSplit: true,
        //     mask: "words",
        //     onSplit: (self: any) => {
        //         splitRef.current = self;
        //         animRef.current = gsap.from(self.words, {
        //             yPercent: 100,
        //             opacity: 0,
        //             duration: 1,
        //             ease: "expo.inOut",
        //             stagger: 0.015,
        //             scrollTrigger: {
        //                 trigger: titleRef.current,
        //                 start: "top 90%",
        //                 toggleActions: "play none none none",
        //             },
        //         });
        //         return animRef.current;
        //     }
        // })



        // // Si SplitText.create devolviera algo (por seguridad)
        // if (!splitRef.current) splitRef.current = split;

        // // Version 2
        // return () => {
        //     // limpiamos la animación y revertimos los wrappers creados por SplitText.create
        //     try {
        //         if (animRef.current) {
        //             animRef.current.kill();
        //             animRef.current = null;
        //         }
        //         if (splitRef.current && typeof splitRef.current.revert === "function") {
        //             splitRef.current.revert(); // quita wrappers y deja el DOM como antes
        //         }
        //     } catch (e) {
        //         // fallback silencioso
        //         console.warn("Error cleaning SplitText:", e);
        //     }
        // };
    }, [])



    return (
        <span ref={titleRef} className={cn("leading-[1.08] inline-block", props.className)}>
            {children}
        </span>

    )
}

export default PannedText