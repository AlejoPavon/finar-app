// components/dashboard/Sidebar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  FiBarChart2, 
  FiPieChart, 
  FiChevronRight,
  FiCreditCard,
  FiUser,
  FiSettings
} from 'react-icons/fi'
import { BiSolidBank } from 'react-icons/bi'
import { RiDashboardLine } from 'react-icons/ri'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('resumen')
  const [expandedItems, setExpandedItems] = useState<string[]>(['datos'])

  const toggleExpand = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  return (
    <aside className="dashboard-sidebar w-64 bg-navy flex flex-col border-r border-slate-800 transition-all duration-300 relative z-40">
      {/* Logo */}
      <div className="h-20 flex items-center px-8">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center shadow-lg" style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)' }}>
            <FiBarChart2 className="text-white text-xl" />
          </div>
          <span className="text-white font-bold tracking-tight text-xl">fin<span className="text-primary">AR</span></span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 space-y-1">
        {/* Resumen */}
        <div>
          <Link
            href="/dashboard"
            className={`flex items-center gap-4 px-8 py-4 transition-all ${
              activeItem === 'resumen' 
                ? 'sidebar-item-active text-slate-300 hover:text-white' 
                : 'text-slate-500 hover:text-white'
            }`}
            onClick={() => setActiveItem('resumen')}
          >
            <RiDashboardLine className={`text-xl ${activeItem === 'resumen' ? 'text-primary' : ''}`} />
            <span className="text-xs font-bold uppercase tracking-widest">Resumen</span>
          </Link>
        </div>

        {/* Datos con submenú */}
        <div>
          <button
            onClick={() => toggleExpand('datos')}
            className="w-full flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-white transition-all group"
          >
            <FiPieChart className="text-xl group-hover:text-primary transition-all" />
            <span className="text-xs font-bold uppercase tracking-widest">Datos</span>
            <FiChevronRight className={`ml-auto text-sm transition-transform ${
              expandedItems.includes('datos') ? 'rotate-90 text-primary' : 'group-hover:rotate-90 group-hover:text-primary'
            }`} />
          </button>
          
          {expandedItems.includes('datos') && (
            <div className="bg-navy/50 py-2">
              <Link 
                href="/dashboard/reportes" 
                className="sub-menu-item text-primary hover:text-white transition-all relative group overflow-hidden"
              >
                <span className="relative z-10">Reportes</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              </Link>
              <Link 
                href="/dashboard/exportar" 
                className="sub-menu-item hover:text-white transition-all relative group overflow-hidden"
              >
                <span className="relative z-10">Exportar</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              </Link>
              <Link 
                href="/dashboard/historial" 
                className="sub-menu-item hover:text-white transition-all relative group overflow-hidden"
              >
                <span className="relative z-10">Historial</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              </Link>
            </div>
          )}
        </div>

        {/* Bancos */}
        <Link
          href="/dashboard/bancos"
          className="flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-white transition-all group"
        >
          <BiSolidBank className="text-xl group-hover:text-primary transition-all" />
          <span className="text-xs font-bold uppercase tracking-widest">Bancos</span>
        </Link>

        {/* Tarjetas */}
        <Link
          href="/dashboard/tarjetas"
          className="flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-white transition-all group"
        >
          <FiCreditCard className="text-xl group-hover:text-primary transition-all" />
          <span className="text-xs font-bold uppercase tracking-widest">Tarjetas</span>
        </Link>

        {/* Ajustes section */}
        <div className="pt-8 px-8">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4">Ajustes</p>
          
          {/* Perfil */}
          <Link
            href="/dashboard/perfil"
            className="flex items-center gap-4 py-3 text-slate-500 hover:text-white transition-all group"
          >
            <FiUser className="text-xl group-hover:text-primary transition-all" />
            <span className="text-xs font-bold uppercase tracking-widest">Perfil</span>
          </Link>

          {/* Configuración */}
          <Link
            href="/dashboard/configuracion"
            className="flex items-center gap-4 py-3 text-slate-500 hover:text-white transition-all group"
          >
            <FiSettings className="text-xl group-hover:text-primary transition-all" />
            <span className="text-xs font-bold uppercase tracking-widest">Configuración</span>
          </Link>
        </div>
      </nav>

      {/* Plan Premium */}
      <div className="p-8 border-t border-slate-800/50">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-all">
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <p className="text-[10px] font-bold text-primary uppercase mb-2 relative z-10">Plan Premium</p>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-3 relative z-10">Acceso ilimitado a predicciones con AI.</p>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden relative z-10">
            <div className="h-full bg-primary w-2/3 rounded-full" style={{ boxShadow: '0 0 10px rgba(56, 189, 248, 0.6)' }}></div>
          </div>
        </div>
      </div>
    </aside>
  )
}