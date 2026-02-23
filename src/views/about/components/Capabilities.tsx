import PannedText from '@/components/common/PannedText'
import { capabilities } from '@/constants/about'

const Capabilities = () => {
    return (
        <div className="grid text-color-secondary w-full max-w-[calc(clamp(87.5rem,92.6vw,116.375rem))] mx-auto p-fluid mt-[clamp(9.375rem,19.53125vw,12.46875rem)] lg:mt-[clamp(12.5rem,13.22vw,16.625rem)] gap-[clamp(7.9375rem,8.4vw,10.56rem)]">
            <PannedText className="max-w-[clamp(71.25rem,75.397vw,94.76rem)] text-[clamp(1.875rem,3.90vw,2.49rem)] lg:text-[clamp(2.5rem,5.21vw,3.325rem)] xl:text-[clamp(3.75rem,3.97vw,4.99rem)] leading-[1] overflow-hidden">
                Nuestras capacidades se centran en nuestra habilidad para desarrollar sitios web y aplicaciones de clase mundial. Trabajamos 100 % internamente y de principio a fin, asegurando que cada proyecto se entregue con el más alto estándar de calidad.
            </PannedText>

            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[992px]:grid-cols-3 justify-between gap-[3.125rem] sm:gap-[5rem_2.5rem] lg:gap-[clamp(5.94rem,6.28vw,7.89rem)_clamp(5rem,5.29vw,6.65rem)]">
                {capabilities.map((c, i) => (
                    <div key={i} className="flex flex-col">
                        <span className="text-3xl lg:text-4xl pb-10">{c.title}</span>
                        <ul className="text-lg lg:text-2xl flex flex-col gap-2">
                            {c.capabilities.map((capabilitie, j) => (
                                <li key={j}>{capabilitie}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Capabilities