import React from 'react';
import headerBg from '../image/header-bg.png'; 
import fotoProfil from '../image/foto-profil.JPG'; 
import cvNathan from '../CV_NATHANAEL.pdf';

const ProfileNathanael = () => {
  const hardSkills = [
    { name: 'UI/UX Design (Figma)', level: '90%' },
    { name: 'Multimedia (ProPresenter, OBS)', level: '85%' },
    { name: 'Graphic Design (Photoshop, Canva)', level: '85%' },
    { name: 'ReactJS & Tailwind CSS', level: '75%' },
    { name: 'Photography & Videography', level: '80%' }
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans selection:bg-indigo-200 selection:text-indigo-900 pb-16 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      
      {/* --- HEADER PANORAMA --- */}
      <div 
        className="w-full h-64 sm:h-80 md:h-[450px] bg-slate-900 relative bg-contain bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${headerBg})` }} 
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-slate-100 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 md:-mt-44 relative z-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-6 sm:p-10 lg:p-12 border border-white/50 transition-all duration-300">
          
          {/* --- TOP SECTION: FOTO & DOWNLOAD CV --- */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end -mt-28 md:-mt-36 mb-8 gap-6 lg:gap-0">
            
            {/* KIRI: Foto Profil */}
            <div className="relative group cursor-pointer shrink-0">
              <img
                src={fotoProfil}
                alt="Foto Profil Nathanael Eleazar Handata"
                className="w-44 h-44 md:w-56 md:h-56 rounded-full border-[6px] md:border-[8px] border-white object-cover shadow-2xl transition-all duration-500 group-hover:scale-105 bg-slate-100 relative z-10"
              />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex h-7 w-7 md:h-8 md:w-8 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 md:h-6 md:w-6 bg-green-500 border-2 border-white"></span>
              </div>
            </div>

            {/* KANAN: Tombol Aksi Utama */}
            <div className="flex w-full lg:w-auto lg:pb-6">
              <a href="/CV_NATHANAEL.pdf" download className="w-full lg:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download CV
              </a>
            </div>
          </div>

          {/* --- IDENTITAS UTAMA --- */}
          <div className="border-b border-slate-100 pb-8 text-left">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Nathanael Eleazar Handata</h1>
            <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-1">
              Undergraduate Student of Information Technology
            </p>

            <div className="flex flex-wrap gap-3 mt-5 text-sm font-semibold">
              <span className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                Kelas T2B
              </span>
              <span className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Domisili: Palembang
              </span>
              <span className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                Universitas Brawijaya
              </span>
            </div>
          </div>

          {/* --- QUICK STATS --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-12">
            {[
              { num: '3+', label: 'Tahun Kepemimpinan' },
              { num: '5+', label: 'Tech & Design Tools' },
              { num: '10+', label: 'Event Management' },
              { num: '100%', label: 'Dedikasi & Disiplin' }
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 p-5 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-200/50 text-center">
                <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-700">{stat.num}</h4>
                <p className="text-xs font-bold text-slate-600 mt-2 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* --- MAIN CONTENT GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            
            {/* === KOLOM KIRI === */}
            <div className="lg:col-span-1 space-y-10">
              
              {/* CONTACT ME SECTION */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-[2rem] shadow-xl shadow-slate-900/30 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[4rem] transition-transform duration-500 group-hover:scale-125 pointer-events-none"></div>
                
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                  Contact Me
                </h3>
                
                <p className="text-slate-300 text-sm mb-6 relative z-10 font-medium leading-relaxed">
                  Mari berkolaborasi! Jangan ragu untuk menghubungi saya melalui platform di bawah ini:
                </p>

                <div className="space-y-4 relative z-10">
                  <a href="https://wa.me/6283869991137" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/10 hover:bg-emerald-500 p-3.5 rounded-2xl transition-all duration-300 border border-white/10 hover:border-emerald-400 group/btn transform hover:-translate-y-1">
                    <div className="bg-emerald-500 group-hover/btn:bg-white text-white group-hover/btn:text-emerald-500 p-2 rounded-xl transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.393.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.098.824z"/></svg>
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-white">WhatsApp</span>
                      <span className="block font-medium text-xs text-slate-300 group-hover/btn:text-emerald-100">+62 838-6999-1137</span>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/nathanael-eleazar/" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/10 hover:bg-[#0A66C2] p-3.5 rounded-2xl transition-all duration-300 border border-white/10 hover:border-[#0A66C2] group/btn transform hover:-translate-y-1">
                    <div className="bg-[#0A66C2] group-hover/btn:bg-white text-white group-hover/btn:text-[#0A66C2] p-2 rounded-xl transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-white">LinkedIn</span>
                      <span className="block font-medium text-xs text-slate-300 group-hover/btn:text-blue-100">Nathanael Eleazar</span>
                    </div>
                  </a>

                  {/* INSTAGRAM BUTTON */}
                  <a href="https://instagram.com/nthanaellll" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/10 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] p-3.5 rounded-2xl transition-all duration-300 border border-white/10 group/btn transform hover:-translate-y-1">
                    <div className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] group-hover/btn:bg-white text-white group-hover/btn:text-[#ee2a7b] p-2 rounded-xl transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-white">Instagram</span>
                      <span className="block font-medium text-xs text-slate-300 group-hover/btn:text-pink-100">@nthanaellll</span>
                    </div>
                  </a>

                  <a href="mailto:nathanaeleleazar30@gmail.com" className="flex items-center gap-4 bg-white/10 hover:bg-rose-500 p-3.5 rounded-2xl transition-all duration-300 border border-white/10 hover:border-rose-400 group/btn transform hover:-translate-y-1">
                    <div className="bg-rose-500 group-hover/btn:bg-white text-white group-hover/btn:text-rose-500 p-2 rounded-xl transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-white">Email</span>
                      <span className="block font-medium text-xs text-slate-300 group-hover/btn:text-rose-100">nathanaeleleazar30...</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hard Skills */}
              <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50 transition-transform group-hover:scale-110 pointer-events-none"></div>
                <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2 relative z-10">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  Tech & Tools
                </h3>
                <div className="space-y-5 relative z-10">
                  {hardSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-bold text-slate-700">{skill.name}</span>
                        <span className="text-xs font-black text-indigo-600">{skill.level}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* === KOLOM KANAN === */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Tentang Diri */}
              <div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full group-hover:w-16 transition-all duration-500"></span>
                  Tentang Diri
                </h2>
                <div className="text-slate-600 leading-relaxed text-justify text-sm space-y-5">
                  <p>
                    Halo! Perkenalkan, nama saya Nathanael Eleazar Handata, mahasiswa Semester 2 Program Studi Teknologi Informasi di Universitas Brawijaya. Saya memiliki minat yang besar di persimpangan antara teknologi, multimedia, dan desain antarmuka (UI/UX). Berbekal keterampilan di bidang desain grafis dasar (Figma, Canva, Photoshop) serta manajemen multimedia, saya senang menciptakan karya visual yang estetis dan fungsional.
                  </p>
                  <p>
                    Selain antusias mengeksplorasi dunia web development seperti ReactJS dan Tailwind CSS, saya juga merupakan individu yang sangat aktif berorganisasi. Saat ini, saya mengemban amanah sebagai Kepala Departemen Hubungan Eksternal di HMPSTI dan Dirjen Olahraga SENORA di BEM Fakultas Vokasi. Pengalaman kepemimpinan saya telah terpupuk sejak SMA sebagai Ketua Tim Basket dan pengurus Band. 
                  </p>
                  <p>
                    Saya juga sering terlibat dalam kepanitiaan kampus, seperti menjadi Steering Committee di Ramadhan Charity Connect dan Staff DDM di berbagai event besar. Kombinasi antara kemampuan teknis, kreativitas visual, dan jam terbang kepemimpinan ini membentuk saya menjadi pribadi yang disiplin, adaptif, dan mampu bekerja maksimal di dalam tim untuk menciptakan inovasi baru.
                  </p>
                </div>
              </div>

              {/* Timeline Organisasi */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl text-blue-600 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  Pengalaman Organisasi
                </h2>
                
                <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-slate-200 before:rounded-full">
                  
                  {/* Item 1 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-100 group-hover:-translate-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                        <h4 className="font-black text-slate-900 text-xl">Kepala Departemen Hubungan Eksternal</h4>
                        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-black rounded-full mt-3 sm:mt-0 w-fit">Jan 2026 - Sekarang</span>
                      </div>
                      <p className="text-sm font-bold text-indigo-600 mb-4">HMPSTI Universitas Brawijaya</p>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">Bertanggung jawab atas komunikasi eksternal dan kolaborasi strategis himpunan, termasuk mengelola dan merancang agenda kepanitiaan massal.</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-100 group-hover:-translate-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                        <h4 className="font-black text-slate-900 text-xl">Dirjen Olahraga Kementrian SENORA</h4>
                        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-black rounded-full mt-3 sm:mt-0 w-fit">Jan 2026 - Sekarang</span>
                      </div>
                      <p className="text-sm font-bold text-indigo-600 mb-4">BEM Fakultas Vokasi UB</p>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">Mengkoordinasikan minat dan bakat mahasiswa Fakultas Vokasi di bidang olahraga dan memfasilitasi berbagai kegiatan keolahragaan.</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-slate-300 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110"></div>
                    <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                        <h4 className="font-black text-slate-900 text-xl">Ketua Tim Basket & Tim Band</h4>
                        <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-black rounded-full mt-3 sm:mt-0 w-fit">2022 - 2025</span>
                      </div>
                      <p className="text-sm font-bold text-slate-500 mb-4">SMA Methodist 1 Palembang</p>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">Mengelola tim, mengatur jadwal latihan, menjadi pengarah pemain, serta aktif berpartisipasi dalam berbagai kejuaraan dan festival se-Sumatra Selatan.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNathanael;