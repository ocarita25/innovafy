import { useModal } from '@/context/ModalContext'
import { useEffect } from 'react'
import Plane from '../alerts/Plane'
import Finished from '../alerts/Finished'

const AlertModal = ({ status }: { status: 'loading' | 'finished' | 'error' }) => {

    const { hideOverlay } = useModal()

    useEffect(() => {
        if (status !== 'finished') return

        const timer = setTimeout(() => {
            hideOverlay()

            const closeButton = document.getElementById('article-modal-close-button')

            if (!closeButton) return;

            closeButton.click()
        }, 1500)

        return () => clearTimeout(timer)

    }, [status, hideOverlay])

    return (
        // <div className=''>
        <div className='h-dvh w-full sticky flex top-0 left-0 z-333 items-center justify-center'>
            <div className='flex min-w-lg min-h-80  rounded-3xl justify-center items-center p-10'>
                {
                    status === 'loading' && <Plane />
                }
                {
                    status === 'finished' &&
                    <Finished />
                }
            </div>
        </div>
    )
}

export default AlertModal