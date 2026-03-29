import fotoRaihan from '../image/raihan.jpg';
import React, { useState, useEffect } from 'react';
import { Mail, Link, Folder, Briefcase, MapPin, ShieldCheck, Download, Check, Terminal, GraduationCap, MonitorSmartphone, Activity, Globe } from 'lucide-react';

// ==========================================
// STYLES KONFIGURASI (NEON DARK BENTO THEME)
// ==========================================
const styles = {
  body: {
    backgroundColor: '#0c0f1d',
    color: '#ffffff',
    fontFamily: 'Inter, system-ui, sans-serif',
    minHeight: '100vh',
    margin: 0,
    padding: '40px',
    display: 'grid',
    gridTemplateColumns: 'minmax(350px, 3fr) 5fr',
    gap: '30px',
    boxSizing: 'border-box',
  },
  bentoBox: {
    backgroundColor: '#161a2b',
    borderRadius: '20px',
    padding: '30px',
    border: '1px solid #1c2136',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 2px 5px rgba(255,255,255,0.05)',
    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
  },
  profilePanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(135deg, rgba(16, 224, 255, 0.05) 0%, rgba(255, 16, 240, 0.05) 100%)',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: '20px',
    marginTop: '10px',
  },
  avatar: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    background: '#1c2136',
    border: '3px solid #ffffff',
    objectFit: 'cover',
    objectPosition: 'top',
    position: 'relative',
    zIndex: 2,
  },
  avatarGlow: {
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    right: '-5px',
    bottom: '-5px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #10e0ff, #ff10f0)',
    filter: 'blur(15px)',
    opacity: 0.7,
    zIndex: 1,
    animation: 'pulse 3s infinite',
  },
  name: {
    fontSize: '28px',
    fontWeight: '800',
    margin: '15px 0 10px 0',
    letterSpacing: '-0.5px',
  },
  badge: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #10e0ff 0%, #ff10f0 100%)',
    padding: '5px 12px',
    borderRadius: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 15px rgba(255, 16, 240, 0.3)',
  },
  headline: {
    fontSize: '14px',
    color: '#a0a7c4',
    margin: '15px 0',
    lineHeight: '1.7',
    fontWeight: '500',
  },
  location: {
    fontSize: '13px',
    color: '#707794',
    margin: '0 0 15px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
  },
  liveStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#10ff70',
    backgroundColor: 'rgba(16, 255, 112, 0.1)',
    padding: '6px 14px',
    borderRadius: '20px',
    border: '1px solid rgba(16, 255, 112, 0.2)',
    marginBottom: '20px',
  },
  liveDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10ff70',
    borderRadius: '50%',
    boxShadow: '0 0 8px #10ff70',
    animation: 'pulse 2s infinite',
  },
  cvButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    fontWeight: '700',
    color: '#0c0f1d',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    background: '#10e0ff',
    boxShadow: '0 0 15px rgba(16, 224, 255, 0.4)',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '25px',
    color: '#ffffff',
    letterSpacing: '-0.5px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  skillRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    fontWeight: '600',
  },
  skillBarBg: {
    height: '8px',
    backgroundColor: '#1c2136',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  contactButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  contactButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#a0a7c4',
    textDecoration: 'none',
    padding: '14px 20px',
    borderRadius: '12px',
    background: 'rgba(28,33,54,0.6)',
    border: '1px solid #1c2136',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '35px',
  },
  timelineLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '7px',
    width: '2px',
    background: 'linear-gradient(to bottom, #1c2136 0%, rgba(28,33,54,0) 100%)',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '35px',
  },
  timelinePoint: {
    position: 'absolute',
    top: '4px',
    left: '-34px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '4px solid #161a2b',
    boxShadow: '0 0 10px rgba(255,255,255,0.2)',
  },
  experienceOrg: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 8px',
    color: '#ffffff',
  },
  experienceMeta: {
    fontSize: '13px',
    color: '#707794',
    margin: '0 0 15px',
    fontWeight: '500',
  },
  experienceDetails: {
    fontSize: '14px',
    color: '#a0a7c4',
    margin: 0,
    lineHeight: '1.7',
  },
  projectsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  projectItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(28,33,54,0.4)',
    border: '1px solid rgba(255,255,255,0.02)',
    transition: 'all 0.3s ease',
  },
  projectIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    background: '#1c2136',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  projectTitle: {
    fontSize: '17px',
    fontWeight: '700',
    margin: '0 0 8px',
    color: '#ffffff',
  },
  projectDesc: {
    fontSize: '13px',
    color: '#a0a7c4',
    margin: '0 0 15px',
    lineHeight: '1.6',
  },
  progressBar: {
    height: '6px',
    borderRadius: '3px',
    background: '#1c2136',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 'auto',
  },
  progressBarFill: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: '3px',
  },
  aboutText: {
    fontSize: '14px',
    color: '#a0a7c4',
    margin: 0,
    lineHeight: '1.8',
    textAlign: 'justify',
  },
  // Style Tambahan untuk Fitur Baru
  contributionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(14px, 1fr))',
    gap: '4px',
    marginTop: '15px',
  },
  contributionCell: {
    height: '14px',
    borderRadius: '3px',
    transition: 'transform 0.2s',
  }
};

