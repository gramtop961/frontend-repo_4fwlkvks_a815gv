import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/90 mb-4">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Open to work • Frontend • Creative Tech
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              I craft modern, playful web experiences
            </h1>
            <p className="mt-4 text-blue-100/90 max-w-xl">
              Interactive interfaces, 3D touches, and polished UX. Explore selected work and see how I blend code and creativity.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
