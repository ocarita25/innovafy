import React, { forwardRef } from 'react'

type TextAreaProps = {
    name: string,
    id?: string,
    label: string,
    hint?: string,
    cols?: number,
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ name, id = name, label, hint, cols = 1, ...props }, ref) => {

    const verifiedId = id ?? name

    const containerClass = {
        1: 'col-span-1',
        2: 'col-span-2',
        3: 'col-span-3',
        4: 'col-span-4',
        5: 'col-span-5',
    }[cols]

    return (
        <div className={`flex flex-col ${containerClass}`}>
            <label htmlFor={verifiedId} className='pb-4'>{label}</label>
            {hint && <span className='opacity-40 pb-4'>{hint}</span>}
            <textarea
                id={verifiedId}
                name={name}
                ref={ref}
                {...props}
                className={`border rounded-lg border-gray-300 p-5 ${props.className ?? ''}`} />
        </div>
    )
})

export default TextArea