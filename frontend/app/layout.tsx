import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'finAR - Domina tus finanzas personales',
  description: 'La plataforma todo-en-uno que utiliza inteligencia artificial para sincronizar tus cuentas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden antialiased">{children}</body>
    </html>
  )
}