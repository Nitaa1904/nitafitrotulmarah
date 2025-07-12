import React, { useState } from "react";

const experiences = [
  {
    title: "💼 UI/UX Designer (Intern) – Telkom Indonesia",
    date: "July 2025 – Present",
    short:
      "Mendesain dashboard analitik & komponen UI untuk program NPS di Telkom DBT.",
    full: "Mendesain dan menyusun antarmuka pengguna (UI) untuk mendukung strategi CX Manager dalam program Net Promoter Score (NPS). Bertanggung jawab terhadap pembuatan wireframe, visual komponen, dan dashboard analitik berbasis insight untuk mengukur dan meningkatkan pengalaman pelanggan secara digital di lingkungan Telkom Digital Business & Technology (DBT).",
  },
  {
    title: "🧠 Backend Developer (Golang) – BRI Village Cooperative Project",
    date: "Mei 2025 – Present",
    short:
      "Membuat layanan backend koperasi desa (BRI) menggunakan Golang, JWT, dan fitur rules.",
    full: "Mengembangkan layanan backend menggunakan Golang untuk sistem koperasi desa yang didukung oleh Bank Rakyat Indonesia. Fitur utama mencakup manajemen aturan simpanan dan pinjaman, otentikasi JWT, middleware berbasis peran (super admin), serta filter & pagination untuk pencarian data. API RESTful siap diintegrasikan dengan frontend modern.",
  },
  {
    title: "✈️ Front-End Developer (React.js) – AEROLOKA Project",
    date: "Nov – Dec 2024",
    short:
      "Membangun tampilan dan fungsionalitas pemesanan tiket AEROLOKA dengan React.js.",
    full: "Membangun platform pemesanan tiket perjalanan bernama AEROLOKA menggunakan React.js. Bertanggung jawab untuk merancang tampilan antarmuka pemesanan, integrasi ke halaman hasil pencarian, serta layout responsif untuk desktop dan mobile dengan performa real-time.",
  },
  {
    title: "🚀 WordPress Developer – DIGIMARLY",
    date: "Jul – Okt 2024",
    short:
      "Membangun situs perusahaan berbasis WordPress, kolaborasi SEO dan UI.",
    full: "Membuat dan mengelola situs web perusahaan menggunakan WordPress. Bertanggung jawab untuk menyusun struktur halaman dinamis, mengintegrasikan tema & plugin, serta berkolaborasi dalam desain UI dan pengoptimalan SEO untuk memperkuat citra digital DIGIMARLY.",
  },
  {
    title: "🏫 Assistant TOEFL – Language Center ITTP",
    date: "Jun 2024 – Jun 2025",
    short:
      "Menangani pelaksanaan tes TOEFL kampus, monitoring dan support peserta.",
    full: "Mendampingi pelaksanaan tes TOEFL di Telkom University Purwokerto, memastikan peserta mengikuti tata tertib, memberikan panduan teknis, serta mencatat laporan pelaksanaan dan hasil tes secara administratif untuk pusat bahasa kampus.",
  },
  {
    title: "💻 OS Practicum Assistant – Operating Systems Course",
    date: "Sep – Des 2024",
    short:
      "Membimbing praktikum Red Hat Linux, troubleshooting, dan virtualisasi.",
    full: "Mendampingi mahasiswa Sistem Informasi dalam praktikum Sistem Operasi. Fokus pada pengoperasian Red Hat Linux, instalasi di VirtualBox, troubleshooting command-line, serta asesmen konfigurasi sistem dan performa dasar OS.",
  },
  {
    title: "🖥 Web Development Lecturer Assistant – Laravel Course",
    date: "Feb – Jun 2025",
    short:
      "Mengajar Laravel dasar hingga proyek akhir untuk dua kelas Sistem Informasi.",
    full: "Menjadi asisten dosen mata kuliah Pengembangan Aplikasi Web. Memberikan pengajaran Laravel secara menyeluruh untuk dua kelas Sistem Informasi, mulai dari routing, MVC, CRUD, hingga deployment proyek akhir berbasis Laravel.",
  },
];

const Internship = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="position-relative p-4 mb-4 rounded-4 shadow"
          style={{
            background: "#262642",
            border: "1px solid #4f8cff33",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 15px #4f8cff55";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Date on top-right */}
          <small
            className="position-absolute text-secondary"
            style={{ top: "12px", right: "16px", fontSize: "0.75rem" }}
          >
            {exp.date}
          </small>

          <h5 className="fw-bold mb-2 pe-5">{exp.title}</h5>

          <p className="text-light mb-2">
            {expandedIndex === index ? exp.full : exp.short}
          </p>

          <button
            className="btn btn-sm px-3 py-1 rounded-pill"
            style={{
              backgroundColor: "rgba(79, 140, 255, 0.1)",
              color: "#4f8cff",
              border: "1px solid #4f8cff55",
              fontSize: "0.85rem",
            }}
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            {expandedIndex === index ? "Tutup" : "Baca Selengkapnya →"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Internship;
