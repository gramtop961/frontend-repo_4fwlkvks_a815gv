import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-300/30">
      {/* Background gradient accents */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1000px_300px_at_-10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(1000px_300px_at_110%_-10%,rgba(168,85,247,0.15),transparent)]" />

      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/70 text-sm">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <div className="text-blue-100/60 text-xs">Built with love, motion, and a playful tech vibe.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
