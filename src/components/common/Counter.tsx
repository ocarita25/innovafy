import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

type CounterProps = {
    from?: number;
    to: number;
    duration?: number;
    suffix?: string;
}

const Counter = ({ from = 0, to, duration = 2, suffix = "" }: CounterProps) => {

    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!counterRef) return;
        const obj = { val: from };

        gsap.to(obj, {
            val: to,
            duration,
            ease: "expo.out",
            scrollTrigger: {
                trigger: counterRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.textContent = Math.floor(obj.val) + suffix;
                }
            }
        })
    }, [from, to, duration, suffix]);

    return (
        <div ref={counterRef} className='font-semibold text-4xl lg:text-[clamp(3rem,5vw,6rem)]'>
            {from + suffix}
        </div>
    )
}

export default Counter