import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

import Home from './pages/Home'
import FindHelp from './pages/FindHelp'
import Emergency from './pages/Emergency'
import Guide from './pages/Guide'
import Contacts from './pages/Contacts'

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-help" element={<FindHelp />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

    </BrowserRouter>
  )
}