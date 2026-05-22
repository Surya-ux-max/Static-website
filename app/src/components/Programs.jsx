import { motion } from 'framer-motion'

const programs = [
  {
    dept: 'CSE', full: 'Computer Science & Engineering', seats: 180, highlight: 'AI & ML Specialisation',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
  {
    dept: 'ECE', full: 'Electronics & Communication', seats: 120, highlight: 'VLSI & Embedded Systems',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>,
  },
  {
    dept: 'MECH', full: 'Mechanical Engineering', seats: 120, highlight: 'CAD/CAM & Robotics',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    dept: 'CIVIL', full: 'Civil Engineering', seats: 60, highlight: 'Smart Infrastructure',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    dept: 'EEE', full: 'Electrical & Electronics', seats: 60, highlight: 'Power Electronics',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    dept: 'IT', full: 'Information Technology', seats: 60, highlight: 'Cloud & Cybersecurity',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-[#0a0f2e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5c518]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-[#f5c518] text-xs font-bold tracking-[0.25em] uppercase mb-3">Academics</p>
            <h2 className="text-5xl font-black text-white">Programs<br /><span className="text-[#f5c518]">Offered</span></h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            NBA-accredited departments with industry-aligned curriculum and state-of-the-art labs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map(({ dept, full, icon, seats, highlight }, i) => (
            <motion.div
              key={dept}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-[#f5c518]/30 rounded-2xl p-6 cursor-default transition-all duration-300 overflow-hidden"
            >
              {/* Yellow left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-[#f5c518] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#f5c518]/10 border border-[#f5c518]/20 flex items-center justify-center text-[#f5c518] group-hover:bg-[#f5c518] group-hover:text-[#0a0f2e] transition-all duration-300">
                  {icon}
                </div>
                <span className="text-[10px] font-black text-[#f5c518]/60 bg-[#f5c518]/10 px-2 py-1 rounded-full tracking-widest uppercase">
                  {seats} seats
                </span>
              </div>

              <span className="text-[10px] font-black text-[#f5c518] tracking-[0.2em] uppercase">{dept}</span>
              <h3 className="text-white font-bold text-lg leading-snug mt-1">{full}</h3>
              <p className="text-white/40 text-sm mt-2 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#f5c518]/60 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
