import React from "react";
import HeroBg from "../assets/above.jpg";

const teachersData = [
  {
    id: 1,
    name: "Dr. Ahmad Raza",
    field: "MERN Stack DEVELOPER",
    expertise: "Machine Learning, NLP, Computer Vision",
  },
  {
    id: 2,
    name: "Prof. Sara Javed",
    field: "Software Engineering",
    expertise: "Agile, Project Management, SDLC",
  },
  {
    id: 3,
    name: "Dr. Imran Ali",
    field: "Data Science",
    expertise: "Big Data, Data Mining, Predictive Analytics",
  },
  {
    id: 4,
    name: "Prof. Hina Noor",
    field: "Cyber Security",
    expertise: "Network Security, Cryptography, Ethical Hacking",
  },
  {
    id: 5,
    name: "Prof. Sara Javed",
    field: "Specialization",
    expertise: "Solar Cells, Smart Materials",
  },
  {
    id: 6,
    name: "Dr. Imran Ali",
    field: "Data Science",
    expertise: "Network Security, Cryptography, Ethical Hacking",
  },
];

export default function AboutFixed() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-12 px-6">
      {/* Full-width hero with blue overlay */}
      <section className="w-full mb-12 -mx-6">
        <div
          className="relative p-12 overflow-hidden min-h-80"
          style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-600/40" />
          <div className="relative z-10 flex items-center justify-center min-h-80">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Connect with expert mentors for your final year project
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Browse our experienced faculty, learn their fields of expertise,
                and choose the perfect mentor to guide your project from idea to
                completion.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/form"
                  className="inline-block px-6 py-3 bg-[#5c47f5] text-white rounded-2xl font-semibold hover:bg-[#4a36d4] transition"
                >
                  Request a Mentor
                </a>
                <a
                  href="/project"
                  className="inline-block px-6 py-3 border border-white rounded-2xl text-white hover:bg-white/10 transition"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-[#1e293b] mb-4">
          Meet Our Teachers
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Explore teachers' fields and expertise to select the most suitable
          mentor for your final year project.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teachersData.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{t.name}</h3>
            <p className="text-[#5c47f5] font-semibold text-sm uppercase tracking-wide mb-4">
              {t.field}
            </p>
            <p className="text-gray-400 text-center text-sm leading-relaxed mb-8 grow">
              {t.expertise}
            </p>
            <button className="w-full py-3 bg-[#5c47f5] text-white font-bold rounded-2xl hover:bg-[#4a36d4] transition-colors shadow-lg shadow-indigo-100 active:scale-95 transform">
              Select as Mentor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
