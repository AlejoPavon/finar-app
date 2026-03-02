// TestimonialSide.tsx - Corregido
import Image from 'next/image'
import { FiShield, FiZap } from 'react-icons/fi'

export default function TestimonialSide() {
  return (
    <div className="h-full login-gradient relative overflow-hidden flex items-center justify-center p-12">
      {/* Elementos de fondo decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-sky-400 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 max-w-lg text-center">
        {/* Logo grande */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="size-20 bg-white rounded-[2rem] shadow-2xl overflow-hidden p-4">
            <Image 
              src="/images/logo.png"
              alt="finAR Logo"
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-white text-5xl font-extrabold tracking-tighter">finAR</span>
        </div>
        
        {/* Testimonial */}
        <div className="space-y-6">
          <h2 className="text-white text-3xl font-bold leading-tight">
            &ldquo;La libertad financiera no es tener mucho dinero, es tener el control sobre él.&rdquo;
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-white/30"></div>
            <p className="text-sky-200 font-medium tracking-wide uppercase text-xs">Gestión Inteligente</p>
            <div className="h-px w-8 bg-white/30"></div>
          </div>
        </div>
        
        {/* Características destacadas */}
        <div className="grid grid-cols-2 gap-4 mt-16">
          <div className="glass-effect p-4 rounded-2xl">
            <FiShield className="text-white text-3xl mb-2 mx-auto" />
            <p className="text-white text-xs font-semibold">Seguridad Nivel Bancario</p>
          </div>
          <div className="glass-effect p-4 rounded-2xl">
            <FiZap className="text-white text-3xl mb-2 mx-auto" />
            <p className="text-white text-xs font-semibold">Sincronización Real</p>
          </div>
        </div>
      </div>
    </div>
  )
}