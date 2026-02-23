import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import Slider from '@/components/common/Slide'
import { news } from '../data/news'
import Panned from '@/components/common/Panned'
import Slide from '@/views/home/components/Slide'

const News = () => {
    return (
        <div className="overflow-hidden">
            <div className="p-fluid max-w-[calc(100dvw-var(--container-gutter))] w-full">
                <div className="mx-[calc(-1*var(--feed-overflow,0))] mt-[clamp(5rem,5.3vw,6.65rem)] mb-20">
                    <Headings as="h2" variant="section" className="mb-5 justify-start px-[var(--feed-overflow)] text-color-primary">
                        <PannedText>
                            Nuestros Servicios
                            {/* Novedades */}
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
    )
}

export default News