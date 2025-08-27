import { Card, ImageCard, VideoCard } from "@/components/common/Card";
import Stats from "@/components/home/Stats";
import { logoClients, news, ourService, stats } from "@/constants/home";
import ExpandingCard from "@/components/common/ExpandingCard";
import SmileFace from "@/assets/SmileFace";
import PannedText from "@/components/common/PannedText";
import PannedLogo from "@/components/common/PannedLogo";
import Slider from "@/components/common/Slide";


export default function Home() {
    return (
        <main className="bg-white">
            <div className="flex flex-col min-h-dvh bg-[#eeeedd] rounded-b-[3.5rem] w-dvw max-w-full">
                <div className='flex items-center h-fit lg:min-h-[60dvh]'>
                    <div className="md:w-[75dvw] lg:w-[90dvw] px-5 md:px-10 lg:px-15">
                        <PannedText title="Extraordinary Digital Experiences" className="text-[clamp(2.5rem,10dvw,5.8rem)] lg:text-[clamp(6rem,13dvw,9rem)]" />
                    </div>
                </div>

                <ExpandingCard className="h-[200dvh] max-w-dvw">
                    <VideoCard src="/videos/home-video.mp4" className="" />
                </ExpandingCard>

                <div className="flex flex-col gap-20 my-30 py-10 lg:py-20 items-center justify-center [2000px]:h-dvh">
                    <div className="w-[90dvw] [2000px]:w-[80dvw] [2000px]:m-10 [2000px]:px-50">
                        <PannedText title={ourService.description} className="text-center text-[clamp(1.875rem,10dvw,2.5rem)] lg:text-[clamp(4.5rem,9dvw,7.75rem)] [2000px]:text-[9rem]" />
                    </div>
                    <PannedLogo logos={logoClients} />
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 px-5 lg:px-10 gap-10 mt-10">
                    <Card title={"PIQUE"} className="relative col-span-2 w-full lg:h-[95dvh] flex items-center justify-center">
                        <ImageCard src="/images/pique.webp" className="object-cover" />
                        <Card className="absolute w-3/4 h-fit">
                            <VideoCard src="/videos/home2.mp4" className="w-full h-full object-contain" />
                        </Card>
                    </Card>

                    <Card title="Sussex Taps" className="h-[45dvh] lg:min-h-[80dvh] lg:h-full">
                        <VideoCard src="/videos/home3.mp4" className="w-full h-full" />
                    </Card>

                    <Card title={"Chaleit"} className="relative flex items-center justify-center h-[45dvh] lg:min-h-[80dvh] lg:h-full">
                        <ImageCard src="/images/chaleit1.webp" className="object-cover" />
                        <Card className="absolute w-2/5 h-fit rounded-2xl">
                            <ImageCard src="/images/chaleit2.webp" />
                        </Card>
                    </Card>

                    <Card title="Surveillance Watch" className="relative flex items-center justify-center col-span-2 max-h-[95dvh]">
                        <VideoCard src="/videos/home4.mp4" />
                        <Card className="absolute w-4/5 h-fit">
                            <ImageCard src="/images/surveillance.webp" />
                        </Card>
                    </Card>
                </div>

                <div className="px-5 lg:px-10 flex flex-col lg:grid grid-cols-[2fr_3fr] grid-rows-[auto_auto_1fr] gap-[clamp(3.125rem,3.30vw,4.15rem)] pt-20">
                    <div className="col-span-2">
                        <h2 className="flex flex-wrap items-center leading-none text-[2.5rem] lg:text-[clamp(5rem,9rem,10rem)]">
                            <span className="pr-2">Great work for</span>
                            <span className="flex">
                                <span className="pr-2 lg:pr-7">great</span>
                                <span className="pr-2 lg:pr-7"><SmileFace className="w-[2.5rem] lg:w-[6rem] xl:w-[8rem]" /></span>
                                <span className="pr-2 lg:pr-7">people.</span>
                            </span>
                        </h2>
                    </div>
                    <div className="text-[clamp(1rem,1.32vw,1.65rem)]">
                        <p>We put people first, understanding that a well-crafted product significantly impacts the lives of those who use it. By empowering users, we’re able to solve unique problems, accelerate progress and unlock potential for our clients.</p>
                        <br />
                        <p>Our independent spirit drives our creative energy and approach to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.</p>
                    </div>
                    <Card className="row-span-2">
                        <div className="h-fit bg-amber-50 rounded-4xl overflow-hidden">
                            <ImageCard src="/images/imagen1.webp" />
                        </div>
                    </Card>
                    <div className="h-full flex justify-beetwen lg:justify-end">
                        <div className="w-full flex flex-col justify-center lg:justify-end items-center row-start-3">
                            {stats.map((stat, i) => (
                                <Stats key={i} to={stat.to} suffix={stat.suffix} descripcion={stat.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="py-10 px-10">
                    <div className="pt-50 pb-20">
                        <h2 className="text-7xl">What's New</h2>
                    </div>
                    <div>
                        <Slider>
                            {news.map((n, i) => (
                                <article key={i}>
                                    <Card title={n.imgTitle}>
                                        <ImageCard src={n.img} />
                                    </Card>
                                    <div>
                                        <div className="py-5">
                                            <span>{n.date}</span>
                                        </div>
                                        <div className="pb-10">
                                            <span><b>{n.title}</b> {n.description}</span>
                                        </div>
                                        <div className="text-gray-500">
                                            <span>{"Explore"}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

        </main>
    );
}
