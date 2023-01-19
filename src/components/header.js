import { Link } from 'react-router-dom'

const Header = () => {
  const navStyle = {
    padding: 5,
  }
  return (
    <div>
      <h3>Parking Spot App</h3>
      <div>
        <Link style={navStyle} to="/">
          Home
        </Link>
        <Link style={navStyle} to="/signup">
          Sign Up
        </Link>
        <Link style={navStyle} to="/login">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Header
