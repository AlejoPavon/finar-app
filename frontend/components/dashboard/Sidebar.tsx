// components/dashboard/Sidebar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('resumen')
  const [expandedItems, setExpandedItems] = useState<string[]>(['datos'])

  const toggleExpand = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  return (
    <aside className="w-64 bg-navy flex flex-col border-r border-slate-800 transition-all duration-300 relative z-40">
      {/* Logo */}
      <div className="h-20 flex items-center px-8">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-white text-xl">insights</span>
          </div>
          <span className="text-white font-bold tracking-tight text-xl">fin<span className="text-primary">AR</span></span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 space-y-1">
        {/* Resumen - Active */}
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
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span className="text-xs font-bold uppercase tracking-widest">Resumen</span>
          </Link>
        </div>

        {/* Datos con submenú */}
        <div>
          <button
            onClick={() => toggleExpand('datos')}
            className="w-full flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-white transition-all group"
          >
            <span className="material-symbols-outlined text-xl">analytics</span>
            <span className="text-xs font-bold uppercase tracking-widest">Datos</span>
            <span className={`material-symbols-outlined ml-auto text-sm transition-transform ${
              expandedItems.includes('datos') ? 'rotate-90' : 'group-hover:rotate-90'
            }`}>
              chevron_right
            </span>
          </button>
          
          {expandedItems.includes('datos') && (
            <div className="bg-navy/50 py-2">
              <Link href="/dashboard/reportes" className="sub-menu-item text-primary">
                Reportes
              </Link>
              <Link href="/dashboard/exportar" className="sub-menu-item">
                Exportar
              </Link>
              <Link href="/dashboard/historial" className="sub-menu-item">
                Historial
              </Link>
            </div>
          )}
        </div>

        {/* Bancos */}
        <Link
          href="/dashboard/bancos"
          className="flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-white transition-all"
        >
          <span className="material-symbols-outlined text-xl">account_balance</span>
          <span className="text-xs font-bold uppercase tracking-widest">Bancos</span>
        </Link>

        {/* Tarjetas */}
        <Link
          href="/dashboard/tarjetas"
          className="flex items-center gap-4 px-8 py-4 text-slate-500 hover:text-white transition-all"
        >
          <span className="material-symbols-outlined text-xl">credit_card</span>
          <span className="text-xs font-bold uppercase tracking-widest">Tarjetas</span>
        </Link>

        {/* Ajustes section */}
        <div className="pt-8 px-8">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4">Ajustes</p>
          
          {/* Perfil */}
          <Link
            href="/dashboard/perfil"
            className="flex items-center gap-4 py-3 text-slate-500 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined text-xl">person</span>
            <span className="text-xs font-bold uppercase tracking-widest">Perfil</span>
          </Link>

          {/* Configuración */}
          <Link
            href="/dashboard/configuracion"
            className="flex items-center gap-4 py-3 text-slate-500 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="text-xs font-bold uppercase tracking-widest">Configuración</span>
          </Link>
        </div>
      </nav>

      {/* Plan Premium */}
      <div className="p-8 border-t border-slate-800/50">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-[10px] font-bold text-primary uppercase mb-2">Plan Premium</p>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-3">Acceso ilimitado a predicciones con AI.</p>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/3"></div>
          </div>
        </div>
      </div>
    </aside>
  )
}