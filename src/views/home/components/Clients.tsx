import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import VerticalRoulette from '@/components/common/VerticalRoulette'
import { clients } from '../data/clients'

const Clients = () => {

    return (
        <div className="flex flex-col p-fluid max-[992px]:gap-10 my-25 lg:py-20 items-center justify-center [2000px]:h-dvh">
            <Headings as="h2" variant="subtitle" className="text-[#463467] text-center">
                <PannedText>
                    <span>Diseñamos, construimos y entregamos productos de clase mundial para marcas con visión al futuro.</span>
                </PannedText>
            </Headings>
            <VerticalRoulette
                elements={clients}
                minSize="768px"
                columns={5}
                minColumns={3}
                type="image"
                className="w-full"
                contentClass="object-contain flex items-center justify-center"
                imgClass="w-[clamp(100px,13dvw,200px)]"
            />
        </div>
    )
}

export default Clients