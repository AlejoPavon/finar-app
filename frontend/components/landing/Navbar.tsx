// Navbar.tsx - Versión adaptada
import Link from 'next/link'
import Image from 'next/image'
import { FiHome, FiTrendingUp, FiDollarSign, FiLogIn, FiUserPlus } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] px-4 sm:px-6 lg:px-8 py-4">
      {/* Fondo borroso - Glass effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm"></div>
      
      {/* Contenido del navbar */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="size-10 bg-navy rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg shadow-navy/20">
            <Image 
              src="/images/logo.png"
              alt="finAR Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-navy text-2xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
            finAR
          </span>
        </Link>

        {/* Navegación central - Desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link 
            href="#caracteristicas" 
            className="text-sm font-bold text-navy/70 hover:text-primary transition-colors relative py-2 group"
          >
            <span className="flex items-center gap-2">
              <FiHome className="text-xs" />
              Características
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link 
            href="#soluciones" 
            className="text-sm font-bold text-navy/70 hover:text-primary transition-colors relative py-2 group"
          >
            <span className="flex items-center gap-2">
              <FiTrendingUp className="text-xs" />
              Soluciones
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link 
            href="#precios" 
            className="text-sm font-bold text-navy/70 hover:text-primary transition-colors relative py-2 group"
          >
            <span className="flex items-center gap-2">
              <FiDollarSign className="text-xs" />
              Precios
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Botones de acción */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="/login"
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-navy hover:text-primary transition-colors"
          >
            <FiLogIn className="text-sm" />
            Ingresar
          </Link>
          <Link
            href="/registro"
            className="bg-navy text-white text-sm font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-primary transition-all shadow-xl shadow-navy/20 hover:shadow-primary/30 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <FiUserPlus className="text-sm" />
            <span>Empezar</span>
          </Link>
          
          {/* Botón menú móvil */}
          <button className="md:hidden size-10 rounded-full bg-navy/5 flex items-center justify-center hover:bg-navy/10 transition-colors">
            <span className="material-symbols-outlined text-navy">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}