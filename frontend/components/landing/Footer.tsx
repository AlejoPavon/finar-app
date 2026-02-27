import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="size-10 bg-white flex items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-navy text-[24px]">account_balance_wallet</span>
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
              <li><Link href="#" className="hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Inversiones</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Seguridad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Términos de Uso</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cumplimiento</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm text-primary">mail</span>
                info@finar.app
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                Madrid, España
              </li>
              <li className="pt-4 flex gap-4">
                <Link href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">public</span>
                </Link>
                <Link href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">share</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">© 2024 finAR Technologies. Todos los derechos reservados.</p>
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