import profilImg from "../image/profile.jpg";

export default function App() {

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "Website pribadi menggunakan React + Tailwind",
      image: "https://cdn.dribbble.com/userupload/24662717/file/original-0aaf935549390202cf42cb036d4725f9.png?resize=2400x1800&vertical=center",
    },
    {
      id: 2,
      title: "Rental Mobil Website",
      desc: "Aplikasi penyewaan mobil dengan fitur lengkap",
      image: "https://cdn.dribbble.com/userupload/7738745/file/original-5b81cb9afc04907bf79a4ce0fd161014.png?resize=752x&vertical=center",
    },
    {
      id: 3,
      title: "Landing Page UI",
      desc: "Desain landing page modern dan responsif",
      image: "https://cdn.dribbble.com/userupload/46013368/file/fb886369183310be03100c615c98b12a.png?resize=1504x1128&vertical=center",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 p-6 select-none">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

{/* SIDEBAR */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 h-fit md:sticky md:top-6">

          <div className="flex flex-col items-center text-center">
            <img
              src={profilImg}
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg 
              hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            />

            <h1 className="mt-4 text-xl font-bold">Abdulloh Hammad</h1>
            <p className="text-gray-500 text-sm">
              Mahasiswa Teknologi Informasi
            </p>

            <span className="mt-2 text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full animate-pulse">
              ● Open to Learn
            </span>
          </div>

{/* CONTACT SIDEBAR */}
          <div className="mt-6 space-y-2 w-full">

            <a href="https://linkedin.com/in/abdulloh-hammad-b03547377" target="_blank"
              className="block bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-sm 
              hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer">
              💼 LinkedIn
            </a>

            <a href="https://github.com/hmmad01" target="_blank"
              className="block bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-sm 
              hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer">
              💻 GitHub
            </a>

            <a href="mailto:awansby4@gmail.com"
              className="block bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-sm 
              hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer">
              📧 Email
            </a>

          </div>
        </div>

{/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-6">

          {/* HEADER */}
          <div className="h-44 rounded-2xl overflow-hidden relative shadow">
            <img
              src="https://i.pinimg.com/1200x/14/3b/89/143b89350d39d40ffe945dbe3f73fe2f.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent"></div>

            <div className="absolute bottom-4 left-6 text-white">
              <h2 className="text-xl font-bold">Welcome</h2>
              <p className="text-sm opacity-80">My personal portfolio</p>
            </div>
          </div>
{/* INFO + CONTACT */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* INFO */}
            <div className="bg-white p-6 rounded-2xl shadow 
            hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]
            transition-all duration-300 cursor-pointer">

              <h2 className="font-semibold mb-5">Informasi</h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  🎓
                  <div>
                    <p className="text-xs text-gray-400">Prodi</p>
                    <p className="font-medium">Teknologi Informasi</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  📚
                  <div>
                    <p className="text-xs text-gray-400">Kelas</p>
                    <p className="font-medium">T2B</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  📍
                  <div>
                    <p className="text-xs text-gray-400">Domisili</p>
                    <p className="font-medium">Malang</p>
                  </div>
                </div>

              </div>
            </div>

{/* CONTACT */}
            <div className="bg-white p-6 rounded-2xl shadow 
            hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]
            transition-all duration-300 cursor-pointer">

              <h2 className="font-semibold mb-5">Connect</h2>

              <div className="space-y-3">

                <a href="https://linkedin.com/in/abdulloh-hammad-b03547377" target="_blank"
                  className="flex justify-between p-3 rounded-lg hover:bg-gray-100 
                  transition group cursor-pointer">
                  <span>💼 LinkedIn</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </a>

                <a href="https://github.com/hmmad01" target="_blank"
                  className="flex justify-between p-3 rounded-lg hover:bg-gray-100 
                  transition group cursor-pointer">
                  <span>💻 GitHub</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </a>

                <a href="mailto:awansby4@gmail.com"
                  className="flex justify-between p-3 rounded-lg hover:bg-gray-100 
                  transition group cursor-pointer">
                  <span>📧 Email</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </a>

              </div>
            </div>

          </div>

{/* ABOUT */}
          <div className="bg-white p-6 rounded-2xl shadow 
          hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]
          transition-all duration-300 cursor-pointer">

            <h2 className="font-semibold mb-2">Tentang Saya</h2>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              Saya adalah mahasiswa Teknologi Informasi yang memiliki minat dalam pengembangan web dan desain antarmuka. Saya tertarik membangun tampilan yang tidak hanya berfungsi dengan baik, tetapi juga nyaman dan menarik bagi pengguna. Saat ini saya terus mengembangkan kemampuan dalam HTML, CSS, JavaScript, dan Tailwind CSS untuk menciptakan website yang modern dan responsif.
            </p>
          </div>

{/* SKILLS */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold mb-4">Keahlian</h2>

            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "Tailwind", "React"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 
                  hover:bg-indigo-500 hover:text-white 
                  hover:shadow-md hover:-translate-y-0.5 
                  active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

{/* PROJECT */}
          <div>
            <div className="flex justify-between mb-3">
              <h2 className="font-semibold">Project</h2>
              <span className="text-sm text-gray-500">Swipe →</span>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-3">

              {projects.map((project) => (
                <div key={project.id}
                  className="min-w-65 bg-white rounded-xl shadow 
                  hover:shadow-xl hover:-translate-y-1 active:scale-[0.97]
                  transition-all duration-300 overflow-hidden group cursor-pointer">

                  <div className="relative">
                    <img
                      src={project.image}
                      className="h-36 w-full object-cover object-center group-hover:scale-110 transition"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 
                    group-hover:opacity-100 transition flex items-center justify-center">
                      <button className="bg-white px-3 py-1 text-sm rounded 
                      hover:bg-gray-100 active:scale-95 transition">
                        Detail
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="font-semibold text-sm">{project.title}</h3>
                    <p className="text-xs text-gray-500">{project.desc}</p>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}