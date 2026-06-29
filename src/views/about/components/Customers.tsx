import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import TiltCard from '@/components/common/TiltCard'

const Customers = ({ customers }: { customers: string[] }) => {
    return (
        <div className="flex flex-col max-w-[calc(clamp(87.5rem,92.6vw,90rem))] p-fluid mt-10 mx-auto w-full gap-[clamp(5rem,5.3vw,6.65rem)]">
            <Headings as="h2" variant="section" className='text-color-primary'>
                <PannedText className='inline-flex'>
                    Tras 03 años de transformación estratégica, nos reinventamos por completo. Hoy estamos de vuelta, listos para llevar tu marca al futuro
                </PannedText>
            </Headings>

            {
                customers && <div className="grid grid-cols-3 min-[992px]:grid-cols-5 gap-1 min-[992px]:gap-2 mb-20">
                    {customers.map((customer, i) => (
                        <TiltCard key={i}>
                            <img src={customer} className="w-3/4 aspect-square rounded-none object-contain place-self-center" />
                        </TiltCard>
                    ))}
                </div>
            }
        </div>
    )
}

export default Customers