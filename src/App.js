import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Layout from './components/Layout'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import OwnSpot from './components/OwnSpot'
import FindSpot from './components/FindSpot'
import SiteDetail from './components/SiteDetail'
import NoPage from './components/NoPage'

import loginService from './services/login'

import './App.css'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const loginUser = await loginService.login({
        email: 'rob.monday@gmail.com',
        password: 'secret',
      })
      setUser(loginUser)
      navigate('/findspot')
    } catch (error) {
      alert('Wrong credentials')
    }
  }

  const handleLogout = () => {
    setUser('')
  }

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<Layout user={user} handleLogout={handleLogout} />}
        >
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login handleLogin={handleLogin} />} />
          <Route path="ownspot" element={user ? <OwnSpot /> : <Login />} />
          <Route path="findspot" element={<FindSpot />} />
          <Route path="sites/:siteId" element={<SiteDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
