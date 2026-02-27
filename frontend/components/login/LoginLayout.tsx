'use client'

import { ReactNode } from 'react'

interface LoginLayoutProps {
  children: ReactNode
  testimonialSide: ReactNode
}

export default function LoginLayout({ children, testimonialSide }: LoginLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Lado izquierdo - Testimonial (visible solo en lg) */}
      <div className="hidden lg:block lg:w-1/2">
        {testimonialSide}
      </div>
      
      {/* Lado derecho - Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 sm:p-12 lg:p-20">
        <div className="w-full max-w-md">
          {/* Logo móvil (visible solo en móvil) */}
          <div className="lg:hidden flex items-center gap-2 mb-12">
            <div className="size-10 bg-navy flex items-center justify-center rounded-xl">
              <span className="material-symbols-outlined text-white">account_balance_wallet</span>
            </div>
            <span className="text-navy text-2xl font-extrabold">finAR</span>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  )
}