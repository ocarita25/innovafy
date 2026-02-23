import Arrow from '@/assets/Arrow';
import Headings from '@/components/common/Headings';
import Panned from '@/components/common/Panned';
import Main from '@/components/layouts/Main';
import { useModal } from '@/context/ModalContext';
import { servicePageContent } from '@/views/services/articles/services';
import { getServiceInfo } from '@/utils/getService';
import { useParams } from 'react-router-dom'
import Pill from './components/Pill';
import Title from './components/Title';
import Hero from './components/Hero';
import Description from './components/Description';
import Capabilities from './components/Capabilities';
// import Value from './components/Value';
import NextService from './components/NextService';
import { ZigZagContent, ZigZagMedia, ZigZagSection, ZigZagSectionContainer } from '@/components/layouts/ZigZagSection';
import Brief from '../Brief';
import { ButtonBlack } from '@/components/common/Button';

const ServicesPage = () => {

    const { openModal } = useModal()
    const params = useParams()
    const slug = params.slug
    if (!slug) return

    function handleOpenBrief() {
        openModal(<Brief plan='personalizado' />)
    }

    // const { clientes } = clientsImages()

    const page = servicePageContent(slug)
    // const testimonies = getTestimoniesByService(slug)

    // if (!page || !testimonies) return
    if (!page) return

    const nextService = getServiceInfo(page.nextService)

    if (!nextService) return

    const { heading, description, briefSubmit } = page

    return (
        <Main className='mt-20'>
            {/* Heading */}
            <section className='flex flex-col gap-15 min-[992px]:gap-25 p-fluid'>
                <Pill text={heading.pill} />
                <Title title={heading.title} />
                <Hero mediaType={heading.mediaType} src={heading.heroImage} />
            </section>

            {/* Description */}
            <section className='p-fluid mx-auto text-color-primary w-full max-w-[calc(clamp(76.25rem,80.69vw,101.42rem)+var(--container-gutter)*2)] grid gap-[1.625rem] min-[992px]:gap-[2.5rem] min-[1200px]:gap-[3.125rem] mt-15 min-[992px]:my-40'>
                <Description title={description.title} subtitle={description.subtitle} />
                <Capabilities capabilities={description.capabilities} />
                {/* <Value values={description.valuePropositions} /> */}
                <ZigZagSectionContainer>
                    {description.valuePropositions.map((value, i) => {
                        const reverse = i % 2 === 0
                        return (
                            <ZigZagSection media={value.media} mediaType={value.mediaType}>
                                <ZigZagContent title={value.title} text={value.text} reverse={reverse} />
                                <ZigZagMedia src={value.media} type={value.mediaType} />
                            </ZigZagSection>
                        )
                    })}
                </ZigZagSectionContainer>
            </section>

            {/* Awards */}
            {/* Testimonies */}

            {/* Submit */}
            <section className='p-fluid mb-50'>
                <Panned variant='vertical' className='flex justify-between min-[1336px]:items-center max-[1336px]:flex-col max-[1336px]:gap-10'>
                    <Headings as='h2' variant='section'>
                        {briefSubmit}
                    </Headings>
                    <div>
                        <ButtonBlack className='flex min-w-max w-fit gap-4 py-5! px-7! min-[992px]:py-9! min-[992px]:px-10! text-2xl min-[992px]:text-[clamp(1.475rem,15vw,1.45rem)]' onClick={handleOpenBrief}>
                            <span>Envia una solicitud</span>
                            <Arrow width='w-5' />
                        </ButtonBlack>
                        {/* <div className='flex w-fit gap-4 py-5 px-7 min-[992px]:py-9 min-[992px]:px-10 bg-white rounded-full text-2xl min-[992px]:text-[clamp(1.475rem,15vw,1.45rem)] cursor-pointer ' onClick={handleOpenBrief}>
                            <span>Envia una solicitud</span>
                            <Arrow width='w-5' />
                        </div> */}
                    </div>

                </Panned>
            </section>

            <NextService service={nextService} />
        </Main>
    )
}

export default ServicesPage