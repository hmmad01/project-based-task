import profilImg from "./image/profile.jpg";

import { useState } from "react";

const teamData = [
  {
    name: "Abdulloh Hammad",
    role: "253140700111043",
    username: "Hammad",
    image: profilImg,
  },
  {
    name: "Nathanael Eleazar Handata",
    role: "253140700111051",
    username: "Nathan",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Mochammad Bintang Fatahillah",
    role: "253140700111046",
    username: "Bintang",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Raihan Ferriand Allam",
    role: "253140701111011",
    username: "Raihan",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-rose-50 text-gray-800 font-sans">

      {/* HEADER */}
      <div className="text-center pt-12 pb-8 px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-rose-400 bg-clip-text text-transparent">
          PORTOFOLIO PROFILE
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          kenalkan kami lebih dekat dengan melihat profil singkat kami 
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamData.map((user, i) => (
          <a
            key={i}
            href={`/${user.username}`}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-sky-400 via-indigo-300 to-rose-300 hover:scale-[1.04] transition duration-300"
          >
            <div className="bg-white rounded-3xl p-6 h-full flex flex-col items-center text-center shadow-sm hover:shadow-md transition">

              {/* Avatar */}
              <div className="relative mb-4">
                <img
                  src={user.image}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
                />
                <div className="absolute inset-0 rounded-full bg-sky-300 opacity-0 group-hover:opacity-30 blur-md transition" />
              </div>

              {/* Info */}
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-500 text-sm mb-4">{user.role}</p>

              {/* CTA */}
              <div className="mt-auto text-xs font-medium text-sky-500 group-hover:text-rose-400 transition">
                Buka Profile →
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* FOOTER */}
      <div className="text-center text-xs text-gray-400 mt-12 pb-6">
        Bangun kerja sama tim dan kolaborasi 🚀
      </div>
    </div>
  );
}
