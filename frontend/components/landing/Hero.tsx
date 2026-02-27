'use client'

import Image from 'next/image'
import { FiPlayCircle } from 'react-icons/fi'
import { HiOutlineTrendingUp } from 'react-icons/hi'
import { BsLightningCharge } from 'react-icons/bs'

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10">
        {/* Columna izquierda - Contenido */}
        <div className="relative">
          {/* Badge eliminado - ya no muestra "Gestión Inteligente" */}
          
          <h1 className="text-navy text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 lg:mb-8">
            Domina tus <br className="hidden sm:block" />
            finanzas <span className="text-primary relative inline-block">
              personales
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl mb-8 lg:mb-10 max-w-lg leading-relaxed">
            La plataforma todo-en-uno que utiliza inteligencia artificial para sincronizar tus cuentas, 
            predecir gastos y ayudarte a alcanzar tus metas financieras con absoluta seguridad.
          </p>
          
          {/* Estadísticas rápidas */}
          <div className="flex flex-wrap gap-6 mb-8 lg:mb-10">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BsLightningCharge className="text-primary text-xl" />
              </div>
              <div>
                <p className="text-2xl font-bold text-navy">+50K</p>
                <p className="text-xs text-slate-500">Usuarios activos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <HiOutlineTrendingUp className="text-green-500 text-xl" />
              </div>
              <div>
                <p className="text-2xl font-bold text-navy">$2.5B</p>
                <p className="text-xs text-slate-500">En transacciones</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-primary text-white font-bold rounded-2xl shadow-2xl shadow-primary/30 hover:bg-blue-700 transition-all hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-primary/40 active:translate-y-0 flex items-center justify-center gap-2 group">
              <span>Comenzar Gratis</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            
            <button className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-transparent text-navy font-bold rounded-2xl border-2 border-navy/10 hover:border-navy hover:bg-navy/5 transition-all flex items-center justify-center gap-3 group">
              <FiPlayCircle className="text-2xl text-primary group-hover:scale-110 transition-transform" />
              <span>Ver Video</span>
            </button>
          </div>

          {/* Logos de confianza */}
          <div className="mt-10 pt-6 border-t border-gray-100">

            <div className="flex items-center gap-6 opacity-50">
              <div className="h-6 w-20 bg-gray-200 rounded"></div>
              <div className="h-6 w-20 bg-gray-200 rounded"></div>
              <div className="h-6 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Columna derecha - Mockup/Dashboard */}
        <div className="relative hidden lg:block">
          {/* Elementos flotantes decorativos */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
          
          {/* Mockup principal */}
          <div className="perspective-mockup bg-gradient-to-br from-[#0B0E14] to-[#1a1f2e] rounded-[2.5rem] p-3 border-[6px] border-slate-800 shadow-2xl relative">
            <div className="overflow-hidden rounded-[1.8rem] bg-[#0B0E14] aspect-[4/3] relative">
              <Image 
                src="/images/logo.png"
                alt="finAR Dashboard Preview"
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Badge flotante */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <HiOutlineTrendingUp className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 font-medium">Crecimiento</p>
                    <p className="text-lg font-bold text-white">+24.8%</p>
                  </div>
                </div>
              </div>

              {/* Badge inferior */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-white/90">Live data</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}