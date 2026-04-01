import profilImg from "../image/fotoku.jpeg";
import React from 'react';
import { PageLayout, SectionCard, ContactButton } from '../components';

const ProfileBintang = () => {
  const profileData = {
    namaLengkap: "Mochammad Bintang Fatahillah",
    universitas: "Universitas Brawijaya",
    fakultas: "Fakultas Vokasi",
    kelas: "T2B",
    jurusan: "Teknologi Informasi",
    domisili: "Malang, Jawa Timur",
    fotoProfil: profilImg,
    tentangDiri: "Saya adalah mahasiswa Teknologi Informasi di Universitas Brawijaya yang memiliki minat besar dalam pengembangan web, khususnya sebagai Full Stack Developer. Saat ini saya sedang aktif mempelajari berbagai teknologi frontend dan backend untuk membangun aplikasi yang interaktif, responsif, dan bermanfaat. Selain fokus pada perkuliahan, saya juga terus mengembangkan kemampuan dengan mengikuti berbagai seminar, pelatihan, dan sertifikasi guna memperkaya pengalaman serta meningkatkan kualitas diri. Saya memiliki semangat belajar yang tinggi, mampu bekerja secara individu maupun tim, serta siap menghadapi tantangan di dunia teknologi yang terus berkembang."
  };

  return (
    <PageLayout showNav={true} showFooter={true} noPadding>
      <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-4 md:p-8 font-sans text-slate-900">

        {/* Background Decor */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200 rounded-full blur-[100px] opacity-50" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-200 rounded-full blur-[100px] opacity-50" />
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* LEFT COLUMN: HERO CARD */}
          <div className="md:col-span-4 space-y-6">
            <SectionCard hoverable={false} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-[2rem] rotate-6 opacity-20" />
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
            </SectionCard>

            {/* Social Card - using SectionCard + ContactButton */}
            <SectionCard title="Connect with me" variant="gradient" hoverable={false}>
              <div className="flex flex-col gap-3">
                <ContactButton platform="Instagram" url="https://instagram.com/bintangfth26" label="@bintangfth26" color="gradient" variant="dark" />
                <ContactButton platform="Email" url="mailto:bintangfatahillah12@gmail.com" label="bintangfatahillah12@gmail.com" color="rose" variant="dark" />
                <ContactButton platform="LinkedIn" url="https://www.linkedin.com/in/bintangfth" label="bintangfth" color="blue" variant="dark" />
              </div>
            </SectionCard>
          </div>

          {/* RIGHT COLUMN: BENTO GRID */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Universitas Card (Full Width) */}
            <SectionCard fullWidth hoverable={true} className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                🏛️
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">University</p>
                <h2 className="text-2xl font-extrabold text-slate-800">{profileData.universitas}</h2>
                <p className="text-slate-500 font-medium">{profileData.fakultas}</p>
              </div>
            </SectionCard>

            {/* Kelas Card */}
            <SectionCard hoverable={true}>
              <div className="text-2xl mb-4">✍️</div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Class</p>
              <h3 className="text-xl font-extrabold text-slate-800">{profileData.kelas}</h3>
            </SectionCard>

            {/* Tech Stack Card */}
            <SectionCard variant="dark" hoverable={true}>
              <div className="text-2xl mb-4">💻</div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Expertise</p>
              <h3 className="text-xl font-extrabold">UI/UX Designer</h3>
            </SectionCard>

            {/* ABOUT ME CARD (Full Width) */}
            <SectionCard title="About Me" fullWidth hoverable={true} className="relative">
              <p className="text-slate-600 leading-relaxed font-medium text-justify relative z-10 italic">
                "{profileData.tentangDiri}"
              </p>
              {/* Dekorasi watermark nama */}
              <div className="absolute -bottom-10 -right-10 text-9xl font-black text-slate-50 -z-0 select-none">
                BINTANG
              </div>
            </SectionCard>

          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProfileBintang;