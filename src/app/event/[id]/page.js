"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const events = [
  {
    id: "1",
    title: "FRIDAY CODECAMP - IT CENTER UNUHA",
    date: "2 Januari 2026",
    time: "09.00 – 11.00 WIB",
    location: "Ruang UKM Kampus C",
    image: "/images/event1.jpeg",
    description: `💻🚀 YUK IKUT FRIDAY CODECAMP IT CENTER UNUHA! 🚀💻

Halo, Sobat Digital dan seluruh Mahasiswa Universitas Nurul Huda! 👋

Ingin jago ngoding, memahami dunia IT, dan punya skill yang siap dipakai di dunia kerja?
Sekarang saatnya kamu bergabung di FRIDAY CODECAMP, kegiatan rutin yang diselenggarakan oleh IT Center UNUHA! 🔥

📌 Friday Codecamp adalah program latihan pemrograman mingguan yang dirancang untuk kamu yang ingin belajar, praktik, dan berkembang di dunia IT secara konsisten dan terarah.

🎯 Apa saja yang akan kamu pelajari?
✅ HTML & CSS
✅ JavaScript & PHP
✅ Java & Kotlin
✅ Linux OS
✨ Dan materi menarik lainnya sesuai kebutuhan dunia IT!

💡 Bidang yang bisa kamu dalami:
🔹 Frontend Developer
🔹 Backend Developer
🔹 Android Developer
🔹 Database Design
🔹 Server Administrator

🗓 Pendaftaran dibuka: 24 Desember 2025
🚀 Kegiatan dimulai: 2 Januari 2026
📆 Hari: Setiap Jumat
⏰ Waktu: 09.00 – 11.00 WIB
📍 Tempat: Ruang UKM Kampus C

📲 Daftar sekarang!
👉 https://itcenter.unuha.ac.id

📞 Informasi lebih lanjut:
👉 0851-9979-0315

✨ Tingkatkan skill IT-mu setiap minggu, bangun portofolio, dan siapkan diri menghadapi dunia digital bersama IT Center UNUHA!`,
  },
  {
    id: "2",
    title: "Workshop UI/UX Design",
    date: "2 Februari 2025",
    time: "13.00 – 16.00 WIB",
    location: "Lab Multimedia",
    image: "/images/event2.jpeg",
    description:
      "Workshop praktis mengenai dasar-dasar UI/UX Design menggunakan tools desain modern.",
  },
  {
    id: "3",
    title: "Belajar Bikin Game Edukasi",
    date: "20 Desember 2025",
    time: "08.00 – Selesai",
    location: "Lab Komputer Kampus C, Tanah Merah",
    image: "/images/event3.jpeg",
    description: `🎮📚 BELAJAR BIKIN GAME EDUKASI 🎯

Biar makin jago bikin media pembelajaran TIK yang seru & interaktif, mahasiswa PTI wajib ikut kegiatan ini!`,
  },
];

