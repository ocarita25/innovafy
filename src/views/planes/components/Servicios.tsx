import { useModal } from '@/context/ModalContext'
import { obtenerPlanesPorCategoria } from '../data/planes'
import PlanCard from './PlanCard'
import TitleSection from './TitleSection'
import Brief from '@/views/Brief'
import Panned from '@/components/common/Panned'
import TransparentCard from './TransparentCard'

const Servicios = ({ categoria }: { categoria: 'inicio' | 'crecimiento' | 'liderazgo' }) => {

    const { planes } = obtenerPlanesPorCategoria(categoria)
    const { descripcion } = obtenerPlanesPorCategoria(categoria)

    const { openModal } = useModal()

    function handleOpenBrief(plan: string) {
        openModal(<Brief plan={plan} />)
    }

    return (
        <section id='servicios' className='bg-[#F0EDE6]'>
            <div className='bg-black'>
                <div className='max-w-7xl mx-auto p-fluid grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto] items-center justify-between text-color-secondary py-8'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-2xl font-bold'>
                            {descripcion.icon} {descripcion.title}
                        </h3>
                        <span className='opacity-60'>{descripcion.altDescription}</span>
                    </div>
                    <TransparentCard className='p-2 !py-2 text-[0.85rem] w-fit place-self-end'>
                        <span>{descripcion.price}</span>
                    </TransparentCard>
                </div>
            </div>
            <Panned variant='vertical'>
                <div className="max-w-7xl mx-auto">
                    <div className='py-15 p-fluid '>
                        <TitleSection sectionName='para-negocios-sin-presencia-digital' />
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {planes.map(plan => (
                                <PlanCard key={plan.id} plan={plan} variante={plan.level} popular={plan.popular} onOpenBrief={() => handleOpenBrief(plan.id)} />
                            ))}
                        </div>
                    </div>
                </div>
            </Panned>
        </section>
    )
}

export default Servicios