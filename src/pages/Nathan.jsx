import React from 'react';
import headerBg from '../image/header-bg.png';
import fotoProfil from '../image/foto-profil.JPG';
import { PageLayout, SectionCard, SkillBar, TimelineItem, ContactButton } from '../components';

const ProfileNathanael = () => {
  const hardSkills = [
    { name: 'UI/UX Design (Figma)', level: 90, color: 'blue' },
    { name: 'Multimedia (ProPresenter, OBS)', level: 85, color: 'purple' },
    { name: 'Graphic Design (Photoshop, Canva)', level: 85, color: 'cyan' },
    { name: 'ReactJS & Tailwind CSS', level: 75, color: 'blue' },
    { name: 'Photography & Videography', level: 80, color: 'rose' }
  ];

  const stats = [
    { num: '3+', label: 'Tahun Kepemimpinan' },
    { num: '5+', label: 'Tech & Design Tools' },
    { num: '10+', label: 'Event Management' },
    { num: '100%', label: 'Dedikasi & Disiplin' }
  ];

  return (
    <PageLayout showNav={true} showFooter={true} noPadding>
      {/* --- HEADER PANORAMA --- */}
      <div
        className="w-full h-64 sm:h-80 md:h-[450px] bg-slate-900 relative bg-contain bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-slate-100 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 md:-mt-44 relative z-10 pb-16">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-6 sm:p-10 lg:p-12 border border-white/50 transition-all duration-300">

          {/* --- TOP SECTION: FOTO & DOWNLOAD CV --- */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end -mt-28 md:-mt-36 mb-8 gap-6 lg:gap-0">
            <div className="relative group cursor-pointer shrink-0">
              <img
                src={fotoProfil}
                alt="Foto Profil Nathanael Eleazar Handata"
                className="w-44 h-44 md:w-56 md:h-56 rounded-full border-[6px] md:border-[8px] border-white object-cover shadow-2xl transition-all duration-500 group-hover:scale-105 bg-slate-100 relative z-10"
              />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex h-7 w-7 md:h-8 md:w-8 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-5 w-5 md:h-6 md:w-6 bg-green-500 border-2 border-white" />
              </div>
            </div>
            <div className="flex w-full lg:w-auto lg:pb-6">
              <a href="/CV_NATHANAEL.pdf" download className="w-full lg:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
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
              <span className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">📚 Kelas T2B</span>
              <span className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">📍 Domisili: Palembang</span>
              <span className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default">🏛️ Universitas Brawijaya</span>
            </div>
          </div>

          {/* --- QUICK STATS --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-12">
            {stats.map((stat, i) => (
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

              {/* CONTACT ME - using SectionCard + ContactButton */}
              <SectionCard title="Contact Me" variant="gradient">
                <div className="space-y-4">
                  <ContactButton platform="WhatsApp" url="https://wa.me/6283869991137" label="+62 838-6999-1137" color="emerald" variant="dark" />
                  <ContactButton platform="LinkedIn" url="https://www.linkedin.com/in/nathanael-eleazar/" label="Nathanael Eleazar" color="blue" variant="dark" />
                  <ContactButton platform="Instagram" url="https://instagram.com/nthanaellll" label="@nthanaellll" color="gradient" variant="dark" />
                  <ContactButton platform="Email" url="mailto:nathanaeleleazar30@gmail.com" label="nathanaeleleazar30@gmail.com" color="rose" variant="dark" />
                </div>
              </SectionCard>

              {/* TECH & TOOLS - using SectionCard + SkillBar */}
              <SectionCard title="Tech & Tools" icon="💻">
                <div className="space-y-5">
                  {hardSkills.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} level={skill.level} color={skill.color} />
                  ))}
                </div>
              </SectionCard>

            </div>

            {/* === KOLOM KANAN === */}
            <div className="lg:col-span-2 space-y-12">

              {/* TENTANG DIRI - using SectionCard */}
              <SectionCard title="Tentang Diri" icon="👤">
                <div className="text-slate-600 leading-relaxed text-justify text-sm space-y-5">
                  <p>Halo! Perkenalkan, nama saya Nathanael Eleazar Handata, mahasiswa Semester 2 Program Studi Teknologi Informasi di Universitas Brawijaya. Saya memiliki minat yang besar di persimpangan antara teknologi, multimedia, dan desain antarmuka (UI/UX). Berbekal keterampilan di bidang desain grafis dasar (Figma, Canva, Photoshop) serta manajemen multimedia, saya senang menciptakan karya visual yang estetis dan fungsional.</p>
                  <p>Selain antusias mengeksplorasi dunia web development seperti ReactJS dan Tailwind CSS, saya juga merupakan individu yang sangat aktif berorganisasi. Saat ini, saya mengemban amanah sebagai Kepala Departemen Hubungan Eksternal di HMPSTI dan Dirjen Olahraga SENORA di BEM Fakultas Vokasi. Pengalaman kepemimpinan saya telah terpupuk sejak SMA sebagai Ketua Tim Basket dan pengurus Band.</p>
                  <p>Saya juga sering terlibat dalam kepanitiaan kampus, seperti menjadi Steering Committee di Ramadhan Charity Connect dan Staff DDM di berbagai event besar. Kombinasi antara kemampuan teknis, kreativitas visual, dan jam terbang kepemimpinan ini membentuk saya menjadi pribadi yang disiplin, adaptif, dan mampu bekerja maksimal di dalam tim untuk menciptakan inovasi baru.</p>
                </div>
              </SectionCard>

              {/* PENGALAMAN ORGANISASI - using TimelineItem */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl text-blue-600 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  Pengalaman Organisasi
                </h2>
                <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-slate-200 before:rounded-full">
                  <TimelineItem title="Kepala Departemen Hubungan Eksternal" organization="HMPSTI Universitas Brawijaya" period="Jan 2026 - Sekarang" description="Bertanggung jawab atas komunikasi eksternal dan kolaborasi strategis himpunan, termasuk mengelola dan merancang agenda kepanitiaan massal." isActive={true} color="blue" />
                  <TimelineItem title="Dirjen Olahraga Kementrian SENORA" organization="BEM Fakultas Vokasi UB" period="Jan 2026 - Sekarang" description="Mengkoordinasikan minat dan bakat mahasiswa Fakultas Vokasi di bidang olahraga dan memfasilitasi berbagai kegiatan keolahragaan." isActive={true} color="blue" />
                  <TimelineItem title="Ketua Tim Basket & Tim Band" organization="SMA Methodist 1 Palembang" period="2022 - 2025" description="Mengelola tim, mengatur jadwal latihan, menjadi pengarah pemain, serta aktif berpartisipasi dalam berbagai kejuaraan dan festival se-Sumatra Selatan." isActive={false} color="blue" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProfileNathanael;