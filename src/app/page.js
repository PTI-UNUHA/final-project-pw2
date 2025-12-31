"use client";

import Link from "next/link";
import Image from "next/image";

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

        <div className="hidden md:flex items-center gap-8 text-xs font-black tracking-[0.25em]">
          {["HOME", "EVENT", "TENTANG"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition uppercase text-emerald-50"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="relative min-h-[85vh] flex items-center">
        <Image
          src="/images/kampus_unuha.jpeg"
          alt="Kampus UNUHA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003d22]/95 via-[#008542]/85 to-black/20" />

        <div className="relative z-10 px-6 md:px-20 max-w-3xl text-white">
          <span className="inline-block px-5 py-2 bg-yellow-400 text-black text-xs font-black rounded-full mb-8 shadow">
            OFFICIAL EVENT PORTAL
          </span>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Universitas <br />
            <span className="text-yellow-400 italic drop-shadow">
              Nurul Huda
            </span>
          </h2>

          <p className="text-lg md:text-xl mb-12 text-emerald-100">
            Wadah kreativitas dan inovasi mahasiswa untuk mencetak generasi
            <span className="font-bold text-yellow-300"> Cerdas Berakhlak</span>.
          </p>

          <a
            href="#event"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 font-black rounded-xl shadow-xl hover:scale-105 transition"
          >
            Lihat Event
            <span className="text-lg">↓</span>
          </a>
        </div>
      </section>

      {/* ================= EVENT ================= */}
      <section id="event" className="bg-slate-50 py-28">
        <div className="text-center mb-20">
          <span className="text-xs font-black tracking-widest bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full">
            AGENDA EVENT
          </span>
          <h3 className="text-4xl md:text-5xl font-black mt-6 text-slate-800">
            Event <span className="text-yellow-400 italic">UNUHA</span>
          </h3>
          <p className="text-slate-500 mt-4">
            Total {events.length} Event Tersedia
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[2rem] shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-52">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block text-xs font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full mb-4">
                  {event.date}
                </span>

                <h4 className="font-black text-xl mb-3 text-slate-800">
                  {event.title}
                </h4>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <Link
                  href={`/event/${event.id}`}
                  className="inline-block bg-[#008542] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#006b35] transition"
                >
                  Lihat Detail →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-yellow-100">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ttoR2U1UKKs"
              title="Profil Kampus UNUHA"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURE ================= */}
      <section id="tentang" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center font-black text-4xl mb-16 text-slate-800">
            Mengapa <span className="text-yellow-400">UNUHA?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Terpusat", desc: "Satu portal untuk semua informasi event kampus." },
              { title: "Up to Date", desc: "Informasi terbaru langsung dari UKM & Prodi." },
              { title: "Mudah", desc: "Pendaftaran cepat & praktis." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition text-center"
              >
                <h4 className="font-black text-2xl mb-4 text-yellow-500">
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
