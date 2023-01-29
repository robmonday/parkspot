import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
  const [errorMessage, setErrorMessage] = useState('')
  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedParkspotUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      // still need to set token here
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const loginUser = await loginService.login({
        email: loginInputs.email,
        password: loginInputs.password,
      })
      setUser(loginUser)
      window.localStorage.setItem(
        'loggedParkspotUser',
        JSON.stringify(loginUser)
      )
      navigate('/findspot')
    } catch (error) {
      setErrorMessage('Email and password are not valid')
      setTimeout(() => setErrorMessage(''), 3000)
      setLoginInputs({
        email: '',
        password: '',
      })
    }
  }

  const handleLogout = () => {
    setUser('')
    window.localStorage.removeItem('loggedParkspotUser')
  }

  const handleChange = (event) => {
    // console.log(loginInputs)
    const name = event.target.name
    const value = event.target.value
    setLoginInputs((values) => ({ ...values, [name]: value }))
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
          <Route
            path="login"
            element={
              <Login
                handleLogin={handleLogin}
                handleChange={handleChange}
                loginInputs={loginInputs}
                errorMessage={errorMessage}
              />
            }
          />
          <Route
            path="ownspot"
            element={
              user ? (
                <OwnSpot />
              ) : (
                <Login
                  handleLogin={handleLogin}
                  handleChange={handleChange}
                  loginInputs={loginInputs}
                  errorMessage={errorMessage}
                />
              )
            }
          />
          <Route path="findspot" element={<FindSpot />} />
          <Route path="sites/:siteId" element={<SiteDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
