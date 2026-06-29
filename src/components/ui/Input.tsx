import React from 'react'

type InputProps = {
    name: string,
    id?: string,
    label: string,
    hint?: string,
    cols?: number,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ name, id = name, label, hint, cols = 1, ...props }: InputProps) => {

    const verifiedId = id ?? name

    const containerClass = {
        1: 'md:col-span-1',
        2: 'md:col-span-2',
        3: 'md:col-span-3',
        4: 'md:col-span-4',
        5: 'md:col-span-5',
    }[cols]

    return (
        <div className={`flex flex-col ${containerClass}`}>
            <label htmlFor={verifiedId} className='pb-4'>{label}</label>
            {hint && <span className='opacity-40'>{hint}</span>}
            <input
                id={verifiedId}
                name={name}
                {...props}
                className={`py-4 border-b border-gray-300 outline-0 ${props.className ?? ''}`} />
        </div>
    )
}

export default Input