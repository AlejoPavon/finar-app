// Testimonials.tsx - Versión minimalista y moderna
'use client'

import { useState, useEffect, useCallback } from 'react'
import { MdVerified } from 'react-icons/md'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { BiMessageAlt } from 'react-icons/bi'

const testimonials = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'Emprendedor',
    verified: true,
    rating: 5,
    content: 'finAR transformó completamente mi relación con el dinero. La IA predictiva me ayudó a ahorrar un 30% más este año sin sacrificar mi calidad de vida.',
    date: 'Hace 2 días'
  },
  {
    id: 2,
    name: 'Ana Martínez',
    role: 'Diseñadora Freelance',
    verified: true,
    rating: 5,
    content: 'Poder conectar todas mis cuentas y tener una visión clara de mis finanzas en tiempo real es increíble. La seguridad bancaria me da total tranquilidad.',
    date: 'Hace 1 semana'
  },
  {
    id: 3,
    name: 'Miguel Ángel Pérez',
    role: 'Inversor',
    verified: true,
    rating: 5,
    content: 'Las proyecciones de gastos basadas en IA son asombrosamente precisas. Me ayudó a identificar suscripciones que ni recordaba tener.',
    date: 'Hace 3 días'
  },
  {
    id: 4,
    name: 'Laura Sánchez',
    role: 'Gerente de Marketing',
    verified: true,
    rating: 5,
    content: 'La interfaz es intuitiva y hermosa. Por fin una app financiera que entiende que no todos somos expertos en finanzas. 100% recomendada.',
    date: 'Hace 5 días'
  },
  {
    id: 5,
    name: 'David Gómez',
    role: 'Arquitecto',
    verified: true,
    rating: 5,
    content: 'Desde que uso finAR, mi estrés financiero desapareció. La sincronización con bancos es instantánea y el soporte al cliente es excepcional.',
    date: 'Hace 4 días'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }, [])

  // Autoplay cada 5 segundos
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Pausar al hacer hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado minimalista */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-navy mt-3 mb-4">
            Lo que dicen de <span className="font-semibold">finAR</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Únete a miles de personas que ya están simplificando sus finanzas
          </p>
        </div>

        {/* Carrusel minimalista */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Controles - sutiles */}
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all z-10 border border-slate-100"
            aria-label="Siguiente"
          >
            <FiChevronRight className="text-navy text-lg" />
          </button>

          <button
            onClick={() => {
              setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
              )
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 10000)
            }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all z-10 border border-slate-100"
            aria-label="Anterior"
          >
            <FiChevronLeft className="text-navy text-lg" />
          </button>

          {/* Carrusel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-8 md:px-12">
                  <div className="max-w-3xl mx-auto">
                    {/* Testimonio card - minimalista */}
                    <div className="text-center">
                      {/* Nombre del usuario - ARRIBA */}
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="text-2xl font-medium text-navy">
                          {testimonial.name}
                        </span>
                        {testimonial.verified && (
                          <MdVerified className="text-green-500 text-xl" />
                        )}
                      </div>
                      
                      {/* Role y fecha - sutil */}
                      <div className="flex items-center justify-center gap-3 text-sm text-slate-400 mb-8">
                        <span>{testimonial.role}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>{testimonial.date}</span>
                      </div>

                      {/* Contenido - más prominente */}
                      <p className="text-xl md:text-2xl text-navy/80 font-light leading-relaxed mb-8">
                        "{testimonial.content}"
                      </p>

                      {/* Rating - minimal */}
                      <div className="flex justify-center gap-1.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FiStar key={i} className="text-yellow-400 fill-current text-lg" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores - minimalistas */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                className={`transition-all ${
                  index === currentIndex 
                    ? 'w-8 h-1.5 bg-navy' 
                    : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300 rounded-full'
                }`}
                aria-label={`Ir a testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* Indicador de autoplay sutil */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-12 h-0.5 bg-slate-100 rounded-full overflow-hidden"
                >
                  {index === currentIndex && isAutoPlaying && (
                    <div 
                      className="h-full bg-navy/20 animate-[progress_5s_linear]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estadísticas - muy sutiles */}
        <div className="flex justify-center gap-12 mt-16 pt-8 border-t border-slate-100">
          <div className="text-center">
            <div className="text-2xl font-light text-navy">4.9</div>
            <div className="text-xs text-slate-400 mt-1">Calificación</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-navy">+50K</div>
            <div className="text-xs text-slate-400 mt-1">Usuarios</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-navy">98%</div>
            <div className="text-xs text-slate-400 mt-1">Recomiendan</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  )
}