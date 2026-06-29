import TransparentCard from './TransparentCard'
import { beneficios, features } from '../data/planPersonalizado'
import TitleSection from './TitleSection'
import { useModal } from '@/context/ModalContext'
import Brief from '@/views/Brief'
import Panned from '@/components/common/Panned'

const PlanPersonalizado = () => {

    const { openModal } = useModal();

    function handleOpenBrief(plan: string) {
        openModal(<Brief plan={plan} />)
    }

    return (
        <section>
            <div className='max-w-7xl mx-auto'>
                <div className='py-25 p-fluid text-white grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <Panned variant='vertical'>
                            <TitleSection sectionName='plan-personalizado' isBgDark />
                        </Panned>
                        <div className='my-5'>
                            <ul className='flex flex-col gap-6'>
                                {features.map((feature, index) => (
                                    <Panned key={index} variant='horizontal' delay={0.15 + index * 0.10}>
                                        <li key={feature.id} className='grid grid-cols-[auto_1fr] gap-5'>
                                            <div className='bg-[#4400ff26] border border-[#4400ff4d] px-5 py-3 rounded-xl text-[#4400ffcc] font-bold h-fit'>
                                                <span>{index + 1}</span>
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-3'>
                                                    <span>{feature.icon}</span>
                                                    <h4 className='font-bold text-lg'>{feature.title}</h4>
                                                </div>
                                                <span className='opacity-40 leading-5'>{feature.description}</span>
                                            </div>
                                        </li>
                                    </Panned>
                                ))}
                            </ul>
                        </div>
                        <div className='flex justify-between gap-4 mt-10'>
                            <button className='bg-[#4700ff] rounded-xl w-fit py-4 px-10' onClick={() => handleOpenBrief("personalizado")}>Agendar reunión gratuita</button>
                            <a href={'https://wa.me/+51952009585'} target='_blank' className='border border-[#fff4] text-[#fffa] rounded-xl w-fit py-4 px-10'>Escríbenos por Whatsapp</a>
                        </div>
                    </div>
                    <div>
                        <TransparentCard className='flex-col gap-10 !bg-[#231E2D] !border-[#2C1E66]'>
                            <div className='flex items-center gap-5'>
                                <div className='bg-[#4700ff] px-4 py-3 rounded-2xl text-3xl '>🎯</div>
                                <div>
                                    <h3 className='text-2xl'>Plan Personalizado</h3>
                                    <span className='text-xs opacity-40'>Diseñado exclusivamente para ti</span>
                                </div>
                            </div>
                            <ul className='flex flex-col gap-5'>
                                {beneficios.map((beneficio, i) => (
                                    <Panned key={i} variant='horizontal' direction='left' delay={0.15 + i * 0.10}>
                                        <li key={beneficio.id} className='flex gap-2'>
                                            <span className='bg-[#4400ff26] border border-[#4400ff4d] px-1.5 py-1 rounded-full text-[#4400ffcc] text-[10px] font-bold h-fit'>✓</span>
                                            <div className='flex flex-col gap-1'>
                                                <span className='opacity-90'>{beneficio.title}</span>
                                                <span className='text-xs opacity-40'>{beneficio.description}</span>
                                            </div>
                                        </li>
                                    </Panned>

                                ))}
                            </ul>
                            <div className='p-4 bg-[#271E42] border border-[#2D1E71] rounded-2xl'>
                                <div className='flex gap-5 items-center p-4 leading-6'>
                                    <div>💬</div>
                                    <div><span className='text-[#4700ff] font-bold'>Inversion 100% personalizada.</span><span className='opacity-60'>El precio se define después de la reunión de diagnóstico, en función de los servicios elegidos y tus objetivos. Sin compromiso previo.</span></div>
                                </div>
                            </div>
                        </TransparentCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlanPersonalizado