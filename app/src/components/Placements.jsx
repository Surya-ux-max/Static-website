import { motion } from 'framer-motion'

const companies = [
  'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture',
  'HCL', 'Zoho', 'Amazon', 'Capgemini', 'L&T Infotech',
  'Hexaware', 'Mphasis', 'NTT Data', 'Sutherland', 'UST Global',
]

const highlights = [
  { label: 'Average Package', value: '6.8 LPA' },
  { label: 'Highest Package', value: '42 LPA' },
  { label: 'Students Placed', value: '1200+' },
  { label: 'Dream Offers', value: '180+' },
]

export default function Placements() {
  return (
    <section id="placements" className="py-20 bg-blue-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">Careers</span>
          <h2 className="text-4xl font-bold text-white mt-2">Placement Excellence</h2>
          <p className="text-blue-200/70 mt-3 max-w-xl mx-auto">
            Our students are placed in top MNCs and high-growth startups across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-blue-900/50 border border-blue-700/40 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-blue-300">{value}</p>
              <p className="text-sm text-blue-200/70 mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex overflow-hidden gap-0">
          {[0, 1].map((n) => (
            <motion.div
              key={n}
              animate={{ x: ['0%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="flex gap-6 shrink-0 pr-6"
            >
              {companies.map((name) => (
                <div
                  key={name}
                  className="shrink-0 bg-blue-900/60 border border-blue-700/30 rounded-xl px-6 py-3 text-sm font-semibold text-blue-200 whitespace-nowrap"
                >
                  {name}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
