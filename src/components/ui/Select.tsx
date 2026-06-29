import React, { forwardRef } from 'react'

type SelectProps = {
    name: string,
    id?: string,
    label: string,
    hint?: string,
    cols?: number,
    options: any[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ name, id = name, label, hint, cols = 1, options, ...props }, ref) => {

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
            <select
                id={verifiedId}
                name={name}
                ref={ref}
                {...props}
                className={`py-3.5 box-border border-b border-gray-300 outline-0 ${props.className ?? ''}`}>
                {options.map((option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                )))}
            </select>
        </div>
    )
}
)

export default Select