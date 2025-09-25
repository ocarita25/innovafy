import { cn } from '@/lib/utils'
import React, { useState } from 'react'

type ButtonProps = {
  children: React.ReactNode,
  isActive: boolean,
} & React.HTMLAttributes<HTMLDivElement>

const Button = ({ children, isActive, ...props }: ButtonProps) => {

  const buttonClass = isActive ? "bg-theme-secondary text-theme-primary" : "bg-white text-black"

  return (
    <div {...props} className={cn(
      `w-fit  hover:bg-theme-primary text-white hover:text-black flex items-center rounded-[2.5rem] px-4 py-2.5 outline-hidden hover:cursor-pointer`,
      buttonClass,
      props.className
    )}>
      {children}
    </div>
  )
}

export default Button