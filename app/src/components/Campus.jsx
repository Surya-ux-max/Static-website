import { motion } from 'framer-motion'

const aspects = [
  { icon: '🏛️', title: 'Modern Infrastructure', desc: '150-acre campus with smart classrooms, advanced labs, and high-speed Wi-Fi throughout.' },
  { icon: '🔬', title: 'Research & Innovation', desc: 'Dedicated R&D centres, incubation hub, and funded research projects with industry partners.' },
  { icon: '🏆', title: 'Sports & Culture', desc: 'National-level sports facilities, annual cultural fest, and 50+ student clubs.' },
  { icon: '🌍', title: 'Global Exposure', desc: 'MoUs with international universities, student exchange programs, and global internships.' },
]

export default function Campus() {
  return (
    <section id="campus" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">Life at SECE</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Beyond the Classroom</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A vibrant campus that nurtures holistic development — academically, professionally, and personally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aspects.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
            >
              <div className="text-4xl shrink-0">{icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
