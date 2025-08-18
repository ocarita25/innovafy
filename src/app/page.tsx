import ImageCard from "@/components/ui/common/ImageCard";
import Hero from "@/components/ui/common/Title";
import VideoCard from "@/components/ui/common/VideoCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-[#eeeee5] rounded-b-[3.5rem]">
      <Hero title="Extraordinary Digital Experiences" />
      <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-10">
        <VideoCard
          title="PIQUE"
          src="/videos/home2.mp4"
          className="lg:col-span-2 lg:h-[110dvh]"
        />
        <VideoCard
          className="h-[110dvh]"
          title="Sussex Taps"
          src="/videos/home3.mp4"
        />
        <div className="">
          <ImageCard
            className="h-[110dvh]"
            title="Chaleit"
            src="https://a-us.storyblok.com/f/1017006/1866x2805/5f879805d6/card-portrait.jpg"
          />
        </div>

        <div className="col-span-2">
          <VideoCard
            className="h-[110dvh]"
            title="Surveillance Watch"
            src="/videos/home4.mp4"
          />
        </div>
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
          <div className="grid grid-cols-[50%_1fr] border-b-1 items-center">
            <span className="font-black text-4xl lg:text-[clamp(3rem,5vw,6rem)]">100%</span>
            <span className="text-3xl">In-house & independent</span>
          </div>
          <div className="grid grid-cols-[50%_1fr] border-b-1 items-center">
            <span className="font-black text-4xl lg:text-[clamp(3rem,5vw,5rem)]">15</span>
            <span className="text-3xl">Years crafting digital experiences</span>
          </div>
          <div className="grid grid-cols-[50%_1fr] border-b-1 items-center">
            <span className="font-black text-4xl lg:text-[clamp(3rem,5vw,5rem)]">80+</span>
            <span className="text-3xl">Awards from AWA, FWA, and Awwwards</span>
          </div>
        </div>

      </div>
    </div>
  );
}
