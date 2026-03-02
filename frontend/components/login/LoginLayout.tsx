// LoginLayout.tsx - Corregido
'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

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
            <div className="size-10 bg-navy rounded-xl overflow-hidden">
              <Image 
                src="/images/logo.png"
                alt="finAR Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-navy text-2xl font-extrabold">finAR</span>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  )
}