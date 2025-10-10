import AutoSlider from "@/components/about/AutoSlider"
import { Card, ImageCard } from "@/components/common/Card"
import ExpandingCard from "@/components/common/ExpandingCard"
import PannedText from "@/components/common/PannedText"
import VerticalPanned from "@/components/common/VerticalPanned"
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
            markers={true}
        >
            <div id="main" className="flex flex-col min-h-[100dvh] rounded-b-[3.5rem] transition-colors duration-600 max-w-dvw bg-[#D8E7EE]">
                <div className="relative min-h-dvh">
                    <div className="absolute text-9xl">
                        <VerticalPanned from={{ y: 180, opacity: 0, ease: "expo.out", duration: 1.1 }} triggerClass="overflow-hidden">
                            <span className="flex leading-none pb-1.5">Digital</span>
                            <span className="flex leading-none pb-1.5">Products</span>
                        </VerticalPanned>
                        <VerticalPanned from={{ y: 180, opacity: 0, ease: "expo.out", duration: 1.1 }} triggerClass="overflow-hidden">
                            <span className="flex leading-none pb-1.5">Human</span>
                            <span className="flex leading-none pb-1.5">Experiences</span>
                        </VerticalPanned>
                    </div>
                    <div className="min-h-dvh w-full">
                        <picture className="w-full">
                            <img src="/images/about/digital_products.jpg" className="w-full h-full object-cover" />
                        </picture>
                    </div>
                </div>
                <PannedText className="text-6xl overflow-hidden">
                    <span>Human experiences are the foundation of everything we do - client relationships, team collaboration and an unwavering focus on the end user. This philosophy is in our name, our core values and underpins our approach to every engagement.</span>
                </PannedText>
                <AutoSlider>
                    {mediaContent && mediaContent.map(image => (
                        <img id={image.id.toString()} src={image.src} alt={image.name} className='object-contain w-full max-h-[80dvh]' />
                    ))}
                </AutoSlider>
                <div className="px-10">
                    <PannedText className="text-6xl py-20">
                        <span>Since 2010 we've been working with amazing clients to create meaningful impact and compelling experiences.</span>
                    </PannedText>
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
                        {clientsImages && clientsImages?.map(ci => (
                            <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                            </Card>
                        ))}
                        {clientsImages && clientsImages?.map(ci => (
                            <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                            </Card>
                        ))}
                        {clientsImages && clientsImages?.map(ci => (
                            <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                            </Card>
                        ))}
                        {clientsImages && clientsImages?.map(ci => (
                            <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                            </Card>
                        ))}
                        {clientsImages && clientsImages?.map(ci => (
                            <Card className="bg-[#ffffff4d] aspect-square flex items-center justify-center">
                                <ImageCard src={ci.src} alt={ci.name} className="w-3/5" />
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="px-10 my-30 min-h-[90dvh] flex flex-col justify-between">
                    <div className="grid grid-cols-3 gap-25">
                        <PannedText className="text-5xl overflow-hidden col-span-3">
                            <span>Our capabilities are centred around our ability to deliver world-class websites and apps. We’re 100% in-house and work end-to-end, ensuring each project is delivered to the highest standard.</span>
                        </PannedText>
                        <div className="flex flex-col">
                            <span className="text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl pb-10">Strategy & UX</span>
                            <ul className="text-2xl flex flex-col gap-2">
                                <li>Digital Strategy</li>
                                <li>User Research</li>
                                <li>User Journey Mapping</li>
                                <li>Information Architecture</li>
                                <li>Wireframing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ExpandingCard>
    )
}

export default AboutPage
