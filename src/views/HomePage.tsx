import Hero from "@/components/common/Title";
import { Card, ImageCard, VideoCard } from "@/components/common/Card";
import Stats from "@/components/home/Stats";
import { ourService, stats } from "@/constants/home";
import ExpandingCard from "@/components/common/ExpandingCard";
import SmileFace from "@/assets/SmileFace";


export default function Home() {
    return (
        <main className="flex flex-col min-h-dvh bg-[#eeeee5] rounded-b-[3.5rem] w-dvw max-w-full">
            <Hero title="Extraordinary Digital Experiences" />

            <ExpandingCard className="h-[200dvh] max-w-dvw">
                <VideoCard src="/videos/home-video.mp4" className="" />
            </ExpandingCard>

            <div className="flex flex-col gap-20 my-10 py-20 items-center justify-center">
                <div className="w-[90dvw]">
                    <h3 className="text-4xl lg:text-[6.75rem] leading-none text-center">{ourService.description}</h3>
                </div>
                <div className="w-full grid grid-cols-3 lg:grid-cols-5">
                    {ourService.clients.map((os, i) => (
                        <div key={i} className="flex items-center justify-center">
                            <img src={os.src} alt={i.toString()} className="w-[80px] lg:max-w-[150px]" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 px-5 lg:px-10 gap-10">
                <Card title={"PIQUE"} className="relative col-span-2 w-full lg:h-[95dvh] flex items-center justify-center">
                    <ImageCard src="/images/pique.webp" className="object-cover" />
                    <Card className="absolute w-3/4 h-fit">
                        <VideoCard src="/videos/home2.mp4" className="w-full h-full object-contain" />
                    </Card>
                </Card>

                <Card title="Sussex Taps" className="h-[80dvh] lg:h-full">
                    <VideoCard src="/videos/home3.mp4" />
                </Card>

                <Card title={"Chaleit"} className="relative flex items-center justify-center">
                    <ImageCard src="/images/chaleit1.webp" className="object-cover" />
                    <Card className="absolute w-1/2 h-fit">
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
                <Card className="row-span-2 w-fit md:h-fit">
                    <ImageCard src="/images/imagen1.webp" />
                </Card>
                <div className="h-full flex justify-beetwen lg:justify-end">
                    <div className="w-full flex flex-col justify-center lg:justify-end items-center row-start-3">
                        {stats.map((stat, i) => (
                            <Stats key={i} to={stat.to} suffix={stat.suffix} descripcion={stat.description} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
