import React from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { AuthProvider } from './context/AuthContext'
import Home from './pages/public-pages/Home/home'

const App = () => {
  return (
    <BrowserRouter>
    {/* <AuthProvider> */}
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>



      {/* </AuthProvider> */}
        </BrowserRouter>
   
  )
}

export default App
