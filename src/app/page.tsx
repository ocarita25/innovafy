import Stats from "@/components/home/Stats";
import { Card } from "@/components/ui/common/Card";
import ImageCard from "@/components/ui/common/ImageCard";
import Hero from "@/components/ui/common/Title";
import VideoCard from "@/components/ui/common/VideoCard";
import { homeStats } from "@/constants/homeStats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-[#eeeee5] rounded-b-[3.5rem]">
      <Hero title="Extraordinary Digital Experiences" />
      <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-10">
        <Card title={"PIQUE"} className="col-span-2 h-[95dvh]" background={"/images/pique.webp"}>
          <VideoCard
            title=""
            src="/videos/home2.mp4"
            className="scale-70"
          />
        </Card>
        <VideoCard
          className="h-[110dvh]"
          title="Sussex Taps"
          src="/videos/home3.mp4"
        />
        <Card className="flex items-center justify-center" title={"Chaleit"} background={"https://a-us.storyblok.com/f/1017006/1866x2805/5f879805d6/card-portrait.jpg"}>
          <ImageCard
            className="scale-50"
            title=""
            src="/images/chaleit2.webp"
          />
        </Card>

        <Card title="Surveillance Watch" className="col-span-2" background={""}>
          <VideoCard
            className="h-[95dvh]"
            title=""
            src="/videos/home4.mp4"
          />
        </Card>
      </div>

      <div className="px-10 flex flex-col lg:grid grid-cols-[2fr_3fr] grid-rows-[auto_auto_1fr] gap-[clamp(3.125rem,3.30vw,4.15rem)]">
        <div className="col-span-2">
          <h2 className="text-9xl">Great work for <br /> great people</h2>
        </div>
        <div className="text-[clamp(1.25rem,1.32vw,1.65rem)]">
          <p>We put people first, understanding that a well-crafted product significantly impacts the lives of those who use it. By empowering users, we’re able to solve unique problems, accelerate progress and unlock potential for our clients.</p>
          <p>Our independent spirit drives our creative energy and approach to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.</p>
        </div>
        <ImageCard
          title=""
          src="/images/imagen1.webp"
          className="h-[90dvh] w-full row-span-2"
        />
        <div className="grid grid-rows-[repeat(3,100px)] lg:grid-rows-3 row-start-3">
          {homeStats.map((stat, i) => (
            <Stats key={i} valor={stat.valor} descripcion={stat.descripcion} />
          ))}
        </div>

      </div>
    </div>
  );
}
