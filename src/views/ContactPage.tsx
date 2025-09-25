import { VideoCard } from '@/components/common/Card'
import PannedText from '@/components/common/PannedText'
import VerticalPanned from '@/components/common/VerticalPanned'
import React from 'react'

const ContactPage = () => {
    return (
        <div className='relative lg:flex'>
            <div className="lg:absolute lg:w-[55%] z-20 px-10 w-full py-20 tracking-normal font-medium text-[clamp(3rem,8dvw,9dvw)] lg:text-[clamp(5rem,8dvw,14dvw)] text-white bg-gradient-to-r from-[#BFB7CC] to-[#BBB2C7] lg:bg-none relative">
                <PannedText>
                    <span className='overflow-hidden leading-none pb-1.5'>We've got a great feeling about this</span>
                </PannedText>
            </div>
            <div className='-mb-72 relative -z-10 w-full lg:z-0 lg:w-full right-0 left-0 h-full'>
                <VideoCard src='/videos/contact-video-big.mp4' className='h-full w-full' />
            </div>
        </div>
    )
}

export default ContactPage