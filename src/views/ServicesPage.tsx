import Arrow from '@/assets/Arrow';
import { Thunder } from '@/assets/icons/Thunder';
import Headings from '@/components/common/Headings';
import Panned from '@/components/common/Panned';
import PannedText from '@/components/common/PannedText';
import StackCards from '@/components/common/StackCards';
import TiltCard from '@/components/common/TiltCard';
import Main from '@/components/layouts/Main';
import { clientsImages } from '@/constants/about';
import { useModal } from '@/context/ModalContext';
import { servicePageContent } from '@/data/servicesPage/services';
import { getServiceInfo } from '@/utils/getService';
import { getTestimoniesByService } from '@/utils/getTestimoniesByService';
import { Link, useParams } from 'react-router-dom'

const ServicesPage = () => {

    const { openModal } = useModal()
    const params = useParams()
    const slug = params.slug
    if (!slug) return

    const { clientes } = clientsImages()

    const page = servicePageContent(slug)
    const testimonies = getTestimoniesByService(slug)

    console.log(page);
    console.log(testimonies);


    if (!page || !testimonies) return

    const nextService = getServiceInfo(page.nextService)

    console.log(nextService);

    if (!nextService) return

    const { heading, description, briefSubmit } = page

    return (
        <Main className='mt-20'>
            {/* Heading */}
            <section className='flex flex-col gap-15 min-[992px]:gap-25 p-fluid'>
                <Panned variant='vertical' yOffset={400}>
                    <h1 className='text-[clamp(0.95rem,0.96vw,1.14rem)] text-primary'>
                        <span className='bg-red-200 px-3 py-2 rounded-full'>{heading.pill}</span>
                    </h1>
                </Panned>

                <Headings as='h2' variant='subtitle' className='max-w-[clamp(76.25rem,80.69vw,101.41rem)] leading-[1] !m-0'>
                    <Panned variant='vertical' delay={0.1}>
                        {heading.title}
                    </Panned>
                </Headings>

                <Panned variant='vertical'>
                    <div className='rounded-4xl overflow-hidden w-full aspect-[45/24]'>
                        {
                            heading.mediaType === "image" ?
                                <img src={heading.heroImage} className='w-full h-full object-cover' />
                                :
                                <video autoPlay loop muted className='w-full h-full object-cover rounded-4xl'>
                                    <source src={heading.heroImage} type='video/mp4' />
                                    Tu navegador no soporta este video
                                </video>
                        }
                    </div>
                </Panned>
            </section>

            {/* Description */}
            <section className='p-fluid mx-auto text-primary w-full max-w-[calc(clamp(76.25rem,80.69vw,101.42rem)+var(--container-gutter)*2)] grid gap-[1.625rem] min-[992px]:gap-[2.5rem] min-[1200px]:gap-[3.125rem] mt-15 min-[992px]:my-40'>
                <Headings as='h2' variant='subtitle' className='leading-[1] !m-0 max-w-[clamp(51.88rem,54.89vw,69rem)]'>
                    <PannedText>
                        {description.title}
                    </PannedText>
                </Headings>

                <Panned variant='vertical'>
                    <p className='text-[clamp(1.25rem,1.33vw,1.66rem)] max-w-[clamp(51.88rem,54.89vw,69rem)] opacity-60 leading-[1.4]'>
                        {description.subtitle}
                    </p>
                </Panned>

                <div className='grid grid-cols-1 min-[992px]:grid-cols-4 gap-10 w-full'>
                    {description.capabilities.map((cap, i) => (
                        <Panned variant='horizontal' xOffset={-50 * i} durationOffset={0.15 * i} opacityOffset={-1 * i} className='max-[992px]:mt-10 mt-5'>
                            <div key={i} className='flex flex-col gap-5 min-[992px]:gap-10'>
                                <div><Thunder /></div>
                                <hr />
                                <div>
                                    <h3 className='text-[clamp(1.13rem,1.2vw,1.5rem)] mb-8'>{cap.title}</h3>
                                    <span className='opacity-60 text-[clamp(0.94rem,0.99vw,1.25rem)] leading-[1.5]'>{cap.text}</span>
                                </div>
                            </div>
                        </Panned>
                    ))}
                </div>

                <div className='flex flex-col gap-20 min-[992px]:gap-30 mt-15'>
                    {description.valuePropositions.map((val, i) => (
                        i % 2 === 0 ?
                            <div key={i} className='grid min-[992px]:grid-cols-2 gap-8'>
                                <Panned variant='vertical' >
                                    <div className='aspect-[754/531] overflow-hidden rounded-4xl'>
                                        {
                                            val.mediaType === "image" ?
                                                <img src={val.media} className='object-cover w-full' />
                                                :
                                                <video autoPlay loop muted>
                                                    <source src={val.media} className='object-cover w-full' />
                                                </video>
                                        }
                                    </div>
                                </Panned>
                                <div className='flex flex-col justify-center min-[992px]:max-w-[clamp(28.75rem,30.43vw,38.24rem)] ml-auto'>
                                    <div className='max-[992px]:mb-5'>
                                        <Headings as='h2' variant='eyebrow' className='mt-0 mb-0'>
                                            <PannedText>
                                                {val.title}
                                            </PannedText>
                                        </Headings>
                                    </div>
                                    <Panned variant='vertical'>
                                        <p className='text-[clamp(0.94rem,0.99vw,1.25rem)] leading-[1.5]'>{val.text}</p>
                                    </Panned>
                                </div>
                            </div>
                            :
                            <div key={i} className='grid min-[992px]:grid-cols-2 gap-8'>
                                <div className='flex flex-col justify-center min-[992px]:max-w-[clamp(28.75rem,30.43vw,38.24rem)] max-[991px]:max-[991px]:row-2 mr-auto'>
                                    <div className='max-[992px]:mb-5'>
                                        <Headings as='h2' variant='eyebrow' className='mt-0 mb-0'>
                                            <PannedText>
                                                {val.title}
                                            </PannedText>
                                        </Headings>
                                    </div>
                                    <Panned variant='vertical'>
                                        <p className='text-[clamp(0.94rem,0.99vw,1.25rem)] leading-[1.5]'>{val.text}</p>
                                    </Panned>
                                </div>
                                <Panned variant='vertical' className='max-[991px]:row-1'>
                                    <div className='aspect-[754/531] overflow-hidden rounded-4xl max-[992px]:row-1'>
                                        {
                                            val.mediaType === "image" ?
                                                <img src={val.media} className='object-cover w-full' />
                                                :
                                                <video autoPlay loop muted>
                                                    <source src={val.media} className='object-cover w-full' />
                                                </video>
                                        }
                                    </div>
                                </Panned>
                            </div>
                    ))}
                </div>
            </section>

            {/* Awards */}
            <section className='p-fluid max-w-[clamp(66.25rem,70.11vw,88.12rem)] my-40 min-[992px]:mt-60'>
                <div className='mb-10'>
                    <Headings as='h2' variant='section'>
                        80+ awards globally and continually recognised by the best of the best.
                    </Headings>
                </div>
                <div className='grid grid-cols-3 min-[992px]:grid-cols-5 gap-1 min-[992px]:gap-2'>
                    {clientes.map(ci => (
                        <TiltCard key={ci.id} img={ci.src} />
                    ))}
                </div>
                <div className='my-10 cursor-pointer' onClick={() => { openModal("awards", "awards") }}>
                    <span className='bg-white rounded-full py-3 px-5'>+ See all awards</span>
                </div>
            </section>

            {/* Testimonies */}
            <section className="grid gap-20 p-fluid">
                {testimonies.map((t, i) => {
                    const style = { top: `${(20 + 10 * i) * 0.25}rem` }
                    const triggerStyle = { marginTop: `${100 * i}vh`, marginBottom: `${(30 - 10 * i) * 0.25}rem`, }
                    const prevLast = i === testimonies.length - 2
                    const last = i === testimonies.length - 1

                    return (
                        <StackCards key={i} prevLast={prevLast} last={last} style={style} triggerStyle={triggerStyle} className={`${t.cardColor} mb-30`}>
                            <div className={`w-full h-full grid max-[991px]:grid-flow-row max-[991px]:grid-rows-[auto_1fr] min-[992px]:grid-cols-[min(70vh,50%)_1fr] max-[991px]:gap-7 ${t.textColor ?? 'text-primary'} `}>
                                <div className='max-[991px]:w-full max-h-full rounded-4xl overflow-hidden min-[992px]:aspect-[23/21]'>
                                    <img src={t.image} className='max-[991px]:max-h-[33vh] object-cover aspect-[21/23] w-full' />
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <blockquote className='flex flex-col justify-between min-[992px]:ml-17'>
                                        <q className='text-[clamp(1.3rem,4.2vw,1.7rem)] min-[768px]:text-[clamp(1.88rem,3.9vw,2.5rem)] min-[1200px]:text-[clamp(2.25rem,3vw,3rem)]'>{t.quote}</q>
                                    </blockquote>
                                    <div className='flex flex-col gap-2 min-[992px]:ml-17'>
                                        <span className='text-[1.15rem]'>{t.author}</span>
                                        <span>{t.organization}</span>
                                    </div>
                                </div>
                            </div>
                        </StackCards>
                    )
                })}
            </section>

            {/* Submit */}
            <section className='p-fluid mb-50'>
                <Panned variant='vertical' className='flex justify-between min-[1336px]:items-center max-[1336px]:flex-col max-[1336px]:gap-10'>
                    <Headings as='h2' variant='section'>
                        {briefSubmit}
                    </Headings>
                    <div>
                        <div className='flex w-fit gap-4 py-5 px-7 min-[992px]:py-9 min-[992px]:px-12 bg-white rounded-full text-2xl min-[992px]:text-[clamp(1.475rem,15vw,1.65rem)] cursor-pointer '>
                            <span>Submit a brief</span>
                            <Arrow width='w-5' />
                        </div>
                    </div>

                </Panned>
            </section>

            {/* Next service */}
            <section className='p-fluid mb-40'>
                <div className='flex flex-col min-[1200px]:items-center min-[1200px]:flex-row gap-[2.5rem_clamp(2.81rem,2.98vw,3.74rem)] p-8 bg-slate-900 rounded-[2rem] text-white'>
                    <div className='flex flex-col gap-4 min-[1200px]:gap-[clamp(1.88rem,1.99vw,2.5rem)] h-full min-[1200px]:p-9 pr-0'>
                        <h2 className='m-0 px-4 py-3 bg-slate-600 w-fit rounded-full'>Our Expertise</h2>
                        <Headings as='h2' variant='section' className='text-white mt-0 mb-auto'>{nextService.title}</Headings>
                        <div className='text-[clamp(1.25rem,1.33vw,1.66rem)] leading-[1.4] min-[992px]:max-w-[clamp(29.88rem,31.61vw,39.73rem)]'>
                            <span>{nextService.text}</span>
                        </div>
                        <div className='flex items-center gap-3 m-0 px-4 py-3 bg-slate-600 w-fit rounded-full'>
                            <Link to={nextService.url}><span>Read More</span></Link>
                            <Arrow width='w-4' />
                        </div>
                    </div>
                    <div className='aspect-[841/701] rounded-4xl overflow-hidden'>
                        <img src={nextService.img} className='w-full' />
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default ServicesPage