export default function EventDetailPage() {
  const params = useParams();
  const event = events.find((e) => e.id === params.id);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nim: '',
    prodi: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi submit - dalam real app, kirim ke API
    console.log('Pendaftaran:', formData);
    setSubmitted(true);
    setShowForm(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      nim: '',
      prodi: '',
      phone: ''
    });
  };

  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.98-5.5-2.5" />
            </svg>
          </div>
          <p className="font-bold text-xl text-slate-600">Event Tidak Ditemukan</p>
          <Link href="/#event" className="inline-block mt-4 bg-[#008542] text-white px-6 py-3 rounded-full font-bold hover:bg-[#006b35] transition">
            Kembali ke Event
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/#event"
          className="inline-flex items-center gap-3 text-[#008542] font-bold mb-8 hover:text-[#006b35] transition-colors group animate-fade-in"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Event
        </Link>

        {/* Main Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Hero Header */}
          <div className="relative bg-gradient-to-r from-[#008542] via-[#006b35] to-[#004d26] text-white p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-black animate-bounce">
                  EVENT DETAIL
                </span>
              </div>
              
              <h1 className="text-3xl md:text-6xl font-black leading-tight mb-4">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-emerald-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold">{event.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <InfoCard label="Tanggal" value={event.date} icon={<CalendarIcon />} delay="0" />
              <InfoCard label="Waktu" value={event.time} icon={<ClockIcon />} delay="0.1" />
              <InfoCard label="Lokasi" value={event.location} icon={<LocationIcon />} delay="0.2" />
            </div>

            {/* Event Image */}
            {event.image && (
              <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#008542]/20 via-yellow-400/20 to-[#008542]/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-96 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 p-8 md:p-12 rounded-[2rem] border border-emerald-100 animate-fade-in-up shadow-lg" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#008542] rounded-full flex items-center justify-center text-white text-sm font-bold">ℹ</span>
                Detail Event
              </h3>
              
              <div className="text-slate-700 space-y-4 leading-relaxed">
                {event.description.split("\n").map((line, i) => {
                  // LINK AKTIF HANYA UNTUK EVENT 1
                  if (event.id === "1") {
                    // Website
                    if (line.includes("https://")) {
                      const url = line.match(/https:\/\/\S+/)?.[0];
                      return (
                        <p key={i} className="bg-white/50 p-4 rounded-xl border-l-4 border-[#008542]">
                          <span className="font-semibold text-[#008542]">Link Pendaftaran: </span>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#008542] font-bold underline hover:text-[#006b35] transition-colors"
                          >
                            {url}
                          </a>
                        </p>
                      );
                    }

                    // WhatsApp
                    if (line.match(/08\d+/)) {
                      const phone = line.match(/08\d+/)?.[0];
                      return (
                        <p key={i} className="bg-white/50 p-4 rounded-xl border-l-4 border-yellow-400">
                          <span className="font-semibold text-yellow-700">Kontak: </span>
                          <a
                            href={`https://wa.me/62${phone.substring(1)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-700 font-bold underline hover:text-yellow-800 transition-colors"
                          >
                            {phone} (WhatsApp)
                          </a>
                        </p>
                      );
                    }
                  }

                  // Regular text with emoji highlighting
                  if (line.trim()) {
                    return (
                      <p key={i} className="text-lg leading-relaxed hover:bg-white/30 p-3 rounded-lg transition-colors">
                        {line}
                      </p>
                    );
                  }
                  
                  return <div key={i} className="h-4"></div>;
                })}
              </div>
            </div>

            {/* Registration Section */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 md:p-12 rounded-[2rem] border border-yellow-200 animate-fade-in-up shadow-lg" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-black text-slate-800 mb-6">
                Pendaftaran Event
              </h3>

              {submitted ? (
                <div className="text-center py-8">
                  <h4 className="text-xl font-bold text-green-600 mb-2">Pendaftaran Berhasil!</h4>
                  <p className="text-black mb-4">Terima kasih telah mendaftar. Kami akan menghubungi Anda segera.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#008542] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#006b35] transition-colors"
                  >
                    Daftar Event Lain
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-black mb-6 leading-relaxed">
                    Isi data kamu di bawah ini. Pastikan semua benar dan lengkap agar proses pendaftaran lancar.
                  </p>

                  {!showForm ? (
                    <div className="text-center">
                      <button
                        onClick={() => setShowForm(true)}
                        className="bg-[#008542] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#006b35] transition-colors"
                      >
                        Daftar Sekarang
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-black mb-2">Nama Lengkap</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#008542] focus:outline-none transition-colors placeholder-slate-400 text-black"
                            placeholder="Tulis nama lengkap kamu"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-black mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#008542] focus:outline-none transition-colors placeholder-slate-400 text-black"
                            placeholder="email@kampus.ac.id"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-black mb-2">NIM</label>
                          <input
                            type="text"
                            name="nim"
                            value={formData.nim}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#008542] focus:outline-none transition-colors placeholder-slate-400 text-black"
                            placeholder="Contoh: 20210001"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-black mb-2">Program Studi</label>
                          <select
                            name="prodi"
                            value={formData.prodi}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#008542] focus:outline-none transition-colors text-black"
                          >
                            <option value="">Pilih Program Studi</option>
                            <option value="Pendidikan Fisika">Pendidikan Fisika</option>
                            <option value="Pendidikan Ekonomi">Pendidikan Ekonomi</option>
                            <option value="Pendidikan Bahasa dan Sastra Indonesia">Pendidikan Bahasa dan Sastra Indonesia</option>
                            <option value="Pendidikan Bahasa Inggris">Pendidikan Bahasa Inggris</option>
                            <option value="Pendidikan Teknologi Informasi">Pendidikan Teknologi Informasi</option>
                            <option value="Pendidikan Agama Islam">Pendidikan Agama Islam</option>
                            <option value="Pendidikan Guru Madrasah Ibtidaiyah">Pendidikan Guru Madrasah Ibtidaiyah</option>
                            <option value="Informatika">Informatika</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Sains Pertanian">Sains Pertanian</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">Nomor WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#008542] focus:outline-none transition-colors placeholder-slate-400 text-black"
                          placeholder="Nomor WA aktif kamu"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          type="submit"
                          className="flex-1 bg-[#008542] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#006b35] transition-colors"
                        >
                          Kirim Pendaftaran
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="px-6 py-3 rounded-lg font-bold text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors"
                        >
                          Batal
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoCard({ label, value, icon, delay }) {
  return (
    <div 
      className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#008542]/30 group animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#008542] to-[#006b35] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
          <p className="font-black text-slate-800 text-lg group-hover:text-[#008542] transition-colors">{value}</p>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx={12} cy={12} r={10} strokeWidth={2} />
      <path strokeWidth={2} d="M12 6v6l4 2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
