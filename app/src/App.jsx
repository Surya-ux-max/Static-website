import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Programs from './components/Programs'
import Placements from './components/Placements'
import Campus from './components/Campus'
import Footer from './components/Footer'
import Apply from './pages/Apply'

function Landing() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <Placements />
      <Campus />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  )
}
