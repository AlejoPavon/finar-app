// Features.tsx - Con iconos de react-icons
import { FiShield, FiRefreshCw, FiCpu } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

export default function Features() {
  const features = [
    {
      icon: <FiShield className="text-primary text-xl" />,
      title: 'Seguridad Bancaria',
      description: 'Encriptación de nivel militar 256-bit para proteger cada dato.'
    },
    {
      icon: <FiRefreshCw className="text-primary text-xl" />, // Reemplazo de sync_saved_locally
      title: 'Sincronización Total',
      description: 'Conecta todos tus bancos y billeteras digitales en tiempo real.'
    },
    {
      icon: <FiCpu className="text-primary text-xl" />,
      title: 'IA Predictiva',
      description: 'Proyecciones inteligentes de tus gastos basadas en hábitos.'
    }
  ]

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-badge p-6 rounded-3xl flex items-start gap-5">
              <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}