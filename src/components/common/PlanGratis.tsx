import { useModal } from "@/context/ModalContext"
import Brief from "@/views/Brief"
import SendMessageIcon from "@/assets/icons/send-message.svg?react"

const PlanGratis = () => {

    const { openModal } = useModal()

    function handleOpenBrief() {
        openModal(<Brief plan="personalizado" text="Quiero un plan de crecimiento gratis" />)
    }

    return (
        <div onClick={handleOpenBrief} className="fixed cursor-pointer z-10
        bottom-25 min-[900px]:bottom-5 
        left-1/2 -translate-x-1/2 
        w-max min-[900px]:w-auto
        min-[900px]:left-10 min-[900px]:translate-x-0
        rounded-2xl min-[900px]:rounded-full backdrop-blur-sm 
        bg-[#5700ff99] 
        duration-150">
            <div className="px-4 min-[900px]:px-8 py-3 min-[900px]:py-5 text-[0.85rem] min-[640px]:text-[1.1rem] min-[900px]:text-xl text-white text-center flex justify-center gap-3">
                <span>Quiero mi plan de crecimiento gratis</span>
                <SendMessageIcon className="w-4" />
            </div>
        </div>
    )
}

export default PlanGratis