import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const steps = ['Personal', 'Academic', 'Program', 'Review']

const programs = [
  'Computer Science & Engineering',
  'Electronics & Communication Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Electrical & Electronics Engineering',
  'Information Technology',
]

const boards = ['State Board (Tamil Nadu)', 'CBSE', 'ICSE', 'International Baccalaureate', 'Other']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
}

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  )
}

function Input({ error, ...props }) {
  return (
    <input
      {...props}
      className={`bg-white/[0.04] border ${error ? 'border-red-500/60' : 'border-white/[0.08]'} focus:border-[#f5c518]/60 focus:bg-white/[0.07] rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-200 placeholder:text-white/20 w-full`}
    />
  )
}

function Select({ error, children, ...props }) {
  return (
    <select
      {...props}
      className={`bg-[#0d1535] border ${error ? 'border-red-500/60' : 'border-white/[0.08]'} focus:border-[#f5c518]/60 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 w-full appearance-none cursor-pointer`}
      style={{ color: props.value ? '#fff' : 'rgba(255,255,255,0.2)' }}
    >
      {children}
    </select>
  )
}

function StepPersonal({ data, onChange, errors }) {
  return (
    <motion.div key="personal" variants={fadeUp} initial="hidden" animate="show" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Field label="First Name" error={errors.firstName}>
        <Input placeholder="Arjun" value={data.firstName} onChange={e => onChange('firstName', e.target.value)} error={errors.firstName} />
      </Field>
      <Field label="Last Name" error={errors.lastName}>
        <Input placeholder="Kumar" value={data.lastName} onChange={e => onChange('lastName', e.target.value)} error={errors.lastName} />
      </Field>
      <Field label="Date of Birth" error={errors.dob}>
        <Input type="date" value={data.dob} onChange={e => onChange('dob', e.target.value)} error={errors.dob} />
      </Field>
      <Field label="Gender" error={errors.gender}>
        <Select value={data.gender} onChange={e => onChange('gender', e.target.value)} error={errors.gender}>
          <option value="" disabled>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer_not">Prefer not to say</option>
        </Select>
      </Field>
      <Field label="Mobile Number" error={errors.mobile}>
        <Input placeholder="+91 98765 43210" value={data.mobile} onChange={e => onChange('mobile', e.target.value)} error={errors.mobile} />
      </Field>
      <Field label="Email Address" error={errors.email}>
        <Input type="email" placeholder="arjun@email.com" value={data.email} onChange={e => onChange('email', e.target.value)} error={errors.email} />
      </Field>
      <Field label="Aadhaar Number" error={errors.aadhaar}>
        <Input placeholder="XXXX XXXX XXXX" value={data.aadhaar} onChange={e => onChange('aadhaar', e.target.value)} error={errors.aadhaar} />
      </Field>
      <Field label="Community" error={errors.community}>
        <Select value={data.community} onChange={e => onChange('community', e.target.value)} error={errors.community}>
          <option value="" disabled>Select community</option>
          <option value="oc">OC</option>
          <option value="bc">BC</option>
          <option value="mbc">MBC</option>
          <option value="sc">SC</option>
          <option value="st">ST</option>
        </Select>
      </Field>
      <Field label="Address" error={errors.address}>
        <Input placeholder="Door No, Street, City" value={data.address} onChange={e => onChange('address', e.target.value)} error={errors.address} />
      </Field>
      <Field label="State" error={errors.state}>
        <Input placeholder="Tamil Nadu" value={data.state} onChange={e => onChange('state', e.target.value)} error={errors.state} />
      </Field>
    </motion.div>
  )
}

