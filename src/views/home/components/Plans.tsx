import { ButtonBlack, ButtonWhite } from '@/components/common/Button'
import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import TiltCard from '@/components/common/TiltCard'
import { plansData } from '../data/plans'
import { useModal } from '@/context/ModalContext'
import Brief from '@/views/Brief'
import { ArticleRenderer } from '@/components/articles/ArticleRenderer'
import { backgroundOriginal } from '../home.constants'
import ThemeTrigger from '@/components/common/ThemeTrigger'
import { useNavigate } from 'react-router-dom'
import Panned from '@/components/common/Panned'

const Plans = () => {

    const { openModal } = useModal();
    const nav = useNavigate()

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

    function handleVerTodosPlanes() {
        nav('/planes')
    }

    //#908ff3

    return (
        <section className="flex flex-col w-full py-20 text-color-primary">
            <ThemeTrigger
                startDesktop="top 90%"
                endDesktop="bottom 60%"
                startMobile="top bottom"
                bgColor={"#1c142a"}
                bgOriginal={backgroundOriginal}
            >
                <div className='p-fluid max-w-[25rem] min-[800px]:max-w-[50rem] min-[900px]:max-w-[95rem] mx-auto'>
                    <Headings variant='subtitle' as='h2' className='!mb-20 w-full flex justify-center text-[#e4e2ff] playfair'>
                        <PannedText className='text-center inline-flex'>
                            Convierte tu marca en una marca que impacta
                        </PannedText>
                    </Headings>
                    <div className='grid grid-cols-1 min-[800px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-10 min-[900px]:gap-10 max-[992px]:mt-10'>
                        {plansData.map(plan => (
                            <TiltCard key={plan.slug} intensity={0.45} className={`relative min-[1200px]:min-h-[500px] aspect-auto max-h-none h-full ${plan.isFeatured ? 'bg-[#5700ff] text-white' : 'bg-[#fcfcfc]'}`} >
                                {
                                    plan.isFeatured && (
                                        <div className='absolute top-5 right-5
                                    bg-white rounded-full
                                    text-[#4700ff] text-center text-[0.75rem] font-semibold [word-spacing:0.125rem] uppercase w-max px-4 py-2'>
                                            <span>⭐ Más popular</span>
                                        </div>
                                    )
                                }
                                <div className='px-10 min-[1200px]:p-fluid py-7 grid grid-cols-1 grid-rows-[auto_1fr] justify-between h-full'>
                                    <header className='flex flex-col gap-0 w-full mb-5 min-[1200px]:mb-0'>
                                        <h3 className={`font-light ${!plan.isFeatured ? 'text-[#4700ff]' : ''}`}>✦ {plan.title}</h3>
                                        <h4 className='text-[clamp(1.5rem,2.5vw,2.75rem)] min-[1200px]:mb-3! font-black playfair mt-5'>
                                            {plan.category}
                                        </h4>
                                    </header>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col gap-6 min-[1200px]:gap-8'>
                                            <div className='text-[clamp(1rem,0.85vw,1.1rem)] leading-[1.75] opacity-75 font-light'>
                                                <p>{plan.targetDescription}</p>
                                            </div>
                                            <div className='text-[clamp(1.25rem,1.75vw,1.875rem)]'>
                                                <span className='text-[clamp(0.9rem,1.35vw,1rem)] mr-2 font-light'>Inversion desde </span>
                                                <span className='playfair text-xs'>S/. </span>
                                                <strong className='playfair text-[clamp(2.5rem,3vw,3rem)]'>{plan.cost.split(".")[0]}</strong>
                                                <strong className='playfair text-xl'>.{plan.cost.split(".")[1]}</strong>
                                            </div>
                                            <hr />
                                            <ul className='text-[clamp(0.85rem,1vw,1rem)] flex flex-col gap-3'>
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className='flex items-center gap-2 min-[1200px]:mb-2 opacity-85 font-light'>
                                                        <div className={`${plan.isFeatured ? 'bg-[#ffffff26]' : 'bg-[#ece8ff]'} flex self-start p-1 w-5 h-5 items-center justify-center rounded-full`}>
                                                            {/* <img src='/icons/check.webp' className={`w-4 h-4 mt-1 ${plan.isFeatured ? 'invert-100 contrast-200' : ''}`} /> */}
                                                            <span className='text-[0.65rem]'>✓</span>
                                                        </div>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='flex items-center justify-between mt-10'>
                                            <div onClick={() => handleOpenPlanDetails(plan.slug)}>
                                                <span className='underline cursor-pointer' >Mas Detalles</span>
                                            </div>
                                            <ButtonBlack className={`${plan.isFeatured ? 'hover:!bg-white hover:!text-purple-700' : ''} max-sm:text-xs`} onClick={() => { handleOpenBrief(plan.slug) }}>Solicitar cotización</ButtonBlack>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-10 bg-[#4700ff] mt-10 text-[#eee] p-10'>
                    <h2 className='!m-0 justify-center playfair text-center text-[4rem]'>
                        <Panned variant='vertical'>
                            ¿No sabes qué plan <br /><em className='opacity-65'>es para ti?</em>
                        </Panned>
                    </h2>
                    <PannedText className='text-[clamp(1.35rem,1vw,1.25rem)] inline-flex max-[768px]:items-center items-start max-[768px]:text-center text-left min-[1200px]:text-2xl opacity-75 font-light'>
                        Agenda una sesión estratégica gratuita de 30 minutos. Te ayudamos a elegir el plan ideal para tu etapa de negocio.
                    </PannedText>
                    <div className='flex flex-col items-center md:items-start md:flex-row gap-10'>
                        <ButtonBlack
                            className='min-w-max text-[clamp(1.1rem,2.1vw,1.55rem)] hover:bg-white hover:text-[#4700ff] min-[1200px]:text-xl !p-fluid min-[1200px]:!p-5 w-35'
                            onClick={() => handleOpenBrief('personalizado')}>
                            Agendar sesión GRATUITA
                        </ButtonBlack>
                        <ButtonWhite className='bg-transparent text-white border border-white !pfluid min-[1200px]:!p-5' onClick={handleVerTodosPlanes}>Ver todos los planes</ButtonWhite>
                    </div>
                </div>
            </ThemeTrigger>
        </section>
    )
}

export default Plans