import { Card, ImageCard } from "@/components/common/Card";
import { homeWorks, logoClients, news, ourService } from "@/constants/home";
import SmileFace from "@/assets/SmileFace";
import PannedText from "@/components/common/PannedText";
import Slider from "@/components/common/Slide";
import ThemeTrigger from "@/components/common/ThemeTrigger";
import VerticalRoulette from "@/components/common/VerticalRoulette";
import Panned from "@/components/common/Panned";
import { ButtonBlack } from "@/components/common/Button";
import Arrow from "@/assets/Arrow";
import Slide from "@/components/home/Slide";
import Stats from "@/components/home/Stats";
import VideoExpanding from "@/components/home/VideoExpanding";
import Main from "@/components/layouts/Main";
import { useModal } from "@/context/ModalContext";
import PreviewCard from "@/components/common/PreviewCard";
import Headings from "@/components/common/Headings";

export default function Home() {

    const { openModal } = useModal();

    const handleOpenArticle = (articleType: "work" | "awards", slug: string) => {
        openModal(articleType, slug);
    }

    const homeWorksMedia = homeWorks();
    const bgOriginal = "white"
    const bgColor = "var(--purple-primary)"

    return (
        <Main>
            <section className='w-full p-fluid grid items-center min-h-[30vh] min-[992px]:min-h-[80dvh]'>
                <Headings className="text-[clamp(2.6rem,6.2vw,4.16rem)]">
                    <PannedText className="overflow-hidden">
                        Extraordinarias Experiencias Digitales
                    </PannedText>
                </Headings>
            </section>

            <VideoExpanding />

            <ThemeTrigger
                startDesktop="top-=450 bottom"
                endDesktop="bottom+=200 top"
                startMobile="top bottom"
                bgColor={bgColor}
                bgOriginal={bgOriginal}
            >
                <div className="flex flex-col p-fluid gap-20 my-25 lg:py-20 items-center justify-center [2000px]:h-dvh">
                    <Headings as="h2" variant="subtitle" className="text-white text-center">
                        <PannedText>
                            <span>{ourService.description}</span>
                        </PannedText>
                    </Headings>
                    <VerticalRoulette
                        content={logoClients}
                        minSize="768px"
                        columns={5}
                        minColumns={3}
                        type="image"
                        className="w-full"
                        contentClass="object-contain flex items-center justify-center"
                        imgClass="w-[clamp(100px,13dvw,200px)]"
                    />
                </div>
            </ThemeTrigger>

            <div className="grid">
                <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-13 m-[2.5rem_0] mt-[0vh] min-[992px]:m-[clamp(4.375rem,4.6296296296vw,5.81875rem)_0] max-w-[calc(clamp(89.5rem,94.71vw,119.035rem)+var(--container-gutter)*2)] px-[var(--container-gutter)] mx-auto w-full ">
                    {homeWorksMedia.map(hm => (
                        <div key={hm.id} className="h-full w-full min-[992px]:nth-[3n-2]:col-span-2 aspect-[23/29] nth-[3n-2]:aspect-[47/29] cursor-pointer" onClick={() => handleOpenArticle("work", hm.slug)}>
                            <Panned variant="vertical" className="w-full h-full" triggerClass="h-full w-full">
                                <PreviewCard data={hm} />
                            </Panned>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col p-fluid lg:grid grid-cols-[2fr_3fr] grid-rows-[auto_auto_1fr] gap-[clamp(3.125rem,3.30vw,4.15rem)] w-full text-[var(--color-theme-secondary)]">
                <Headings as="h2" className="col-span-2 max-w-[10.5em]">
                    <Panned variant="vertical">
                        <span>Lo mejor para</span>
                    </Panned>
                    <Panned variant="vertical">
                        <span className="flex flex-wrap items-center gap-2 lg:gap-6 leading-none ">
                            <span>los mejores</span>
                            <span><SmileFace className="inline-block w-9 min-[992px]:w-[7rem]" /></span>
                            <span>.</span>
                        </span>
                    </Panned>
                </Headings>

                <div className="flex flex-col justify-between">
                    <Panned variant="vertical">
                        <div className="text-[clamp(1rem,1.61vw,1.33rem)] min-[1200px]:text-[clamp(1.25rem,1.32vw,1.6625rem)] leading-[1.5] text-primary">
                            <p>Ponemos a las personas en primer lugar, entendiendo que un producto bien diseñado impacta de manera significativa en la vida de quienes lo utilizan. Al empoderar a nuestros usuarios, podemos resolver problemas únicos, acelerar el progreso y desbloquear el potencial de nuestros clientes.</p>
                            <br />
                            <p>Nuestro espíritu independiente impulsa nuestra energía creativa y nuestra forma de abordar la tecnología, lo que nos permite garantizar calidad y entregar resultados excepcionales de manera constante.</p>
                        </div>
                        <ButtonBlack className="mt-10" href="/acerca-de">
                            <span className="text-[clamp(0.94rem,0.99vw,1.24rem)] py-1">Acerca de Nosotros</span>
                            <Arrow height="h-3.5" stroke="1" color="#0f0" />
                        </ButtonBlack>
                    </Panned>
                    <Stats />
                </div>
                <Panned variant="vertical">
                    <Card>
                        <div className="h-fit bg-amber-50 rounded-4xl overflow-hidden">
                            <ImageCard src="/images/imagen1.webp" />
                        </div>
                    </Card>
                </Panned>

            </div>

            <div className="overflow-hidden">
                <div className="p-fluid max-w-[calc(100dvw-var(--container-gutter))] w-full">
                    <div className="mx-[calc(-1*var(--feed-overflow,0))] mt-[clamp(5rem,5.3vw,6.65rem)] mb-20">
                        <Headings as="h2" variant="section" className="mb-5 justify-start px-[var(--feed-overflow)]">
                            <PannedText>
                                Novedades
                            </PannedText>
                        </Headings>

                        <Slider>
                            {news.map((n, i) => (
                                <Panned
                                    key={i}
                                    variant="horizontal"
                                    xOffset={(-i * 250)}
                                    opacityOffset={-i * 4}
                                    durationOffset={-0.25 + i * 0.25}
                                >
                                    <Slide
                                        imgTitle={n.title}
                                        imgSrc={n.img}
                                        date={n.date}
                                        title={n.title}
                                        description={n.description}
                                    />
                                </Panned>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </Main>
    );
}
