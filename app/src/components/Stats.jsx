import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 2, suffix: 'nd', label: 'Rank in Seats Filled', sub: 'Round 2 — Tamil Nadu' },
  { value: 95, suffix: '%', label: 'Placement Rate', sub: '2024 Batch' },
  { value: 42, suffix: 'LPA', label: 'Highest Package', sub: 'International Offer' },
  { value: 300, suffix: '+', label: 'Recruiting Companies', sub: 'Top MNCs & Startups' },
]

function Counter({ value, suffix }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = value / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) { setDisplay(value); clearInterval(timer) }
      else setDisplay(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="text-5xl font-extrabold text-blue-700">
      {display}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">By the numbers</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Excellence, measured</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, suffix, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-1 p-6 rounded-2xl bg-blue-50 border border-blue-100"
            >
              <Counter value={value} suffix={suffix} />
              <p className="font-semibold text-gray-800 mt-2">{label}</p>
              <p className="text-xs text-gray-500">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
