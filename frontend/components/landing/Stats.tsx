export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-light text-gray-900 mb-2">50K+</p>
            <p className="text-sm text-gray-500">Usuarios activos</p>
          </div>
          <div>
            <p className="text-4xl font-light text-gray-900 mb-2">$2.5B</p>
            <p className="text-sm text-gray-500">Dinero gestionado</p>
          </div>
          <div>
            <p className="text-4xl font-light text-gray-900 mb-2">4.9</p>
            <p className="text-sm text-gray-500">Valoración media</p>
          </div>
        </div>
      </div>
    </section>
  );
}