import Hero from "@/components/common/Title";
import { Card, ImageCard, VideoCard } from "@/components/common/Card";
import Stats from "@/components/home/Stats";
import { ourService, stats } from "@/constants/home";


export default function Home() {
    return (
        <div className="flex flex-col min-h-dvh bg-[#eeeee5] rounded-b-[3.5rem]">
            <Hero title="Extraordinary Digital Experiences" />

            <div className="px-10">
                <Card className="h-[95dvh] w-full">
                    <VideoCard src="/videos/home-video.mp4" />

                </Card>
            </div>
            <div className="flex flex-col gap-30 px-30 my-10 h-dvh justify-center">
                <h3 className="text-[6.75rem] leading-none px-20 text-center">{ourService.description}</h3>
                <div className="grid grid-cols-5">
                    {ourService.clients.map((os, i) => (
                        <div key={i} className="flex items-center justify-center">
                            <img src={os.src} alt={i.toString()} className="max-w-[150px]" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-10">
                <Card title={"PIQUE"} className="relative col-span-2 h-[95dvh] flex items-center justify-center">
                    <ImageCard src="/images/pique.webp" className="object-cover" />
                    <Card className="absolute w-3/4 h-fit">
                        <VideoCard src="/videos/home2.mp4" className="w-full h-full object-contain" />
                    </Card>
                </Card>
                <Card title="Sussex Taps">
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

            <div className="px-10 flex flex-col lg:grid grid-cols-[2fr_3fr] grid-rows-[auto_auto_1fr] gap-[clamp(3.125rem,3.30vw,4.15rem)]">
                <div className="col-span-2">
                    <h2 className="text-9xl">Great work for <br /> great people</h2>
                </div>
                <div className="text-[clamp(1.25rem,1.32vw,1.65rem)]">
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
                            <Stats key={i} valor={stat.valor} descripcion={stat.descripcion} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
