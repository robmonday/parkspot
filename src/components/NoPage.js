import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const NoPage = () => {
  return (
    <>
      <br />
      <h3 className="display-4">Oops!</h3>
      <p className="lead">404 - Page Not Found</p>
      <p>
        Page may have been removed, had its name changed, or become temporarily
        unavailable.
      </p>
      <Link to="/">
        <Button>Go to Homepage</Button>
      </Link>
      <br />
    </>
  )
}

export default NoPage
