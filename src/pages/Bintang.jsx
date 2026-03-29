import React from 'react';

const App = () => {
  const profileData = {
    namaLengkap: "Mochammad Bintang Fatahillah",
    universitas: "Universitas Brawijaya",
    fakultas: "Fakultas Vokasi",
    kelas: "T2B",
    jurusan: "Teknologi Informasi",
    domisili: "Malang, Jawa Timur",
    // Gunakan foto profilmu di folder public. Contoh: "/foto-bintang.jpg"
    fotoProfil: "/fotoku.jpeg",
    tentangDiri: "Saya adalah mahasiswa giTeknologi Informasi di Universitas Brawijaya yang memiliki minat besar dalam pengembangan web, khususnya sebagai Full Stack Developer. Saat ini saya sedang aktif mempelajari berbagai teknologi frontend dan backend untuk membangun aplikasi yang interaktif, responsif, dan bermanfaat. Selain fokus pada perkuliahan, saya juga terus mengembangkan kemampuan dengan mengikuti berbagai seminar, pelatihan, dan sertifikasi guna memperkaya pengalaman serta meningkatkan kualitas diri. Saya memiliki semangat belajar yang tinggi, mampu bekerja secara individu maupun tim, serta siap menghadapi tantangan di dunia teknologi yang terus berkembang."
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-4 md:p-8 font-sans text-slate-900">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-200 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: HERO CARD (4 Cols) */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/5 border border-white flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-[2rem] rotate-6 opacity-20"></div>
              <img 
                src={profileData.fotoProfil} 
                alt="Profile" 
                className="w-40 h-40 rounded-[2rem] object-cover relative z-10 shadow-lg border-4 border-white"
              />
            </div>
            <h1 className="text-2xl font-black tracking-tight leading-tight mb-2">
              {profileData.namaLengkap}
            </h1>
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-6">
              {profileData.jurusan}
            </p>
            <div className="w-full pt-6 border-t border-slate-100 space-y-3">
              <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-2xl">
                <span className="text-lg">📍</span>
                <span className="text-sm font-semibold">{profileData.domisili}</span>
              </div>
            </div>
          </div>

          {/* Social Card */}
          <div className="bg-blue-600 rounded-[2rem] p-6 text-white shadow-lg shadow-blue-600/30 relative overflow-hidden">
  <div className="font-bold mb-4 text-lg">Connect with me</div>

  <div className="flex flex-col gap-3">
    
    {/* Instagram */}
    <a 
      href="https://instagram.com/bintangfth26" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-blue-600 transition-all rounded-xl p-3 font-semibold hover:scale-105 active:scale-95"
    >
      📸 Instagram
    </a>

    {/* Email */}
    <a 
      href="mailto:bintangfatahillah12@gmail.com"
      className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-blue-600 transition-all rounded-xl p-3 font-semibold hover:scale-105 active:scale-95"
    >
      ✉️ Email
    </a>

    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/in/bintangfth" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-blue-600 transition-all rounded-xl p-3 font-semibold hover:scale-105 active:scale-95"
    >
      🔗 LinkedIn
    </a>

  </div>

  {/* Glow effect */}
  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
</div>
        </div>

        {/* RIGHT COLUMN: BENTO GRID (8 Cols) */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Universitas Card (Full Width) */}
          <div className="md:col-span-2 bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-xl shadow-blue-900/5 flex items-center gap-6 group hover:bg-white transition-all">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              🏛️
            </div>
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">University</p>
              <h2 className="text-2xl font-extrabold text-slate-800">{profileData.universitas}</h2>
              <p className="text-slate-500 font-medium">{profileData.fakultas}</p>
            </div>
          </div>

          {/* Kelas Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-xl shadow-blue-900/5">
            <div className="text-2xl mb-4">✍️</div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Class</p>
            <h3 className="text-xl font-extrabold text-slate-800">{profileData.kelas}</h3>
          </div>

          {/* Tech Stack/Skill Mini Card */}
          <div className="bg-[#1e293b] rounded-[2.5rem] p-8 text-white shadow-xl">
            <div className="text-2xl mb-4">💻</div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Expertise</p>
            <h3 className="text-xl font-extrabold">UI/UX Designer</h3>
          </div>

          {/* ABOUT ME CARD (Full Width) */}
          <div className="md:col-span-2 bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white shadow-xl shadow-blue-900/5 relative overflow-hidden">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              About Me
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium text-justify relative z-10 italic">
              "{profileData.tentangDiri}"
            </p>
            {/* Dekorasi watermark nama */}
            <div className="absolute -bottom-10 -right-10 text-9xl font-black text-slate-50 -z-0 select-none">
              BINTANG
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;