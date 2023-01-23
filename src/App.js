import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Layout from './components/Layout'
import Home from './components/Home'
import SignUp from './components/Signup'
import Login from './components/Login'
import OwnSpot from './components/OwnSpot'
import FindSpot from './components/FindSpot'
import SiteDetail from './components/SiteDetail'
import NoPage from './components/NoPage'

import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="ownspot" element={user ? <OwnSpot /> : <Login />} />
          <Route path="findspot" element={<FindSpot />} />
          <Route path="site/:siteId" element={<SiteDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
