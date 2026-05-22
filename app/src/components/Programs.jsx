import { motion } from 'framer-motion'

const programs = [
  { dept: 'CSE', full: 'Computer Science & Engineering', icon: '💻', seats: 180, highlight: 'AI & ML Specialisation' },
  { dept: 'ECE', full: 'Electronics & Communication', icon: '📡', seats: 120, highlight: 'VLSI & Embedded Systems' },
  { dept: 'MECH', full: 'Mechanical Engineering', icon: '⚙️', seats: 120, highlight: 'CAD/CAM & Robotics' },
  { dept: 'CIVIL', full: 'Civil Engineering', icon: '🏗️', seats: 60, highlight: 'Smart Infrastructure' },
  { dept: 'EEE', full: 'Electrical & Electronics', icon: '⚡', seats: 60, highlight: 'Power Electronics' },
  { dept: 'IT', full: 'Information Technology', icon: '🌐', seats: 60, highlight: 'Cloud & Cybersecurity' },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">Academics</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Programs Offered</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            NBA-accredited departments with industry-aligned curriculum and state-of-the-art labs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ dept, full, icon, seats, highlight }, i) => (
            <motion.div
              key={dept}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(59,130,246,0.15)' }}
              className="bg-white rounded-2xl p-6 border border-gray-100 cursor-default transition-shadow"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{dept}</span>
                <span className="text-xs text-gray-400">{seats} seats</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg leading-snug">{full}</h3>
              <p className="text-sm text-gray-500 mt-2">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
