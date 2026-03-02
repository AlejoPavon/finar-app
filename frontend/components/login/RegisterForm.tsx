// RegisterForm.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Register attempt:', formData)
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-navy mb-1">Crear cuenta gratis</h1>
        <p className="text-slate-500 text-sm">Comienza a gestionar tus finanzas.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-xs font-bold text-navy mb-1">
            Nombre completo
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Juan Pérez"
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border-slate-100 border-2 rounded-xl focus:border-primary focus:ring-0 focus:outline-none transition-all placeholder:text-slate-400 text-sm"
              required
            />
          </div>
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-navy mb-1">
            Email
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border-slate-100 border-2 rounded-xl focus:border-primary focus:ring-0 focus:outline-none transition-all placeholder:text-slate-400 text-sm"
              required
            />
          </div>
        </div>

        {/* Campo Contraseña */}
        <div>
          <label htmlFor="password" className="block text-xs font-bold text-navy mb-1">
            Contraseña
          </label>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-9 pr-9 py-2.5 bg-slate-50 border-slate-100 border-2 rounded-xl focus:border-primary focus:ring-0 focus:outline-none transition-all placeholder:text-slate-400 text-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
            >
              {showPassword ? <FiEyeOff className="text-base" /> : <FiEye className="text-base" />}
            </button>
          </div>
        </div>

        {/* Campo Confirmar Contraseña */}
        <div>
          <label htmlFor="confirmPassword" className="block text-xs font-bold text-navy mb-1">
            Confirmar contraseña
          </label>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-9 pr-9 py-2.5 bg-slate-50 border-slate-100 border-2 rounded-xl focus:border-primary focus:ring-0 focus:outline-none transition-all placeholder:text-slate-400 text-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
            >
              {showConfirmPassword ? <FiEyeOff className="text-base" /> : <FiEye className="text-base" />}
            </button>
          </div>
        </div>

        {/* Checkbox Términos */}
        <div className="flex items-start">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary accent-primary mt-0.5"
            required
          />
          <label htmlFor="acceptTerms" className="ml-2 text-xs text-slate-600 cursor-pointer">
            Acepto los{' '}
            <Link href="/terminos" className="text-primary font-semibold hover:underline">
              Términos
            </Link>{' '}
            y{' '}
            <Link href="/privacidad" className="text-primary font-semibold hover:underline">
              Privacidad
            </Link>
          </label>
        </div>

        {/* Botón Submit */}
        <button 
          type="submit"
          className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/25 hover:bg-blue-700 transition-all active:scale-[0.98] text-sm mt-2"
        >
          Crear cuenta gratis
        </button>
      </form>

      {/* Separador */}
      <div className="mt-6">
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="flex-shrink mx-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            O regístrate con
          </span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>
      </div>
    </>
  )
}

export default RegisterForm