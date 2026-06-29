import SmileFace from '@/assets/SmileFace'
import { ButtonBlack } from '@/components/common/Button'
import Headings from '@/components/common/Headings'
import Panned from '@/components/common/Panned'
import Stats from './Stats'
import { Card, ImageCard } from '@/components/common/Card'
import Arrow from '@/assets/Arrow'
import { imgCLOUD } from '@/constants/resources'

const Description = () => {
    return (
        <div className="flex flex-col p-fluid lg:grid grid-cols-[2fr_3fr] grid-rows-[auto_auto_1fr] gap-[clamp(3.125rem,3.30vw,4.15rem)] mt-10 w-full text-color-primary">
            <Headings as="h2" className="col-span-2 max-w-[10.5em] mb-0! playfair">
                <Panned variant="vertical">
                    <span>Gran <em className='text-[#4700ff]'>impacto</em> para</span>
                </Panned>
                <Panned variant="vertical">
                    <span className="flex flex-wrap items-center gap-2 lg:gap-6 leading-none ">
                        <span>grandes marcas</span>
                        <span><SmileFace className="inline-block w-9 min-[992px]:w-[7rem]" /></span>
                        <span>.</span>
                    </span>
                </Panned>
            </Headings>

            <div className="flex flex-col justify-between">
                <Panned variant="vertical">
                    <div className="text-[clamp(1rem,1.61vw,1.33rem)] min-[1200px]:text-[clamp(1.25rem,1.32vw,1.6625rem)] leading-[1.5] text-color-primary">
                        <p>Priorizamos a las personas, entendiendo que un producto bien diseñado impacta significativamente la vida de quienes lo usan. Al empoderar a los usuarios, podemos resolver problemas únicos, acelerar el progreso y liberar el potencial de nuestros clientes.</p>
                        <br />
                        <p>Nuestro espíritu independiente impulsa nuestra energía creativa y nuestro enfoque tecnológico, lo que nos permite garantizar la calidad y ofrecer constantemente resultados excepcionales.</p>
                    </div>
                    <ButtonBlack className="group mt-10" href="/acerca-de" sameSite>
                        <span className="text-[clamp(0.94rem,0.99vw,1.24rem)] py-1">Acerca de Nosotros</span>
                        <Arrow height="h-3.5" stroke="1" color="#fff" />
                    </ButtonBlack>
                </Panned>
                <Stats />
            </div>
            <Panned variant="vertical">
                <Card>
                    <ImageCard src={`${imgCLOUD}/nosotros.webp`} />
                </Card>
            </Panned>

        </div>
    )
}

export default Description