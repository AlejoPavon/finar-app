// Testimonials.tsx - Versión mejorada
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { MdVerified } from 'react-icons/md'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { BiMessageAlt } from 'react-icons/bi'
import { HiOutlineUserCircle } from 'react-icons/hi'

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
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const sectionRef = useRef<HTMLElement>(null)

  const nextSlide = useCallback(() => {
    setDirection('right')
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }, [])

  const previousSlide = useCallback(() => {
    setDirection('left')
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }, [])

  // Autoplay cada 5 segundos
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Pausar autoplay cuando el usuario no está viendo la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAutoPlaying(true)
        } else {
          setIsAutoPlaying(false)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado minimalista con línea decorativa */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-light text-navy mb-3">
            Lo que dicen nuestros <span className="font-semibold text-primary">usuarios</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Únete a miles de personas que ya están transformando sus finanzas
          </p>
        </div>

        {/* Carrusel principal */}
        <div className="relative px-4 md:px-12">
          {/* Controles de navegación - solo visibles en desktop */}
          <button
            onClick={previousSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center hover:border-primary hover:text-primary transition-all z-10"
            aria-label="Testimonio anterior"
          >
            <FiChevronLeft className="text-lg" />
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center hover:border-primary hover:text-primary transition-all z-10"
            aria-label="Siguiente testimonio"
          >
            <FiChevronRight className="text-lg" />
          </button>

          {/* Contenedor del carrusel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="max-w-3xl mx-auto">
                    {/* Tarjeta de testimonio */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      {/* Nombre y verificación - ARRIBA */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="size-12 rounded-full bg-gradient-to-br from-primary/5 to-blue-500/5 flex items-center justify-center border border-slate-200">
                            <HiOutlineUserCircle className="text-2xl text-navy/40" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-navy">
                                {testimonial.name}
                              </h3>
                              {testimonial.verified && (
                                <MdVerified className="text-green-500 text-sm" />
                              )}
                            </div>
                            <p className="text-xs text-slate-400">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FiStar key={i} className="text-yellow-400 fill-current text-sm" />
                          ))}
                        </div>
                      </div>

                      {/* Contenido del testimonio */}
                      <div className="relative">
                        <BiMessageAlt className="absolute -top-2 -left-2 text-4xl text-primary/5" />
                        <p className="text-navy/70 text-base md:text-lg font-light leading-relaxed pl-6">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Fecha */}
                      <div className="mt-6 flex justify-end">
                        <span className="text-xs text-slate-300">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de posición */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left')
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 8000)
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-primary rounded-full' 
                    : 'w-2 h-2 bg-slate-200 rounded-full hover:bg-slate-300'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* Barra de progreso de autoplay */}
          {isAutoPlaying && (
            <div className="flex justify-center mt-6">
              <div className="w-48 h-0.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  key={currentIndex}
                  className="h-full bg-primary/30 rounded-full animate-[progress_5s_linear]"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    </section>
  )
}