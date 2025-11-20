export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_90%_0%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Let’s build something</h2>
          <p className="mt-2 text-blue-100/90">Tell me about your project. I’ll reply within 24 hours.</p>
          <form className="mt-6 grid gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-2 text-white placeholder:text-blue-100/60" />
            <input type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-2 text-white placeholder:text-blue-100/60" />
            <textarea rows="4" placeholder="Project details" className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-2 text-white placeholder:text-blue-100/60" />
            <button type="submit" className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">Send Message</button>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-blue-100/60">Or email me at <a href="mailto:hello@example.com" className="text-cyan-300 hover:text-white">hello@example.com</a></p>
      </div>
    </section>
  )
}
