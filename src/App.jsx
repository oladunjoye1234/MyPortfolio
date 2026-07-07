import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/public-pages/Home/home'
import Work from './pages/private-pages/work/work'
import Contact from './pages/private-pages/contact/contact'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#1f2937', color: '#f3f4f6' } }} />
    </BrowserRouter>
  )
}

export default App