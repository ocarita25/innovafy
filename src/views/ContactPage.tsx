import { VideoCard } from '@/components/common/Card'
import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import { FooterContacts, FooterSocialMedia } from '@/components/layouts/Footer'
import { useEffect } from 'react'

const ContactPage = () => {

    useEffect(() => {
        const mainEl = document.getElementById('main')
        if (!mainEl) return
        mainEl.style.setProperty("--theme-background", "#D1CDD8")
    }, [])

    return (
        <main className="min-h-dvh -mt-20 grid relative overflow-hidden z-10">
            {/* Contact BG-Desktop */}
            <div className="-z-1 absolute top-0 left-0 w-full h-full max-[992px]:hidden">
                <picture className='block leading-0 max-w-full absolute top-0 right-0 w-full h-full'>
                    <img
                        src='https://a-us.storyblok.com/f/1017006/3024x2000/8c579e2bc5/contact-video-frame.jpg/m/1512x1000/filters:quality(80)'
                        className='h-full w-full object-cover max-w-full m-0'
                    />
                </picture>
                <VideoCard src='/videos/contact-video-big.mp4' className='absolute top-0 left-0 h-full w-full object-cover object-[60%_center] block rounded-none' />
            </div>

            {/* Mobile */}
            <div className="grid grid-full pt-[var(--header-height)] z-1 w-full px-[var(--container-gutter)] items-center grid-rows-[auto_auto] gap-[clamp(2.25rem,2.38vw,2.99rem)]">
                <div className='py-[8vw] px-0'>
                    {/* <h1 className='text-white leading-[1] m-[0_0_0.3em] max-[991px]:max-w-[clamp(31.25rem,65.10vw,41.56rem)] max-w-[clamp(38.9375rem,41.20vw,51.78rem)] max-[991px]:text-[clamp(3.75rem,7.8125vw,4.9875rem)] text-[clamp(6.25rem,6.6137566138vw,8.3125rem)]'> */}
                    <Headings className='text-white leading-[1] m-[0_0_0.3em] max-[991px]:max-w-[clamp(31.25rem,65.10vw,41.56rem)] max-w-[clamp(38.9375rem,41.20vw,51.78rem)] max-[991px]:text-[clamp(3rem,7.8vw,4.9rem)] text-[clamp(6.25rem,6.6137566138vw,8.3125rem)]'>
                        <PannedText>
                            <span className='overflow-hidden'>Tenemos un muy buen presentimiento</span>
                        </PannedText>
                    </Headings>
                    {/* </h1> */}
                    <div className="contact-bg-mobile mx-[calc(var(--container-gutter)*-1)] my-[-10%] relative -z-1">
                        <picture className='w-full h-full grid-full'>
                            <img
                                src='https://a-us.storyblok.com/f/1017006/900x900/9298fb8569/contact-video-frame-square-mobile.jpg/m/1800x1800/filters:quality(80)'
                                className='h-full w-full object-cover max-w-full m-0'
                            />
                        </picture>
                        <VideoCard src='/videos/contact-video.mp4' className='h-full w-full grid-full' />
                    </div>
                </div>
            </div>

            <footer className='grid px-[var(--container-gutter)] py-25 pb-27 md:pb-[3.75rem] min-[992px]:px-[clamp(5rem,5.29vw,6.65rem)] min-[992px]:pb-[clamp(3.875rem,4.1vw,5.15rem)]'>
                <FooterContacts />
                <FooterSocialMedia />
                <div className='flex place-content-center md:hidden py-5'>
                    <img src={"/images/isocal.svg"} alt='LogoIsocal' width={128} height={128} />
                </div>
            </footer>

        </main>
    )
}

export default ContactPage