import { motion } from 'framer-motion'

const PhoneIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const MapIcon = () => (
  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#f5c518] shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

export default function Footer() {
  return (
    <>
      {/* CTA Band */}
      <section id="apply" className="relative py-24 bg-[#f5c518] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(#0a0f2e 1px,transparent 1px),linear-gradient(90deg,#0a0f2e 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center px-6"
        >
          <p className="text-[#0a0f2e]/60 text-xs font-bold tracking-[0.25em] uppercase mb-4">Admissions 2025–26</p>
          <h2 className="text-5xl font-black text-[#0a0f2e] leading-tight mb-5">
            Start your journey<br />at SECE
          </h2>
          <p className="text-[#0a0f2e]/60 max-w-md mx-auto mb-10 text-sm leading-relaxed">
            Applications open for 2025–26. Join Tamil Nadu's fastest-growing engineering college and shape your future.
          </p>
          <a
            href="https://sece.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0a0f2e] text-[#f5c518] font-black px-8 py-4 rounded-full text-sm hover:bg-[#1a2050] transition-colors shadow-2xl"
          >
            Apply at sece.ac.in
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </section>

      <footer className="bg-[#04071a] text-white/40 px-6 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-[#f5c518] rotate-6" />
                <div className="absolute inset-0 rounded-lg bg-[#04071a] border-2 border-[#f5c518] flex items-center justify-center">
                  <span className="text-[#f5c518] font-black text-xs">SE</span>
                </div>
              </div>
              <span className="text-white font-black text-sm">Sri Eshwar CE</span>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <span className="flex items-start gap-2">
                <MapIcon />
                Kinathukadavu, Coimbatore – 641 202, Tamil Nadu
              </span>
              <span className="flex items-center gap-2">
                <PhoneIcon />
                +91 98765 43210
              </span>
              <span className="flex items-center gap-2">
                <MailIcon />
                admissions@sece.ac.in
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {['About', 'Programs', 'Placements', 'Campus', 'Apply'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-[#f5c518] transition-colors flex items-center gap-2 group">
                    <span className="w-4 h-px bg-white/20 group-hover:bg-[#f5c518] group-hover:w-6 transition-all duration-200" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5">Accreditations</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {['AICTE Approved', 'Anna University Affiliated', 'NBA Accredited Departments', 'NAAC Accredited'].map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <CheckIcon />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/20">
          <span>© {new Date().getFullYear()} Sri Eshwar College of Engineering. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </>
  )
}
