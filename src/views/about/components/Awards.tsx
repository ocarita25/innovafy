import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import Scrollable from '@/components/common/Scrollable'
import TiltCard from '@/components/common/TiltCard'
import type { MediaTypes } from '@/types/MediaTypes.types'

const Awards = ({ clientes }: { clientes: MediaTypes[] }) => {
    return (
        <Scrollable yOriginal={10} yTarget={-5} start="top bottom" end="top 60%">
            <div className="grid max-w-[clamp(87.5rem,92.60vw,116.38rem)] w-full p-fluid gap-[clamp(1.875rem,199vw,2.5rem)]">
                <Headings as="h2" variant="section" className="text-color-primary">
                    <PannedText>
                        Aunque nuestro enfoque está en el éxito de nuestros clientes, nos enorgullece que nuestro trabajo sea <span className="text-purple-800">reconocido</span> continuamente por los mejores entre los mejores.
                    </PannedText>
                </Headings>

                <div className="grid grid-cols-3 lg:grid-cols-[repeat(5,minmax(auto,1fr))] gap-3">
                    {clientes.map(ci => (
                        <TiltCard key={ci.id}>
                            <img src={ci.src} className="w-3/4 aspect-square rounded-none object-contain" />
                        </TiltCard>
                    ))}
                </div>
            </div>
        </Scrollable>
    )
}

export default Awards