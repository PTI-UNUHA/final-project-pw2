"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const events = [
  {
    id: "1",
    title: "FRIDAY CODECAMP - IT CENTER UNUHA",
    date: "2 Januari 2026",
    time: "09.00 – 11.00 WIB",
    location: "Ruang UKM Kampus C",
    image: "/images/event1.jpeg",
    description: `Halo, Sobat Digital dan seluruh Mahasiswa Universitas Nurul Huda! 👋

Ingin jago ngoding, memahami dunia IT, dan punya skill yang siap dipakai di dunia kerja?
Sekarang saatnya kamu bergabung di FRIDAY CODECAMP! 🔥`,
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

Biar makin jago bikin media pembelajaran TIK yang seru & interaktif, mahasiswa PTI wajib ikut kegiatan ini!

✨ Pelatihan pembuatan game edukasi menggunakan Construct 3
Belajar langsung praktik, bukan cuma teori 👨‍💻👩‍💻

🗓 Sabtu, 20 Desember 2025
⏰ 08.00 – Selesai
📍 Lab Komputer Kampus C, Tanah Merah
💸 HTM: 10K (kumpul di kosma masing-masing)

⚠️ WAJIB untuk Mahasiswa PTI Semester V ⚠️

🎁 Benefit:
✅ E-Modul
✅ Snack
✅ Ilmu yang aplikatif & kepake banget

📌 Jangan cuma jadi user teknologi, saatnya jadi creator media pembelajaran!
Gas ikut dan upgrade skill kamu 🚀🔥`,
  },
];

export default function EventDetailPage() {
  const params = useParams();
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="font-bold">Event Tidak Ditemukan</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fcfdfd] px-4 py-10 font-sans">
      <div className="max-w-4xl mx-auto">

        <Link
          href="/#event"
          className="inline-flex items-center gap-3 text-[#008542] font-bold mb-10"
        >
          ← Kembali ke Event
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="bg-[#008542] text-white p-10">
            <h1 className="text-3xl md:text-5xl font-black">
              {event.title}
            </h1>
          </div>

          <div className="p-10 space-y-8">

            <div className="grid md:grid-cols-3 gap-6">
              <Info label="Tanggal" value={event.date} icon="📅" />
              <Info label="Waktu" value={event.time} icon="⏰" />
              <Info label="Lokasi" value={event.location} icon="📍" />
            </div>

            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-full rounded-2xl shadow"
              />
            )}

            <div className="bg-emerald-50 p-8 rounded-3xl whitespace-pre-line text-gray-700">
              {event.description}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

function Info({ label, value, icon }) {
  return (
    <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase">{label}</p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
}
