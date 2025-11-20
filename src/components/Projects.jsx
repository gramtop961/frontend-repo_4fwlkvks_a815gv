import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'Analytics dashboard with motion and glassmorphism',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
    code: '#'
  },
  {
    title: '3D Landing',
    desc: 'Hero section featuring interactive 3D elements',
    tags: ['Spline', 'Vite', 'Design'],
    link: '#',
    code: '#'
  },
  {
    title: 'AI Portfolio',
    desc: 'Personal site powered by an AI content system',
    tags: ['FastAPI', 'MongoDB', 'UX'],
    link: '#',
    code: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Projects</h2>
          <a href="#contact" className="text-sm text-cyan-300 hover:text-white">Let’s collaborate →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">{p.title}</h3>
                <div className="flex gap-2 text-white/80">
                  <a href={p.link} aria-label="Live" className="hover:text-white"><ExternalLink size={18} /></a>
                  <a href={p.code} aria-label="Code" className="hover:text-white"><Github size={18} /></a>
                </div>
              </div>
              <p className="mt-2 text-sm text-blue-100/90">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-blue-100/80">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
