import { Link } from 'react-router-dom'

const Header = ({ user, handleLogout }) => {
  const padding = { padding: '1em' }

  return (
    <>
      <br />
      <header>
        <span style={{ float: 'left' }}>
          <h3>
            <a href="/">
              <i className="bi bi-car-front"></i>
            </a>
            &nbsp; Parking Spot App
          </h3>
        </span>
        <span style={{ float: 'right' }}>
          {user ? (
            <>
              <span>Welcome, {user.firstName}!</span> &nbsp;
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>{' '}
              &nbsp;
              <i className="bi bi-person-square"></i>
            </>
          ) : (
            <>
              <Link style={padding} to="/signup">
                Sign Up
              </Link>
              <Link style={padding} to="/login">
                Login
              </Link>
            </>
          )}
        </span>

        <div style={padding}>
          <Link style={padding} to="/findspot">
            Find Spot
          </Link>
          <Link style={padding} to="/ownspot">
            My Spots
          </Link>
          <br />
        </div>
      </header>
    </>
  )
}

export default Header
