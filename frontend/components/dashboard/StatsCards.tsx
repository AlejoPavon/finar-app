// components/dashboard/StatsCards.tsx
import { FiTrendingUp } from 'react-icons/fi'
import { BiWallet, BiShoppingBag, BiMoney } from 'react-icons/bi'

export default function StatsCards() {
  const stats = [
    {
      id: 1,
      title: 'Saldo Total',
      value: '$45,200.00',
      change: '+2.5%',
      changeType: 'positive',
      icon: <BiWallet className="text-primary text-2xl" />
    },
    {
      id: 2,
      title: 'Gastos',
      value: '$1,240.00',
      change: '+12.3%',
      changeType: 'negative',
      icon: <BiShoppingBag className="text-rose-400 text-2xl" />
    },
    {
      id: 3,
      title: 'Ingresos',
      value: '$3,150.00',
      change: '+8.0%',
      changeType: 'positive',
      icon: <BiMoney className="text-emerald-400 text-2xl" />
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.id} className="dashboard-glass-card p-6 rounded-3xl">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {stat.title}
            </span>
            {stat.icon}
          </div>
          <h4 className="text-3xl font-extrabold text-slate-900">{stat.value}</h4>
          <p className={`text-[11px] font-bold mt-2 flex items-center gap-1 ${
            stat.changeType === 'positive' ? 'text-emerald-500' : 'text-rose-400'
          }`}>
            <FiTrendingUp className="text-xs" />
            {stat.change} mes anterior
          </p>
        </div>
      ))}
    </div>
  )
}