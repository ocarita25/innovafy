import { HeaderFace } from "@/assets"
import Arrow from "@/assets/Arrow"
import AutoSlider from "@/components/about/Autoslider"
import { Card, ImageCard } from "@/components/common/Card"
import ExpandingCard from "@/components/common/ExpandingCard"
import PannedText from "@/components/common/PannedText"
import TiltCard from "@/components/common/TiltCard"
import { media } from "@/constants/images"
import type { MediaTypes } from "@/types/MediaTypes.types"
import { useEffect, useState } from "react"

function AboutPage() {

    const images = media.filter(m => m.pages?.includes("acerca"))

    const [mediaContent, setMediaContent] = useState<MediaTypes[]>();
    const [clientsImages, setClientImages] = useState<MediaTypes[]>();

    useEffect(() => {
        setMediaContent(images)
    }, [])

    useEffect(() => {
        const clients = images.filter(i => i.categories?.includes("clients"))
        setClientImages(clients)
    }, [])

    return (
        <ExpandingCard
            start="bottom bottom"
            end="bottom top"
            className="relative z-0"
            cardClass="origin-bottom"
            initialScaleX={1}
            initialScaleY={1}
            finalScaleX={0.95}
            finalScaleY={0.95}
        >
            <div id="main" className="flex flex-col min-h-[100dvh] rounded-b-[3.5rem] duration-600 max-w-dvw bg-[#D8E7EE]">
                <div className="about-hero">
                    <div>
                        <div className="about-hero-wrapper">
                            {/* Texto que se desplaza detrás */}
                            {/* <div className="about-hero-heading text-5xl lg:text-[13rem] font-medium text-white absolute inset-0 flex flex-col justify-center z-1"> */}
                            <span className="about-hero-heading">
                                <PannedText aria-label="Digital Products.">
                                    <span className="panned-text">Digital</span>
                                    <span className="panned-text">Products.</span>
                                </PannedText>
                                <PannedText aria-label="Human Experiences.">
                                    <span className="panned-text">Human</span>
                                    <span className="panned-text">Experiences</span>
                                </PannedText>
                            </span>

                            {/* Imagen completa al frente */}
                            <div className="about-hero-image-wrapper">
                                <picture className="about-hero-image">
                                    <img
                                        src="/images/about/digital_products.jpg"
                                        alt="Actores"
                                        className="w-full h-full object-cover "
                                    />
                                </picture>
                                <picture className="about-hero-image about-hero-image-mask">
                                    <img
                                        src="/images/about/digital_products.jpg"
                                        alt="Actores"
                                        className="w-full h-full object-cover "
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="about-hero-container">
                            <PannedText
                                aria-label="Human experiences are the foundation of everything we do - client relationships, team collaboration and an unwavering focus on the end user. This philosophy is in our name, our core values and underpins our approach to every engagement."
                            >
                                <p className="about-hero-intro">Human experiences are the foundation of everything we do - client relationships, team collaboration and an unwavering focus on the end user. This philosophy is in our name, our core values and underpins our approach to every engagement.</p>
                            </PannedText>
                        </div>
                    </div>
                </div>

                <div className="px-5 lg:px-10 py-20 lg:h-[100dvh] flex items-center">
                    <AutoSlider>
                        {mediaContent && mediaContent.map(image => (
                            <img id={image.id.toString()} src={image.src} alt={image.name} className='object-contain w-full max-h-[80dvh]' />
                        ))}
                    </AutoSlider>
                </div>

                <div className="grid text-theme-secondary max-w-[calc(clamp(87.5rem,92.6vw,116.375rem))] p-fluid mx-auto w-full gap-[clamp(5rem,5.3vw,6.65rem)]">
                    <h2 className="text-[clamp(1.875rem,3.90vw,2.49rem)] lg:text-[clamp(2.5rem,5.21vw,3.325rem)] xl:text-[clamp(3.75rem,3.97vw,4.99rem)] max-w-[clamp(66.875rem,70.77vw,88.94rem)] m-0 leading-[1] w-full">
                        <PannedText>
                            <span>Since 2010 we've been working with amazing clients to create meaningful impact and compelling experiences.</span>
                        </PannedText>
                    </h2>

                    <div className="grid grid-cols-3 lg:grid-cols-[repeat(5,minmax(auto,1fr))] gap-3">
                        {clientsImages && clientsImages?.map(ci => (
                            <TiltCard key={ci.id}>
                                <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                    <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                                </Card>
                            </TiltCard>
                        ))}
                        {clientsImages && clientsImages?.map(ci => (
                            <TiltCard key={ci.id}>
                                <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                    <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                                </Card>
                            </TiltCard>
                        ))}
                        {clientsImages && clientsImages?.map(ci => (
                            <TiltCard key={ci.id}>
                                <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                    <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                                </Card>
                            </TiltCard>
                        ))}
                        {clientsImages && clientsImages?.map(ci => (
                            <TiltCard key={ci.id}>
                                <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                    <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                                </Card>
                            </TiltCard>
                        ))}
                        {clientsImages && clientsImages?.map(ci => (
                            <TiltCard key={ci.id}>
                                <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                    <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                                </Card>
                            </TiltCard>
                        ))}
                    </div>
                </div>

                <div className="grid text-theme-secondary w-full max-w-[calc(clamp(87.5rem,92.6vw,116.375rem))] mx-auto p-fluid mt-[clamp(9.375rem,19.53125vw,12.46875rem)] lg:mt-[clamp(12.5rem,13.22vw,16.625rem)] gap-[clamp(7.9375rem,8.4vw,10.56rem)]">
                    <PannedText className="max-w-[clamp(71.25rem,75.397vw,94.76rem)] text-[clamp(1.875rem,3.90vw,2.49rem)] lg:text-[clamp(2.5rem,5.21vw,3.325rem)] xl:text-[clamp(3.75rem,3.97vw,4.99rem)] leading-[1] overflow-hidden">
                        <span>Our capabilities are centred around our ability to deliver world-class websites and apps. We’re 100% in-house and work end-to-end, ensuring each project is delivered to the highest standard.</span>
                    </PannedText>

                    <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-[3.125rem] sm:gap-[5rem_2.5rem] lg:gap-[clamp(5.94rem,6.28vw,7.89rem)_clamp(5rem,5.29vw,6.65rem)]">
                        <div className="flex flex-col">
                            <span className="text-3xl lg:text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-lg lg:text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl lg:text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-lg lg:text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl lg:text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-lg lg:text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl lg:text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-lg lg:text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl lg:text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-lg lg:text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl lg:text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-lg lg:text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid not-first-of-type:text-white p-[clamp(12.5rem,13.23vw,16.625rem)_0] ">
                    <div className="mt-[clamp(6.25rem,6614vw,8.3125rem)] max-w-[clamp(64.375rem,68.12vw,85.62rem)] p-fluid mx-auto w-full text-[clamp(1.875rem,3.91vw,2.49rem)] lg:text-[clamp(2.5rem,5.21vw,3.325rem)]">
                        <figure className="grid gap-[clamp(3.125rem,3.31vw,4.16rem)]">
                            <blockquote className="p-0 m-0 leading-[1.2]">
                                <span>"It was one of the most extraordinary experiences we have had in 24 years of business. Why? Because you challenged us and helped us articulate something very special."</span>
                            </blockquote>
                            <figcaption className="items-center content-center justify-self-start grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-[0_clamp(1.125rem,1.19vw,1.49rem)]">
                                <div className="row-[1/-1] col-[1] block leading-0 p-5 max-w-full"><HeaderFace /></div>
                                <span className="flex items-center leading-[1] font-medium text-[clamp(1rem,1.058vw,1.33rem)]">
                                    <div>Prof. Dan Haagman</div>
                                </span>
                                <span className="flex items-center leading-[1] font-medium text-[clamp(1rem,1.058vw,1.33rem)]">
                                    <div>Chaleit</div>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div >
        </ExpandingCard >
    )
}

export default AboutPage
