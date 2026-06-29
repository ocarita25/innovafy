import Panned from '@/components/common/Panned'
import TitleSection from './TitleSection'

interface Diferenciales {
    icon: string,
    title: string,
    description: string,
    popular?: boolean,
}

const Diferencial = () => {

    const diferenciales: Diferenciales[] = [
        {
            icon: '🏆',
            title: '+2 Años de Experiencia',
            description: 'Más de 2 años liderando la transformación digital de marcas en el sector gastronómico y B2C, con resultados reales y comprobados en el mercado peruano.',
            popular: true,
        },
        {
            icon: '🎯',
            title: 'Equipo Especializado 360°',
            description: 'Equipo especializado en Community Management, Diseño Gráfico, Producción Audiovisual, Publicidad Digital y SEO — asegurando resultados de alta calidad en cada área.',
        },
        {
            icon: '📊',
            title: 'Metodología Basada en Resultados',
            description: 'Procesos organizados, entregables concretos y seguimiento constante de métricas. No trabajamos por impresiones — trabajamos por objetivos de negocio medibles.',
        },
        {
            icon: '🚀',
            title: 'Acompañamiento Estratégico Continuo',
            description: 'Enfocados en la escalabilidad y el crecimiento de la marca a largo plazo. Somos más que un proveedor — somos tu socio digital estratégico.',
        },
        {
            icon: '🤖',
            title: 'Experiencia en Marcas Locales',
            description: 'Experiencia liderando marcas locales peruanas, logrando posicionamiento digital real, engagement genuino y fortalecimiento sólido de la presencia digital.',
        },
        {
            icon: '🤝',
            title: 'Sin Contratos Anuales',
            description: 'Trabajamos mes a mes porque confiamos plenamente en nuestros resultados. Nos quedamos contigo porque generamos valor, no porque lo exija un contrato.',
        },
    ]

    const diferencialStyle = (popular: boolean) =>
        popular ? 'bg-[#4300FF] text-color-secondary' : 'bg-white border-[#DDD8F0] hover:border-[#4700ff]'


    return (
        <section className='bg-[#FFF]'>
            <div className='max-w-7xl mx-auto'>
                <div className='py-15 p-fluid'>
                    <Panned variant='vertical'>
                        <TitleSection sectionName='por-que-inovafy-studio' />
                    </Panned>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {diferenciales.map((diferencial, i) => (
                            <Panned key={i} variant='horizontal' direction='left' delay={0.15 + i * 0.15} triggerClass='flex h-full' className='flex h-full'>
                                <div className={`${diferencialStyle(diferencial.popular || false)} h-full border hover:-translate-y-3 hover:shadow-[0px_10px_15px_1px_#4700ff22] p-8 rounded-3xl  flex flex-col gap-4`}>
                                    <div className={`${diferencial.popular ? 'bg-[#fff2]' : 'bg-[#4700ff22]'}  w-fit p-3 rounded-lg`}>{diferencial.icon}</div>
                                    <h3 className='text-2xl'>{diferencial.title}</h3>
                                    <p className='opacity-60 text-sm leading-6'>{diferencial.description}</p>
                                </div>
                            </Panned>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Diferencial