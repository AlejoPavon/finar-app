// components/dashboard/RecentActivity.tsx
import { BiShoppingBag, BiRestaurant } from 'react-icons/bi'

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      icon: <BiShoppingBag className="text-slate-500 group-hover:text-primary" />,
      title: 'Apple Services',
      category: 'Suscripciones',
      time: 'Hoy',
      amount: '-$12.99'
    },
    {
      id: 2,
      icon: <BiRestaurant className="text-slate-500 group-hover:text-primary" />,
      title: 'Viento Sur Resto',
      category: 'Comida',
      time: 'Ayer',
      amount: '-$45.50'
    }
  ]

  return (
    <div className="glass-card rounded-[2rem] overflow-hidden mb-12">
      <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white/50">
        <h4 className="font-bold text-lg text-slate-900">Actividad Reciente</h4>
        <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">
          Exportar Reporte
        </button>
      </div>

      <div className="divide-y divide-slate-50">
        {activities.map((activity) => (
          <div key={activity.id} className="px-8 py-4 flex items-center justify-between hover:bg-white/80 transition-all group">
            <div className="flex items-center gap-4">
              <div className="size-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                {activity.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{activity.title}</p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase">
                  {activity.category} • {activity.time}
                </p>
              </div>
            </div>
            <span className="text-sm font-bold text-slate-900">{activity.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}