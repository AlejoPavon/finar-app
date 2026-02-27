'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMail, FiLock } from 'react-icons/fi'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log('Login attempt:', formData)
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-navy mb-3">Bienvenido de nuevo</h1>
        <p className="text-slate-500">Ingresa tus credenciales para acceder a tu cuenta.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">
            Email
          </label>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-slate-100 border-2 rounded-2xl focus:border-primary focus:ring-0 focus:outline-none transition-all placeholder:text-slate-400"
              required
            />
          </div>
        </div>

        {/* Campo Contraseña */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="block text-sm font-bold text-navy">
              Contraseña
            </label>
            <Link 
              href="/recuperar-password" 
              className="text-sm font-semibold text-primary hover:text-navy transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-slate-100 border-2 rounded-2xl focus:border-primary focus:ring-0 focus:outline-none transition-all placeholder:text-slate-400"
              required
            />
          </div>
        </div>

        {/* Checkbox Recordar */}
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            checked={formData.remember}
            onChange={handleChange}
            className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary accent-primary"
          />
          <label htmlFor="remember" className="ml-3 text-sm font-medium text-slate-600 cursor-pointer">
            Recordarme en este dispositivo
          </label>
        </div>

        {/* Botón Submit */}
        <button 
          type="submit"
          className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/25 hover:bg-blue-700 transition-all active:scale-[0.98]"
        >
          Iniciar Sesión
        </button>
      </form>

      {/* Separador */}
      <div className="mt-10">
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
            O continúa con
          </span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>
      </div>
    </>
  )
}