const colors = {
  cyan: '#10e0ff',
  magenta: '#ff10f0',
  emerald: '#10ff70',
  gold: '#ffb010',
  purple: '#b010ff',
};

const skillsData = [
  { name: 'JavaScript & React.js', color: 'cyan', level: '85%' },
  { name: 'UI/UX & UCD Methods', color: 'magenta', level: '90%' },
  { name: 'Tailwind CSS', color: 'emerald', level: '80%' },
  { name: 'Digital Marketing', color: 'gold', level: '75%' },
  { name: 'Strategic Planning (BEM)', color: 'purple', level: '88%' },
];

const ProfileRaihan = () => {
  const [copied, setCopied] = useState(false);
  const [contributions, setContributions] = useState([]);

  // Generate Data Acak untuk Grafik Aktivitas Coding
  useEffect(() => {
    const data = Array.from({ length: 98 }, () => {
      const rand = Math.random();
      if (rand > 0.8) return 3; // High activity
      if (rand > 0.5) return 2; // Med activity
      if (rand > 0.2) return 1; // Low activity
      return 0; // No activity
    });
    setContributions(data);
  }, []);

  const getContributionColor = (level) => {
    switch(level) {
      case 3: return '#10e0ff'; // Terang (Cyan)
      case 2: return 'rgba(16, 224, 255, 0.6)';
      case 1: return 'rgba(16, 224, 255, 0.3)';
      default: return '#1c2136'; // Kosong
    }
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('raihan.feriand@mail.ugm.ac.id');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div style={styles.body} className="responsive-grid">
      
      {/* ========================================== */}
      {/* KOLOM KIRI (PROFILE, SKILLS, LANG, CONTACT) */}
      {/* ========================================== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* 1. BAGIAN PROFIL UTAMA */}
        <section style={{ ...styles.bentoBox, ...styles.profilePanel }} className="bento-hover">
          <div style={styles.avatarContainer}>
            <div style={styles.avatarGlow} />
            <img src={fotoRaihan} alt="Raihan Feriand Allam" style={styles.avatar} />
          </div>
          <div style={styles.badge}>
            <ShieldCheck size={14} style={{ marginRight: '6px' }} /> Profil Terverifikasi
          </div>
          <h1 style={styles.name}>Raihan Feriand Allam</h1>
          <p style={styles.headline}>
            Mahasiswa Teknologi Informasi | Pengurus Harian BEM Vokasi UB | Fokus pada Pengembangan Web & Perencanaan Strategis.
          </p>
          <p style={styles.location}>
            <MapPin size={16} color={colors.cyan} /> Pasuruan, Jawa Timur
          </p>

          <div style={styles.liveStatus}>
            <div style={styles.liveDot}></div> Tersedia untuk Proyek Kolaborasi
          </div>
          
          <a href="/CV-Raihan.pdf" download className="cv-btn-hover" style={styles.cvButton}>
            <Download size={18} /> Download CV
          </a>
        </section>

        {/* 2. BAGIAN KEAHLIAN */}
        <section style={styles.bentoBox} className="bento-hover">
          <h2 style={styles.sectionTitle}>
            <Terminal size={20} color={colors.magenta} /> Tingkat Keahlian
          </h2>
          <div style={styles.skillsContainer}>
            {skillsData.map((skill, index) => (
              <div key={index} style={styles.skillRow} className="skill-row-hover">
                <div style={styles.skillHeader}>
                  <span style={{ color: '#ffffff' }}>{skill.name}</span>
                  <span style={{ color: colors[skill.color] }}>{skill.level}</span>
                </div>
                <div style={styles.skillBarBg}>
                  <div style={{
                    height: '100%',
                    width: skill.level,
                    backgroundColor: colors[skill.color],
                    borderRadius: '4px',
                    boxShadow: `0 0 10px ${colors[skill.color]}80`,
                    transition: 'width 1s ease-out'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FITUR BARU 1: LANGUAGES (BAHASA) */}
        <section style={styles.bentoBox} className="bento-hover">
          <h2 style={styles.sectionTitle}>
            <Globe size={20} color={colors.emerald} /> Penguasaan Bahasa
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>Bahasa Indonesia</span>
              <span style={{ fontSize: '12px', padding: '4px 10px', background: 'rgba(16, 255, 112, 0.1)', color: colors.emerald, borderRadius: '10px' }}>Native / Bilingual</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>English</span>
              <span style={{ fontSize: '12px', padding: '4px 10px', background: 'rgba(16, 224, 255, 0.1)', color: colors.cyan, borderRadius: '10px' }}>Professional Working</span>
            </div>
          </div>
        </section>

        {/* 3. BAGIAN KONTAK */}
        <section style={styles.bentoBox} className="bento-hover">
          <h2 style={styles.sectionTitle}>Informasi Kontak</h2>
          <div style={styles.contactButtons}>
            
            <button onClick={handleCopyEmail} className="contact-btn glow-gold" style={styles.contactButton}>
              {copied ? <Check size={20} color={colors.emerald} /> : <Mail size={20} color={colors.gold} />}
              <span style={{ color: copied ? colors.emerald : '#a0a7c4', transition: 'color 0.3s' }}>
                {copied ? 'Email berhasil disalin!' : 'raihan.feriand@mail.ugm.ac.id'}
              </span>
            </button>

            <a href="https://linkedin.com/in/raihanferiand" target="_blank" rel="noopener noreferrer" className="contact-btn glow-cyan" style={styles.contactButton}>
              <Link size={20} color={colors.cyan} /> linkedin.com/in/raihanferiand
            </a>
            <a href="https://raihan-portfolio.dev" target="_blank" rel="noopener noreferrer" className="contact-btn glow-purple" style={styles.contactButton}>
              <Folder size={20} color={colors.purple} /> raihan-portfolio.dev
            </a>
          </div>
        </section>
      </div>

      {/* ========================================== */}
      {/* KOLOM KANAN (EXPERIENCE, EDUCATION, dll)   */}
      {/* ========================================== */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* 4. BAGIAN PENGALAMAN ORGANISASI */}
        <section style={styles.bentoBox} className="bento-hover">
          <h2 style={styles.sectionTitle}>Pengalaman Organisasi</h2>
          <div>
            <h3 style={styles.experienceOrg}>BEM Vokasi Universitas Brawijaya</h3>
            <p style={styles.experienceMeta}>Pengurus Harian (Student Executive Board)</p>
            
            <div style={styles.timeline}>
              <div style={styles.timelineLine} />
              
              <div style={styles.timelineItem} className="timeline-hover-cyan">
                <div style={{ ...styles.timelinePoint, backgroundColor: colors.cyan }} />
                <p style={{ ...styles.experienceMeta, fontSize: '15px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>2026 (Masa Jabatan Aktif)</p>
                <p className="exp-details" style={styles.experienceDetails}>
                  Memimpin perencanaan strategis dan koordinasi internal. Bertanggung jawab mengelola komunikasi lintas divisi dan memastikan pelaksanaan program organisasi sejalan dengan visi utama kami.
                </p>
              </div>

              <div style={styles.timelineItem} className="timeline-hover-magenta">
                <div style={{ ...styles.timelinePoint, backgroundColor: colors.magenta }} />
                <p style={{ ...styles.experienceMeta, fontSize: '15px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>2025</p>
                <p className="exp-details" style={styles.experienceDetails}>
                  Membantu pengembangan kerangka kelembagaan dan berhasil mengelola acara kemahasiswaan skala besar. Berfokus pada hubungan masyarakat dan kemitraan eksternal.
                </p>
              </div>
              
              <div style={styles.timelineItem} className="timeline-hover-emerald">
                <div style={{ ...styles.timelinePoint, backgroundColor: colors.emerald }} />
                <p style={{ ...styles.experienceMeta, fontSize: '15px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>2024</p>
                <p className="exp-details" style={styles.experienceDetails}>
                  Memulai perjalanan di organisasi. Mendukung logistik acara, proses penerimaan anggota baru, dan tugas administratif dasar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PENDIDIKAN & ALAT PENDUKUNG */}
        <section style={styles.bentoBox} className="bento-hover">
          <h2 style={styles.sectionTitle}>
            <GraduationCap size={20} color={colors.gold} /> Pendidikan & Alat Utama
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '15px', background: 'rgba(28,33,54,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '16px', color: '#ffffff', margin: '0 0 8px', fontWeight: '700' }}>Universitas Brawijaya</h3>
              <p style={{ fontSize: '13px', color: colors.cyan, margin: '0 0 5px', fontWeight: '600' }}>D3 Teknologi Informasi</p>
              <p style={{ fontSize: '12px', color: '#707794', margin: 0 }}>2024 - Sekarang (Kelas T2B)</p>
            </div>
            
            <div style={{ padding: '15px', background: 'rgba(28,33,54,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '14px', color: '#a0a7c4', margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MonitorSmartphone size={16} /> Workflow Tools
              </h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ padding: '6px 12px', fontSize: '11px', fontWeight: '600', borderRadius: '8px', background: '#1c2136', color: '#fff', border: `1px solid ${colors.cyan}40` }}>Figma</span>
                <span style={{ padding: '6px 12px', fontSize: '11px', fontWeight: '600', borderRadius: '8px', background: '#1c2136', color: '#fff', border: `1px solid ${colors.emerald}40` }}>VS Code</span>
                <span style={{ padding: '6px 12px', fontSize: '11px', fontWeight: '600', borderRadius: '8px', background: '#1c2136', color: '#fff', border: `1px solid ${colors.magenta}40` }}>Laragon</span>
                <span style={{ padding: '6px 12px', fontSize: '11px', fontWeight: '600', borderRadius: '8px', background: '#1c2136', color: '#fff', border: `1px solid ${colors.gold}40` }}>Git</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BAGIAN PROYEK */}
        <section style={styles.bentoBox} className="bento-hover">
          <h2 style={styles.sectionTitle}>Sorotan Proyek</h2>
          <div style={styles.projectsList}>
            
            <div style={styles.projectItem} className="project-card border-gold">
              <div style={{ ...styles.projectIcon, boxShadow: `inset 0 0 15px ${colors.gold}40` }}>
                <Briefcase size={28} color={colors.gold} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={styles.projectTitle}>Integrasi E-Commerce Digital</h3>
                <p style={styles.projectDesc}>
                  Mengembangkan dan mengelola platform layanan digital yang berfokus pada barang virtual dan manajemen media sosial. Menerapkan strategi pengembangan bisnis untuk mendorong akuisisi pengguna.
                </p>
                <div style={styles.progressBar}>
                  <div style={{ ...styles.progressBarFill, width: '85%', background: colors.gold, boxShadow: `0 0 10px ${colors.gold}` }} />
                </div>
              </div>
            </div>

            <div style={styles.projectItem} className="project-card border-emerald">
              <div style={{ ...styles.projectIcon, boxShadow: `inset 0 0 15px ${colors.emerald}40` }}>
                <MapPin size={28} color={colors.emerald} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={styles.projectTitle}>Sistem Penyewaan Alat Outdoor</h3>
                <p style={styles.projectDesc}>
                  Proyek akademik merancang aplikasi web untuk penyewaan peralatan camping. Menggunakan metodologi User-Centered Design (UCD) untuk memastikan alur pengguna dan aksesibilitas yang optimal.
                </p>
                <div style={styles.progressBar}>
                  <div style={{ ...styles.progressBarFill, width: '95%', background: colors.emerald, boxShadow: `0 0 10px ${colors.emerald}` }} />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FITUR BARU 2: GITHUB-STYLE ACTIVITY GRID */}
        <section style={styles.bentoBox} className="bento-hover">
          <h2 style={styles.sectionTitle}>
            <Activity size={20} color={colors.cyan} /> Aktivitas Pengembangan
          </h2>
          <p style={{ fontSize: '13px', color: '#a0a7c4', margin: '0 0 10px' }}>Simulasi intensitas pengerjaan kode dan desain (Last 90 days)</p>
          <div style={styles.contributionGrid}>
            {contributions.map((level, i) => (
              <div 
                key={i} 
                className="contribution-cell"
                style={{
                  ...styles.contributionCell,
                  backgroundColor: getContributionColor(level),
                  boxShadow: level > 1 ? `0 0 8px ${getContributionColor(level)}` : 'none'
                }} 
              />
            ))}
          </div>
        </section>

        {/* 7. BAGIAN TENTANG SAYA */}
        <section style={styles.bentoBox} className="bento-hover">
          <h2 style={styles.sectionTitle}>Tentang Saya</h2>
          <p style={styles.aboutText}>
            Saya adalah mahasiswa berdedikasi tinggi di program studi D3 Teknologi Informasi (Kelas T2B) pada Fakultas Vokasi, Universitas Brawijaya. Perjalanan akademik dan profesional saya didorong oleh ketertarikan yang sangat mendalam untuk menjembatani kesenjangan antara desain visual yang estetis dan fungsionalitas sistem yang kompleks. Saya memiliki minat besar dalam menggabungkan penulisan kode yang bersih dan efisien dengan antarmuka pengguna yang sangat intuitif, terutama melalui pendekatan User-Centered Design (UCD). Di luar layar komputer, keterlibatan aktif saya sebagai Pengurus Harian di Badan Eksekutif Mahasiswa (BEM) Vokasi telah secara signifikan membentuk karakter dan membekali saya dengan kemampuan kepemimpinan, manajemen waktu, pemecahan masalah secara kritis, serta komunikasi strategis yang solid. Pengalaman berorganisasi ini mengajarkan saya bagaimana berkolaborasi dalam tim multidisiplin dan mengeksekusi program kerja berskala besar. Saya selalu antusias berada di lingkungan kolaboratif yang menantang saya untuk terus belajar, berinovasi secara kreatif, dan membangun solusi teknologi yang tidak hanya fungsional secara teknis, tetapi juga mampu memberikan pengalaman pengguna yang inklusif, efisien, dan luar biasa.
          </p>
        </section>

      </div>

      {/* CSS INTERNAL UNTUK HOVER & RESPONSIF */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
          100% { opacity: 0.5; transform: scale(1); }
        }
        
        .bento-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.8), inset 0 2px 10px rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.1) !important;
        }

        .skill-row-hover:hover span {
          color: #ffffff !important;
          text-shadow: 0 0 8px rgba(255,255,255,0.5);
        }

        .contact-btn:hover {
          background: rgba(28,33,54,0.9) !important;
          color: #ffffff !important;
          transform: translateX(5px);
        }
        .glow-gold:hover { border-color: ${colors.gold} !important; box-shadow: 0 0 20px ${colors.gold}40 !important; }
        .glow-cyan:hover { border-color: ${colors.cyan} !important; box-shadow: 0 0 20px ${colors.cyan}40 !important; }
        .glow-purple:hover { border-color: ${colors.purple} !important; box-shadow: 0 0 20px ${colors.purple}40 !important; }

        .cv-btn-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(16, 224, 255, 0.6) !important;
          background: #ffffff !important;
        }

        .timeline-hover-cyan:hover .exp-details { color: ${colors.cyan} !important; text-shadow: 0 0 10px ${colors.cyan}40; }
        .timeline-hover-magenta:hover .exp-details { color: ${colors.magenta} !important; text-shadow: 0 0 10px ${colors.magenta}40; }
        .timeline-hover-emerald:hover .exp-details { color: ${colors.emerald} !important; text-shadow: 0 0 10px ${colors.emerald}40; }

        .project-card:hover {
          background: rgba(28,33,54,0.8) !important;
          transform: translateY(-3px);
        }
        .border-gold:hover { border-color: ${colors.gold}40 !important; }
        .border-emerald:hover { border-color: ${colors.emerald}40 !important; }

        .contribution-cell:hover {
          transform: scale(1.3);
          border: 1px solid #ffffff;
          z-index: 10;
        }

        @media (max-width: 1024px) {
          .responsive-grid {
            grid-template-columns: 1fr !important;
            padding: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileRaihan;