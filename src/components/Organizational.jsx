import React, { useState } from "react";

const roles = [
  [
    {
      title: "👥 Secretary – Software Engineering Student Association",
      date: "Jul 2023 - Jul 2024",
      short: "Active member of the Software Engineering Student Association.",
      full: "As the secretary of the association, I have developed various important soft skills in carrying out my role. Effective communication skills help me in organizing project schedules, monthly meetings, and managing documentation and member attendance properly. Time management, organizational, problem solving, and teamwork skills also play a role in maintaining the smooth running of association activities. With these skills, I can ensure that the association runs smoothly and efficiently. Completing tasks with precision ensures that every step in organizing and implementing activities is carried out carefully and accurately. Thus, I play a vital role in ensuring the success and productivity of the association.",
      certificateLink:
        "https://link-to-certificates.com/SK%20SHME%20adendum%201.pdf",
    },
    {
      title:
        "🎯 Staff Mentor General Division Staff – Pusat Prestasi Satria Muda",
      date: "Jan 2024 - Des 2024",
      short: "Part of the student achievement development team.",
      full: "In the Mentor General Division of Telkom Institute of Technology, I played a vital role in reviewing more than 100 proposals from various prestigious competitions, including PKM Gemastik, P2MW, and PPK Ormawa. This experience honed my analytical and critical skills in assessing proposals, ensuring administrative completeness, and providing constructive input to help students achieve success. In the Mentor General Division of Telkom Institute of Technology, I played a vital role in reviewing more than 100 proposals from various prestigious competitions, including PKM Gemastik, P2MW, and PPK Ormawa. This experience honed my analytical and critical skills in assessing proposals, ensuring administrative completeness, and providing constructive input to help students achieve success.",
      certificateLink:
        "https://link-to-certificates.com/SK%20WR%20III%20Pusat%20Prestasi%20Satria%20Muda.pdf",
    },
    {
      title: "🎯 Vice Chairperson  – Software Engineering Student Association",
      date: "Agu 2024 - Jan 2025",
      short: "Part of the student achievement development team.",
      full: "As the Vice Chairperson of the Software Engineering Student Association, I supervised the 8th Software Engineering Anniversary events, including Social Service, National Seminar, Hackathon, and Gala Night. I assisted the Chairman in making strategic organizational decisions and coordinated work programs across various departments to ensure alignment with the association's vision and goals. These responsibilities allowed me to develop strong leadership and collaboration skills while contributing to the success of organizational activities.",
      certificateLink:
        "https://link-to-certificates.com/SK%20WR%20III%20Pusat%20Prestasi%20Satria%20Muda.pdf",
    },
    {
      title:
        "📊 Panitia – SIMKATMAWA Committee (Student Governance Performance Information System)",
      date: "April 2023",
      short: "Managed performance data of student affairs.",
      full: "Contributed to the student affairs performance information system (SIMKATMAWA) as a committee member.",
      certificateLink:
        "https://link-to-certificates.com/SK%20Panitia%20SIMKATMAWA.pdf",
    },
    {
      title: "🍽️ Steering Committee – Software Engineering Iftar Event",
      date: "Oktober 2024",
      short: "Organized iftar gathering for SE students.",
      full: "As a Steering Committee member for the HMSE Social Service event, I contributed to organizing a meaningful day for the children at Harapan Mulia Orphanage. The activities included watching an inspirational short film about pursuing dreams, creating a dream or wish list, handing over donations, sharing a ceremonial meal by cutting tumpeng, and enjoying lunch together. This experience not only allowed me to develop my organizational and teamwork skills but also left a lasting positive impact on the community.",
      certificateLink:
        "https://link-to-certificates.com/SK%20Panitia%20Bukber.pdf",
    },
    {
      title: "🗳️ Committee – General Election (PEMIRA) FIF 2023",
      date: "2023",
      short: "Organized campus-wide student election.",
      full: "Served as a committee member in the PEMIRA event to elect new student representatives.",
      certificateLink:
        "https://link-to-certificates.com/SK%20Kepanitiaan%20PEMIRA%20FIF%202023.pdf",
    },
    {
      title: "🛠️ Intern – Software Engineering Student Association",
      date: "2023",
      short: "Administrative and logistical support intern.",
      full: "Interned at the Software Engineering Student Association assisting with documentation, logistics, and operations.",
      certificateLink:
        "https://link-to-certificates.com/Salinan%20Nita%20Fitrotul%20Mar'ah.pdf",
    },
    {
      title: "🔁 Committee – Comparative Study with HIMATIF UNUGHA",
      date: "2023",
      short: "Managed inter-campus collaboration event.",
      full: "Organized a collaborative comparative study between HMSE ITTP and HIMATIF UNUGHA.",
      certificateLink:
        "https://link-to-certificates.com/Surat%20Tugas%20Studi%20Banding%20UNUGHA.pdf",
    },
    {
      title: "🔄 Committee – Comparative Study with HMTI UMP",
      date: "2023",
      short: "Coordinated the cross-campus study exchange.",
      full: "Organized comparative study program between HMSE ITTP and HMTI UMP as a committee staff.",
      certificateLink:
        "https://link-to-certificates.com/Surat%20Tugas%20Study%20Banding%20HMTI.pdf",
    },
    {
      title: "🤝 Secretary – SERABI (SE Social Program)",
      date: "2023",
      short: "Social service for rural communities.",
      full: "I had the opportunity to volunteer in the Software Engineering Berbagi activity held in Serayu Larangan Village. This activity, organized by the External and Social Department of the Software Engineering Student Association and the 7th Software Engineering Anniversary Committee, was a very valuable experience. We distributed basic food packages to villagers and interacted directly with them, listened to their stories, and saw the happy smiles on their faces. This experience taught me the importance of caring and real action in bringing about positive change. Thank you to all the committees, sponsors, and fellow volunteers who have made this activity a success. Let's continue to share and care!",
      certificateLink: "https://link-to-certificates.com/SERABI%20Panitia.pdf",
    },
    {
      title: "🗣️ Committee – Prodi Dialogue Forum",
      date: "2023",
      short: "Organized academic discussion forum.",
      full: "Served as committee in facilitating dialogue between students and department heads for curriculum improvement.",
      certificateLink:
        "https://link-to-certificates.com/Dialog%20Keprodian%20HMSE.pdf",
    },
    {
      title: "🎤 Assistant Moderator – CENTIVE 2024",
      date: "2024",
      short: "Helped moderate national academic conference.",
      full: "Contributed to the success of CENTIVE 2024 as an assistant moderator in technical sessions.",
      certificateLink:
        "https://link-to-certificates.com/Asisten%20Moderator%20CENTIVE.pdf",
    },
    {
      title: "📢 Committee – IEEE INCENTIVE 2023 Seminar",
      date: "2023",
      short: "Assisted in event logistics and paper review.",
      full: "Worked as committee and reviewer for IEEE INCENTIVE 2023 seminar (Call For Papers).",
      certificateLink:
        "https://link-to-certificates.com/Reviewer%20CENTIVE%202023.pdf",
    },
    {
      title: "💞 Committee – SE Social Service Program",
      date: "2024",
      short: "Planned and implemented a charity event.",
      full: "Served as committee for Software Engineering's Social Service Program focused on giving back to the community.",
      certificateLink:
        "https://link-to-certificates.com/Bakti%20Sosial%202024.pdf",
    },
    {
      title: "🎓 Committee – 7th SE Anniversary National Seminar",
      date: "2023",
      short: "Helped organize SE's anniversary seminar.",
      full: "Contributed as a committee member for the hybrid national seminar celebrating the 7th anniversary of SE program.",
      certificateLink:
        "https://link-to-certificates.com/Diesnatalis%207th%20SE.pdf",
    },
    {
      title: "🛠️ Committee – SE Exhibition & Workshop",
      date: "2023",
      short: "Helped prepare educational exhibitions and workshops.",
      full: "Worked in the organizing team for Software Engineering Exhibition and Workshop.",
      certificateLink: "https://link-to-certificates.com/Pameran%20SE.png",
    },
    {
      title: "🌄 Committee – LDK & Makrab SE Leadership Project",
      date: "2023",
      short: "Organized leadership and bonding activities.",
      full: "Facilitated student development through LDK & Makrab activities under SE Leadership Project 4.0.",
      certificateLink: "https://link-to-certificates.com/LDK%20Makrab.jpg",
    },
    {
      title: "🎉 Committee – 8th SE Anniversary National Seminar",
      date: "2024",
      short: "Planned and coordinated the hybrid national seminar.",
      full: "Helped organize the 8th Software Engineering Anniversary National Seminar as a committee member.",
      certificateLink:
        "https://link-to-certificates.com/Diesnatalis%208th%20SE.png",
    },
    {
      title: "💻 Committee – CodeCollab National Hackathon",
      date: "2024",
      short: "Facilitated a national-level hackathon.",
      full: "Contributed to the organizing of CodeCollab, a national hackathon focusing on collaborative software development.",
      certificateLink: "https://link-to-certificates.com/CodeCollab.png",
    },
  ],
];

