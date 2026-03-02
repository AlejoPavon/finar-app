// components/dashboard/FloatingButton.tsx
export default function FloatingButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <div className="bg-white px-3 py-1.5 rounded-xl shadow-xl border border-slate-100 mb-3 animate-bounce">
        <p className="text-[10px] font-bold text-slate-700">¿Necesitas ayuda, Alex?</p>
      </div>
      <button className="size-14 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl fab-glow hover:scale-110 transition-transform active:scale-95 group">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
          smart_toy
        </span>
        <span className="absolute -top-1 -right-1 size-4 bg-emerald-500 rounded-full border-2 border-white"></span>
      </button>
    </div>
  )
}