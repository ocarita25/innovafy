import ShinyCard from '@/components/ui/common/ShinyCard'
import StaffCard from '@/components/ui/common/StaffCard'
import React from 'react'
import TestimonialQuote from './components/TestimonialQuote'
import { testimonies } from '@/constants/testimonies'
import ImageCard from '@/components/ui/common/ImageCard'
import VideoCard from '@/components/ui/common/VideoCard'

const About = () => {
    return (
        <main className=''>

            <section className='lg:h-[60dvh] px-10'>
                <div className='translate-x-16 flex h-full items-center gap-4 overflow-x-scroll'>
                    <ImageCard src='/images/about/about1.webp' title='' className='h-fit w-fit max-w-[400px] rounded-lg shrink-0' />
                    <ImageCard src='/images/about/about2.webp' title='' className='h-fit w-fit max-w-[400px] rounded-lg shrink-0' />
                    <VideoCard src='/videos/about3.mp4' title='' className='h-fit w-fit max-w-[400px] rounded-lg shrink-0' />
                    <ImageCard src='/images/about/about4.webp' title='' className='h-fit w-fit max-w-[400px] rounded-lg shrink-0' />
                    <ImageCard src='/images/about/about5.webp' title='' className='h-fit w-fit max-w-[400px] rounded-lg shrink-0' />
                    <ImageCard src='/images/about/about6.webp' title='' className='h-fit w-fit max-w-[400px] rounded-lg shrink-0' />
                </div>
            </section>

            <section className='grid grid-cols-3 lg:grid-cols-5 gap-2 px-10 pb-30'>
                <ShinyCard src={'/images/clients/techcrunch.webp'} />
                <ShinyCard src={'/images/clients/techcrunch.webp'} />
                <ShinyCard src={'/images/clients/techcrunch.webp'} />
                <ShinyCard src={'/images/clients/techcrunch.webp'} />
                <ShinyCard src={'/images/clients/techcrunch.webp'} />
            </section>

            <section className='min-h-[50dvh] w-dvw pb-30 flex overflow-x-scroll'>
                {testimonies.map((t, i) => (
                    <div key={i} className='w-dvw flex shrink-0'>
                        <TestimonialQuote
                            quote={t.quote}
                            autor={t.autor}
                            company={t.company} />
                    </div>
                ))}
            </section>

            <div>
                <span>We're a team of makers, thinkers, explorers and theatre singers. We approach work and play with curiosity and experimentation, using what we learn to create meaningful digital products that connect with people, just like you.</span>
            </div>
            <section className='grid grid-cols-2 lg:grid-cols-4 gap-7 px-10'>
                <div className='flex flex-col gap-7'>
                    <StaffCard src='/images/persona1.webp' nombre='Omar' cargo='Front-end Developer' />
                    <StaffCard src='/images/persona2.webp' nombre='Oscar' cargo='Front-end Developer' />
                </div>
                <div className='flex flex-col gap-7'>
                    <StaffCard src='/images/persona1.webp' nombre='Omar' cargo='Front-end Developer' />
                    <StaffCard src='/images/persona2.webp' nombre='Oscar' cargo='Front-end Developer' />
                </div>
                <div className='flex flex-col gap-7'>
                    <StaffCard src='/images/persona1.webp' nombre='Omar' cargo='Front-end Developer' />
                    <StaffCard src='/images/persona2.webp' nombre='Oscar' cargo='Front-end Developer' />
                </div>
                <div className='flex flex-col gap-7'>
                    <StaffCard src='/images/persona1.webp' nombre='Omar' cargo='Front-end Developer' />
                    <StaffCard src='/images/persona2.webp' nombre='Oscar' cargo='Front-end Developer' />
                </div>
            </section>

        </main>
    )
}

export default About