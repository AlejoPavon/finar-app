'use client';

import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaPlay, FaPause } from 'react-icons/fa6';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Controla tus finanzas
            <span className="block text-gray-600">de forma simple</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            FinAR te ayuda a llevar un control claro de tus gastos y ahorros. 
            Sin complicaciones, solo lo que necesitas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-base font-medium">
              Comenzar gratis
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-base font-medium flex items-center gap-2"
            >
              {isPlaying ? (
                <>
                  <FaPause size={14} />
                  Pausar demo
                </>
              ) : (
                <>
                  <FaPlay size={14} />
                  Ver demo
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-8">
            Sin tarjeta de crédito · 14 días gratis
          </p>
        </div>
      </div>
    </section>
  );
}