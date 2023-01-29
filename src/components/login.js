import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Error from './HeaderAlert'

const Login = ({ handleLogin, handleChange, loginInputs, errorMessage }) => {
  return (
    <div
      className="border border-secondary rounded-3 col col-12 col-md-9 col-lg-6"
      style={{ padding: '2em' }}
    >
      <h4>Log In</h4> <br />
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email </label>
        <input
          name="email"
          className="form-control form-control-lg"
          // placeholder="Email"
          type="email"
          value={loginInputs.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password </label>
        <input
          name="password"
          className="form-control form-control-lg"
          // placeholder="Password"
          id="password"
          type="password"
          value={loginInputs.password}
          onChange={handleChange}
        />
        <br />
        <Button type="submit">Submit</Button> &nbsp;&nbsp;
        <Button href="/" variant="outline-primary">
          Cancel
        </Button>{' '}
        &nbsp;&nbsp;
        <Link to={'/forgot'}>Forgot password?</Link>
      </form>
      <br />
      <Error message={errorMessage} />
      Don&apos;t have an account yet? &nbsp;<Link to="/signup">Sign Up!</Link>
    </div>
  )
}

export default Login
