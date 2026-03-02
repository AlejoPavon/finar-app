// RegisterSocialButtons.tsx
'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Link from 'next/link'

const RegisterSocialButtons = () => {
  const handleGoogleRegister = () => {
    console.log('Google register')
  }

  const handleAppleRegister = () => {
    console.log('Apple register')
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleGoogleRegister}
          className="flex items-center justify-center gap-2 py-2.5 border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-navy group"
        >
          <FcGoogle className="text-base group-hover:scale-110 transition-transform" />
          <span className="text-sm">Google</span>
        </button>
        
        <button
          onClick={handleAppleRegister}
          className="flex items-center justify-center gap-2 py-2.5 border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-navy group"
        >
          <FaApple className="text-base group-hover:scale-110 transition-transform" />
          <span className="text-sm">Apple</span>
        </button>
      </div>

      <p className="mt-6 text-center text-slate-500 text-xs font-medium">
        ¿Ya tienes una cuenta?{' '}
        <Link 
          href="/login" 
          className="text-primary font-bold hover:underline ml-1 hover:text-primary/80 transition-colors"
        >
          Inicia sesión
        </Link>
      </p>
    </>
  )
}

export default RegisterSocialButtons