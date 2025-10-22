import { Card, ImageCard, VideoCard } from "@/components/common/Card";
import { logoClients, news, ourService, stats } from "@/constants/home";
import ExpandingCard from "@/components/common/ExpandingCard";
import SmileFace from "@/assets/SmileFace";
import PannedText from "@/components/common/PannedText";
import Slider from "@/components/common/Slide";
import ThemeTrigger from "@/components/common/ThemeTrigger";
import VerticalRoulette from "@/components/common/VerticalRoulette";
import VerticalPanned from "@/components/common/VerticalPanned";
import Counter from "@/components/common/Counter";
import Button from "@/components/common/Button";
import Arrow from "@/assets/Arrow";

export default function Home() {

    const pannedFrom: gsap.TweenVars = {
        y: 150,
        opacity: -1,
        duration: 1,
        ease: "power3.out",
        mask: "lines",
    }

    const logosFrom: gsap.TweenVars = {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "bounce.out",
    }

    const logosTo: gsap.TweenVars = {
        delay: 2,
        y: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "expo.in",
    }

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
            <div id="main" className="flex flex-col min-h-[100dvh] rounded-b-[3.5rem] transition-colors duration-600 max-w-dvw bg-theme-background pt-20">
                <div className='flex items-center h-[35dvh] lg:h-[60dvh] px-5 lg:px-10 w-full'>
                    <div className="w-full tracking-normal font-medium text-[clamp(3rem,7dvw,8dvw)] lg:text-9xl xl:text-[clamp(8.5rem,9dvw,9rem)]">
                        <VerticalPanned from={{ y: 180, opacity: 0, ease: "expo.out", duration: 1.1 }} triggerClass="overflow-hidden">
                            <span className="flex leading-none pb-1.5">Extraordinarias</span>
                        </VerticalPanned>
                        <div className="flex flex-col xl:flex-row gap-0">
                            <VerticalPanned from={{ y: 240, opacity: 0, ease: "expo.out", duration: 1 }} triggerClass="overflow-hidden pr-5 pb-2">
                                <span className="flex flex-wrap leading-none">Experiencias</span>
                            </VerticalPanned>
                            <VerticalPanned from={{ y: 240, opacity: 0, ease: "expo.out", duration: 1 }} triggerClass="overflow-hidden">
                                <span className="flex flex-wrap leading-none mb-5">Digitales</span>
                            </VerticalPanned>
                        </div>
                    </div>
                </div>

                <ExpandingCard
                    start="top 10%"
                    end="bottom 80%"
                    initialScaleX={0.94}
                    initialScaleY={1}
                    finalScaleX={1}
                    finalScaleY={1}
                    resizeInitial={true}
                    className="relative aspect-square md:aspect-auto h-[200dvh] w-full !overflow-visible"
                    cardClass="sticky top-0 rounded-4xl h-screen bg-red-100 w-full overflow-hidden"
                >
                    <VideoCard src="/videos/home-video.mp4" className="object-cover" />
                </ExpandingCard>

                <ThemeTrigger
                    startDesktop="top-=250 bottom"
                    endDesktop="bottom+=200 top"
                    startMobile="top+=200 bottom"
                >
                    <div className="flex flex-col gap-20 my-25 lg:py-20 items-center justify-center [2000px]:h-dvh px-5 lg:px-10">
                        <div className="w-[90dvw] [2000px]:w-[80dvw] [2000px]:m-10 [2000px]:px-50 text-white">
                            <PannedText className="text-center text-[clamp(1.875rem,8.2dvw,2.5rem)] lg:text-[clamp(4.5rem,9dvw,7.75rem)] [2000px]:text-[9rem]">
                                <span>{ourService.description}</span>
                            </PannedText>
                        </div>
                        <VerticalRoulette
                            content={logoClients}
                            from={logosFrom}
                            to={logosTo}
                            minSize="768px"
                            columns={5}
                            minColumns={3}
                            type="image"
                            contentClass="object-contain flex items-center justify-center"
                            imgClass="w-[clamp(100px,13dvw,160px)]"
                        />
                    </div>
                </ThemeTrigger>

                <div className="grid grid-cols-2 gap-10 px-5 lg:px-10 mt-10 w-full">
                    <VerticalPanned from={pannedFrom} triggerClass="col-span-2 w-full">
                        <Card title={"PIQUE"} className="relative w-full lg:h-[95dvh] flex items-center justify-center">
                            <ImageCard src="/images/pique.webp" className="w-full object-cover" />
                            <Card className="absolute w-3/4 h-fit">
                                <VideoCard src="/videos/pique.mp4" className="w-full h-full object-contain" />
                            </Card>
                        </Card>
                    </VerticalPanned>

                    <VerticalPanned from={pannedFrom}>
                        <Card title="Sussex Taps" className="min-h-50dvh aspect-square lg:aspect-auto lg:h-[100dvh] col-span-2 lg:col-span-1">
                            <VideoCard src="/videos/sussex.mp4" className="object-cover" />
                        </Card>
                    </VerticalPanned>

                    <VerticalPanned from={pannedFrom}>
                        <Card title={"Chaleit"} className="relative flex items-center justify-center h-full aspect-square lg:aspect-auto lg:h-[100dvh] col-span-2 lg:col-span-1">
                            <ImageCard src="/images/chaleit1.webp" className="w-full object-cover" />
                            <Card className="absolute w-2/5 h-fit rounded-2xl">
                                <ImageCard src="/images/chaleit2.webp" />
                            </Card>
                        </Card>
                    </VerticalPanned>

                    <VerticalPanned from={pannedFrom} triggerClass="col-span-2 w-full">
                        <Card title="Surveillance Watch" className="relative flex items-center justify-center col-span-2 h-full aspect-video lg:aspect-auto lg:h-[95dvh]">
                            <VideoCard src="/videos/surveillance-watch.mp4" className="object-cover" />
                            <Card className="absolute h-3/4 w-3/4">
                                <ImageCard src="/images/surveillance.webp" className="w-full h-full" />
                            </Card>
                        </Card>
                    </VerticalPanned>
                </div>

                <div className="flex flex-col px-5 sm:px-7 lg:px-10 lg:grid grid-cols-[2fr_3fr] grid-rows-[auto_auto_1fr] gap-[clamp(3.125rem,3.30vw,4.15rem)] pt-20 w-full">
                    <div className="flex flex-col gap-3 lg:gap-0 col-span-2 text-3xl lg:text-[clamp(3rem,9dvw,8rem)]">
                        <VerticalPanned from={pannedFrom}>
                            <span>
                                Grandes trabajos para
                            </span>
                        </VerticalPanned>
                        <VerticalPanned from={pannedFrom}>
                            <span className="flex items-center gap-2 lg:gap-4 pr-2 lg:pr-7 leading-none">
                                <span>Grandes</span>
                                <span className="flex items-end">
                                    <SmileFace className="w-9 lg:w-[7rem]" />
                                </span>
                                <span>personas.</span>
                            </span>
                        </VerticalPanned>
                    </div>

                    <VerticalPanned from={pannedFrom}>
                        <div className="text-[clamp(1rem,1.32vw,1.65rem)]">
                            <p>Ponemos a las personas en primer lugar, entendiendo que un producto bien diseñado impacta de manera significativa en la vida de quienes lo utilizan. Al empoderar a nuestros usuarios, podemos resolver problemas únicos, acelerar el progreso y desbloquear el potencial de nuestros clientes.</p>
                            <br />
                            <p>Nuestro espíritu independiente impulsa nuestra energía creativa y nuestra forma de abordar la tecnología, lo que nos permite garantizar calidad y entregar resultados excepcionales de manera constante.</p>
                        </div>
                        <Button className="my-5 gap-2">
                            <span className="leading-none">Acerca de Nosotros</span>
                            <Arrow height="h-3.5" stroke="1" color="#0f0" />
                        </Button>
                    </VerticalPanned>
                    <VerticalPanned from={{ ...pannedFrom, opacity: -3, y: 250 }} triggerClass="row-span-2">
                        <Card>
                            <div className="h-fit bg-amber-50 rounded-4xl overflow-hidden">
                                <ImageCard src="/images/imagen1.webp" />
                            </div>
                        </Card>
                    </VerticalPanned>
                    <div className="w-full flex flex-col justify-center lg:justify-end items-center row-start-3">
                        {stats.map((stat, i) => (
                            <div key={i} className="w-full grid grid-cols-[50%_1fr] border-b-1 items-center first:pb-10 not-first:py-5">
                                <VerticalPanned from={{ x: -140, opacity: -3, ease: "expo.out", duration: 1 }}>
                                    <Counter to={stat.to} suffix={stat.suffix} />
                                </VerticalPanned>
                                <VerticalPanned from={{ y: 100, opacity: 0, ease: "expo.out", duration: 2 }} className="overflow-hidden">
                                    <span className="text-xl lg:text-[clamp(1.375rem,2.5dvw,1.875rem)]">{stat.description}</span>
                                </VerticalPanned>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-dvw py-10 px-5 lg:px-10 overflow-hidden">
                    <VerticalPanned from={{ y: 100, opacity: 0, ease: "expo.out", duration: 2 }} className="pt-50 pb-20 px-5 lg:px-10 overflow-hidden">
                        <h2 className="text-7xl">Novedades</h2>
                    </VerticalPanned>

                    <div>
                        <Slider>
                            {news.map((n, i) => (
                                <VerticalPanned key={i} from={{ x: (-140 - (i * 250)), opacity: (0 - i * 4), ease: "expo.out", duration: (0.75 + i * 0.25) }} className="!overflow-visible" triggerClass="!overflow-visible">
                                    <article className="!overflow-visible">
                                        <Card title={n.imgTitle}>
                                            <ImageCard src={n.img} className="w-full h-full" />
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
                                </VerticalPanned>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div >
        </ExpandingCard>
    );
}
