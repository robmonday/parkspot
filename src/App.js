import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from './components/Home'
import SignUp from './components/Signup'
import Login from './components/Login'
import OwnSpot from './components/OwnSpot'
import FindSpot from './components/FindSpot'
import SiteDetail from './components/SiteDetail'

import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="container">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ownspot" element={user ? <OwnSpot /> : <Login />} />
          <Route path="/findspot" element={<FindSpot />} />
          <Route path="/site/:siteId" element={<SiteDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
