import Arrow from '@/assets/Arrow'
import { Link, useLocation } from 'react-router-dom'
import VerticalRoulette from '../common/VerticalRoulette'
import { footerWords } from '@/constants/footer'
import Scrollable from '../common/Scrollable'
import { useModal } from '@/context/ModalContext'
import Brief from '@/views/Brief'

export const FooterContacts = () => {

    const { openModal } = useModal()

    function handleOpenBrief() {
        openModal(<Brief plan='personalizado' />)
    }

    return (
        <div className='grid grid-cols-2 min-[1200px]:grid-cols-3 min-[1400px]:grid-cols-4 min-[992px]:gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-0 mb-10 text-[1rem]'>
            <div className='flex flex-col col-span-2 xl:col-span-1 gap-1 max-[991px]:mb-10'>
                <span>We Work globally</span>
                <span className='flex gap-2 items-center cursor-pointer' onClick={handleOpenBrief}>
                    Submit a brief <Arrow width='w-3' height='w-3' />
                </span>
                <span>contact@innovafy.com</span>
            </div>
            <div className='flex flex-col gap-1 max-[991px]:text-[clamp(0.75rem,3.95vw,1.2rem)]'>
                <span className='font-semibold'>USA</span>
                <span className='opacity-60'>Los Angeles, CA</span>
                <span className='opacity-60'>johndoe@innovafy.com</span>
            </div>
            <div className='flex flex-col gap-1 max-[991px]:text-[clamp(0.75rem,3.95vw,1.2rem)]'>
                <span className='font-semibold'>Australia</span>
                <span className='opacity-60'>Perth, WA</span>
                <span className='opacity-60'>jhondoe@innovafy.com.au</span>
            </div>
        </div>
    )
}

export const FooterSocialMedia = () => {
    return (
        <section className='flex flex-col lg:flex-row lg:justify-between items-center gap-7 border-t-1 pt-8 text-sm mb-15'>
            <div className='flex gap-5'>
                <span>INNOVAFY</span>
                <span>© 2025 <Link to={"#"} className='opacity-60'>Privacy</Link></span>
            </div>
            <div className='flex gap-5'>
                <Link to={"#"}>Twitter X</Link>
                <div>*</div>
                <Link to={"#"}>Instagram</Link>
                <div>*</div>
                <Link to={"#"}>LinkedIn</Link>
            </div>
        </section>
    )
}

export const FooterLogo = () => {
    return (
        <div className='flex place-content-center md:hidden py-5'>
            {/* <img src={"/images/isocal.svg"} alt='LogoIsocal' width={128} height={128} /> */}
            <img src={"/isotipo.svg"} alt='LogoIsocal' width={128} height={128} />
        </div>
    )
}

const Footer = () => {

    const location = useLocation()
    const isExcludedPage = location.pathname === "/contacto"

    if (isExcludedPage) return;
    return (
        <footer className={'text-white max-[992px]:pb-30'}>
            <Scrollable yOriginal={-60} yTarget={0} start='top bottom' end='+=500'>
                <div className={`relative mx-auto p-fluid max-w-[30rem] grid grid-rows-auto h-full
                md:pt-21 md:pb-15 min-[768px]:max-w-[37rem]
                min-[992px]:p-[3.87rem_clamp(5rem,5.29vw,6.65rem)_clamp(3.875rem,4.1vw,5.15rem)] min-[992px]:max-w-none
                min-[1200px]:p-[3.87rem_clamp(6rem,6.35vw,7.98rem)_clamp(3.875rem,4.1vw,5.15rem)]
                `}>
                    <div className={`mb-10 min-[992px]:mb-20
                            py-[clamp(2rem,3.25dvh,6dvh)] lg:py-[clamp(3rem,12dvh,12rem)] 
                            text-[clamp(2.15rem,10vw,2.5rem)] min-[992px]:text-[clamp(4.375rem,4.63vw,5.82rem)] 
                            leading-none 
                            `}>
                        <a className={`group flex flex-col w-fit hover:text-[var(--theme-accent)]`} href='/contacto'>
                            <span className='flex gap-4'>
                                <span>Hagamos</span>
                                <Arrow width='w-6 min-[992px]:w-[clamp(3rem,3dvw,4rem)]' stroke='2' className='group-hover:translate-x-5 transition' color={"var(--theme-accent)"} />
                            </span>
                            <span className='flex flex-wrap'>
                                <span className='pr-3 min-[992px]:pr-5'>algo </span>
                                <VerticalRoulette elements={footerWords} columns={1} minSize='768px' />
                            </span>
                        </a>

                    </div>
                    <FooterContacts />
                    <FooterSocialMedia />
                    <FooterLogo />
                </div>
            </Scrollable>
        </footer>
    )
}

export default Footer