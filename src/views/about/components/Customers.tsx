import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import TiltCard from '@/components/common/TiltCard'
import type { MediaTypes } from '@/types/MediaTypes.types'

const Customers = ({ clientes }: { clientes: MediaTypes[] }) => {
    return (
        <div className="flex flex-col text-theme-secondary max-w-[calc(clamp(87.5rem,92.6vw,116.375rem))] p-fluid mt-40 mx-auto w-full gap-[clamp(5rem,5.3vw,6.65rem)]">
            <Headings as="h2" variant="section" className="text-color-primary">
                <PannedText>
                    Tras 03 años de transformación estratégica, nos reinventamos por completo. Hoy estamos de vuelta, listos para llevar tu marca al futuro
                    {/* Desde hace 3 años, hemos impulsado una profunda transformación estratégica. Y, apoyados en nuestra trayectoria de crear impacto significativo y experiencias atractivas para clientes increíbles, nos hemos renovado por completo para esta nueva era. ¡Estamos de vuelta y listos para llevar tu marca al futuro! */}
                </PannedText>
            </Headings>

            <div className="grid grid-cols-3 min-[992px]:grid-cols-5 gap-1 min-[992px]:gap-2 mb-20">
                {clientes.map(ci => (
                    <TiltCard key={ci.id}>
                        <img src={ci.src} className="w-3/4 aspect-square rounded-none object-contain" />
                    </TiltCard>
                ))}
            </div>
        </div>
    )
}

export default Customers