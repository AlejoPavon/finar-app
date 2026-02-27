'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { Link } from 'lucide-react'

export default function SocialButtons() {
  const handleGoogleLogin = () => {
    // Aquí iría la lógica de login con Google
    console.log('Google login')
  }

  const handleAppleLogin = () => {
    // Aquí iría la lógica de login con Apple
    console.log('Apple login')
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 py-3 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors font-semibold text-navy group"
        >
          <FcGoogle className="text-xl group-hover:scale-110 transition-transform" />
          <span>Google</span>
        </button>
        
        <button
          onClick={handleAppleLogin}
          className="flex items-center justify-center gap-3 py-3 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors font-semibold text-navy group"
        >
          <FaApple className="text-xl group-hover:scale-110 transition-transform" />
          <span>Apple</span>
        </button>
      </div>

      <p className="mt-12 text-center text-slate-500 text-sm font-medium">
        ¿Aún no tienes una cuenta?{' '}
        <Link 
          href="/registro" 
          className="text-primary font-bold hover:underline ml-1 hover:text-primary/80 transition-colors"
        >
          Regístrate gratis
        </Link>
      </p>
    </>
  )
}