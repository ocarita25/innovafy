import Arrow from '@/assets/Arrow'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import VerticalRoulette from '../common/VerticalRoulette'
import { footerWords } from '@/constants/footer'

const Footer = () => {

    const location = useLocation()
    const isExcludedPage = location.pathname === "/contacto"

    gsap.registerPlugin(ScrollTrigger)
    const triggerRef = useRef<HTMLDivElement>(null)
    const targetRef = useRef<HTMLDivElement>(null)
    const pannedFrom: gsap.TweenVars = {
        y: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "expo.out"
    }

    const pannedTo: gsap.TweenVars = {
        delay: 2,
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "expo.in",
    }
    useEffect(() => {
        if (!triggerRef.current) return;
        if (!targetRef.current) return;
        gsap.set(targetRef.current, { y: isExcludedPage ? 0 : -250 });
        if (isExcludedPage) return

        const tween = gsap.to(targetRef.current, {
            y: 0,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
            }
        })

        return () => {
            tween.scrollTrigger?.kill(); // 🔑 destruye el ScrollTrigger
            tween.kill();
        };

    }, [location.pathname])

    return (
        <footer ref={triggerRef} className={`px-5 lg:px-20 pb-15 relative ${isExcludedPage ? 'z-0' : '-z-1'}`}>
            <div ref={targetRef} className='grid grid-rows-auto h-full'>
                {!isExcludedPage &&
                    <div className='py-[clamp(2rem,3.25dvh,6dvh)] lg:py-[clamp(3rem,12dvh,12rem)] text-[clamp(3dvw,10dvw,4rem)] lg:text-7xl leading-none font-bold mb-20'>
                        <h4 className='flex flex-col'>
                            <span className='flex gap-5 items-center'>Let's make <Arrow width='w-[clamp(3rem,3dvw,4rem)]' stroke='3' /></span>
                            <span className='flex flex-col md:flex-row'>
                                <span className='pr-5'>something</span>
                                <span>
                                    <VerticalRoulette
                                        content={footerWords}
                                        columns={1}
                                        minSize='768px'
                                        from={pannedFrom}
                                        to={pannedTo}
                                    />
                                </span>
                            </span>
                        </h4>
                    </div>
                }

                <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-0 text-md pb-10'>
                    <div className='flex flex-col sm:col-span-2 xl:col-span-1 font-semibold'>
                        <span>We Work globally</span>
                        <span>Submit a brief</span>
                        <span>contact@innovafy.com</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>USA</span>
                        <span className='opacity-60'>Los Angeles, CA</span>
                        <span className='opacity-60'>johndoe@innovafy.com</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>Australia</span>
                        <span className='opacity-60'>Perth, WA</span>
                        <span className='opacity-60'>jhondoe@innovafy.com.au</span>
                    </div>
                </div>
                <section className='flex flex-col lg:flex-row lg:justify-between items-center gap-7 border-t-1 pt-8 text-sm'>
                    <div className='flex gap-5'>
                        <span>INNOVAFY</span>
                        <span>© 2025 <Link to={"#"} className='opacity-60'>Privacy</Link></span>
                    </div>
                    <div className='flex gap-5'>
                        <Link to={"#"}>Twitter X</Link>
                        <div>*</div>
                        <Link to={"#"}>Instagram</Link>
                        <div>*</div>
                        <Link to={"#"}>LinkedIn</Link>
                    </div>
                </section>
                <div className='flex place-content-center md:hidden py-5'>
                    <img src={"/images/isocal.svg"} alt='LogoIsocal' width={128} height={128} />
                </div>
            </div>
        </footer>
    )
}

export default Footer