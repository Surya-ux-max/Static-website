import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function ParticleSphere() {
  const ref = useRef()
  const count = 2000

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.2 + (Math.random() - 0.5) * 0.4
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#93c5fd" sizeAttenuation transparent opacity={0.85} />
    </points>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5.5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <ParticleSphere />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-blue-950/80" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.span
          variants={item}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-300 bg-blue-800/50 border border-blue-600/40 px-4 py-1.5 rounded-full mb-6"
        >
          🏆 Ranked #2 — Engineering Seats Filled, Round 2
        </motion.span>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Sri Eshwar College<br />
          <span className="text-blue-400">of Engineering</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10"
        >
          Shaping engineers who lead industries. Coimbatore's most sought-after engineering institution with world-class placements and cutting-edge infrastructure.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#apply"
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors shadow-lg shadow-blue-500/30"
          >
            Apply for 2025 Admissions
          </a>
          <a
            href="#placements"
            className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors backdrop-blur-sm"
          >
            View Placements →
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
