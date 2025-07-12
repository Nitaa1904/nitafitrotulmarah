import React, { useState } from "react";

const roles = [
  {
    title: "🏆 Deputy Chair of SE Student Association",
    date: "Aug 2024 – Jan 2025",
    short:
      "Memimpin perencanaan dan koordinasi perayaan HUT Rekayasa Perangkat Lunak ke-8.",
    full: "Menjadi wakil ketua Himpunan Mahasiswa RPL, memimpin kegiatan HUT RPL ke-8, membantu pengambilan keputusan strategis organisasi, serta mengoordinasikan program antar divisi selama masa kepengurusan.",
  },
  {
    title: "📝 Secretary of SE Student Association",
    date: "June 2023 – July 2024",
    short:
      "Mengelola dokumen organisasi, proposal kegiatan, dan surat-menyurat resmi.",
    full: "Mengelola dokumentasi kegiatan himpunan, bertanggung jawab membuat lebih dari 200 surat dan 7 proposal besar untuk program kerja Himpunan Mahasiswa RPL. Memastikan alur administrasi berjalan efektif.",
  },
  {
    title: "🎯 Staff Divisi Mentor General – Satria Muda ITTP",
    date: "Jan – Dec 2024",
    short:
      "Mereview proposal lomba dan mendampingi persiapan kompetisi internal kampus.",
    full: "Membantu pelaksanaan kompetisi internal ITTP, mengulas lebih dari 100 proposal lomba, menjadi penghubung antar mentor dan peserta, serta berperan aktif dalam pengembangan kualitas kompetisi mahasiswa.",
  },
  {
    title: "📚 Publication Co-Chair – Seminar CENTIVE ITTP",
    date: "Sep – Dec 2023",
    short:
      "Mengelola naskah seminar dan menyusun buku prosiding kegiatan CENTIVE.",
    full: "Bertanggung jawab dalam pengumpulan, penyuntingan, dan layout lebih dari 50 naskah seminar CENTIVE ITTP. Mengorganisasi publikasi kegiatan secara profesional hingga prosiding final siap distribusi.",
  },
  {
    title: "🤝 Secretary – SE Berbagi (Bakti Sosial)",
    date: "Nov 2023",
    short:
      "Membuat 50+ surat donasi dan menyusun laporan kegiatan sosial ke desa mitra.",
    full: "Sebagai sekretaris kegiatan bakti sosial RPL, menulis puluhan surat permohonan bantuan, mengatur logistik bersama kepala desa, serta menyusun laporan pertanggungjawaban acara secara menyeluruh dan representatif.",
  },
];

const Organizational = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div>
      {roles.map((role, index) => (
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
            {role.date}
          </small>

          <h5 className="fw-bold mb-2 pe-5">{role.title}</h5>

          <p className="text-light mb-2">
            {expandedIndex === index ? role.full : role.short}
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

export default Organizational;
