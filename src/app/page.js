"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* =======================
    DATA EVENT
======================= */
const events = [
  {
    id: "1",
    title: "CODECAMP IT CENTER UNUHA",
    date: "2 Januari 2025",
    location: "Ruang UKM Kampus C",
    description:
      "Program latihan Pemrograman mingguan yang dirancang untuk kamu yang ingin belajar, praktik, dan berkembang di dunia IT.",
    image: "/images/event1.jpeg",
  },
  {
    id: "2",
    title: "SEMINAR BEASISWA",
    date: "27 Desember 2025",
    location: "Lab Multimedia",
    description:
      "Workshop desain UI/UX untuk pemula yang ingin belajar fundamental desain produk digital.",
    image: "/images/event2.jpeg",
  },
  {
    id: "3",
    title: "PELATIHAN PEMBBUATAN GAME MENGGUNAKAN CONSTRUCT 3",
    date: "20 Desember 2025",
    location: "Kampus C UNUHA",
    description:
      "Jangan cuma jadi user teknologi, saatnya jadi creator! Ikuti pelatihan pembuatan game menggunakan Construct 3.",
    image: "/images/event3.jpeg",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-700">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-[#008542]/95 backdrop-blur text-white shadow-lg">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 md:w-12 md:h-12">
            <Image
              src="/images/logo_univ.png"
              alt="Logo UNUHA"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <h1 className="text-xs md:text-sm font-bold tracking-wide text-emerald-100">
              UNIVERSITAS
            </h1>
            <span className="text-yellow-400 font-black text-base md:text-lg italic">
              Nurul Huda
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-xs font-black tracking-[0.25em]">
          {["HOME", "EVENT", "TENTANG"].map((item) => (
            <a
              key={item}
              href={item === "TENTANG" ? "#video" : `#${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition uppercase text-emerald-50"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#008542]/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              {["HOME", "EVENT", "TENTANG"].map((item) => (
                <a
                  key={item}
                  href={item === "TENTANG" ? "#video" : `#${item.toLowerCase()}`}
                  className="text-white hover:text-yellow-400 transition uppercase text-sm font-black tracking-widest"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/images/kampus_unuha.jpeg"
          alt="Kampus UNUHA"
          fill
          className="object-cover scale-105 animate-pulse"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003d22]/95 via-[#008542]/85 to-black/20 animate-fade-in" />

        <div className="relative z-10 px-6 md:px-20 max-w-3xl text-white transform translate-y-4 animate-slide-up">
          <span className="inline-block px-5 py-2 bg-yellow-400 text-black text-xs font-black rounded-full mb-8 shadow animate-bounce">
            OFFICIAL EVENT PORTAL
          </span>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
            Universitas <br />
            <span className="text-yellow-400 italic drop-shadow animate-pulse">
              Nurul Huda
            </span>
          </h2>

          <p className="text-lg md:text-xl mb-12 text-emerald-100 animate-fade-in-up delay-200">
            Wadah kreativitas dan inovasi mahasiswa untuk mencetak generasi
            <span className="font-bold text-yellow-300"> Cerdas Berakhlak</span>.
          </p>

        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl animate-float-delayed"></div>
      </section>

      {/* ================= EVENT ================= */}
      <section id="event" className="bg-slate-50 py-16">
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-xs font-black tracking-widest bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full animate-bounce">
            AGENDA EVENT
          </span>
          <p className="text-slate-500 mt-4 animate-fade-in-up delay-200">
            Total {events.length} Event Tersedia
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded-[2rem] shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 hover:rotate-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-40 overflow-hidden group">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <span className="inline-block text-xs font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full mb-4 animate-pulse">
                  {event.date}
                </span>

                <h4 className="font-black text-xl mb-3 text-slate-800 hover:text-yellow-600 transition-colors">
                  {event.title}
                </h4>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <Link
                  href={`/event/${event.id}`}
                  className="inline-block bg-[#008542] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#006b35] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Lihat Detail →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section id="video" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-black text-slate-800 mb-4">
              Profil <span className="text-yellow-400">Kampus UNUHA</span>
            </h3>
            <p className="text-slate-500 animate-fade-in-up delay-200">
              Kenali lebih dekat kampus kami melalui video profil ini
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-yellow-100 animate-fade-in-up delay-400 hover:shadow-3xl transition-shadow duration-500">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ttoR2U1UKKs"
              title="Profil Kampus UNUHA"
              frameBorder="0"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE ================= */}
      <section id="tentang" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center font-black text-4xl mb-16 text-slate-800 animate-fade-in">
            Mengapa <span className="text-yellow-400 animate-pulse">UNUHA?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Terpusat", 
                desc: "Satu portal untuk semua informasi event kampus.", 
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#008542" strokeWidth="2" fill="#008542" fillOpacity="0.1"/>
                    <circle cx="12" cy="12" r="4" fill="#008542"/>
                    <circle cx="12" cy="12" r="1" fill="white"/>
                  </svg>
                )
              },
              { 
                title: "Up to Date", 
                desc: "Informasi terbaru langsung dari UKM & Prodi.", 
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#008542" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="#008542" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V4" stroke="#008542" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 20V22" stroke="#008542" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 12H2" stroke="#008542" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 12H20" stroke="#008542" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )
              },
              { 
                title: "Mudah", 
                desc: "Pendaftaran cepat & praktis.", 
                icon: (
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="#008542" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#008542" strokeWidth="2"/>
                  </svg>
                )
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center animate-fade-in-up group"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="flex justify-center mb-6 animate-bounce group-hover:animate-pulse">
                  {item.icon}
                </div>
                <h4 className="font-black text-2xl mb-4 text-yellow-500 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOTO FRAME & DESKRIPSI ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Frame Foto */}
          <div
            className="relative w-full aspect-[3/4] md:aspect-[9/16] overflow-hidden shadow-2xl mb-12"
            style={{
              borderTopRightRadius: "4rem",
              borderBottomRightRadius: "4rem",
              borderTopLeftRadius: "0.75rem",
              borderBottomLeftRadius: "0.75rem",
            }}
          >
            <Image
              src="/images/kegiatan.jpeg"
              alt="Kegiatan Universitas Nurul Huda"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Bagian Tulisan (Sesuai Gambar) */}
          <div className="max-w-3xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-1.5 h-16 bg-[#008542] rounded-full"></div>
              <div>
                <span className="text-lg font-medium text-slate-800 block">Sejak</span>
                <span className="text-4xl font-black text-slate-900">2025</span>
              </div>
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-4">EventUnuha</h3>
            
            <p className="text-slate-500 text-lg leading-relaxed">
              Wadah event progresif bagi mahasiswa Universitas Nurul Huda. 
              Konsisten mendampingi langkahmu melalui berbagai kegiatan seru, 
              interaktif, dan penuh inspirasi.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#002b16] text-white py-16 text-center">
        <Image
          src="/images/logo_univ.png"
          alt="Logo UNUHA"
          width={64}
          height={64}
          className="mx-auto mb-6"
        />
        <p className="font-black text-2xl tracking-wide">
          UNIVERSITAS <span className="text-yellow-400">NURUL HUDA</span>
        </p>
        <p className="text-[10px] mt-6 text-emerald-200/40 tracking-widest">
          © 2025 IT Center UNUHA
        </p>
      </footer>

    </main>
  );
}
