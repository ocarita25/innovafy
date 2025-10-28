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
import { useEffect } from "react";
import SubTitles from "@/components/common/SubTitles";
import { HomeVideoWrapper } from "@/constants/expandingCardProps";
import Slide from "@/components/home/Slide";
import Stats from "@/components/home/Stats";
import VideoExpanding from "@/components/home/VideoExpanding";

export default function Home() {

    const bgOriginal = "var(--default-tertiary)"
    const bgColor = "var(--purple-primary)"

    useEffect(() => {
        const mainEl = document.getElementById('main')
        if (!mainEl) return;
        mainEl.style.setProperty("--theme-background", `${bgOriginal}`)
    }, [])

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
        <div>
            <div className='w-full px-[var(--container-gutter)] grid items-center content-center min-h-[30vh] min-[992px]:min-h-[80dvh]'>
                <h1 className="w-full tracking-normal font-medium text-[clamp(3rem,7dvw,8dvw)] lg:text-9xl xl:text-[clamp(8.5rem,9dvw,9rem)] text-[var(--color-theme-secondary)]">
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
                </h1>
            </div>

            <VideoExpanding />

            <ThemeTrigger
                startDesktop="top-=450 bottom"
                endDesktop="bottom+=200 top"
                startMobile="top+=200 bottom"
                bgColor={bgColor}
                bgOriginal={bgOriginal}
            >
                <div className="flex flex-col gap-20 my-25 lg:py-20 items-center justify-center [2000px]:h-dvh">
                    <SubTitles className="text-white text-center">
                        <PannedText className="">
                            <span>{ourService.description}</span>
                        </PannedText>
                    </SubTitles>
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

            <div className="grid">
                <div className="grid gap-13 m-[2.5rem_0] mt-[-50vh] min-[992px]:m-[clamp(4.375rem,4.6296296296vw,5.81875rem)_0] max-w-[calc(clamp(89.5rem,94.71vw,119.035rem)+var(--container-gutter)*2)] px-[var(--container-gutter)] mx-auto w-full ">
                    <div className="grid">
                        <VerticalPanned from={pannedFrom} triggerClass="w-full">
                            <Card title={"PIQUE"} className="aspect-[1452/890]">
                                <ImageCard src="/images/pique.webp" />
                                <Card className="absolute w-3/4">
                                    <VideoCard src="/videos/pique.mp4" />
                                </Card>
                            </Card>
                        </VerticalPanned>
                    </div>

                    <div className="grid auto-cols-fr min-[992px]:[grid-template-areas:'a_b'] gap-[inherit]">
                        <VerticalPanned from={pannedFrom}>
                            <Card title="Sussex Taps" className="aspect-[710/890]">
                                <VideoCard src="/videos/sussex.mp4" />
                            </Card>
                        </VerticalPanned>

                        <VerticalPanned from={pannedFrom}>
                            <Card title={"Chaleit"} className="aspect-[710/890]">
                                <ImageCard src="/images/chaleit1.webp" />
                                <Card className="absolute">
                                    <ImageCard src="/images/chaleit2.webp" />
                                </Card>
                            </Card>
                        </VerticalPanned>
                    </div>

                    <div className="grid">
                        <VerticalPanned from={pannedFrom} triggerClass="w-full">
                            <Card title="Surveillance Watch" className="aspect-[1452/890]">
                                <VideoCard src="/videos/surveillance-watch.mp4" />
                                <Card className="absolute h-3/4 w-3/4">
                                    <ImageCard src="/images/surveillance.webp" />
                                </Card>
                            </Card>
                        </VerticalPanned>
                    </div>
                </div>
            </div>

            <div className="flex flex-col px-5 sm:px-7 lg:px-10 lg:grid grid-cols-[2fr_3fr] grid-rows-[auto_auto_1fr] gap-[clamp(3.125rem,3.30vw,4.15rem)] pt-20 w-full text-[var(--color-theme-secondary)]">
                <SubTitles className="col-span-2">
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
                </SubTitles>

                <VerticalPanned from={pannedFrom}>
                    <div className="text-[clamp(1.25rem,1.32vw,1.6625rem)] text-[var(--color-theme-secondary)]">
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

                <Stats />
            </div>

            <div className="overflow-hidden">
                <div className="px-[var(--container-gutter)] mx-auto max-w-[calc(100dvw-var(--container-gutter))] w-full">
                    <div className="pb-[clamp(0.625rem,0.66vw,0.83rem)] mx-[calc(-1*var(--feed-overflow,0))] mt-[clamp(5rem,5.3vw,6.65rem)] mb-[clamp(5rem,5.29vw,6.65rem)]">
                        <VerticalPanned from={{ yPercent: 100, opacity: 0, ease: "expo.out", duration: 2 }} className="overflow-hidden">
                            <SubTitles className="sticky left-0 justify-start px-[var(--feed-overflow)]">
                                Novedades
                            </SubTitles>
                        </VerticalPanned>

                        <Slider>
                            {news.map((n, i) => (
                                <VerticalPanned key={i} from={{ x: (-140 - (i * 250)), opacity: (0 - i * 4), ease: "expo.out", duration: (0.75 + i * 0.25) }}>
                                    <Slide
                                        imgTitle={n.title}
                                        imgSrc={n.img}
                                        date={n.date}
                                        title={n.title}
                                        description={n.description}
                                    />
                                </VerticalPanned>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    );
}
