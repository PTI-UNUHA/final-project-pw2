"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col items-center py-16 px-6 font-sans">
      {/* Container Utama dengan Efek Bayangan Mewah */}
      <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
        
        {/* Header Section dengan Gradasi & Pattern */}
        <div className="bg-[#008542] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -mr-16 -mb-16 blur-2xl"></div>
          
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-yellow-400 text-[#008542] text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4 shadow-lg">
              Tentang Aplikasi
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              Portal Event <br /> <span className="text-yellow-400 italic font-black">UNUHA</span>
            </h1>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="p-8 md:p-16">
          <div className="prose prose-emerald max-w-none">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium mb-8 border-l-4 border-yellow-400 pl-6">
              Sistem Informasi Event Kampus adalah solusi digital terpadu yang dirancang khusus untuk mahasiswa Universitas Nurul Huda guna mendapatkan akses informasi kegiatan secara cepat dan akurat.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <p className="text-gray-500 text-sm leading-relaxed">
                  Aplikasi ini dikembangkan sebagai bagian dari tugas <span className="font-bold text-[#008542]">Final Project</span> mata kuliah Pengembangan Web Frontend. Fokus utama kami adalah menyajikan antarmuka yang intuitif dan pengalaman pengguna yang mulus.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 text-sm leading-relaxed">
                  Dengan menggunakan teknologi terkini, kami memastikan setiap mahasiswa tidak akan ketinggalan informasi seminar, workshop, hingga ajang kompetisi bergengsi di lingkungan kampus.
                </p>
              </div>
            </div>
          </div>

          {/* Teknologi yang Digunakan - Card Style */}
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100 mb-12">
            <h2 className="text-[#008542] text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "Next.js", desc: "App Router Framework", icon: "🚀" },
                { name: "React.js", desc: "UI Library", icon: "⚛️" },
                { name: "Tailwind CSS", desc: "Styling Engine", icon: "🎨" }
              ].map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#008542] transition-colors group">
                  <div className="text-2xl mb-3">{tech.icon}</div>
                  <h4 className="font-bold text-gray-800">{tech.name}</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/"
              className="group flex items-center gap-3 bg-[#008542] text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-emerald-900/20 hover:bg-[#006b35] transition-all active:scale-95"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
              Kembali ke Beranda
            </Link>
            <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.4em]">
              IT Center UNUHA © 2025
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}