// app/dashboard/layout.tsx
import { ReactNode } from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import FloatingButton from '@/components/dashboard/FloatingButton'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-[#f8fafc]">
        {children}
      </main>
      
      {/* Floating Action Button */}
      <FloatingButton />
    </div>
  )
}