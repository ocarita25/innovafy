import Headings from '@/components/common/Headings'
import PannedText from '@/components/common/PannedText'
import { whatWeDo, whatWeDont } from '@/constants/about'

const WhatWeDo = () => {
    return (
        <div className="text-color-primary grid max-w-[calc(clamp(87.5rem,92.59vw,116.375rem)+var(--container-gutter)*2)] p-fluid w-full gap-[clamp(5.625rem,5.95vw,7.48rem)] m-[clamp(6.25rem,6.6137566138vw,8.3125rem)_auto_clamp(9.375rem,9.9206349206vw,12.46875rem)]">
            <Headings as="h2" variant="section" className="max-w-[clamp(71.25rem,75.40vw,94.76rem)]">
                <PannedText>
                    Construimos relaciones de confianza con nuestros clientes, impulsados por la pasión, la creatividad y la tecnología para generar crecimiento estratégico y sostenible.
                </PannedText>
            </Headings>
            <div className="grid min-[992px]:grid-cols-2 max-w-[clamp(71.25rem,75.4vw,94.77rem)] gap-[clamp(5rem,5.291005291vw,6.65rem)]">
                <section className="grid gap-[clamp(2.125rem,2.25vw,2.83rem)] content-start">
                    <Headings as="h3" variant="eyebrow">Lo que hacemos</Headings>
                    <ul className="grid grid-cols-2 justify-between max-[480px]:gap-[clamp(1.15rem,2.65vw,3.33rem)] gap-[0.6em] m-0 p-0 opacity-70 list-none text-[clamp(1.125rem,1.19vw,1.5rem)]">
                        {whatWeDo.map((text, i) =>
                            <li key={i}>{text}</li>
                        )}
                    </ul>
                </section>
                <section className="grid gap-[clamp(2.125rem,2.25vw,2.83rem)] content-start">
                    {/* <h3 className="line-through m-0 text-[clamp(1.5rem,1.58vw,1.99rem)]">Lo que no hacemos</h3> */}
                    <Headings as="h3" variant="eyebrow">Lo que no hacemos</Headings>
                    <ul className="grid grid-cols-2 justify-between max-[480px]:gap-[clamp(1.15rem,2.65vw,3.33rem)] gap-[0.6em] m-0 p-0 opacity-70 list-none text-[clamp(1.125rem,1.19vw,1.5rem)]">
                        {whatWeDont.map((text, i) =>
                            <li key={i}>{text}</li>
                        )}
                    </ul>
                </section>
            </div>
        </div>)
}

export default WhatWeDo