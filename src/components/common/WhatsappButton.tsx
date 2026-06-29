import { Link } from 'react-router-dom'
import SendMessage from '@/assets/icons/send-message.svg?react'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const WhatsappButton = () => {


    const containerRef = useRef<HTMLAnchorElement>(null)
    const whatsappIconRef = useRef<HTMLImageElement>(null)
    const sendMessageRef = useRef<SVGSVGElement>(null)

    const defaultMessage = "Hola. Quiero información acerca de los planes y servicios"
    const encodedMessage = encodeURIComponent(defaultMessage)
    const phoneNumber = "+51952009585"

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = isMobile
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        : `https://web.whatsapp.com/send?${phoneNumber}?text=${encodedMessage}`;

    useLayoutEffect(() => {

        const container = containerRef.current;
        const whatsappIcon = whatsappIconRef.current;
        const sendMessageIcon = sendMessageRef.current;

        if (!container || !whatsappIcon || !sendMessageIcon) return

        const mm = gsap.matchMedia();

        gsap.set(sendMessageIcon, {
            scale: 0,
        })

        const tl = gsap.timeline({
            paused: true,
            defaults: { overwrite: "auto" }
        });

        tl.to(whatsappIcon, {
            autoAlpha: 0,
            scale: 0,
            ease: 'power3.in',
            duration: 0.2

        })
            .to(sendMessageIcon, {
                autoAlpha: 1,
                scale: 1,
                ease: 'power3.out',
                duration: 0.1
            })

        const handleMouseEnter = () => tl.tweenTo(tl.duration());
        const handleMouseLeave = () => tl.tweenTo(0);

        mm.add("(min-width: 768px)", () => {

            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave)

            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter)
                container.removeEventListener("mouseleave", handleMouseLeave)
            }
        })
    }, [])



    return (
        <div className='fixed max-[767px]:top-0 min-[768px]:bottom-5 right-0 z-10 min-[768px]:pr-10 mt-30 '>
            <Link ref={containerRef} to={url} target='_blank' className='group flex flex-col items-end justify-end'>
                <div className='max-[767px]:hidden relative w-0 group-hover:w-90 h-0 group-hover:h-55 overflow-y-hidden mb-2 mr-10'>
                    <div className='absolute bottom-0 right-2.5 w-85 rounded-lg bg-[#d8cfcfaa] translate-y-full group-hover:translate-y-0 duration-300 transition-discrete opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm'>
                        <div className='bg-[#5700ffcc] text-white p-3 flex items-center rounded-t-lg'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-white flex items-center justify-center p-2 aspect-square rounded-full'>
                                    <img src='logo.svg' className='w-5' />
                                </div>
                                <span className='font-black'>INOVAFY</span>
                            </div>
                        </div>
                        <div className='p-5 relative'>
                            <div className='absolute top-5 left-2 w-6 bg-white h-6 rotate-180 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-200'></div>
                            <div className='bg-white p-2 rounded-sm w-40'>
                                <span>Pide tu propuesta personalizada </span>
                            </div>
                        </div>
                        <div className='grid grid-cols-[1fr_auto] px-5 gap-2 mb-4 w-full'>
                            <div className='bg-white rounded-full py-3 px-3 flex items-center'>
                                <span>Quiero un plan personalizado</span>
                            </div>
                            <div className='bg-[#58b987] w-10 aspect-square rounded-full p-2 flex items-center justify-center'>
                                <SendMessage className='w-5 h-5 ps-0.5' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='relative bg-[#05DF7399] backdrop-blur-sm p-4.5 rounded-l-full min-[768px]:rounded-full w-18 h-18 group-hover:scale-110 duration-200'>
                    <img ref={whatsappIconRef} src='/icons/whatsapp.webp' className='w-full h-full' />
                    <SendMessage ref={sendMessageRef} className='absolute top-1/2 -translate-y-1/2 left-1/2 ps-1 -translate-x-1/2 w-9' />
                </div>
            </Link>
        </div>
    )
}

export default WhatsappButton