import AlertModal from '@/components/common/AlertModal';
import { ButtonBlack } from '@/components/common/Button';
import Headings from '@/components/common/Headings'
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import TextArea from '@/components/ui/TextArea';
import { useModal } from '@/context/ModalContext';
import React, { useEffect, useRef, useState } from 'react'

const MAX_FILE_BYTES = 4 * 1024 * 1024;

const Brief = ({ plan, text }: { plan?: string, text?: string }) => {

    const { showOverlay } = useModal();

    const fileRef = useRef<HTMLInputElement>(null)
    const planRef = useRef<HTMLSelectElement>(null)
    const textRef = useRef<HTMLTextAreaElement>(null)
    const [isSending, setIsSending] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>("")

    useEffect(() => {
        if (!planRef.current || !plan) return;
        planRef.current.value = plan
    }, [plan])

    useEffect(() => {
        if (!textRef.current || !text) return
        textRef.current.value = text
    }, [text])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)

        // Si no hay archivo, el navegador igual envía una parte vacía: la quitamos
        const file = fileRef.current?.files?.[0]
        if (!file) {
            formData.delete('file')
        } else if (file.size > MAX_FILE_BYTES) {
            showOverlay(<AlertModal status='error' />)
            return
        }

        setIsSending(true)
        showOverlay(<AlertModal status='loading' />)

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                body: formData,
            })

            // Si Vercel responde con texto plano (por ejemplo un 413), json() falla
            const data = await res.json().catch(() => null)

            if (!res.ok || !data?.ok) {
                showOverlay(<AlertModal status='error' />)
                return
            }

            showOverlay(<AlertModal status='finished' />)
            form.reset()
            setFileName("")
        } catch {
            // Error de red
            showOverlay(<AlertModal status='error' />)
        } finally {
            setIsSending(false)
        }
    }

    function handleInputFileButton() {
        if (!fileRef.current) return;
        fileRef.current.click()
    }

    function handleChangeFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files?.length) return
        setFileName(e.target.files[0].name)
    }

    const planes = [
        {
            label: "Plan Esencial - S/. 949.90",
            value: "inicial-esencial"
        },
        {
            label: "Plan Avanzado - S/. 1559.90",
            value: "inicial-avanzado"
        },
        {
            label: "Plan Premium - S/. 1999.90",
            value: "inicial-premium"
        },
        {
            label: "Plan Optimize - S/. 999",
            value: "crecimiento-starter"
        },
        {
            label: "Plan Scale - S/. 1,759",
            value: "crecimiento-pro"
        },
        {
            label: "Plan Dominate - S/. 2,799",
            value: "crecimiento-elite"
        },
        {
            label: "Plan Leader - S/. 2,499",
            value: "liderazgo-starter"
        },
        {
            label: "Plan AUthority - S/. 3,599",
            value: "liderazgo-pro"
        },
        {
            label: "Plan Legacy - S/. 4,999",
            value: "liderazgo-elite"
        },
        {
            label: "Personalizado",
            value: "personalizado"
        },
    ]

    return (
        <section className='flex flex-col gap-10 min-[992px]:w-[clamp(55rem,65vw,65rem)]'>
            <Headings variant='title' className='text-[#574b8e] !mb-0 playfair'>Empecemos</Headings>
            <div className='flex flex-col text-[clamp(1.15rem,1.75vw,1.45rem)]'>
                <span>Complete los espacios en blanco y le responderemos en un día hábil.</span>
                <span className='opacity-40 py-3'>¿Solo quieres charlar? Llámanos o escríbenos; somos un grupo muy agradable.</span>
            </div>
            <form className='grid grid-cols-1 min-[992px]:grid-cols-2 gap-10 text-[1rem]' onSubmit={handleSubmit}>
                <Input label='¿Cómo te llamas?' name='nombre' placeholder='Tu nombre aquí' required />
                <Input label='¿Nombre de tu empresa?' name='empresa' placeholder='Inovafy S.A.C' />
                <Input label='¿Cómo podemos contactarte?' name='telefono' placeholder='Teléfono' required />
                <Input label='E-mail' name='email' placeholder='empresa@example.com' required />
                <Select ref={planRef} label='Planes' hint="Elige un plan acorde a tus necesidades" name='presupuesto' options={planes} />
                <Input label='Cronograma' name='cronograma' hint='Si tienes un cronograma o fecha límite ideal, háznoslo saber.' />
                <TextArea ref={textRef} label='Cuéntanos del proyecto' name='message' hint='¿Necesitas un nuevo sitio web? ¿Una app? Dinos cómo podemos ayudarte.' cols={2} rows={7} required />
                <div className='flex flex-col md:col-span-2'>
                    <label htmlFor='file' className='pb-4'>Adjunte cualquier documento pertinente</label>
                    <span className='opacity-40'>Máximo 4 MB.</span>
                    <div className='flex items-center gap-5 py-4 border-b border-gray-300 outline-0'>
                        <ButtonBlack onClick={handleInputFileButton}>Seleccionar Archivo</ButtonBlack>
                        <span>{fileName}</span>
                    </div>
                    <input ref={fileRef} type='file' id='file' name='file' accept='.pdf' className='py-4 border-b border-gray-300 outline-0 hidden' onChange={handleChangeFile} />
                </div>
                <Input label='¿Cómo se entero de nosotros?' name='nosotros' placeholder='¿De un amigo? ¿De google ?' />
                <button type='submit' className='bg-[#574b8e] not-disabled:hover:bg-[#836fe1] text-white w-full md:col-span-2 py-5 rounded-full' disabled={isSending}>Entregar</button>
            </form>
        </section>
    )
}

export default Brief