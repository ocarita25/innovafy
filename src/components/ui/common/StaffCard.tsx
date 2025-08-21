import Image from 'next/image'
import React from 'react'

type StaffCard = {
    src: string,
    nombre: string,
    cargo: string
}

const StaffCard = ({ src, nombre, cargo }: StaffCard) => {
    return (
        <div className='relative rounded-4xl overflow-hidden'>
            <div className='absolute bottom-0 flex items-center justify-center w-full'>
                <div className='flex gap-1 bg-white text-xs p-1 mb-3 rounded-full items-center'>
                    <div className='bg-blue-950 text-cyan-400 py-1 px-2 rounded-full'>{nombre}</div>
                    <div className='pe-2'>{cargo}</div>
                </div>
            </div>
            <Image src={src} alt={'staff_image'} width={100} height={100} className='w-full h-full' />

        </div>
    )
}

export default StaffCard