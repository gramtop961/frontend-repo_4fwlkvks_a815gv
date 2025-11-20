export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">About Me</h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-blue-100/90">
            I’m a creative developer focused on crafting modern, interactive experiences for the web. My work blends motion, 3D, and meticulous UI engineering to tell brand stories and elevate products.
          </p>
          <p className="mt-4 text-blue-100/90">
            I love rapid prototyping, design systems, and collaborating with cross‑functional teams. When I’m not building, I’m exploring new tools like Spline and experimenting with playful interactions.
          </p>
        </div>
      </div>
    </section>
  )
}
