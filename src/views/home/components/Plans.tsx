import { ButtonBlack } from '@/components/common/Button'
import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import TiltCard from '@/components/common/TiltCard'
import { plansData } from '../data/plans'
import { useModal } from '@/context/ModalContext'
import Brief from '@/views/Brief'
import { ArticleRenderer } from '@/components/articles/ArticleRenderer'
import { backgroundOriginal } from '../home.constants'
import ThemeTrigger from '@/components/common/ThemeTrigger'

const Plans = () => {

    const { openModal } = useModal();

    const handleOpenBrief = (plan: string) => {
        openModal(<Brief plan={plan} />)
    }

    const handleOpenPlanDetails = (plan: string) => {
        openModal(
            <ArticleRenderer
                type={"plans"}
                slug={plan}
                onNext={() => { }}
            />
        )
    }

    //#908ff3

    return (
        <section className="flex flex-col p-fluid w-full py-20 text-color-primary">
            <ThemeTrigger
                startDesktop="top 90%"
                endDesktop="bottom 60%"
                startMobile="top bottom"
                bgColor={"#342e3d"}
                bgOriginal={backgroundOriginal}
            >
                <div>
                    <Headings variant='subtitle' as='h2' className='!mb-20 w-full flex justify-center text-[#827cff]'>
                        <PannedText className='text-center'>
                            Convierte tu marca en una marca que impacta
                        </PannedText>
                    </Headings>
                    <div className='grid grid-cols-1 min-[800px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-10 min-[900px]:gap-4 max-[992px]:mt-10'>
                        {plansData.map(plan => (
                            <TiltCard key={plan.slug} intensity={0.45} className={`relative min-[1200px]:min-h-[540px] aspect-auto max-h-none h-full ${plan.isFeatured ? 'bg-[#6419ef] text-white max-[800px]:mt-5 ' : 'bg-[#fcfcfc]'}`} >
                                {
                                    plan.isFeatured && (
                                        <div className='absolute -top-7 left-1/2 -translate-x-1/2
                                    bg-gradient-to-l from-cyan-400 to-indigo-500 
                                    text-white text-center text-[1rem] font-semibold [word-spacing:0.125rem] uppercase w-max px-10 py-3 rounded-lg'>
                                            {/* <div className='absolute 
                                    bg-gradient-to-l from-blue-400 to-purple-300 text-white w-full -top-10 py-3 text-center text-[1rem] font-bold [word-spacing:0.125rem] uppercase rounded-tl-2xl rounded-tr-2xl'> */}
                                            <span>La opción más elegida</span>
                                        </div>
                                    )
                                }
                                <div className='px-5 min-[1200px]:p-fluid py-8 grid grid-cols-1 grid-rows-[auto_1fr] justify-between h-full'>
                                    <header className='flex flex-col gap-0 items-center w-full mb-5 min-[1200px]:mb-7'>
                                        <Headings variant='' as='h3' className='text-[clamp(1.5rem,2vw,2.25rem)] !mb-2 min-[1200px]:mb-3! uppercase font-bold'>{plan.category}</Headings>
                                        <div className='text-[clamp(1.25rem,1.75vw,1.875rem)] text-center'>
                                            <p><span className='text-[clamp(1rem,1.35vw,1.5rem)] mr-2'>Desde </span><strong>S/. {plan.cost}</strong></p>
                                        </div>
                                    </header>
                                    <div className='flex flex-col gap-4 justify-between'>
                                        <div className='flex flex-col gap-6 min-[1200px]:gap-10'>
                                            <div className='text-[clamp(1.175rem,1.35vw,1.5rem)] leading-[1.2]'>
                                                <p>Ideal para <b>{plan.target}</b> {plan.targetDescription}</p>
                                            </div>
                                            <div>
                                                <ul className='text-[clamp(1rem,1.2vw,1.25rem)]'>
                                                    {plan.features.map((feature, index) => (
                                                        <li key={index} className='flex items-center gap-2 mb-3 min-[1200px]:mb-4'>
                                                            <div className='flex shrink-0 self-start'>
                                                                <img src='/icons/check.webp' className={`w-4 h-4 mt-1 ${plan.isFeatured ? 'invert-100 contrast-200' : ''}`} />
                                                            </div>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between min-[1200px]:mt-3'>
                                            <div onClick={() => handleOpenPlanDetails(plan.slug)}>
                                                <span className='underline cursor-pointer' >Mas Detalles</span>
                                            </div>
                                            <ButtonBlack className={`${plan.isFeatured ? 'hover:!bg-white hover:!text-purple-700' : ''}`} onClick={() => { handleOpenBrief(plan.slug) }}>Solicitar cotización</ButtonBlack>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-15'>
                    <Headings variant='eyebrow' as='h2' className='max-[767px]:hidden !mb-0 justify-center text-[#827cff]'>
                        <PannedText>
                            ¿Buscas un plan personalizado?
                        </PannedText>
                    </Headings>
                    <Headings variant='eyebrow' as='h2' className='min-[768px]:hidden grid !mb-8 justify-center text-[#827cff]'>
                        <PannedText>
                            ¿Buscas personalización?
                        </PannedText>
                    </Headings>
                    <PannedText className='text-[clamp(1.35rem,3vw,2.1rem)] max-[768px]:inline max-[768px]:items-center items-start max-[768px]:text-center  text-left min-[1200px]:text-4xl text-[#827cff]'>
                        Creamos una solución estratégica adaptada a tus objetivos.
                    </PannedText>
                    <ButtonBlack className='min-w-max text-[clamp(1.1rem,2.1vw,1.55rem)] min-[1200px]:text-xl !p-fluid min-[1200px]:!p-5 w-35' onClick={() => { handleOpenBrief('personalizado') }}>Diseña tu plan a medida</ButtonBlack>

                </div>
            </ThemeTrigger>
        </section>
    )
}

export default Plans