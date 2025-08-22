import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='h-full px-20 pb-30 sm:pb-30 pt-15'>
            <div className='flex flex-col h-full gap-14'>
                <div className='text-[2.5rem] lg:text-7xl leading-none font-bold mb-20'>
                    <h4>Let's make <br />something especial</h4>
                </div>
                <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-0 text-md pb-10'>
                    <div className='flex flex-col sm:col-span-2 xl:col-span-1 font-semibold'>
                        <span>We Work globally</span>
                        <span>Submit a brief</span>
                        <span>contact@innovafy.com</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>USA</span>
                        <span className='text-gray-500'>Los Angeles, CA</span>
                        <span className='text-gray-500'>johndoe@innovafy.com</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>Australia</span>
                        <span className='text-gray-500'>Perth, WA</span>
                        <span className='text-gray-500'>jhondoe@innovafy.com.au</span>
                    </div>
                </div>
                <section className='flex flex-col lg:flex-row lg:justify-between items-center gap-7 border-t-1 pt-8 text-sm'>
                    <div className='flex gap-5'>
                        <span>INNOVAFY</span>
                        <span>© 2025 <Link to={"#"} className='text-gray-500'>Privacy</Link></span>
                    </div>
                    <div className='flex gap-5'>
                        <Link to={"#"}>Twitter X</Link>
                        <div>*</div>
                        <Link to={"#"}>Instagram</Link>
                        <div>*</div>
                        <Link to={"#"}>LinkedIn</Link>
                    </div>
                </section>
                <div className='flex place-content-center md:hidden'>
                    <img src={"/images/isocal.svg"} alt='LogoIsocal' width={128} height={128} />
                </div>
            </div>
        </footer>
    )
}

export default Footer