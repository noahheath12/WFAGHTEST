import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import Gala from './pages/Gala.tsx'
import TShirt from './pages/TShirt.tsx'
import Sponsor from './pages/Sponsor.tsx'
import TheMan from './pages/TheMan.tsx'
import TheMuscle from './pages/TheMuscle.tsx'
import HelpTheCause from './pages/HelpTheCause.tsx'
import Login from './pages/Login.tsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gala" element={<Gala />} />
          <Route path="/tshirt" element={<TShirt />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/the-man" element={<TheMan />} />
          <Route path="/the-muscle" element={<TheMuscle />} />
          <Route path="/help-the-cause" element={<HelpTheCause />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
