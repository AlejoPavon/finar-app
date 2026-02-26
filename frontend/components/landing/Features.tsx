import { BsGraphUp, BsPiggyBank, BsBarChart } from 'react-icons/bs';

const features = [
  {
    icon: BsGraphUp,
    title: "Control de gastos",
    description: "Registra y categoriza tus gastos de forma intuitiva"
  },
  {
    icon: BsPiggyBank,
    title: "Metas de ahorro",
    description: "Establece objetivos y sigue tu progreso fácilmente"
  },
  {
    icon: BsBarChart,
    title: "Estadísticas claras",
    description: "Visualiza tus finanzas con gráficos simples"
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Todo lo necesario en un solo lugar
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Funcionalidades simples pero poderosas para gestionar tu dinero
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
              <feature.icon className="w-10 h-10 text-gray-700 mb-5" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}