function StepAcademic({ data, onChange, errors }) {
  return (
    <motion.div key="academic" variants={fadeUp} initial="hidden" animate="show" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Field label="School / Institution Name" error={errors.school}>
        <Input placeholder="Government Higher Secondary School" value={data.school} onChange={e => onChange('school', e.target.value)} error={errors.school} />
      </Field>
      <Field label="Board of Education" error={errors.board}>
        <Select value={data.board} onChange={e => onChange('board', e.target.value)} error={errors.board}>
          <option value="" disabled>Select board</option>
          {boards.map(b => <option key={b} value={b}>{b}</option>)}
        </Select>
      </Field>
      <Field label="Year of Passing (12th)" error={errors.yearOfPassing}>
        <Select value={data.yearOfPassing} onChange={e => onChange('yearOfPassing', e.target.value)} error={errors.yearOfPassing}>
          <option value="" disabled>Select year</option>
          {[2025, 2024, 2023, 2022].map(y => <option key={y} value={y}>{y}</option>)}
        </Select>
      </Field>
      <Field label="12th Percentage / CGPA" error={errors.percentage}>
        <Input placeholder="92.5" value={data.percentage} onChange={e => onChange('percentage', e.target.value)} error={errors.percentage} />
      </Field>
      <Field label="Maths Score" error={errors.maths}>
        <Input placeholder="95" value={data.maths} onChange={e => onChange('maths', e.target.value)} error={errors.maths} />
      </Field>
      <Field label="Physics Score" error={errors.physics}>
        <Input placeholder="92" value={data.physics} onChange={e => onChange('physics', e.target.value)} error={errors.physics} />
      </Field>
      <Field label="Chemistry Score" error={errors.chemistry}>
        <Input placeholder="88" value={data.chemistry} onChange={e => onChange('chemistry', e.target.value)} error={errors.chemistry} />
      </Field>
      <Field label="TNEA / JEE Application No.">
        <Input placeholder="Optional" value={data.appNo} onChange={e => onChange('appNo', e.target.value)} />
      </Field>
    </motion.div>
  )
}

function StepProgram({ data, onChange, errors }) {
  return (
    <motion.div key="program" variants={fadeUp} initial="hidden" animate="show" exit="exit" className="flex flex-col gap-5">
      <Field label="First Choice — Preferred Program" error={errors.program1}>
        <Select value={data.program1} onChange={e => onChange('program1', e.target.value)} error={errors.program1}>
          <option value="" disabled>Select program</option>
          {programs.map(p => <option key={p} value={p}>{p}</option>)}
        </Select>
      </Field>
      <Field label="Second Choice — Preferred Program" error={errors.program2}>
        <Select value={data.program2} onChange={e => onChange('program2', e.target.value)} error={errors.program2}>
          <option value="" disabled>Select program</option>
          {programs.map(p => <option key={p} value={p}>{p}</option>)}
        </Select>
      </Field>
      <Field label="Hostel Accommodation Required?" error={errors.hostel}>
        <div className="flex gap-4">
          {['Yes', 'No'].map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => onChange('hostel', opt)}
              className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                data.hostel === opt
                  ? 'bg-[#f5c518] border-[#f5c518] text-[#0a0f2e]'
                  : 'bg-white/[0.04] border-white/[0.08] text-white/60 hover:border-[#f5c518]/40'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </Field>
      <Field label="How did you hear about SECE?" error={errors.source}>
        <Select value={data.source} onChange={e => onChange('source', e.target.value)} error={errors.source}>
          <option value="" disabled>Select source</option>
          <option value="school">School / Teacher</option>
          <option value="friend">Friend / Family</option>
          <option value="social">Social Media</option>
          <option value="newspaper">Newspaper / Magazine</option>
          <option value="website">College Website</option>
          <option value="other">Other</option>
        </Select>
      </Field>
      <Field label="Additional Message (Optional)">
        <textarea
          rows={3}
          placeholder="Anything you'd like us to know..."
          value={data.message}
          onChange={e => onChange('message', e.target.value)}
          className="bg-white/[0.04] border border-white/[0.08] focus:border-[#f5c518]/60 focus:bg-white/[0.07] rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-200 placeholder:text-white/20 w-full resize-none"
        />
      </Field>
    </motion.div>
  )
}

function ReviewRow({ label, value }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-white/[0.05] last:border-0">
      <span className="text-white/40 text-xs uppercase tracking-wider font-semibold w-44 shrink-0">{label}</span>
      <span className="text-white text-sm text-right">{value || <span className="text-white/20 italic">—</span>}</span>
    </div>
  )
}

