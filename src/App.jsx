import React from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Work from './pages/private-pages/work/work'
import Home from './pages/public-pages/Home/home'
// import Contact from './pages/private-pages/ProjectCallToAction/projectCallToAction'
// import { Contact } from 'lucide-react'

// import { AuthProvider } from './context/AuthContext'
// import Home from './pages/public-pages/Home/home'

const App = () => {
  return (
    <BrowserRouter>
    {/* <AuthProvider> */}
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/work" element={<Work/>} />
          {/* <Route path="/Contact" element={<ProjectCallToAction/>} /> */}
        </Routes>



      {/* </AuthProvider> */}
        </BrowserRouter>
   
  )
}

export default App