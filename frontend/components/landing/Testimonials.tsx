import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: "Ana García",
    role: "Diseñadora",
    text: "Finalmente una app simple que me ayuda a controlar mis gastos sin complicaciones."
  },
  {
    name: "Carlos Ruiz",
    role: "Ingeniero",
    text: "La mejor herramienta para mantener mis finanzas personales en orden."
  },
  {
    name: "María Paz",
    role: "Emprendedora",
    text: "Simple, intuitiva y efectiva. Exactamente lo que necesitaba."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 text-center mb-12">
          Lo que dicen nuestros usuarios
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}