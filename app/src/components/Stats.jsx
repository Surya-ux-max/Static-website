import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  {
    value: 2, suffix: 'nd', label: 'Rank in TN', sub: 'Seats Filled · Round 2',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    value: 95, suffix: '%', label: 'Placement Rate', sub: '2024 Graduating Batch',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    value: 42, suffix: ' LPA', label: 'Highest Package', sub: 'International Offer',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: 300, suffix: '+', label: 'Recruiters', sub: 'Top MNCs & Startups',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

function Counter({ value, suffix }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const inc = value / (1800 / 16)
    const t = setInterval(() => {
      start += inc
      if (start >= value) { setDisplay(value); clearInterval(t) }
      else setDisplay(Math.floor(start))
    }, 16)
    return () => clearInterval(t)
  }, [inView, value])

  return <span ref={ref}>{display}{suffix}</span>
}

export default function Stats() {
  return (
    <section id="about" className="relative py-24 bg-[#060b22] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#f5c518 1px,transparent 1px),linear-gradient(90deg,#f5c518 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#f5c518] text-xs font-bold tracking-[0.25em] uppercase mb-3">By the numbers</p>
          <h2 className="text-5xl font-black text-white">Excellence,<br /><span className="text-[#f5c518]">measured.</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {stats.map(({ value, suffix, label, sub, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#060b22] hover:bg-[#0d1535] transition-colors duration-300 p-8 flex flex-col gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-[#f5c518]/10 border border-[#f5c518]/20 flex items-center justify-center text-[#f5c518] group-hover:bg-[#f5c518] group-hover:text-[#0a0f2e] transition-all duration-300">
                {icon}
              </div>
              <div>
                <p className="text-4xl font-black text-[#f5c518] leading-none">
                  <Counter value={value} suffix={suffix} />
                </p>
                <p className="text-white font-bold mt-2 text-sm">{label}</p>
                <p className="text-white/40 text-xs mt-0.5">{sub}</p>
              </div>
              {/* corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[48px] border-l-transparent border-t-[48px] border-t-[#f5c518]/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
