const features = [
  { title: 'Fast by default', desc: 'Optimized builds and edge delivery out of the box.' },
  { title: 'Developer first', desc: 'Intuitive APIs and great DX so your team stays productive.' },
  { title: 'Scales with you', desc: 'From side project to enterprise — no re-architecture needed.' },
  { title: 'Secure & reliable', desc: 'SOC 2 compliant with 99.99% uptime SLA.' },
]

export default function Features() {
  return (
    <section id="features" className="px-8 py-20 border-t border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Everything you need</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map(({ title, desc }) => (
          <div key={title} className="flex flex-col gap-2">
            <div className="w-8 h-8 rounded-md bg-indigo-100 mb-2" />
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
