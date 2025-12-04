import Headings from '@/components/common/Headings'
import React from 'react'


const Brief: React.FC = () => {
    return (
        <section className='flex flex-col gap-10 min-[992px]:w-[clamp(55rem,65vw,65rem)]'>
            <Headings variant='title' className='text-purple-400 !mb-0'>Empecemos</Headings>
            <div className='flex flex-col'>
                <span>Complete los espacios en blanco y le responderemos en un día hábil.</span>
                <span className='opacity-40 py-3'>¿Solo quieres charlar? Llámanos o escríbenos; somos un grupo muy agradable.</span>
            </div>
            <form className='grid min-[992px]:grid-cols-2 gap-10 text-[1rem]'>
                <div className='flex flex-col'>
                    <label htmlFor='nombre' className='pb-4'>¿Cómo te llamas?</label>
                    <input id='nombre' type='text' placeholder='Tu nombre aqui' required className='py-4 border-b border-gray-300 outline-0' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='empresa' className='pb-4'>¿Nombre de tu empresa?</label>
                    <input id='empresa' type='text' placeholder='Innovafy S.A.C' required className='py-4 border-b border-gray-300 outline-0' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='telefono' className='pb-4'>¿Cómo podemos contactarte?</label>
                    <input id='telefono' type='text' placeholder='Número de teléfono' required className='py-4 border-b border-gray-300 outline-0' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='pb-4'>E-mail</label>
                    <input id='email' type='email' placeholder='Dirección de correo electrónico' required className='py-4 border-b border-gray-300 outline-0' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='presupuesto' className='pb-4'>Expectativa presupuestaria</label>
                    <span className='opacity-40'>Un presupuesto transparente nos ayudará a garantizar que se cumplan las expectativas.</span>
                    <input id='presupuesto' type='text' required className='py-4 border-b border-gray-300 outline-0' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='cronologia' className='pb-4'>Cronología</label>
                    <span className='opacity-40'>Si tienes un cronograma o fecha límite ideal, háznoslo saber.</span>
                    <input id='cronologia' type='text' required className='py-4 border-b border-gray-300 outline-0' />
                </div>
                <div className='flex flex-col col-span-2'>
                    <label htmlFor='acerca' className='pb-4'>Cuéntanos del proyecto</label>
                    <span className='opacity-40 pb-4'>¿Necesitas un nuevo sitio web? ¿Una app? Dinos cómo podemos ayudarte.</span>
                    <textarea id='acerca' className='border rounded-lg border-gray-300 p-5' rows={7} />
                </div>
                <div className='flex flex-col col-span-2'>
                    <label htmlFor='archivo' className='pb-4'>Adjunte cualquier documento pertinente</label>
                    <span className='opacity-40'>Máximo 10 archivos de 25 MB cada uno. Máximo 100 MB en total.</span>
                    <input type='file' className='py-4 border-b border-gray-300 outline-0' />
                </div>
                <div className='flex flex-col col-span-2'>
                    <label htmlFor='nosotros' className='pb-4'>¿Cómo se entero de nosotros?</label>
                    <input id="nosotros" type='text' placeholder='¿De un amigo? ¿De google ?' className='py-4 border-b border-gray-300 outline-0' />
                </div>
                <button type='submit' className='bg-purple-400 opacity-80 w-full col-span-2 py-5 rounded-full'>Entregar</button>
            </form>
        </section>
    )
}

export default Brief