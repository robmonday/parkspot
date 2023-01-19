import { Routes, Route } from 'react-router-dom'

import Home from './components/home'
import SignUp from './components/signup'
import Login from './components/login'
import Footer from './components/footer'
import Header from './components/header'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
