import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

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

    useLayoutEffect(() => {

        if (!titleRef.current) return;

        ctxRef.current = gsap.context(() => {
            const el = titleRef.current!;

            const split = new SplitText(el, {
                type: "lines,words",
                linesClass: "line",
                wordsClass: "word",
                mask: "lines",
            });

            splitRef.current = split;

            // Estado inicial (oculto)
            gsap.set(split.words, {
                yPercent: 100,
                opacity: 0,
            });

            let hasAnimated = false;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;

                        gsap.to(split.words, {
                            yPercent: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease: "power1.inOut",
                            stagger: 0.015,
                        });

                        observer.disconnect(); // ✅ nunca más vuelve a animar
                    }
                },
                {
                    threshold: 0, // 🔧 20% visible para disparar
                }
            );

            observer.observe(el);

        }, titleRef);

        return () => {
            try {
                ctxRef.current?.revert();
                splitRef.current?.revert();
            } catch (e) {
                console.log(e);
            }
        };
    }, []);


    return (
        <span ref={titleRef} className={cn("leading-[1.08] inline-block", props.className)}>
            {children}
        </span>
    )
}

export default PannedText