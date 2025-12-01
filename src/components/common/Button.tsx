import { cn } from '@/lib/utils'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode,
  isActive?: boolean,
  href?: string,
} & React.HTMLAttributes<HTMLDivElement>

export const ButtonBlack = ({ children, isActive, href, ...props }: ButtonProps) => {
  return (
    <a href={href} className={cn('button bg-black hover:bg-theme-primary text-white hover:text-primary transition-colors duration-120 ease-in', props.className)}>
      {children}
    </a>
  )
}

export const ButtonWhite = ({ children, isActive, ...props }: ButtonProps) => {
  const buttonClass = isActive
    ? "bg-[#343c46] text-white"
    : "bg-[#eee] text-black"

  return (
    <div
      {...props}
      className={cn(
        "button hover:bg-[#c8e8f8] hover:text-black",
        buttonClass,
        props.className
      )}
    >
      {children}
    </div>
  )
}