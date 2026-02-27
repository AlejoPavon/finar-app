import LoginLayout from '@/components/login/LoginLayout'
import TestimonialSide from '@/components/login/TestimonialSide'
import LoginForm from '@/components/login/LoginForm'
import SocialButtons from '@/components/login/SocialButtons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'finAR - Iniciar Sesión',
  description: 'Accede a tu cuenta de finAR para gestionar tus finanzas personales',
}

export default function LoginPage() {
  return (
    <LoginLayout testimonialSide={<TestimonialSide />}>
      <LoginForm />
      <SocialButtons />
    </LoginLayout>
  )
}