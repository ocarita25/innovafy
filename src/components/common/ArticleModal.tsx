import { useModal } from '@/context/ModalContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { articleSelector } from '@/data/articleSelector';

gsap.registerPlugin(ScrollTrigger);

const ArticleModal = () => {

    const { modalSlug, modalType, closeModal } = useModal();

    const triggerRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const stRef = useRef<ScrollTrigger | null>(null)

    const article: React.ReactNode = articleSelector(modalType, modalSlug)

    useLayoutEffect(() => {
        const container = containerRef.current;
        const trigger = triggerRef.current;

        if (!container || !trigger || !modalSlug || !article) return;

        // Reset initial state
        gsap.set(trigger, { borderRadius: "2rem", y: 1100, left: "calc(2*var(--container-gutter))", right: "calc(2*var(--container-gutter))" });
        gsap.set(container, { backgroundColor: "#00000000" })

        gsap.to(container, {
            backgroundColor: "#000000be",
            duration: 1,
            ease: "expo.out"
        })

        gsap.to(trigger, {
            opacity: 1,
            y: 350,
            duration: 0.55,
            delay: 0.15,
            ease: "expo.out",
            onComplete: () => {
                stRef.current?.refresh()
            }
        });

        const st = ScrollTrigger.create({
            trigger: trigger,
            scroller: container,     // scroll principal trigger, no window
            start: "top 30%",
            end: "top top",
            scrub: true,
            markers: { startColor: "red", endColor: "orange", indent: 100 },
            onUpdate: (self) => {
                const p = self.progress
                gsap.set(trigger, {
                    borderRadius: `${2 - p * 2}rem`,
                    left: `calc((3 - ${p * 2}) * var(--container-gutter) - var(--container-gutter))`,
                    right: `calc((3 - ${p * 2}) * var(--container-gutter) - var(--container-gutter))`,
                })
            }
        });

        stRef.current = st;

        return () => {
            stRef.current?.kill();
            stRef.current = null
        }
    }, [modalSlug, article]);

    const handleClose = () => {
        const container = containerRef.current;
        const trigger = triggerRef.current;
        if (!container || !trigger) return;

        // Animación de salida
        const tl = gsap.timeline({
            onComplete: () => {
                closeModal(); // desmonta el modal cuando termina la animación
            }
        });

        tl.to(trigger, {
            opacity: 0,
            y: 1100,
            duration: 0.6,
            ease: "expo.in"
        })
            .to(container, {
                backgroundColor: "#00000000",
                duration: 0.5,
                ease: "expo.out"
            }, "-=0.3"); // comienza un poco antes de que termine el slide
    };

    if (!article) return

    return (
        <section ref={containerRef} className='h-dvh fixed top-0 w-full max-w-full z-50 overflow-y-scroll transition-transform bg-[#000000be]'>
            <div ref={triggerRef} className='p-10 min-[992px]:p-20 grid absolute bg-[var(--color-theme-background)] rounded-4xl object-center overflow-hidden'>
                {/* <div className='sticky z-10 top-[300dvh] bg-red-200 flex'> */}
                <button onClick={handleClose} className='text-white z-10 absolute top-15 right-20 bg-gray-600 rounded-full w-15 h-15'>
                    Close
                </button>
                {/* </div> */}
                <div className='relative text-[var(--color-theme-secondary)] bg-[var(--color-theme-background)]'>
                    {article}
                </div>
            </div>
        </section>
    )
}

export default ArticleModal