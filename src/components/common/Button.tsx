import { cn } from '@/lib/utils'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode,
  isActive?: boolean,
} & React.HTMLAttributes<HTMLDivElement>

type ButtonBlackProps = {
  children: React.ReactNode,
  href?: string,
} & React.HTMLAttributes<HTMLAnchorElement>

export const ButtonBlack = ({ children, href, ...props }: ButtonBlackProps) => {
  return (
    <a
      {...props}
      href={href}
      className={cn(
        'button bg-black hover:bg-[#5700ff] text-white  transition-colors duration-120 ease-in',
        props.className
      )}>
      {children}
    </a>
  )
}

export const ButtonWhite = ({ children, isActive, ...props }: ButtonProps) => {
  const buttonClass = isActive
    ? "bg-[#5700ff] text-[var(--theme-accent)]"
    : "bg-[#b7c1c9] text-black"

  return (
    <div
      {...props}
      className={cn(
        // "button hover:bg-[#94c4e7] hover:text-black font-black",
        "button hover:bg-[#1A1A2E] hover:text-white font-black",
        buttonClass,
        props.className
      )}
    >
      {children}
    </div>
  )
}