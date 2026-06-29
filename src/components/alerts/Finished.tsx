import EmailSended from '@/assets/icons/mailed.svg?react'

const Finished = () => {


    return (
        <div className='flex items-center flex-col gap-10'>
            <p className='uppercase text-white text-3xl min-[768px]:text-5xl font-black'>Mensaje enviado</p>
            <div className='w-fit bg-white rounded-full p-10'>
                <EmailSended className='w-45 h-45 min-[768px]:w-80 min-[768px]:h-80' />
            </div>

        </div>
    )
}

export default Finished