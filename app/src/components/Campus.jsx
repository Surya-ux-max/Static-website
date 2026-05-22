import { motion } from 'framer-motion'

const aspects = [
  {
    title: 'Modern Infrastructure',
    desc: '150-acre campus with smart classrooms, advanced labs, and high-speed Wi-Fi throughout every building.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Research & Innovation',
    desc: 'Dedicated R&D centres, incubation hub, and funded research projects with industry partners.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Sports & Culture',
    desc: 'National-level sports facilities, annual cultural fest Aaruush, and 50+ active student clubs.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Global Exposure',
    desc: 'MoUs with international universities, student exchange programs, and global internship opportunities.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Campus() {
  return (
    <section id="campus" className="py-24 bg-[#0a0f2e] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#f5c518]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#f5c518] text-xs font-bold tracking-[0.25em] uppercase mb-3">Life at SECE</p>
          <h2 className="text-5xl font-black text-white">Beyond the<br /><span className="text-[#f5c518]">Classroom</span></h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            A vibrant campus that nurtures holistic development — academically, professionally, and personally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aspects.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex gap-5 p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#f5c518]/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#f5c518]/10 border border-[#f5c518]/20 flex items-center justify-center text-[#f5c518] group-hover:bg-[#f5c518] group-hover:text-[#0a0f2e] transition-all duration-300">
                {icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
