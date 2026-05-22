import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import * as THREE from 'three'

/* ── Three.js particle sphere ── */
function ParticleSphere() {
  const ref = useRef()
  const count = 2400

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const yellow = new THREE.Color('#f5c518')
    const blue = new THREE.Color('#3b82f6')
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.4 + (Math.random() - 0.5) * 0.5
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      const c = Math.random() > 0.6 ? yellow : blue
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.06
      ref.current.rotation.x += delta * 0.015
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} vertexColors sizeAttenuation transparent opacity={0.9} />
    </points>
  )
}

/* ── Floating avatar card ── */
const avatarSeeds = ['Aisha', 'Ravi', 'Priya', 'Karthik', 'Meena', 'Arjun']
const avatarData = [
  { seed: 'Aisha',   name: 'Aisha R.',   role: 'SDE @ Amazon',    pkg: '32 LPA', x: '-left-4 top-32',   delay: 0 },
  { seed: 'Ravi',    name: 'Ravi K.',    role: 'Engineer @ Zoho',  pkg: '18 LPA', x: '-right-4 top-24',  delay: 0.3 },
  { seed: 'Priya',   name: 'Priya S.',   role: 'Dev @ Infosys',    pkg: '12 LPA', x: '-left-8 bottom-32',delay: 0.6 },
  { seed: 'Karthik', name: 'Karthik M.', role: 'ML @ TCS',         pkg: '22 LPA', x: '-right-8 bottom-28',delay: 0.9 },
]

function FloatingAvatar({ seed, name, role, pkg, posClass, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: 'backOut' }}
      style={{ animationDelay: `${delay}s` }}
      className={`absolute ${posClass} z-20 hidden lg:flex items-center gap-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-3 py-2.5 shadow-2xl`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3 + delay, ease: 'easeInOut' }}
      >
        <img
          src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
          alt={name}
          className="w-10 h-10 rounded-full bg-white/20 border-2 border-[#f5c518]"
        />
      </motion.div>
      <div>
        <p className="text-white text-xs font-bold leading-none">{name}</p>
        <p className="text-white/60 text-[10px] mt-0.5">{role}</p>
        <p className="text-[#f5c518] text-[10px] font-black mt-0.5">{pkg}</p>
      </div>
    </motion.div>
  )
}

/* ── Floating stat badge ── */
function StatBadge({ value, label, posClass, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: 'easeOut' }}
      className={`absolute ${posClass} z-20 hidden md:block`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4 + delay, ease: 'easeInOut' }}
        className="bg-[#f5c518] rounded-2xl px-4 py-3 shadow-2xl shadow-yellow-500/30"
      >
        <p className="text-[#0a0f2e] text-2xl font-black leading-none">{value}</p>
        <p className="text-[#0a0f2e]/70 text-[10px] font-semibold mt-0.5 uppercase tracking-wider">{label}</p>
      </motion.div>
    </motion.div>
  )
}

/* ── Geometric ring ── */
function Ring({ size, opacity, posClass, duration }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
      className={`absolute ${posClass} rounded-full border border-[#f5c518] pointer-events-none`}
      style={{ width: size, height: size, opacity }}
    />
  )
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f2e]">

      {/* Three.js canvas */}
      <div className="absolute inset-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
          <ParticleSphere />
        </Canvas>
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(245,197,24,0.08),transparent)]" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0a0f2e] to-transparent" />

      {/* Geometric rings */}
      <Ring size={520} opacity={0.06} posClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" duration={40} />
      <Ring size={340} opacity={0.1}  posClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" duration={25} />
      <Ring size={180} opacity={0.15} posClass="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" duration={15} />

      {/* Floating avatars */}
      <div className="absolute inset-0 max-w-6xl mx-auto px-6">
        {avatarData.map((a) => (
          <FloatingAvatar key={a.seed} seed={a.seed} name={a.name} role={a.role} pkg={a.pkg} posClass={a.x} delay={a.delay} />
        ))}

        {/* Stat badges */}
        <StatBadge value="#2" label="Rank in TN" posClass="left-0 top-1/2 -translate-y-1/2" delay={1.1} />
        <StatBadge value="95%" label="Placed" posClass="right-0 top-1/2 -translate-y-1/2" delay={1.3} />
      </div>

      {/* Hero text */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f5c518] animate-pulse" />
          <span className="text-[#f5c518] text-xs font-bold tracking-[0.2em] uppercase">
            Ranked #2 · Engineering Seats Filled · Round 2
          </span>
          <span className="w-2 h-2 rounded-full bg-[#f5c518] animate-pulse" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6"
        >
          Sri Eshwar<br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: '2px #f5c518' }}
          >
            College
          </span>
          <span className="text-[#f5c518]"> of</span><br />
          Engineering
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Coimbatore's most sought-after engineering institution — shaping industry leaders with world-class placements and cutting-edge infrastructure.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#apply"
            className="group inline-flex items-center gap-2 bg-[#f5c518] hover:bg-yellow-300 text-[#0a0f2e] font-black px-8 py-4 rounded-full text-sm transition-all duration-200 shadow-xl shadow-yellow-500/25"
          >
            Apply for 2025 Admissions
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#placements"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#f5c518]/60 text-white hover:text-[#f5c518] font-semibold px-8 py-4 rounded-full text-sm transition-all duration-200 backdrop-blur-sm"
          >
            View Placements
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 bg-[#f5c518] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
