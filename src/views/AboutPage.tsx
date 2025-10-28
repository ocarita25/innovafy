import { HeaderFace } from "@/assets"
import AboutHeroImage from "@/components/about/AboutHeroImage"
import AboutTeamMobile from "@/components/about/AboutTeamMobile"
import AboutTitle from "@/components/about/AboutTitle"
import AutoSlider from "@/components/about/Autoslider"
import { Card, ImageCard } from "@/components/common/Card"
import PannedText from "@/components/common/PannedText"
import ThemeTrigger from "@/components/common/ThemeTrigger"
import TiltCard from "@/components/common/TiltCard"
import { media } from "@/constants/images"
import type { MediaTypes } from "@/types/MediaTypes.types"
import { useEffect, useState } from "react"

function AboutPage() {

    const images = media.filter(m => m.pages?.includes("acerca"))
    const bgOriginal = "#D8E7EE"
    const bgColor = "#3799EA"

    const [mediaContent, setMediaContent] = useState<MediaTypes[]>();
    const [clientsImages, setClientImages] = useState<MediaTypes[]>();

    useEffect(() => {
        const mainEl = document.getElementById('main')
        if (!mainEl) return
        mainEl.style.setProperty("--theme-background", `${bgOriginal}`)
    }, [])

    useEffect(() => {
        setMediaContent(images)
    }, [])

    useEffect(() => {
        const clients = images.filter(i => i.categories?.includes("clients"))
        setClientImages(clients)
    }, [])

    return (
        <div className="-mt-20">
            <div className="about-hero">
                <div>
                    <div className="about-hero-wrapper">
                        {/* Texto que se desplaza detrás */}
                        <AboutTitle />

                        {/* Imagen completa al frente */}
                        <AboutHeroImage />
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

            <div className="m-[clamp(6.25rem,13.02vw,9.3125rem)_0] min-[992px]:m-[clamp(15rem,15.87vw,19.95rem)_0]">
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
                        <TiltCard key={ci.id} img={ci.src} />
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

            <ThemeTrigger
                startDesktop="top 40%"
                endDesktop="bottom top"
                bgColor={bgColor}
                bgOriginal={bgOriginal}
                className={"about-humans"}
            >
                <div className="about-humans-testimonials p-fluid text-[clamp(1.875rem,3.91vw,2.49rem)] lg:text-[clamp(2.5rem,5.21vw,3.325rem)]">
                    <div className="about-humans-testimonials-slider">
                        <figure className="about-humans-testimonial">
                            <blockquote className="about-humans-testimonial-quote">
                                <span>"It was one of the most extraordinary experiences we have had in 24 years of business. Why? Because you challenged us and helped us articulate something very special."</span>
                            </blockquote>
                            <figcaption className="items-center content-center justify-self-start grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-[0_clamp(1.125rem,1.19vw,1.49rem)]">
                                <div className="row-[1/-1] col-[1] block leading-0 h-14 place-content-center max-w-full"><HeaderFace /></div>
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

                <div className="about-humans-team">
                    <h2 className="about-humans-team-heading">
                        <div className="absolute whitespace-nowrap z-[1] top-[23%] left-[49.61%] -translate-x-1/2">We're only</div>
                        <div className="absolute whitespace-nowrap z-[3] top-[34%] left-[47.95%] -translate-x-1/2">Humaan</div>
                    </h2>
                    <div className="about-humans-team-wrapper">
                        <picture className="team-image-main">
                            <img src='/images/about/we_are_humans.webp' alt="Team" className="w-full h-auto m-0 max-w-full object-cover" />
                        </picture>
                        <picture className="team-image-back">
                            <img src='/images/about/we_are_humans.webp' alt="Team" className="w-full h-auto m-0 max-w-full object-cover" />
                        </picture>
                        <picture className="team-image-front">
                            <img src='/images/about/we_are_humans.webp' alt="Team" className="w-full h-auto m-0 max-w-full object-cover" />
                        </picture>
                    </div>
                </div>

                <div className="about-humans-banner p-fluid">
                    <PannedText
                        aria-label="We're a team of makers, thinkers, explorers and theatre singers. We approach work and play with curiosity and experimentation, using what we learn to create meaningful digital products that connect with people, just like you."
                    >
                        <p className="about-humans-banner-heading">We're a team of makers, thinkers, explorers and theatre singers. We approach work and play with curiosity and experimentation, using what we learn to create meaningful digital products that connect with people, just like you.</p>
                    </PannedText>
                </div>
            </ThemeTrigger>

            <AboutTeamMobile />

            <div>
                <div className="grid max-w-[clamp(87.5rem,92.59vw,116.38rem)] p-fluid w-full gap-[clamp(1.875rem,199vw,2.5rem)] m-[clamp(9.38rem,19.5vw,12.5rem)_auto]">

                    <h2 className="text-[clamp(1.875rem,3.90vw,2.49rem)] lg:text-[clamp(2.5rem,5.21vw,3.325rem)] xl:text-[clamp(3.75rem,3.97vw,4.99rem)] max-w-[clamp(66.875rem,70.77vw,88.94rem)] m-0 leading-[1] w-full">
                        <PannedText>
                            <span>While our focus is on client success, we’re proud to have our work continually recognised by the best of the best. </span>
                        </PannedText>
                    </h2>

                    <div className="grid grid-cols-3 lg:grid-cols-[repeat(5,minmax(auto,1fr))] gap-3">
                        {clientsImages && clientsImages?.map(ci => (
                            <TiltCard key={ci.id} img={ci.src} />
                        ))}
                        {clientsImages && clientsImages?.map(ci => (
                            <TiltCard key={ci.id} img={ci.src} />
                        ))}
                    </div>
                </div>

                <div></div>
            </div>

            <div className="grid max-w-[clamp(87.5rem,92.59vw,116.375rem)] p-fluid w-full gap-[clamp(5.625rem,5.95vw,7.48rem)] m-[clamp(6.25rem,6.6137566138vw,8.3125rem)_auto_clamp(9.375rem,9.9206349206vw,12.46875rem)]">
                <h2 className="text-[clamp(1.875rem,3.90vw,2.49rem)] lg:text-[clamp(2.5rem,5.21vw,3.325rem)] xl:text-[clamp(3.75rem,3.97vw,4.99rem)] max-w-[clamp(66.875rem,70.77vw,88.94rem)] m-0 leading-[1] w-full">
                    <PannedText>
                        <span>Above all, we believe in human relationships, exceptional outcomes, and having fun along the way.</span>
                    </PannedText>
                </h2>
                <div className="grid max-w-[clamp(71.25rem,75.4vw,94.77rem)] gap-[clamp(5rem,5.291005291vw,6.65rem)]">
                    <section className="grid gap-[clamp(2.125rem,2.25vw,2.83rem)] content-start">
                        <h3 className="m-0 text-[clamp(1.5rem,1.58vw,1.99rem)]">What we do</h3>
                        <ul className="grid grid-cols-2 justify-between max-[480px]:gap-[clamp(2.5rem,2.65vw,3.33rem)] gap-[0.6em] m-0 p-0 opacity-70 list-none text-[clamp(1.125rem,1.19vw,1.5rem)]">
                            <li>World-class digital</li>
                            <li>Expect creativity</li>
                            <li>Celebrate success</li>
                            <li>Obsess over detail</li>
                            <li>Pub lunch Fridays</li>
                            <li>Embrace change</li>
                            <li>Unlock potential</li>
                            <li>High-five</li>
                            <li>Outstanding service</li>
                            <li>Value relationships</li>
                            <li>Exceed expectations</li>
                            <li>Party</li>
                        </ul>
                    </section>
                    <section className="grid gap-[clamp(2.125rem,2.25vw,2.83rem)] content-start">
                        <h3 className="line-through m-0 text-[clamp(1.5rem,1.58vw,1.99rem)]">What we don't</h3>
                        <ul className="grid grid-cols-2 justify-between max-[480px]:gap-[clamp(2.5rem,2.65vw,3.33rem)] gap-[0.6em] m-0 p-0 opacity-70 list-none text-[clamp(1.125rem,1.19vw,1.5rem)]">
                            <li>Work weekends</li>
                            <li>Outsource</li>
                            <li>Resist cake</li>
                            <li>Lose at Mario Kart</li>
                            <li>‘Make it pop’</li>
                            <li>Free pitches</li>
                            <li>Sacrifice quality for profit</li>
                            <li>Egos</li>
                            <li>Overpromise</li>
                            <li>Cut corners</li>
                            <li>Accept mediocrity</li>
                            <li>Decaf</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div >
    )
}

export default AboutPage
