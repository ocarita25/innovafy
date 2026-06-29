import { useModal } from '@/context/ModalContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
// import { ArticleRenderer } from '@/components/articles/ArticleRenderer';
import Close from '@/assets/icons/Close';
// import Brief from '@/views/Brief';
// import AlertModal from './AlertModal';

gsap.registerPlugin(ScrollTrigger);

const ArticleModal = () => {

    const { closeModal, isModalOpen, modalContent, modalOverlay } = useModal();

    const triggerRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const stRef = useRef<ScrollTrigger | null>(null)

    // const article: React.ReactNode = modalSlug ? <ArticleRenderer type={modalType} slug={modalSlug} onNext={() => { }} /> : null

    useLayoutEffect(() => {

        if (!isModalOpen) return;

        const container = containerRef.current;
        const trigger = triggerRef.current;

        if (!container || !trigger) return;

        // Reset initial state
        gsap.set(trigger, {
            borderRadius: "2rem",
            y: 550,
            left: "calc(var(--container-gutter))",
            right: "calc(var(--container-gutter))"
        });

        gsap.set(container, { backgroundColor: "#00000000" })

        gsap.to(container, {
            backgroundColor: "#000000be",
            duration: 1,
            ease: "expo.out"
        })

        gsap.to(trigger, {
            opacity: 1,
            y: 200,
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
            start: "top 25%",
            end: "top top",
            scrub: true,
            // markers: { startColor: "red", endColor: "orange", indent: 100 },
            onUpdate: (self) => {
                const p = self.progress
                gsap.set(trigger, {
                    borderRadius: `${2 - p * 2}rem`,
                    left: `calc((2 - ${p * 1}) * var(--container-gutter) - var(--container-gutter))`,
                    right: `calc((2 - ${p * 1}) * var(--container-gutter) - var(--container-gutter))`,
                })
            }
        });

        stRef.current = st;

        return () => {
            stRef.current?.kill();
            stRef.current = null
        }
    }, [isModalOpen]);

    const handleClose = () => {

        const container = containerRef.current;
        const trigger = triggerRef.current;
        if (!container || !trigger) return;
        console.log('closing');

        // Animación de salida
        const tl = gsap.timeline({
            onComplete: () => {
                closeModal(); // desmonta el modal cuando termina la animación
            }
        });

        tl.to(trigger, {
            opacity: 0,
            y: 550,
            duration: 0.6,
            ease: "expo.in"
        }).to(container, {
            backgroundColor: "#00000000",
            duration: 0.5,
            ease: "expo.out"
        }, "-=0.3"); // comienza un poco antes de que termine el slide
    };

    return (
        isModalOpen && (
            <>
                <section ref={containerRef} className='h-dvh fixed top-0 w-full max-w-dvw z-50 overflow-y-scroll transition-transform bg-[#000000be]'>
                    <div ref={triggerRef} className='py-10 grid object-center absolute top-0 bg-(--color-theme-background) rounded-4xl'>
                        <div className='w-fit sticky -top-40 mx-10 left-3/2 z-10'>
                            <button id='article-modal-close-button' onClick={handleClose} className='text-white flex items-center justify-center bg-gray-600 opacity-35 rounded-full w-11 h-11'>
                                <Close />
                            </button>
                        </div>
                        <div className='max-w-[85vw] mx-auto content-center relative text-[var(--color-theme-secondary)]'>
                            {modalContent}
                        </div>
                    </div>
                </section>
                {
                    modalOverlay && (
                        <div className='absolute inset-0 z-333 items-center justify-center bg-black/60 backdrop-blur-sm'>
                            {modalOverlay}
                        </div>
                    )
                }
            </>
        )
    )
}

export default ArticleModal