const Organizational = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="container py-4">
      <div className="row">
        {roles[0].map((role, index) => (
          <div className="col-md-6" key={index}>
            <div
              className="p-3 mb-4 rounded-4 shadow"
              style={{
                background: "#262642",
                border: "1px solid #4f8cff33",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={() => setSelectedRole(role)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 14px #4f8cff44";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0 text-light">{role.title}</h6>
                <small
                  className="text-secondary"
                  style={{ fontSize: "0.75rem" }}
                >
                  {role.date}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRole && (
        <div
          className="centered-modal text-light popup-content"
          onClick={() => setSelectedRole(null)}
        >
          <div
            className="text-light p-4 rounded-4 shadow d-flex flex-column flex-md-row"
            style={{
              background: "linear-gradient(135deg, #1a1a33, #202040)",
              animation: "fadeIn 0.3s ease-in-out",
              boxShadow: "0 0 20px rgba(79, 140, 255, 0.3)",

              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <style>
              {`
                @keyframes fadeIn {
                  from { opacity: 0; transform: scale(0.95); }
                  to { opacity: 1; transform: scale(1); }
                }
              `}
            </style>

            <button
              className="btn btn-sm btn-outline-light position-absolute"
              style={{ top: "10px", right: "10px" }}
              onClick={() => setSelectedRole(null)}
            >
              ✖
            </button>

            <div className="me-md-4 mb-3 mb-md-0">
              <div style={{ flex: 1 }}>
                <h5 className="fw-bold mb-2" style={{ color: "#4f8cff" }}>
                  {selectedRole.title}
                </h5>
                <p className="text-secondary mb-3">{selectedRole.date}</p>
                <p>{selectedRole.full}</p>

                {selectedRole.certificateLink && (
                  <a
                    href={selectedRole.certificateLink}
                    className="btn btn-outline-info btn-sm mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 View Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Organizational;
