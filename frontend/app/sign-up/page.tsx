// app/register/page.tsx
import LoginLayout from '@/components/login/LoginLayout'
import TestimonialSide from '@/components/login/TestimonialSide'
import RegisterForm from '@/components/login/RegisterForm'
import RegisterSocialButtons from '@/components/login/RegisterSocialButtons'

export default function RegisterPage() {
  return (
    <LoginLayout testimonialSide={<TestimonialSide />}>
      <RegisterForm />
      <RegisterSocialButtons />
    </LoginLayout>
  )
}