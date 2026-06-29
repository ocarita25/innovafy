import React from 'react'

type TransparentCardType = {
    children: React.ReactNode
    isActive?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const TransparentCard = ({ children, isActive = false, ...props }: TransparentCardType) => {

    const cardClass = isActive ? 'bg-[#ffffff24] border-[#ccc]' : 'bg-[#ffffff14] hover:bg-[#ffffff24] border-[#ffffff24]'

    return (
        <div {...props} className={`${cardClass} flex rounded-2xl duration-200 border  px-6 py-5 ${props.className}`}>
            {children}
        </div>
    )
}

export default TransparentCard