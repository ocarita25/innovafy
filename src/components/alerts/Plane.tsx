import gsap from 'gsap'
import { useEffect } from 'react'
import PaperPlane from '@/assets/icons/paper-plane.svg?react'

const Plane = () => {

    useEffect(() => {
        gsap.to('.plane', {
            // x: 80,
            // y: -35,
            rotation: 0,
            duration: 1,
            ease: 'none',
            // yoyo: true,
            repeat: -1,

        })
    }, [])

    useEffect(() => {
        gsap.fromTo(
            '.wind',
            {
                opacity: 0,
            },
            {
                x: Math.floor(Math.random() * (-50 - (-90) + 1)) + (-90),
                duration: 0.2,
                repeat: -1,
                stagger: 0.1,
                ease: "none",
                keyframes: [
                    { opacity: 0, duration: 0 },
                    { opacity: 1, duration: 0.2 },
                    { opacity: 1, duration: 0.2 },
                    { opacity: 0, duration: 0.1 },
                ],
            }
        );
    }, []);

    return (
        <div>
            <PaperPlane className='plane w-38  translate-x-16' />
            <div className='wind bg-[#5984d6] h-1 w-10 translate-y-2 translate-x-10' />
            <div className='wind bg-[#5984d6] h-1 w-15 -translate-y-5 translate-x-17' />
            <div className='wind bg-[#5984d6] h-1 w-15 -translate-y-9 translate-x-14' />
            <div className='wind bg-[#5984d6] h-1 w-10 -translate-y-16 translate-x-10' />
        </div>
    )
}

export default Plane