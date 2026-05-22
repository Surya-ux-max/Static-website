import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Programs from './components/Programs'
import Placements from './components/Placements'
import Campus from './components/Campus'
import Footer from './components/Footer'

export default function App() {
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
