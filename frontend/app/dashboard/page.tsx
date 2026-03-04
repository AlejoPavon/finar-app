// app/dashboard/page.tsx
import { 
  FiSearch, 
  FiPlus, 
  FiTrendingUp,
  FiShoppingBag,
  FiHome
} from 'react-icons/fi'
import { BiWallet, BiMoney, BiShoppingBag as BiShoppingBagIcon } from 'react-icons/bi'
import { RiRestaurantLine } from 'react-icons/ri'

export default function DashboardPage() {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
  const currentMonth = 'Abr'

  return (
    <>
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-10 sticky top-0 bg-[#f8fafc]/80 backdrop-blur-md z-30">
        <div>
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">finAR Intelligence</h2>
          <h1 className="text-2xl font-bold text-slate-900">Hola, Alex.</h1>
        </div>
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative hidden xl:block">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            <input className="pl-11 pr-6 py-2 bg-white border border-slate-200 rounded-full text-sm w-64 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all" placeholder="Buscar..." type="text"/>
          </div>
          
          {/* Nueva Transacción Button */}
          <button className="flex items-center gap-2 bg-navy text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-navy/10 group">
            <FiPlus className="text-lg group-hover:rotate-90 transition-transform" />
            Nueva Transacción
          </button>
          
          {/* Avatar */}
          <div className="size-10 rounded-full bg-slate-200 border-2 border-white p-0.5 overflow-hidden">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary to-blue-600"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-10 pt-4 space-y-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Saldo Total */}
          <div className="glass-card p-6 rounded-3xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Saldo Total</span>
              <BiWallet className="text-primary text-2xl" />
            </div>
            <h4 className="text-3xl font-extrabold text-slate-900">$45,200.00</h4>
            <p className="text-emerald-500 text-[11px] font-bold mt-2 flex items-center gap-1">
              <FiTrendingUp className="text-xs" /> +2.5% mes anterior
            </p>
          </div>

          {/* Gastos */}
          <div className="glass-card p-6 rounded-3xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gastos</span>
              <BiShoppingBagIcon className="text-rose-400 text-2xl" />
            </div>
            <h4 className="text-3xl font-extrabold text-slate-900">$1,240.00</h4>
            <p className="text-rose-400 text-[11px] font-bold mt-2 flex items-center gap-1">
              <FiTrendingUp className="text-xs" /> +12.3% mes anterior
            </p>
          </div>

          {/* Ingresos */}
          <div className="glass-card p-6 rounded-3xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ingresos</span>
              <BiMoney className="text-emerald-400 text-2xl" />
            </div>
            <h4 className="text-3xl font-extrabold text-slate-900">$3,150.00</h4>
            <p className="text-emerald-400 text-[11px] font-bold mt-2 flex items-center gap-1">
              <FiTrendingUp className="text-xs" /> +8.0% mes anterior
            </p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Bar Chart */}
          <div className="lg:col-span-2 glass-card p-8 rounded-[2rem]">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="font-bold text-lg text-slate-900">Historial de Gastos</h4>
                <p className="text-xs text-slate-400">Tendencia mensual de consumo</p>
              </div>
              <select className="text-xs border-none bg-slate-100 rounded-lg focus:ring-0 font-bold text-slate-600">
                <option>Últimos 6 meses</option>
                <option>Último año</option>
              </select>
            </div>

            <div className="h-64 flex items-end justify-between gap-4 px-2">
              {months.map((month) => {
                const heights: Record<string, string> = {
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
                    <div className={`w-full bg-slate-100 rounded-t-lg relative group ${heights[month]}`}>
                      <div className={`absolute bottom-0 w-full rounded-t-lg transition-all h-full ${
                        isCurrent 
                          ? 'bg-primary shadow-lg shadow-primary/20' 
                          : 'bg-primary/20 group-hover:bg-primary/40'
                      }`}></div>
                    </div>
                    <span className={`text-[10px] font-bold uppercase ${
                      isCurrent ? 'text-slate-900' : 'text-slate-400'
                    }`}>{month}</span>
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
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#f1f5f9" strokeWidth="2.5"></circle>
                  <circle cx="18" cy="18" fill="none" r="16" stroke="var(--primary)" strokeDasharray="45, 100" strokeLinecap="round" strokeWidth="2.5"></circle>
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#60a5fa" strokeDasharray="20, 100" strokeDashoffset="-45" strokeLinecap="round" strokeWidth="2.5"></circle>
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#94a3b8" strokeDasharray="15, 100" strokeDashoffset="-65" strokeLinecap="round" strokeWidth="2.5"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-slate-800">$1.2k</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Mes</span>
                </div>
              </div>

              <div className="mt-8 w-full space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span className="text-xs font-semibold text-slate-500">Servicios</span>
                  </div>
                  <span className="text-xs font-bold">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-blue-400"></div>
                    <span className="text-xs font-semibold text-slate-500">Comida</span>
                  </div>
                  <span className="text-xs font-bold">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-slate-400"></div>
                    <span className="text-xs font-semibold text-slate-500">Otros</span>
                  </div>
                  <span className="text-xs font-bold">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-[2rem] overflow-hidden mb-12">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white/50">
            <h4 className="font-bold text-lg text-slate-900">Actividad Reciente</h4>
            <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Exportar Reporte</button>
          </div>
          
          <div className="divide-y divide-slate-50">
            {/* Activity 1 */}
            <div className="px-8 py-4 flex items-center justify-between hover:bg-white/80 transition-all group">
              <div className="flex items-center gap-4">
                <div className="size-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <FiShoppingBag className="text-slate-500 group-hover:text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Apple Services</p>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase">Suscripciones • Hoy</p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-900">-$12.99</span>
            </div>

            {/* Activity 2 */}
            <div className="px-8 py-4 flex items-center justify-between hover:bg-white/80 transition-all group">
              <div className="flex items-center gap-4">
                <div className="size-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <RiRestaurantLine className="text-slate-500 group-hover:text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Viento Sur Resto</p>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase">Comida • Ayer</p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-900">-$45.50</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}