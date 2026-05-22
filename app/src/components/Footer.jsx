import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <>
      {/* CTA Band */}
      <section id="apply" className="bg-gradient-to-r from-blue-700 to-indigo-700 py-20 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold mb-4">Start your journey at SECE</h2>
          <p className="text-blue-100/80 max-w-xl mx-auto mb-8">
            Applications open for 2025–26. Join Tamil Nadu's fastest-growing engineering college.
          </p>
          <a
            href="https://sece.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-full text-sm hover:bg-blue-50 transition-colors shadow-xl"
          >
            Apply at sece.ac.in →
          </a>
        </motion.div>
      </section>

      <footer className="bg-gray-950 text-gray-400 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-xs">SE</div>
              <span className="text-white font-bold">Sri Eshwar CE</span>
            </div>
            <p className="text-sm leading-relaxed">
              Kinathukadavu, Coimbatore – 641 202<br />
              Tamil Nadu, India
            </p>
            <p className="text-sm mt-2">📞 +91 98765 43210</p>
            <p className="text-sm">✉️ admissions@sece.ac.in</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {['About', 'Programs', 'Placements', 'Campus', 'Apply'].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Accreditations</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>✅ AICTE Approved</li>
              <li>✅ Anna University Affiliated</li>
              <li>✅ NBA Accredited Departments</li>
              <li>✅ NAAC Accredited</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Sri Eshwar College of Engineering. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </>
  )
}
