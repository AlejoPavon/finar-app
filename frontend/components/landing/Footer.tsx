// Footer.tsx - Con año actual
import Link from 'next/link'
import Image from 'next/image'
import { 
  FiMail, 
  FiMapPin, 
  FiGlobe, 
  FiShare2,
  FiHome,
  FiTrendingUp,
  FiShield,
  FiCode,
  FiLock,
  FiFileText,
  FiSettings,
  FiCheckCircle
} from 'react-icons/fi'
import { 
  MdPrivacyTip
} from 'react-icons/md'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="size-10 bg-white rounded-xl overflow-hidden">
                <Image 
                  src="/images/logo.png"
                  alt="finAR Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-white text-2xl font-extrabold tracking-tight">finAR</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Elevando la gestión financiera a través de tecnología disruptiva y diseño intuitivo. 
              Únete a la revolución del dinero inteligente.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Plataforma</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-3">
                  <FiHome className="text-sm" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-3">
                  <FiTrendingUp className="text-sm" />
                  Inversiones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-3">
                  <FiShield className="text-sm" />
                  Seguridad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-3">
                  <FiCode className="text-sm" />
                  API
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-3">
                  <MdPrivacyTip className="text-sm" />
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-3">
                  <FiFileText className="text-sm" />
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-3">
                  <FiSettings className="text-sm" />
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-3">
                  <FiCheckCircle className="text-sm" />
                  Cumplimiento
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <FiMail className="text-sm text-primary" />
                info@finar.app
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-sm text-primary" />
                Argentina, Mendoza
              </li>
              <li className="pt-4 flex gap-4">
                <Link href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <FiGlobe className="text-lg" />
                </Link>
                <Link href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <FiShare2 className="text-lg" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} finAR Technologies. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Status</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Soporte</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}