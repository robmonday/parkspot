import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ user, handleLogout }) => {
  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
