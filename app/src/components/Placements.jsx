import { motion } from 'framer-motion'

const companies = [
  'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture',
  'HCL', 'Zoho', 'Amazon', 'Capgemini', 'L&T Infotech',
  'Hexaware', 'Mphasis', 'NTT Data', 'Sutherland', 'UST Global',
]

const highlights = [
  {
    value: '6.8 LPA', label: 'Average Package',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  },
  {
    value: '42 LPA', label: 'Highest Package',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  },
  {
    value: '1200+', label: 'Students Placed',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    value: '180+', label: 'Dream Offers',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  },
]

function Marquee({ reverse }) {
  return (
    <div className="flex overflow-hidden py-3">
      {[0, 1].map((n) => (
        <motion.div
          key={n}
          animate={{ x: reverse ? ['-100%', '0%'] : ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="flex gap-3 shrink-0 pr-3"
        >
          {companies.map((name) => (
            <div
              key={name}
              className="shrink-0 flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] hover:border-[#f5c518]/40 rounded-xl px-5 py-2.5 text-sm font-bold text-white/60 hover:text-white whitespace-nowrap transition-colors cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#f5c518]" />
              {name}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default function Placements() {
  return (
    <section id="placements" className="py-24 bg-[#060b22] overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f5c518]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-[#f5c518] text-xs font-bold tracking-[0.25em] uppercase mb-3">Careers</p>
            <h2 className="text-5xl font-black text-white">Placement<br /><span className="text-[#f5c518]">Excellence</span></h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            Our students are placed in top MNCs and high-growth startups across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ value, label, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] hover:border-[#f5c518]/30 rounded-2xl p-6 overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5c518]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-[#f5c518] mb-3">{icon}</div>
                <p className="text-3xl font-black text-[#f5c518]">{value}</p>
                <p className="text-white/50 text-xs mt-1 font-medium">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dual marquee */}
      <div className="space-y-0">
        <Marquee reverse={false} />
        <Marquee reverse={true} />
      </div>
    </section>
  )
}
