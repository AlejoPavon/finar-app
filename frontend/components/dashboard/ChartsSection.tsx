// components/dashboard/ChartsSection.tsx
'use client'

import { useState } from 'react'
import { FiTrendingUp, FiPieChart } from 'react-icons/fi'

export default function ChartsSection() {
  const [selectedPeriod, setSelectedPeriod] = useState('6m')
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
  const currentMonth = 'Abr'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Bar Chart */}
      <div className="lg:col-span-2 glass-card p-8 rounded-[2rem]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h4 className="font-bold text-lg text-slate-900">Historial de Gastos</h4>
            <p className="text-xs text-slate-400">Tendencia mensual de consumo</p>
          </div>
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="text-xs border-none bg-slate-100 rounded-lg focus:ring-0 font-bold text-slate-600"
          >
            <option value="6m">Últimos 6 meses</option>
            <option value="1y">Último año</option>
          </select>
        </div>

        <div className="h-64 flex items-end justify-between gap-4 px-2">
          {months.map((month) => {
            const heights = {
              'Ene': 'h-32',
              'Feb': 'h-48',
              'Mar': 'h-24',
              'Abr': 'h-56',
              'May': 'h-40',
              'Jun': 'h-36'
            }
            const isCurrent = month === currentMonth
            
            return (
              <div key={month} className="flex-1 flex flex-col items-center gap-3">
                <div className={`w-full bg-slate-100 rounded-t-lg relative group ${heights[month as keyof typeof heights]}`}>
                  <div className={`absolute bottom-0 w-full rounded-t-lg transition-all ${
                    isCurrent 
                      ? 'bg-primary h-full shadow-lg shadow-primary/20' 
                      : 'bg-primary/20 group-hover:bg-primary/40 h-full'
                  }`}></div>
                </div>
                <span className={`text-[10px] font-bold uppercase ${
                  isCurrent ? 'text-slate-900' : 'text-slate-400'
                }`}>
                  {month}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Pie Chart */}
      <div className="glass-card p-8 rounded-[2rem] flex flex-col">
        <h4 className="font-bold text-lg text-slate-900 mb-6">Distribución</h4>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative size-44">
            <svg className="size-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="none" r="16" stroke="#f1f5f9" strokeWidth="2.5" />
              <circle cx="18" cy="18" fill="none" r="16" stroke="#38bdf8" strokeDasharray="45, 100" strokeLinecap="round" strokeWidth="2.5" />
              <circle cx="18" cy="18" fill="none" r="16" stroke="#60a5fa" strokeDasharray="20, 100" strokeDashoffset="-45" strokeLinecap="round" strokeWidth="2.5" />
              <circle cx="18" cy="18" fill="none" r="16" stroke="#94a3b8" strokeDasharray="15, 100" strokeDashoffset="-65" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-slate-800">$1.2k</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Mes</span>
            </div>
          </div>

          <div className="mt-8 w-full space-y-3">
            {[
              { color: 'bg-primary', label: 'Servicios', percentage: '45%' },
              { color: 'bg-blue-400', label: 'Comida', percentage: '20%' },
              { color: 'bg-slate-400', label: 'Otros', percentage: '15%' }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`size-2 rounded-full ${item.color}`}></div>
                  <span className="text-xs font-semibold text-slate-500">{item.label}</span>
                </div>
                <span className="text-xs font-bold">{item.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}