import Image from 'next/image';
import Link from 'next/link';
import { FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src="/images/logo.png"
                alt="FinAR"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-gray-600">© 2024 FinAR</span>
          </div>
          
          <div className="flex space-x-6">
            {['Términos', 'Privacidad', 'Contacto'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex space-x-4">
            {[FiTwitter, FiLinkedin, FiInstagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}