function StepReview({ personal, academic, program }) {
  const sections = [
    {
      title: 'Personal Details',
      rows: [
        ['Full Name', `${personal.firstName} ${personal.lastName}`],
        ['Date of Birth', personal.dob],
        ['Gender', personal.gender],
        ['Mobile', personal.mobile],
        ['Email', personal.email],
        ['Aadhaar', personal.aadhaar],
        ['Community', personal.community?.toUpperCase()],
        ['Address', `${personal.address}, ${personal.state}`],
      ],
    },
    {
      title: 'Academic Details',
      rows: [
        ['School', academic.school],
        ['Board', academic.board],
        ['Year of Passing', academic.yearOfPassing],
        ['12th Percentage', academic.percentage ? `${academic.percentage}%` : ''],
        ['Maths / Physics / Chem', `${academic.maths} / ${academic.physics} / ${academic.chemistry}`],
        ['TNEA / JEE App No.', academic.appNo],
      ],
    },
    {
      title: 'Program Preferences',
      rows: [
        ['1st Choice', program.program1],
        ['2nd Choice', program.program2],
        ['Hostel Required', program.hostel],
        ['Heard via', program.source],
      ],
    },
  ]

  return (
    <motion.div key="review" variants={fadeUp} initial="hidden" animate="show" exit="exit" className="flex flex-col gap-4">
      <p className="text-white/40 text-sm">Please review your details before submitting.</p>
      {sections.map(({ title, rows }) => (
        <div key={title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
          <p className="text-[#f5c518] text-xs font-black tracking-[0.2em] uppercase mb-3">{title}</p>
          {rows.map(([label, value]) => <ReviewRow key={label} label={label} value={value} />)}
        </div>
      ))}
    </motion.div>
  )
}

function validate(step, data) {
  const e = {}
  if (step === 0) {
    if (!data.firstName.trim()) e.firstName = 'Required'
    if (!data.lastName.trim()) e.lastName = 'Required'
    if (!data.dob) e.dob = 'Required'
    if (!data.gender) e.gender = 'Required'
    if (!/^\+?[\d\s]{10,13}$/.test(data.mobile)) e.mobile = 'Enter a valid number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email'
    if (!data.aadhaar.trim()) e.aadhaar = 'Required'
    if (!data.community) e.community = 'Required'
    if (!data.address.trim()) e.address = 'Required'
    if (!data.state.trim()) e.state = 'Required'
  }
  if (step === 1) {
    if (!data.school.trim()) e.school = 'Required'
    if (!data.board) e.board = 'Required'
    if (!data.yearOfPassing) e.yearOfPassing = 'Required'
    if (!data.percentage || isNaN(data.percentage)) e.percentage = 'Enter a valid percentage'
    if (!data.maths || isNaN(data.maths)) e.maths = 'Required'
    if (!data.physics || isNaN(data.physics)) e.physics = 'Required'
    if (!data.chemistry || isNaN(data.chemistry)) e.chemistry = 'Required'
  }
  if (step === 2) {
    if (!data.program1) e.program1 = 'Required'
    if (!data.program2) e.program2 = 'Required'
    if (!data.hostel) e.hostel = 'Required'
    if (!data.source) e.source = 'Required'
  }
  return e
}

export default function Apply() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const [personal, setPersonal] = useState({
    firstName: '', lastName: '', dob: '', gender: '', mobile: '',
    email: '', aadhaar: '', community: '', address: '', state: '',
  })
  const [academic, setAcademic] = useState({
    school: '', board: '', yearOfPassing: '', percentage: '',
    maths: '', physics: '', chemistry: '', appNo: '',
  })
  const [program, setProgram] = useState({
    program1: '', program2: '', hostel: '', source: '', message: '',
  })

  const datasets = [personal, academic, program]
  const setters = [
    (k, v) => setPersonal(p => ({ ...p, [k]: v })),
    (k, v) => setAcademic(p => ({ ...p, [k]: v })),
    (k, v) => setProgram(p => ({ ...p, [k]: v })),
  ]

  function next() {
    const e = validate(step, datasets[step])
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setStep(s => s + 1)
  }

  function back() { setErrors({}); setStep(s => s - 1) }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0f2e] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'backOut' }}
            className="w-20 h-20 rounded-full bg-[#f5c518]/10 border-2 border-[#f5c518] flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-9 h-9 text-[#f5c518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h2 className="text-4xl font-black text-white mb-3">Application Submitted!</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Thank you, <span className="text-[#f5c518] font-semibold">{personal.firstName}</span>. Your application has been received. Our admissions team will contact you at <span className="text-white">{personal.email}</span> within 2–3 working days.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#f5c518] hover:bg-yellow-300 text-[#0a0f2e] font-black px-7 py-3.5 rounded-full text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0f2e] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f5c518]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top bar */}
      <div className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-[#f5c518] rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-lg bg-[#0a0f2e] border-2 border-[#f5c518] flex items-center justify-center">
                <span className="text-[#f5c518] font-black text-xs">SE</span>
              </div>
            </div>
            <span className="text-white font-black text-sm">Sri Eshwar CE</span>
          </Link>
          <span className="text-white/30 text-xs font-medium">Admissions 2025–26</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <p className="text-[#f5c518] text-xs font-bold tracking-[0.25em] uppercase mb-2">Admissions 2025–26</p>
          <h1 className="text-4xl font-black text-white">Application Form</h1>
          <p className="text-white/40 text-sm mt-2">Fill in all sections carefully. Your details will be reviewed by our admissions team.</p>
        </motion.div>

        {/* Step indicator */}
        <div className="flex items-center mb-10">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                  i < step
                    ? 'bg-[#f5c518] text-[#0a0f2e]'
                    : i === step
                    ? 'bg-[#f5c518]/20 border-2 border-[#f5c518] text-[#f5c518]'
                    : 'bg-white/[0.05] border border-white/[0.1] text-white/30'
                }`}>
                  {i < step
                    ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    : i + 1}
                </div>
                <span className={`text-[10px] font-semibold tracking-wider uppercase transition-colors ${
                  i === step ? 'text-[#f5c518]' : i < step ? 'text-white/60' : 'text-white/20'
                }`}>
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-2 mb-5 transition-all duration-500 ${i < step ? 'bg-[#f5c518]' : 'bg-white/[0.08]'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8">
          <AnimatePresence mode="wait">
            {step === 0 && <StepPersonal data={personal} onChange={setters[0]} errors={errors} />}
            {step === 1 && <StepAcademic data={academic} onChange={setters[1]} errors={errors} />}
            {step === 2 && <StepProgram data={program} onChange={setters[2]} errors={errors} />}
            {step === 3 && <StepReview personal={personal} academic={academic} program={program} />}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          {step > 0
            ? <button onClick={back} className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-semibold transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back
              </button>
            : <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-semibold transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to Home
              </Link>
          }

          {step < 3
            ? <button onClick={next} className="flex items-center gap-2 bg-[#f5c518] hover:bg-yellow-300 text-[#0a0f2e] font-black px-7 py-3 rounded-full text-sm transition-colors shadow-lg shadow-yellow-500/20">
                Continue
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            : <button onClick={() => setSubmitted(true)} className="flex items-center gap-2 bg-[#f5c518] hover:bg-yellow-300 text-[#0a0f2e] font-black px-7 py-3 rounded-full text-sm transition-colors shadow-lg shadow-yellow-500/20">
                Submit Application
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
          }
        </div>

        <p className="text-center text-white/20 text-xs mt-8">
          By submitting, you agree to SECE's{' '}
          <a href="#" className="underline hover:text-white/50 transition-colors">Privacy Policy</a>
          {' '}and{' '}
          <a href="#" className="underline hover:text-white/50 transition-colors">Terms of Admission</a>.
        </p>
      </div>
    </div>
  )
}
