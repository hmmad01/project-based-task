import profilImg from "../image/profile.jpg";
import { PageLayout, SectionCard, SkillBar, ContactButton } from "../components";

export default function ProfileHammad() {
  const skills = [
    { name: "HTML", level: 80, color: "rose" },
    { name: "CSS", level: 75, color: "blue" },
    { name: "JavaScript", level: 70, color: "gold" },
    { name: "Tailwind", level: 75, color: "cyan" },
    { name: "React", level: 65, color: "purple" },
  ];

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
    <PageLayout showNav={true} showFooter={true}>
      <div className="grid md:grid-cols-3 gap-6">

        {/* SIDEBAR */}
        <div className="space-y-6 md:sticky md:top-24 h-fit">
          {/* Profile Card */}
          <SectionCard hoverable={false}>
            <div className="flex flex-col items-center text-center">
              <img
                src={profilImg}
                alt="Abdulloh Hammad"
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              />
              <h1 className="mt-4 text-xl font-bold">Abdulloh Hammad</h1>
              <p className="text-gray-500 text-sm">Mahasiswa Teknologi Informasi</p>
              <span className="mt-2 text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full animate-pulse">
                ● Open to Learn
              </span>
            </div>
          </SectionCard>

          {/* Contact Sidebar */}
          <SectionCard title="Connect" icon="🔗" variant="gradient">
            <div className="space-y-3">
              <ContactButton platform="LinkedIn" url="https://linkedin.com/in/abdulloh-hammad-b03547377" label="abdulloh-hammad" color="blue" variant="dark" />
              <ContactButton platform="GitHub" url="https://github.com/hmmad01" label="hmmad01" color="slate" variant="dark" />
              <ContactButton platform="Email" url="mailto:awansby4@gmail.com" label="awansby4@gmail.com" color="rose" variant="dark" />
            </div>
          </SectionCard>
        </div>

        {/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-6">

          {/* HEADER BANNER */}
          <div className="h-44 rounded-2xl overflow-hidden relative shadow">
            <img
              src="https://i.pinimg.com/1200x/14/3b/89/143b89350d39d40ffe945dbe3f73fe2f.jpg"
              className="w-full h-full object-cover"
              alt="Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h2 className="text-xl font-bold">Welcome</h2>
              <p className="text-sm opacity-80">My personal portfolio</p>
            </div>
          </div>

          {/* INFO + CONTACT GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="Informasi" icon="📋">
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
            </SectionCard>

            <SectionCard title="Connect" icon="🤝">
              <div className="space-y-3">
                <ContactButton platform="LinkedIn" url="https://linkedin.com/in/abdulloh-hammad-b03547377" label="abdulloh-hammad" color="blue" variant="light" />
                <ContactButton platform="GitHub" url="https://github.com/hmmad01" label="hmmad01" color="slate" variant="light" />
                <ContactButton platform="Email" url="mailto:awansby4@gmail.com" label="awansby4@gmail.com" color="rose" variant="light" />
              </div>
            </SectionCard>
          </div>

          {/* ABOUT - using SectionCard */}
          <SectionCard title="Tentang Saya" icon="👤">
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              Saya adalah mahasiswa Teknologi Informasi yang memiliki minat dalam pengembangan web dan desain antarmuka. Saya tertarik membangun tampilan yang tidak hanya berfungsi dengan baik, tetapi juga nyaman dan menarik bagi pengguna. Saat ini saya terus mengembangkan kemampuan dalam HTML, CSS, JavaScript, dan Tailwind CSS untuk menciptakan website yang modern dan responsif.
            </p>
          </SectionCard>

          {/* SKILLS - using SectionCard + SkillBar */}
          <SectionCard title="Keahlian" icon="💻">
            <div className="space-y-4">
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color={skill.color} />
              ))}
            </div>
          </SectionCard>

          {/* PROJECT */}
          <div>
            <div className="flex justify-between mb-3">
              <h2 className="font-semibold">Project</h2>
              <span className="text-sm text-gray-500">Swipe →</span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-3">
              {projects.map((project) => (
                <div key={project.id} className="min-w-65 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 active:scale-[0.97] transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img src={project.image} className="h-36 w-full object-cover object-center group-hover:scale-110 transition" alt={project.title} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <button className="bg-white px-3 py-1 text-sm rounded hover:bg-gray-100 active:scale-95 transition">Detail</button>
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
    </PageLayout>
  );
}