import Tags from '@/components/common/Tags'
import TransparentCard from './TransparentCard'
import { categorias } from '../data/planes'
import Panned from '@/components/common/Panned'
import PannedText from '@/components/common/PannedText'
import { scrollToSectionByID } from '@/utils/scrollTo'

const Hero = ({ categoriaActiva, seleccionarCategoria }: { categoriaActiva: string, seleccionarCategoria: (categoria: 'inicio' | 'crecimiento' | 'liderazgo') => void }) => {

    function handleSeleccionarCategoria(categoria: 'inicio' | 'crecimiento' | 'liderazgo') {
        seleccionarCategoria(categoria)
        scrollToSectionByID('servicios')
    }

    const tags = [
        '✦ Marketing Digital',
        '✦ Diseño Digital',
        '✦ Branding',
        '✦ Diseño UI/UX',
        '✦ Desarrollo App & Web',
        '✦ Producción Audiovisual',
        '✦ Creación de Contenido',
        '✦ IA & Automatización',
    ]

    return (
        <section className='p-fluid bg-[#4300FF]'>
            <div className='max-w-7xl mx-auto'>
                <div className='py-5'>
                    <Panned variant='vertical'>
                        <div className='border border-[#ffffff2e] bg-[#ffffff1a] rounded-full flex w-fit px-5 py-2 text-color-secondary'>
                            <div className='inline-flex uppercase text-[11px] font-[600] tracking-[0.18em]'>
                                ⬡ Inovafy Studio · Perú · USA · Spain
                            </div>
                        </div>
                    </Panned>
                </div>

                <div className='mb-20 grid grid-cols-1 md:grid-cols-2 gap-15'>
                    <div>
                        <Panned variant='vertical'>
                            <h1 className='playfair text-color-secondary text-[4.35rem] font-[900] mb-5 leading-[.95]'>Un plan para cada <em className='opacity-55'>etapa</em> de tu marca.</h1>
                        </Panned>
                        <div className='text-color-secondary opacity-50 text-[1rem] mb-10 leading-7 font-extralight'>
                            <PannedText>
                                Desde el primer post hasta dominar tu mercado. Tenemos el plan exacto para donde está tu negocio hoy — y para donde quiere llegar mañana.
                            </PannedText>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {tags.map((tag, i) => (
                                <Panned key={i} variant='horizontal' direction='left' delay={.25 + i * 0.10}><Tags tag={tag} /></Panned>
                            ))}
                        </div>
                    </div>

                    <div className='flex place-self-center text-color-secondary'>
                        <div className='grid grid-cols-2 gap-5'>
                            <Panned variant='vertical' triggerClass='col-span-2'>
                                <TransparentCard className='text-4xl items-center'>
                                    <span className='text-color-primary'>✦</span>
                                    <div className='flex flex-col ml-10 gap-2'>
                                        <span className='playfair'>+2 años</span>
                                        <span className='text-sm font-light opacity-60'>Transformando marcas en el sector gastronómico y B2C de Perú</span>
                                    </div>
                                </TransparentCard>
                            </Panned>
                            <Panned variant='vertical'>
                                <TransparentCard className='grid grid-rows-[auto_1fr] gap-3'>
                                    <span className='text-5xl playfair'>9</span>
                                    <span className='text-sm opacity-60 font-light'>Planes por etapa de negocio</span>
                                </TransparentCard>
                            </Panned>
                            <Panned variant='vertical'>
                                <TransparentCard className='grid grid-rows-[auto_1fr] gap-3'>
                                    <span className='text-5xl playfair'>6</span>
                                    <span className='text-sm opacity-60  font-light'>Servicios en un equipo</span>
                                </TransparentCard>
                            </Panned>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-color-secondary pb-20'>
                    {categorias.map((categoria, i) => (
                        <Panned key={i} variant='horizontal' direction='left' delay={0.35 + i * 0.15} onClick={() => handleSeleccionarCategoria(categoria.id)}>
                            <TransparentCard key={categoria.id} className='flex-col cursor-pointer' isActive={categoria.id === categoriaActiva}>
                                <span className='text-4xl mb-5'>{categoria.icon}</span>
                                <h2 className='text-[0.95rem] font-bold mb-2 playfair'>
                                    {categoria.title} ✦
                                </h2>
                                <p className='opacity-60 font-normal text-[0.85rem] mb-5'>
                                    {categoria.description}
                                </p>
                                <span className='font-bold text-[0.8rem]'>
                                    {categoria.price}
                                </span>
                            </TransparentCard>
                        </Panned>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Hero