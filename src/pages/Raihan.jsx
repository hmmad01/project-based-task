import fotoRaihan from '../image/raihan.jpg';
import React, { useState, useEffect } from 'react';
import { Mail, Link, Folder, Briefcase, MapPin, ShieldCheck, Download, Check, Terminal, GraduationCap, MonitorSmartphone, Activity, Globe } from 'lucide-react';
import { PageLayout, SectionCard, SkillBar, TimelineItem, ContactButton } from '../components';

const colors = {
  cyan: '#10e0ff',
  magenta: '#ff10f0',
  emerald: '#10ff70',
  gold: '#ffb010',
  purple: '#b010ff',
};

const ProfileRaihan = () => {
  const [copied, setCopied] = useState(false);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const data = Array.from({ length: 98 }, () => {
      const rand = Math.random();
      if (rand > 0.8) return 3;
      if (rand > 0.5) return 2;
      if (rand > 0.2) return 1;
      return 0;
    });
    setContributions(data);
  }, []);

  const getContributionColor = (level) => {
    switch (level) {
      case 3: return '#10e0ff';
      case 2: return 'rgba(16, 224, 255, 0.6)';
      case 1: return 'rgba(16, 224, 255, 0.3)';
      default: return '#1c2136';
    }
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('raihan.feriand@mail.ugm.ac.id');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout variant="dark" showNav={true} showFooter={true} noPadding>
      <div
        className="min-h-screen text-white font-sans p-5 md:p-10"
        style={{
          backgroundColor: '#0c0f1d',
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 3fr) 5fr',
          gap: '30px',
        }}
      >
        {/* ========================================== */}
        {/* KOLOM KIRI */}
        {/* ========================================== */}
        <div className="flex flex-col gap-8" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

          {/* 1. PROFIL UTAMA */}
          <SectionCard variant="dark" className="flex flex-col items-center text-center" style={{ backgroundImage: 'linear-gradient(135deg, rgba(16, 224, 255, 0.05) 0%, rgba(255, 16, 240, 0.05) 100%)' }}>
            <div className="relative mb-5">
              <div
                className="absolute -inset-1.5 rounded-full opacity-70 z-[1]"
                style={{ background: 'linear-gradient(45deg, #10e0ff, #ff10f0)', filter: 'blur(15px)', animation: 'pulse 3s infinite' }}
              />
              <img src={fotoRaihan} alt="Raihan Feriand Allam" className="w-[130px] h-[130px] rounded-full bg-[#1c2136] border-[3px] border-white object-cover object-top relative z-[2]" />
            </div>
            <div className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #10e0ff 0%, #ff10f0 100%)', boxShadow: '0 4px 15px rgba(255, 16, 240, 0.3)' }}>
              <ShieldCheck size={14} className="mr-1.5" /> Profil Terverifikasi
            </div>
            <h1 className="text-[28px] font-extrabold mt-4 mb-2 tracking-tight">Raihan Feriand Allam</h1>
            <p className="text-[14px] text-[#a0a7c4] leading-relaxed font-medium mb-3">
              Mahasiswa Teknologi Informasi | Pengurus Harian BEM Vokasi UB | Fokus pada Pengembangan Web & Perencanaan Strategis.
            </p>
            <p className="text-[13px] text-[#707794] flex items-center justify-center gap-1.5 mb-4">
              <MapPin size={16} color={colors.cyan} /> Pasuruan, Jawa Timur
            </p>
            <div className="flex items-center gap-2 text-[12px] font-semibold px-3.5 py-1.5 rounded-full mb-5" style={{ color: '#10ff70', backgroundColor: 'rgba(16, 255, 112, 0.1)', border: '1px solid rgba(16, 255, 112, 0.2)' }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10ff70', boxShadow: '0 0 8px #10ff70', animation: 'pulse 2s infinite' }} />
              Tersedia untuk Proyek Kolaborasi
            </div>
            <a href="/CV-Raihan.pdf" download className="flex items-center gap-2 text-[13px] font-bold px-5 py-2.5 rounded-full cursor-pointer transition-all hover:scale-105" style={{ background: '#10e0ff', color: '#0c0f1d', boxShadow: '0 0 15px rgba(16, 224, 255, 0.4)' }}>
              <Download size={18} /> Download CV
            </a>
          </SectionCard>

          {/* 2. KEAHLIAN - using SectionCard + SkillBar */}
          <SectionCard variant="dark" title="Tingkat Keahlian" icon={<Terminal size={20} color={colors.magenta} />}>
            <div className="space-y-4">
              <SkillBar name="JavaScript & React.js" level={85} color="cyan" variant="dark" />
              <SkillBar name="UI/UX & UCD Methods" level={90} color="rose" variant="dark" />
              <SkillBar name="Tailwind CSS" level={80} color="emerald" variant="dark" />
              <SkillBar name="Digital Marketing" level={75} color="gold" variant="dark" />
              <SkillBar name="Strategic Planning (BEM)" level={88} color="purple" variant="dark" />
            </div>
          </SectionCard>

          {/* BAHASA */}
          <SectionCard variant="dark" title="Penguasaan Bahasa" icon={<Globe size={20} color={colors.emerald} />}>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-semibold text-white">Bahasa Indonesia</span>
                <span className="text-[12px] px-2.5 py-1 rounded-lg" style={{ background: 'rgba(16, 255, 112, 0.1)', color: colors.emerald }}>Native / Bilingual</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-semibold text-white">English</span>
                <span className="text-[12px] px-2.5 py-1 rounded-lg" style={{ background: 'rgba(16, 224, 255, 0.1)', color: colors.cyan }}>Professional Working</span>
              </div>
            </div>
          </SectionCard>

          {/* 3. KONTAK - using SectionCard + ContactButton */}
          <SectionCard variant="dark" title="Informasi Kontak">
            <div className="space-y-4">
              <ContactButton platform="Email" label={copied ? 'Email berhasil disalin!' : 'raihan.feriand@mail.ugm.ac.id'} color="slate" variant="dark" onClick={handleCopyEmail} icon={copied ? <Check size={20} color={colors.emerald} /> : <Mail size={20} color={colors.gold} />} />
              <ContactButton platform="LinkedIn" url="https://linkedin.com/in/raihanferiand" label="linkedin.com/in/raihanferiand" color="blue" variant="dark" />
              <ContactButton platform="GitHub" url="https://raihan-portfolio.dev" label="raihan-portfolio.dev" color="purple" variant="dark" icon={<Folder size={20} color={colors.purple} />} />
            </div>
          </SectionCard>
        </div>

        {/* ========================================== */}
        {/* KOLOM KANAN */}
        {/* ========================================== */}
        <div className="flex flex-col gap-8" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

          {/* 4. PENGALAMAN ORGANISASI - using SectionCard + TimelineItem */}
          <SectionCard variant="dark" title="Pengalaman Organisasi">
            <h3 className="text-[18px] font-bold text-white mb-2">BEM Vokasi Universitas Brawijaya</h3>
            <p className="text-[13px] text-[#707794] font-medium mb-6">Pengurus Harian (Student Executive Board)</p>
            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[15px] before:w-0.5 before:bg-gradient-to-b before:from-[#1c2136] before:to-transparent before:rounded-full">
              <TimelineItem title="2026 (Masa Jabatan Aktif)" organization="BEM Vokasi UB" period="Aktif" description="Memimpin perencanaan strategis dan koordinasi internal. Bertanggung jawab mengelola komunikasi lintas divisi dan memastikan pelaksanaan program organisasi sejalan dengan visi utama kami." isActive={true} color="cyan" variant="dark" />
              <TimelineItem title="2025" organization="BEM Vokasi UB" period="Selesai" description="Membantu pengembangan kerangka kelembagaan dan berhasil mengelola acara kemahasiswaan skala besar. Berfokus pada hubungan masyarakat dan kemitraan eksternal." isActive={true} color="rose" variant="dark" />
              <TimelineItem title="2024" organization="BEM Vokasi UB" period="Awal" description="Memulai perjalanan di organisasi. Mendukung logistik acara, proses penerimaan anggota baru, dan tugas administratif dasar." isActive={false} color="emerald" variant="dark" />
            </div>
          </SectionCard>

          {/* 5. PENDIDIKAN & ALAT - using SectionCard */}
          <SectionCard variant="dark" title="Pendidikan & Alat Utama" icon={<GraduationCap size={20} color={colors.gold} />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-4 bg-[#1c2136]/40 rounded-xl border border-white/5">
                <h3 className="text-[16px] text-white font-bold mb-2">Universitas Brawijaya</h3>
                <p className="text-[13px] font-semibold mb-1" style={{ color: colors.cyan }}>D3 Teknologi Informasi</p>
                <p className="text-[12px] text-[#707794]">2024 - Sekarang (Kelas T2B)</p>
              </div>
              <div className="p-4 bg-[#1c2136]/40 rounded-xl border border-white/5">
                <h3 className="text-[14px] text-[#a0a7c4] font-medium mb-3 flex items-center gap-1.5">
                  <MonitorSmartphone size={16} /> Workflow Tools
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {['Figma', 'VS Code', 'Laragon', 'Git'].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-[#1c2136] text-white border border-white/10">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* 6. PROYEK - using SectionCard */}
          <SectionCard variant="dark" title="Sorotan Proyek">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-[#1c2136]/40 border border-white/5 hover:bg-[#1c2136]/80 hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#1c2136] flex items-center justify-center flex-shrink-0" style={{ boxShadow: `inset 0 0 15px ${colors.gold}40` }}>
                  <Briefcase size={28} color={colors.gold} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-bold text-white mb-2">Integrasi E-Commerce Digital</h3>
                  <p className="text-[13px] text-[#a0a7c4] leading-relaxed mb-3">
                    Mengembangkan dan mengelola platform layanan digital yang berfokus pada barang virtual dan manajemen media sosial.
                  </p>
                  <div className="h-1.5 rounded-full bg-[#1c2136] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '85%', background: colors.gold, boxShadow: `0 0 10px ${colors.gold}` }} />
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-[#1c2136]/40 border border-white/5 hover:bg-[#1c2136]/80 hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#1c2136] flex items-center justify-center flex-shrink-0" style={{ boxShadow: `inset 0 0 15px ${colors.emerald}40` }}>
                  <MapPin size={28} color={colors.emerald} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-bold text-white mb-2">Sistem Penyewaan Alat Outdoor</h3>
                  <p className="text-[13px] text-[#a0a7c4] leading-relaxed mb-3">
                    Proyek akademik merancang aplikasi web untuk penyewaan peralatan camping. Menggunakan metodologi User-Centered Design (UCD).
                  </p>
                  <div className="h-1.5 rounded-full bg-[#1c2136] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '95%', background: colors.emerald, boxShadow: `0 0 10px ${colors.emerald}` }} />
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* GITHUB-STYLE ACTIVITY GRID */}
          <SectionCard variant="dark" title="Aktivitas Pengembangan" icon={<Activity size={20} color={colors.cyan} />}>
            <p className="text-[13px] text-[#a0a7c4] mb-3">Simulasi intensitas pengerjaan kode dan desain (Last 90 days)</p>
            <div className="grid gap-1 mt-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(14px, 1fr))' }}>
              {contributions.map((level, i) => (
                <div
                  key={i}
                  className="h-3.5 rounded-sm transition-transform hover:scale-125 hover:border hover:border-white hover:z-10"
                  style={{
                    backgroundColor: getContributionColor(level),
                    boxShadow: level > 1 ? `0 0 8px ${getContributionColor(level)}` : 'none'
                  }}
                />
              ))}
            </div>
          </SectionCard>

          {/* TENTANG SAYA - using SectionCard */}
          <SectionCard variant="dark" title="Tentang Saya">
            <p className="text-[14px] text-[#a0a7c4] leading-relaxed text-justify">
              Saya adalah mahasiswa berdedikasi tinggi di program studi D3 Teknologi Informasi (Kelas T2B) pada Fakultas Vokasi, Universitas Brawijaya. Perjalanan akademik dan profesional saya didorong oleh ketertarikan yang sangat mendalam untuk menjembatani kesenjangan antara desain visual yang estetis dan fungsionalitas sistem yang kompleks. Saya memiliki minat besar dalam menggabungkan penulisan kode yang bersih dan efisien dengan antarmuka pengguna yang sangat intuitif, terutama melalui pendekatan User-Centered Design (UCD). Di luar layar komputer, keterlibatan aktif saya sebagai Pengurus Harian di Badan Eksekutif Mahasiswa (BEM) Vokasi telah secara signifikan membentuk karakter dan membekali saya dengan kemampuan kepemimpinan, manajemen waktu, pemecahan masalah secara kritis, serta komunikasi strategis yang solid. Pengalaman berorganisasi ini mengajarkan saya bagaimana berkolaborasi dalam tim multidisiplin dan mengeksekusi program kerja berskala besar. Saya selalu antusias berada di lingkungan kolaboratif yang menantang saya untuk terus belajar, berinovasi secara kreatif, dan membangun solusi teknologi yang tidak hanya fungsional secara teknis, tetapi juga mampu memberikan pengalaman pengguna yang inklusif, efisien, dan luar biasa.
            </p>
          </SectionCard>

        </div>

        {/* CSS for animations */}
        <style>{`
          @keyframes pulse {
            0% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
            100% { opacity: 0.5; transform: scale(1); }
          }
          @media (max-width: 1024px) {
            .min-h-screen > div:first-child {
              grid-template-columns: 1fr !important;
              padding: 20px !important;
            }
          }
        `}</style>
      </div>
    </PageLayout>
  );
};

export default ProfileRaihan;