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
        bottom-25 min-[768px]:bottom-5 
        max-[767px]:left-1/2 max-[767px]:-translate-x-1/2 max-[767px]:w-max
        min-[768px]:left-10 
        rounded-2xl min-[768px]:rounded-full backdrop-blur-sm 
        bg-[#5700ff99] 
        duration-150">
            <div className="px-4 min-[768px]:px-8 py-3 min-[768px]:py-5 text-[1.1rem] min-[768px]:text-xl text-white text-center flex justify-center gap-3">
                {/* <div className="px-2 min-[768px]:px-8 py-5 min-[768px]:py-5 text-xl text-white 
            max-[767px]:rotate-180"> */}
                {/* <span className="hidden min-[768px]:block"> */}
                <span>Quiero mi plan de crecimiento gratis</span>
                <SendMessageIcon className="w-4" />
                {/* <span className="min-[768px]:hidden [writing-mode:vertical-rl]">
                    Quiero mi plan de crecimiento gratis
                </span> */}
            </div>
        </div>
    )
}

export default PlanGratis